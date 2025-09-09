import { Locale } from '@/i18n-config'
import { getAllNews } from '@/lib/news'
import { formatDateUTC } from '@/lib/date'
import Link from 'next/link'

type Props = { params: Promise<{ lang: Locale }> }

export default async function NewsIndex({ params }: Props) {
  const { lang } = await params
  const items = getAllNews(lang)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold mb-8">News</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">No news yet.</p>
      ) : (
        <ul className="space-y-6">
          {items.map((n) => (
            <li key={n.slug} className="border-b pb-6">
              <time className="text-xs text-gray-500" dateTime={n.date}>
                {formatDateUTC(n.date, lang)}
              </time>
              <h2 className="text-xl font-semibold mt-1">
                <Link href={`/${lang}/news/${encodeURIComponent(n.slug)}`}>{n.title}</Link>
              </h2>
              {n.author && (
                <p className="text-xs text-gray-500 mt-1">{n.author}</p>
              )}
              {n.summary && <p className="text-gray-700 mt-2">{n.summary}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
