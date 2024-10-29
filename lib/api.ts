import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export default function getPageBySlug(pageName: string, locale: string) {
  const pagesDirectory = path.join(process.cwd(), '_content');
  const fullPath = path.join(pagesDirectory, `${pageName}.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { meta: data, content };
}

export function getFolderContents(folderPath: string): string[] {
  const fullPath = path.join(process.cwd(), folderPath)
  try {
    return fs
      .readdirSync(fullPath)
      .filter((item) => fs.statSync(path.join(fullPath, item)).isDirectory())
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error)
    return []
  }
}