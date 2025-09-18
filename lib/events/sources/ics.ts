import { normalizeEvent } from '../normalise'
import { Event } from '../types'

export async function fetchIcsEvents(icsUrl: string): Promise<Event[]> {
  if (!icsUrl) return []

  const res = await fetch(icsUrl, {
    cache: 'no-store',
    headers: { 'user-agent': 'tkkom/website' },
  })
  if (!res.ok) return []

  const text = await res.text()
  const ical = await import('node-ical')
  const parsed = ical.sync.parseICS(text)

  const events: Event[] = []
  for (const key of Object.keys(parsed)) {
    const item = parsed[key]
    if (item.type !== 'VEVENT') continue

    const start = toHelsinki(item.start)
    const end = item.end ? toHelsinki(item.end) : undefined

    events.push(
      normalizeEvent({
        id: item.uid || key,
        title: item.summary || 'Untitled',
        description: item.description || '',
        location: item.location || '',
        url: item.url || undefined,
        start,
        end,
        allDay: !!item.datetype && item.datetype === 'date',
        source: 'ics',
      })
    )
  }
  return events
}

function toHelsinki(d: Date): Date {
  return new Date(d)
}