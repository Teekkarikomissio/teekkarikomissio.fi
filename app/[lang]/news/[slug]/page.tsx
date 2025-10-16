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
    <main className="w-full">
      <article className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 py-14 prose prose-neutral dark:prose-invert">
        <header className="mb-6 not-prose">
          <div className="relative pb-2 mb-4">
            <h1 className="text-3xl font-bold text-center">{item.title}</h1>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
          </div>
          <div className="text-center">
            <time
              className="text-xs text-muted-foreground"
              dateTime={item.date}
            >
              {formatDateUTC(item.date, lang)}
            </time>
            {item.author && (
              <p className="text-sm text-muted-foreground mt-1">
                {item.author}
              </p>
            )}
          </div>
        </header>
        {item.cover && (
          <figure className="not-prose mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.cover}
              alt={item.coverAlt || ''}
              className="w-full rounded-md"
            />
            {(item.coverCredit || item.coverCreditUrl) && (
              <figcaption className="text-xs text-muted-foreground mt-2 text-center">
                {item.coverCreditUrl ? (
                  <a
                    href={item.coverCreditUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    {item.coverCredit || item.coverCreditUrl}
                  </a>
                ) : (
                  item.coverCredit
                )}
              </figcaption>
            )}
          </figure>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  )
}
