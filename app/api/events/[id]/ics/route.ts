import { NextResponse } from 'next/server'
import { getAllEvents } from '@/lib/events'
import { createEvent, type EventAttributes } from 'ics'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const eventId = decodeURIComponent(id)

  const all = await getAllEvents()
  const e = all.find((x) => x.id === eventId)
  if (!e) {
    return new NextResponse('Not found', { status: 404 })
  }

  const toTuple = (d: Date): [number, number, number, number, number] => [
    d.getUTCFullYear(),
    d.getUTCMonth() + 1,
    d.getUTCDate(),
    d.getUTCHours(),
    d.getUTCMinutes(),
  ]

  const start = toTuple(e.start)

  const base = {
    title: e.title,
    ...(e.description ? { description: e.description } : {}),
    ...(e.location ? { location: e.location } : {}),
    ...(e.url ? { url: e.url } : {}),
    startInputType: 'utc' as const,
    endInputType: 'utc' as const,
    start,
    status: 'CONFIRMED' as const,
    busyStatus: 'BUSY' as const,
  }

  let attrs: EventAttributes
  if (e.end) {
    attrs = { ...base, end: toTuple(e.end) }
  } else {
    attrs = { ...base, duration: { hours: 1 } }
  }

  const { error, value } = createEvent(attrs)
  if (error || !value) {
    console.error('ICS Generation Error:', error) // Good practice to log the actual error
    return new NextResponse('Failed to generate ICS', { status: 500 })
  }

  return new NextResponse(value, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${encodeURIComponent(id)}.ics"`,
    },
  })
}
