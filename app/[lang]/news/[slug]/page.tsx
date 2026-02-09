import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownToHtml from '@/lib/markdownToHtml'
import { notFound } from 'next/navigation'
import frontpageStyles from '@/app/[lang]/frontpage-styles.module.css'
import { Locale } from '@/i18n-config'

interface NewsItem {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  content: string
}

function getAllNewsSlugs(): string[] {
  const newsDirectory = path.join(process.cwd(), 'content/news')

  if (!fs.existsSync(newsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(newsDirectory)
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace('.md', ''))
}

function getNewsBySlug(slug: string): NewsItem | null {
  const newsDirectory = path.join(process.cwd(), 'content/news')
  const filePath = path.join(newsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    content,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>
}): Promise<Metadata> {
  const { slug } = await params
  const news = getNewsBySlug(slug)

  if (!news) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: news.title,
    description: news.excerpt,
  }
}

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs()
  const languages: Locale[] = ['fi', 'sv', 'en']
  return languages.flatMap(lang =>
    slugs.map(slug => ({
      slug,
      lang,
    }))
  )
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>
}) {
  const { slug, lang } = await params
  const news = getNewsBySlug(slug)

  if (!news) {
    notFound()
  }

  const htmlContent = await markdownToHtml(news.content)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary w-full py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${lang}/news`}
            className="text-yellow-100 hover:text-white mb-4 inline-block"
          >
            ← Takaisin uutisiin
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {news.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
          <time dateTime={news.date}>
            {new Date(news.date).toLocaleDateString('fi-FI', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>Kirjoittaja: {news.author}</span>
        </div>

        <article
          className={frontpageStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <div className="mt-12 pt-8 border-t">
          <Link
            href={`/${lang}/news`}
            className="text-primary hover:underline font-semibold"
          >
            ← Takaisin uutisiin
          </Link>
        </div>
      </div>
    </div>
  )
}
