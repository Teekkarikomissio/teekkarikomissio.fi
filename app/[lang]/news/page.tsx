import { Locale } from '@/i18n-config'
import { getAllNews } from '@/lib/news'
import { formatDateUTC } from '@/lib/date'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = { params: Promise<{ lang: Locale }> }

export default async function NewsIndex({ params }: Props) {
  const { lang } = await params
  const locale: Locale = lang
  const items = getAllNews(lang)

  const headings: Record<Locale, string> = {
    fi: 'Uutiset',
    en: 'News',
    sv: 'Nyheter',
  }

  const emptyList: Record<Locale, string> = {
    fi: 'Ei uutisia',
    en: 'No news yet',
    sv: 'Inga nyheter',
  }

  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative pb-2 mb-8">
          <h1 className="text-3xl font-bold text-center">
            {headings[locale] || headings.fi}
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
        </div>
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">
            {emptyList[locale] || headings.fi}
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((n) => (
              <li key={n.slug}>
                <Card className="h-full overflow-hidden">
                  {n.cover ? (
                    <div className="relative h-40 w-full">
                      <Image
                        src={n.cover}
                        alt={n.coverAlt || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <CardHeader className="space-y-2">
                    <time
                      className="text-xs text-muted-foreground"
                      dateTime={n.date}
                    >
                      {formatDateUTC(n.date, lang)}
                    </time>
                    <CardTitle className="text-xl leading-tight">
                      <Link
                        href={`/${lang}/news/${encodeURIComponent(n.slug)}`}
                        className="hover:underline"
                      >
                        {n.title}
                      </Link>
                    </CardTitle>
                    {n.author && (
                      <p className="text-xs text-muted-foreground">
                        {n.author}
                      </p>
                    )}
                  </CardHeader>
                  {n.summary ? (
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-4">
                        {n.summary}
                      </p>
                    </CardContent>
                  ) : null}
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
