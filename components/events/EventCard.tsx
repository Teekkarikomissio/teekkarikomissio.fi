'use client';

import { Event } from '@/lib/events/types';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EventCard({
  event,
  locale = 'fi',
}: {
  event: Event;
  locale?: string;
}) {
  const startFmt = new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: event.allDay ? undefined : 'short',
  });
  const endFmt = new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: event.allDay ? undefined : 'short',
  });

  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <p
          className="text-sm text-muted-foreground"
          suppressHydrationWarning={true}
        >
          {startFmt.format(event.start)}
          {event.end ? ` – ${endFmt.format(event.end)}` : null}
        </p>
        {event.location ? (
          <p className="text-sm text-muted-foreground">{event.location}</p>
        ) : null}
      </CardHeader>
      {event.description ? (
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-4">
            {event.description}
          </p>
        </CardContent>
      ) : null}
      <CardContent className="pt-0">
        <div className="mt-2 flex flex-wrap gap-4">
          <Link
            href={`/${locale}/events/${encodeURIComponent(event.id)}`}
            className="text-primary hover:underline"
          >
            {locale === 'sv'
              ? 'Läs mer'
              : locale === 'en'
                ? 'Read more'
                : 'Lue lisää'}
          </Link>
          <a
            className="text-primary hover:underline"
            href={`/api/events/${encodeURIComponent(event.id)}/ics`}
          >
            {locale === 'sv'
              ? 'Lägg till i kalendern'
              : locale === 'en'
                ? 'Add to calendar'
                : 'Lisää kalenteriin'}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
