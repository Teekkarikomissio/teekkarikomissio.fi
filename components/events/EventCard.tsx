'use client'

import { Event } from '@/lib/events/types'
import Link from 'next/link'

export default function EventCard({
  event,
  locale = 'fi',
}: {
  event: Event
  locale?: string
}) {
  const startFmt = new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: event.allDay ? undefined : 'short',
  })
  const endFmt = new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: event.allDay ? undefined : 'short',
  })

  return (
    <article className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">
        {startFmt.format(event.start)}
        {event.end ? ` – ${endFmt.format(event.end)}` : null}
      </p>
      {event.location ? <p className="mt-1 text-sm">{event.location}</p> : null}
      {event.description ? (
        <p className="mt-2 text-sm text-gray-700">{event.description}</p>
      ) : null}
      <div className="mt-3 flex gap-3">
        <Link
          href={`/${locale}/events/${encodeURIComponent(event.id)}`}
          className="text-primary hover:underline"
        >
          {locale === 'sv'
            ? 'Läs mer'
            : locale === 'en'
              ? 'Read more'
              : 'Lue lisää'}
        </Link>
        <a
          className="text-primary hover:underline"
          href={`/api/events/${encodeURIComponent(event.id)}/ics`}
        >
          {locale === 'sv'
            ? 'Lägg till i kalendern'
            : locale === 'en'
              ? 'Add to calendar'
              : 'Lisää kalenteriin'}
        </a>
      </div>
    </article>
  )
}
