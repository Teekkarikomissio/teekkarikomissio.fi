import EventCard from './EventCard'
import { Event } from '@/lib/events/types'

export default function EventList({
  events,
  locale = 'fi',
}: {
  events: Event[]
  locale?: string
}) {
  if (!events?.length)
    return <p className="text-sm text-gray-600">No upcoming events.</p>
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((e) => (
        <EventCard key={e.id} event={e} locale={locale} />
      ))}
    </div>
  )
}
