import { Locale } from '@/i18n-config'
import { getAllNews } from '@/lib/news'
import markdownToHtml from '@/lib/markdownToHtml'
import { formatDateUTC } from '@/lib/date'

type Props = { params: Promise<{ lang: Locale; slug: string }> }

export default async function NewsArticle({ params }: Props) {
  const { lang, slug } = await params
  const item = getAllNews(lang).find((n) => n.slug === slug)

  if (!item) {
    return null
  }

  const html = await markdownToHtml(item.content)

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose prose-neutral dark:prose-invert">
      <header className="mb-6">
        <time className="text-xs text-gray-500" dateTime={item.date}>
          {formatDateUTC(item.date, lang)}
        </time>
        <h1 className="text-3xl font-bold mt-2">{item.title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
