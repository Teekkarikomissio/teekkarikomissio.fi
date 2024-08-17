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