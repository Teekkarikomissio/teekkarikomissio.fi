'use client';

import { useEffect, useState } from 'react';
import { NewsCard } from './NewsCard';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export function NewsSection({ lang = 'fi' }: { lang?: string }) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then((data: NewsItem[]) => {
        setNews(data.slice(0, 3));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-12">Ladataan uutisia...</div>;

  return (
    <div className="w-full bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative pb-2 mb-8">
          <h2 className="text-3xl font-bold text-center">
            Ajankohtaista
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {news.map(item => (
            <NewsCard key={item.slug} news={item} lang={lang} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={`/${lang}/news`} className="text-primary font-semibold hover:underline">
            Kaikki uutiset →
          </a>
        </div>
      </section>
    </div>
  );
}