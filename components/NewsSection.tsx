import Image from 'next/image'
import Link from 'next/link'
import { getLatestNews } from '@/lib/news'
import { Locale } from '@/i18n-config'
import { formatDateUTC } from '@/lib/date'

type Props = {
  lang: Locale
  heading: string
  viewAllLabel: string
  readMoreLabel: string
}

export default function NewsSection({
  lang,
  heading,
  viewAllLabel,
  readMoreLabel,
}: Props) {
  const items = getLatestNews(lang, 4)

  if (items.length === 0) return null

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <Link href={`/${lang}/news`} className="text-primary hover:underline">
            {viewAllLabel}
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((n) => (
            <li
              key={n.slug}
              className="bg-white rounded-md shadow-sm border overflow-hidden"
            >
              {n.cover && (
                <div className="relative h-40 w-full">
                  <Image src={n.cover} alt="" fill className="object-cover" />
                </div>
              )}
              <div className="p-4">
                <time className="text-xs text-gray-500" dateTime={n.date}>
                  {formatDateUTC(n.date, lang)}
                </time>
                <h3 className="mt-1 font-semibold line-clamp-2">{n.title}</h3>
                {n.summary && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {n.summary}
                  </p>
                )}
                <Link
                  href={`/${lang}/news/${encodeURIComponent(n.slug)}`}
                  className="mt-3 inline-block text-sm text-primary hover:underline"
                >
                  {readMoreLabel}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
