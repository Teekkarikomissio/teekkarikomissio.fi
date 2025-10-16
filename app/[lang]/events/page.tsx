import { getUpcomingEventsByLocale } from '@/lib/events'
import EventList from '@/components/events/EventList'
import { Locale } from '@/i18n-config'

export const revalidate = 3600

export default async function EventsPage(props: {
  params: Promise<{ lang: Locale }>
}) {
  const params = await props.params
  const locale: Locale = params.lang ?? 'fi'
  const events = await getUpcomingEventsByLocale(locale)

  const headings: Record<Locale, string> = {
    fi: 'Tapahtumat',
    en: 'Events',
    sv: 'Evenemang',
  }

  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative pb-2 mb-8">
          <h1 className="text-3xl font-bold text-center">
            {headings[locale] || headings.fi}
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
        </div>
        <EventList events={events} locale={locale} />
      </div>
    </main>
  )
}
