interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <time className="text-sm text-gray-500">
        {new Date(news.date).toLocaleDateString('fi-FI')}
      </time>
      <h3 className="text-xl font-semibold mt-2 mb-3">{news.title}</h3>
      <p className="text-gray-700 mb-4">{news.excerpt}</p>
      <a 
        href={`/news/${news.slug}`}
        className="text-blue-600 hover:underline font-medium"
      >
        Lue lisää →
      </a>
    </article>
  );
}