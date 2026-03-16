import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') || 'fi';

  const newsDirectory = path.join(process.cwd(), 'content/news');
  const filenames = fs.readdirSync(newsDirectory);

  const news = filenames
    .filter(filename => filename.endsWith(`.${lang}.md`))
    .map(filename => {
      const filePath = path.join(newsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(`.${lang}.md`, ''),
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json(news);
}