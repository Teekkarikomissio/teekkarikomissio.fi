import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '@/i18n-config';

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  cover?: string;
  coverAlt?: string;
  author?: string;
  coverCredit?: string;
  coverCreditUrl?: string;
  postId?: string;
  category?: string;
  tags?: string[];
  eventStart?: string;
  eventEnd?: string;
  location?: string;
  registrationUrl?: string;
  attachments?: Array<{ title: string; url: string }>;
  content: string;
};

const NEWS_DIR = path.join(process.cwd(), '_content', 'news');

function getNewsFiles(locale: Locale): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(`.${locale}.md`));
}

export function getAllNews(locale: Locale): NewsItem[] {
  try {
    const files = getNewsFiles(locale);
    const items = files.map((file) => {
      const fullPath = path.join(NEWS_DIR, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      const slug = file.replace(`.${locale}.md`, '');
      const iso = new Date((data.date as string) || Date.now()).toISOString();
      return {
        slug,
        title: data.title as string,
        date: iso,
        summary: data.summary as string | undefined,
        cover: data.cover as string | undefined,
        coverAlt: (data.coverAlt as string) || undefined,
        author: (data.author as string) || undefined,
        coverCredit: (data.coverCredit as string) || undefined,
        coverCreditUrl: (data.coverCreditUrl as string) || undefined,
        postId: (data.postId as string) || undefined,
        category: (data.category as string) || undefined,
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
        eventStart: data.eventStart
          ? new Date(data.eventStart as string).toISOString()
          : undefined,
        eventEnd: data.eventEnd
          ? new Date(data.eventEnd as string).toISOString()
          : undefined,
        location: (data.location as string) || undefined,
        registrationUrl: (data.registrationUrl as string) || undefined,
        content,
      };
    });

    return items.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (e) {
    console.error('Failed to read news content:', e);
    return [];
  }
}

export function getLatestNews(locale: Locale, limit = 4): NewsItem[] {
  return getAllNews(locale).slice(0, limit);
}
