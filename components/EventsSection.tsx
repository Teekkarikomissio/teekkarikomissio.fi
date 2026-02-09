'use client';

import { useEffect, useState } from 'react';
import { EventCard } from './EventCard';

interface Event {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
}

const translations = {
  fi: {
    loading: 'Ladataan tapahtumia...',
    heading: 'Tulevat tapahtumat',
  },
  sv: {
    loading: 'Laddar evenemang...',
    heading: 'Kommande evenemang',
  },
  en: {
    loading: 'Loading events...',
    heading: 'Upcoming Events',
  },
};

export function EventsSection({ lang = 'fi' }: { lang?: string }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const t = translations[lang as keyof typeof translations] || translations.fi;

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then((data: Event[]) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-12">{t.loading}</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative pb-2 mb-8">
        <h2 className="text-3xl font-bold text-center">
          {t.heading}
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}