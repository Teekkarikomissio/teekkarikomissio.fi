import { getUpcomingEvents } from '@/lib/events'
import EventList from '@/components/events/EventList'
import { Locale } from '@/i18n-config'

export const revalidate = 3600

export default async function EventsPage(props: {
  params: Promise<{ lang: Locale }>
}) {
  const params = await props.params
  const events = await getUpcomingEvents()
  const locale: Locale = params.lang ?? 'fi'

  const headings: Record<Locale, string> = {
    fi: 'Tapahtumat',
    en: 'Events',
    sv: 'Evenemang',
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">
        {headings[locale] || headings.fi}
      </h1>
      <EventList events={events} locale={locale} />
    </main>
  )
}
