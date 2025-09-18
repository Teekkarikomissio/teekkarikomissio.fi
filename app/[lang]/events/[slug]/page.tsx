import React from 'react'
import { i18n, type Locale } from '@/i18n-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllEvents } from '@/lib/events'

export const revalidate = 3600

type Params = Promise<{
  lang: Locale
  slug: string
}>

function formatRange(
  locale: string,
  start: Date,
  end?: Date,
  allDay?: boolean
) {
  const fmt = new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: allDay ? undefined : 'short',
  })
  const a = fmt.format(start)
  const b = end ? fmt.format(end) : undefined
  return b ? `${a} – ${b}` : a
}

export async function generateStaticParams() {
  const events = await getAllEvents()
  const paths: { lang: Locale; slug: string }[] = []
  for (const lang of i18n.locales) {
    for (const e of events) {
      // Use a single segment path by default with the event id
      paths.push({ lang: lang as Locale, slug: e.id })
    }
  }
  return paths
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { lang, slug } = await params
  const id = decodeURIComponent(slug || '')
  const events = await getAllEvents()
  const e = events.find((x) => x.id === id)
  if (!e) return {}
  const title = e.title
  const description = e.description?.slice(0, 160)
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: 'summary', title, description },
  }
}

export default async function EventDetailPage({ params }: { params: Params }) {
  const { lang, slug } = await params
  const id = decodeURIComponent(slug || '')

  const events = await getAllEvents()
  const e = events.find((x) => x.id === id)
  if (!e) {
    notFound()
  }

  const locale = lang || 'fi'

  const labels: Record<
    string,
    {
      back: string
      addToCal: string
      moreInfo: string
      where: string
      when: string
    }
  > = {
    fi: {
      back: 'Takaisin tapahtumiin',
      addToCal: 'Lisää kalenteriin',
      moreInfo: 'Lisätietoja',
      where: 'Paikka',
      when: 'Aika',
    },
    en: {
      back: 'Back to events',
      addToCal: 'Add to calendar',
      moreInfo: 'More info',
      where: 'Location',
      when: 'Time',
    },
    sv: {
      back: 'Tillbaka till evenemang',
      addToCal: 'Lägg till i kalendern',
      moreInfo: 'Mer information',
      where: 'Plats',
      when: 'Tid',
    },
  }
  const t = labels[locale] || labels.fi

  return (
    <main className="container mx-auto px-4 py-10">
      <p className="mb-4">
        <a href={`/${locale}/events`} className="text-primary hover:underline">
          {t.back}
        </a>
      </p>
      <article className="prose max-w-prose">
        <h1 className="mb-2">{e!.title}</h1>
        <p className="text-sm text-gray-600">
          <strong className="mr-2">{t.when}:</strong>
          {formatRange(locale, e!.start, e!.end, e!.allDay)}
        </p>
        {e!.location ? (
          <p className="text-sm text-gray-600">
            <strong className="mr-2">{t.where}:</strong>
            {e!.location}
          </p>
        ) : null}
        {e!.description ? (
          <p className="mt-4 whitespace-pre-wrap">{e!.description}</p>
        ) : null}
        <div className="mt-6 flex gap-4">
          <a
            className="text-primary hover:underline"
            href={`/api/events/${encodeURIComponent(e!.id)}/ics`}
          >
            {t.addToCal}
          </a>
          {e!.url ? (
            <a
              className="text-primary hover:underline"
              href={e!.url}
              target="_blank"
              rel="noreferrer"
            >
              {t.moreInfo}
            </a>
          ) : null}
        </div>
      </article>
    </main>
  )
}
