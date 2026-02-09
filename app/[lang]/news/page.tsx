import { Metadata } from 'next'
import { NewsCard } from '@/components/NewsCard'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale } from '@/i18n-config'

interface NewsItem {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  content: string
}

async function getAllNews(): Promise<NewsItem[]> {
  const newsDirectory = path.join(process.cwd(), 'content/news')

  if (!fs.existsSync(newsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(newsDirectory)
  const news = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(newsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return news
}

const translations = {
  fi: {
    heading: 'Ajankohtaista',
    subtitle: 'Teekkarikomissiosta ja sen toiminnasta',
    noNews: 'Uutisia ei vielä saatavilla.',
  },
  sv: {
    heading: 'Aktuellt',
    subtitle: 'Från Teknologkommissionen och dess verksamhet',
    noNews: 'Nyheter är inte tillgängliga ännu.',
  },
  en: {
    heading: 'Latest News',
    subtitle: 'From Teekkarikomissio and its activities',
    noNews: 'No news available yet.',
  },
};

export const metadata: Metadata = {
  title: 'Ajankohtaista',
  description: 'Uusimmat uutiset Teekkarikomissiosta',
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const news = await getAllNews()
  const t = translations[lang as keyof typeof translations] || translations.fi

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t.heading}
          </h1>
          <p className="text-yellow-100 text-lg mt-2">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t.noNews}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map(item => (
              <NewsCard key={item.slug} news={item} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
