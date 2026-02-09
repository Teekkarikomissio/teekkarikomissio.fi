interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export function NewsCard({ news, lang = 'fi' }: { news: NewsItem; lang?: string }) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
      <time className="text-sm text-gray-500">
        {new Date(news.date).toLocaleDateString('fi-FI')}
      </time>
      <h3 className="text-xl font-semibold mt-2 mb-3">{news.title}</h3>
      <p className="text-gray-700 mb-4">{news.excerpt}</p>
      <a
        href={`/${lang}/news/${news.slug}`}
        className="text-primary hover:underline font-medium"
      >
        Lue lisää →
      </a>
    </article>
  );
}