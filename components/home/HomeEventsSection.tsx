import Link from 'next/link'
import { getUpcomingEventsByLocale } from '@/lib/events'
import EventList from '@/components/events/EventList'
import type { Locale } from '@/i18n-config'

type Props = {
  lang: Locale
}

const headings: Record<string, string> = {
  fi: 'Tapahtumakalenteri',
  en: 'Events calendar',
  sv: 'Evenemangskalender',
}

export default async function HomeEventsSection({ lang }: Props) {
  const events = await getUpcomingEventsByLocale(lang, 3)
  const title = headings[lang] ?? headings.fi

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link
            href={`/${lang}/events`}
            className="text-primary hover:underline"
          >
            {lang === 'sv'
              ? 'Visa alla'
              : lang === 'en'
                ? 'View all'
                : 'Näytä kaikki'}
          </Link>
        </div>
        <EventList events={events} locale={lang} />
      </div>
    </section>
  )
}
