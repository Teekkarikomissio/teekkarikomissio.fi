import { Event } from './types';

export function normalizeEvent(
  e: Partial<Event> & Pick<Event, 'title' | 'start'>,
): Event {
  const id = e.id ?? `${e.title}-${e.start.toISOString()}`;
  return {
    id,
    title: e.title,
    description: e.description?.trim() || undefined,
    location: e.location?.trim() || undefined,
    url: e.url,
    start: e.start,
    end: e.end && e.end >= e.start ? e.end : undefined,
    allDay: !!e.allDay,
    tags: e.tags || [],
    lang: e.lang,
    source: e.source,
  };
}

export function sortUpcoming(events: Event[], now = new Date()): Event[] {
  return events
    .filter((e) => (e.end ? e.end >= now : e.start >= now))
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}
