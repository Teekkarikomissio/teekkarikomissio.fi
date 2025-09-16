import { getUpcomingEvents } from '@/lib/events'
import EventList from '@/components/events/EventList'

export const revalidate = 3600

export default async function EventsPage({
  params,
}: {
  params: { lang: string }
}) {
  const events = await getUpcomingEvents()
  const locale = params.lang || 'fi'

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">Events</h1>
      <EventList events={events} locale={locale} />
    </main>
  )
}
