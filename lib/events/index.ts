import { fetchIcsEvents } from './sources/ics'
import { fetchLocalEvents } from './sources/local'
import { sortUpcoming } from './normalise'
import { Event } from './types'

// Google calendar url disabled for now
const ICS_URL = process.env.EVENTS_ICS_URL

export async function getAllEvents(): Promise<Event[]> {
  const [ics, local] = await Promise.all([
    ICS_URL ? fetchIcsEvents(ICS_URL) : Promise.resolve([]),
    fetchLocalEvents(),
  ])
  const byId = new Map<string, Event>()
  for (const e of [...ics, ...local]) {
    byId.set(e.id, e)
  }
  return Array.from(byId.values())
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const all = await getAllEvents()
  const upcoming = sortUpcoming(all)
  return typeof limit === 'number' ? upcoming.slice(0, limit) : upcoming
}
