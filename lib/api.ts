import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { type Locale } from '@/i18n-config'
import { notFound } from 'next/navigation';

export default function getPageBySlug(pageName: string, locale: Locale) {
  const pagesDirectory = path.join(process.cwd(), '_content');
  const fullPath = path.join(pagesDirectory, `${pageName}.${locale}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);
    return { href: `/${locale}/${pageName}`, meta: data, content };
  } catch (error) {
    notFound();
  }
}

export function getFolderContents(folderPath: string): string[] {
  const fullPath = path.join(process.cwd(), folderPath)
  try {
    return fs
      .readdirSync(fullPath)
      .filter((item) => fs.statSync(path.join(fullPath, item)).isDirectory())
  } catch (error) {
    notFound();
  }
}

export function getNavigationByLocale(locale: Locale) {
  const contentDirectory = path.join(process.cwd(), "_content");
  
  try {
    const filenames = fs.readdirSync(contentDirectory);
    
    const pages = filenames
      .map((filename) => {
        if (filename === 'home') return;
        try {
          const fullPath = path.join(contentDirectory, `${filename}/${filename}.${locale}.md`);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { content, data } = matter(fileContents);
          
          return {
            href: `/${locale}/${filename}`,
            slug: filename.replace(/\.md$/, ''),
            meta: data,
            content,
          };
        } catch (error) {
          return null;
        }
      })
      .filter(Boolean);

    if (pages.length === 0) {
      notFound();
    }

    return pages;
  } catch (error) {
    notFound();
  }
}

