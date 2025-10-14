import { fetchIcsEvents } from './sources/ics'
import {
  fetchLocalEventById,
  fetchLocalEvents,
  fetchLocalEventsByLocale,
} from './sources/local'
import { sortUpcoming } from './normalise'
import { Event } from './types'
import { Locale } from '@/i18n-config'

// Google calendar url disabled for now
const ICS_URL = process.env.EVENTS_ICS_URL

export async function getAllEvents(): Promise<Event[]> {
  const [ics, local] = await Promise.all([
    ICS_URL ? fetchIcsEvents(ICS_URL) : Promise.resolve([]),
    fetchLocalEvents(),
  ])
  // Use composite key (id + lang) to avoid overwriting different language versions
  const byIdAndLang = new Map<string, Event>()
  for (const e of [...ics, ...local]) {
    const key = e.lang ? `${e.id}:${e.lang}` : e.id
    byIdAndLang.set(key, e)
  }
  return Array.from(byIdAndLang.values())
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const all = await getAllEvents()
  const upcoming = sortUpcoming(all)
  return typeof limit === 'number' ? upcoming.slice(0, limit) : upcoming
}

export async function getUpcomingEventsByLocale(
  locale: Locale,
  limit?: number
): Promise<Event[]> {
  const all = await getAllEvents()
  console.log(
    '[DEBUG] All events before locale filter:',
    all.map((e) => ({ id: e.id, lang: e.lang, title: e.title }))
  )
  const localeEvents = all.filter((event) => event.lang === locale)
  console.log(
    `[DEBUG] Events for locale '${locale}':`,
    localeEvents.length,
    localeEvents.map((e) => ({ id: e.id, lang: e.lang }))
  )
  const upcoming = sortUpcoming(localeEvents)
  console.log('[DEBUG] Upcoming events after date filter:', upcoming.length)
  return typeof limit === 'number' ? upcoming.slice(0, limit) : upcoming
}

export async function getEventById(
  eventId: string,
  locale?: Locale
): Promise<Event | null> {
  return fetchLocalEventById(eventId, locale)
}

export { fetchLocalEventsByLocale, fetchLocalEventById }
