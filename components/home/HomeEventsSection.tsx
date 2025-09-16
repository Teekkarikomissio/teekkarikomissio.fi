import Link from 'next/link'
import { getUpcomingEvents } from '@/lib/events'
import EventList from '@/components/events/EventList'

type Props = {
  lang: string
}

const headings: Record<string, string> = {
  fi: 'Tapahtumakalenteri',
  en: 'Events calendar',
  sv: 'Evenemangskalender',
}

export default async function HomeEventsSection({ lang }: Props) {
  const events = await getUpcomingEvents(3)
  const title = headings[lang] ?? headings.fi

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          href={`/${lang}/events`}
          className="text-primary underline hover:opacity-80"
        >
          {lang === 'sv'
            ? 'Visa alla'
            : lang === 'en'
              ? 'View all'
              : 'Näytä kaikki'}
        </Link>
      </div>
      <EventList events={events} locale={lang} />
    </section>
  )
}
