#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const BASE_DIR = process.cwd();
const CONTENT_DIR = path.join(BASE_DIR, '_content');
const OUT_FILE = path.join(BASE_DIR, 'public', 'sitemap.xml');
const DEFAULT_BASE_URL = 'https://teekkarikomissio.fi';
const LANGS = ['fi', 'sv', 'en'];

function isContentFile(name) {
  return /\.[a-z]{2}\.md$/.test(name);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (e.isFile() && isContentFile(e.name)) {
      files.push(full);
    }
  }
  return files;
}

function normalizeKey(relParts, name) {
  // empty key for home and index pages
  if (name === 'home' || name === 'index') return '';
  return [...relParts, name].filter(Boolean).join('/');
}

async function buildMap() {
  const map = new Map(); // key -> { lang: {url, lastmod} }
  try {
    await fs.access(CONTENT_DIR);
  } catch (e) {
    console.error('No _content directory found; exiting.', e.message || e);
    return map;
  }

  const files = await walk(CONTENT_DIR);
  for (const file of files) {
    const rel = path.relative(CONTENT_DIR, file);
    const parts = rel.split(path.sep);
    const filename = parts.pop();
    const m = filename.match(/(.+)\.([a-z]{2})\.md$/);
    if (!m) continue;
    const name = m[1];
    const lang = m[2];
    const key = normalizeKey(parts, name); // path without lang prefix

    const stat = await fs.stat(file);
    const lastmod = stat.mtime.toISOString().slice(0, 10);

    const urlPath = key === '' ? `/${lang}` : `/${lang}/${key}`;

    if (!map.has(key)) map.set(key, {});
    map.get(key)[lang] = { url: urlPath, lastmod };
  }

  for (const lang of LANGS) {
    if (!map.has('')) map.set('', {});
    if (!map.get('')[lang])
      map.get('')[lang] = {
        url: `/${lang}`,
        lastmod: new Date().toISOString().slice(0, 10),
      };
  }

  return map;
}

// async function scanAppRoutes(map) {
//   try {
//     await fs.access(APP_DIR)
//   } catch (e) {
//     return
//   }
//
//   for (const lang of LANGS) {
//     const langDir = path.join(APP_DIR, lang)
//     try {
//       const stat = await fs.stat(langDir)
//       if (!stat.isDirectory()) continue
//     } catch {
//       continue
//     }
//
//     async function walkApp(dir, rel = []) {
//       const entries = await fs.readdir(dir, { withFileTypes: true })
//       for (const e of entries) {
//         const full = path.join(dir, e.name)
//         if (e.isDirectory()) {
//           if (e.name.startsWith('[') && e.name.endsWith(']')) continue
//           await walkApp(full, [...rel, e.name])
//         } else if (e.isFile()) {
//           if (!/^page\.(?:tsx?|jsx?)$/.test(e.name)) continue
//           if (rel.some((s) => s.startsWith('[') && s.endsWith(']'))) continue
//
//           const key = rel.join('/')
//           const urlPath = key === '' ? `/${lang}` : `/${lang}/${key}`
//           const stat = await fs.stat(full)
//           const lastmod = stat.mtime.toISOString().slice(0, 10)
//
//           if (!map.has(key)) map.set(key, {})
//           // only set if not already present for this lang (content files preferred)
//           if (!map.get(key)[lang])
//             map.get(key)[lang] = { url: urlPath, lastmod }
//         }
//       }
//     }
//
//     await walkApp(langDir, [])
//   }
// }

function escapeXml(str) {
  return str.replace(
    /[<>&"']/g,
    (c) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[c],
  );
}

async function writeSitemap(map, baseUrl) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  lines.push('  xmlns:xhtml="http://www.w3.org/1999/xhtml">');

  for (const [, langs] of map.entries()) {
    const availableLangs = Object.keys(langs);
    for (const lang of availableLangs) {
      const entry = langs[lang];
      const loc = `${baseUrl.replace(/\/$/, '')}${entry.url}`;
      lines.push('  <url>');
      lines.push(`    <loc>${escapeXml(loc)}</loc>`);
      if (entry.lastmod) lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);

      // alternates
      for (const altLang of availableLangs) {
        const alt = langs[altLang];
        const href = `${baseUrl.replace(/\/$/, '')}${alt.url}`;
        lines.push(
          `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${escapeXml(href)}"/>`,
        );
      }

      lines.push('  </url>');
    }
  }

  lines.push('</urlset>');
  const out = lines.join('\n') + '\n';
  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
  await fs.writeFile(OUT_FILE, out, 'utf8');
  return OUT_FILE;
}

async function main() {
  const baseUrl = process.argv[2] || DEFAULT_BASE_URL;
  console.log('Generating sitemap using base URL:', baseUrl);
  const map = await buildMap();
  if (map.size === 0) {
    console.warn(
      'No entries found. Generated sitemap will contain only language roots.',
    );
  }
  const out = await writeSitemap(map, baseUrl);
  console.log('Wrote sitemap to', out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
