import { type Locale } from '@/i18n-config'

interface NewsItem {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
}

const translations: Record<Locale, string> = {
  fi: 'Lue lisää →',
  sv: 'Läs mer →',
  en: 'Read more →',
}

export function NewsCard({ news, lang = 'fi' }: { news: NewsItem; lang?: Locale }) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
      <time className="text-sm text-gray-500">
        {new Date(news.date).toLocaleDateString('fi-FI')}
      </time>
      <h3 className="text-xl font-semibold mt-2 mb-3">{news.title}</h3>
      <p className="text-gray-700 mb-4">{news.excerpt}</p>
      <a href={`/${lang}/news/${news.slug}`} className="text-primary hover:underline font-medium">
        {translations[lang]}
      </a>
    </article>
  )
}
