'use client'

import { Event } from '@/lib/events/types'

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
        {event.url ? (
          <a
            className="text-primary underline"
            href={event.url}
            target="_blank"
            rel="noreferrer"
          >
            More info
          </a>
        ) : null}
        <a
          className="text-primary underline"
          href={`/api/events/${encodeURIComponent(event.id)}.ics`}
        >
          Add to calendar
        </a>
      </div>
    </article>
  )
}
