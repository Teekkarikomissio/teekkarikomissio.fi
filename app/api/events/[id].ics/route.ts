import { NextResponse } from 'next/server'
import { getAllEvents } from '@/lib/events'
import { createEvent } from 'ics'

export async function GET(
  _: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const all = await getAllEvents()
  const e = all.find((x) => x.id === decodeURIComponent(params.id))
  if (!e) return new NextResponse('Not found', { status: 404 })

  const toTuple = (d: Date) => [
    d.getUTCFullYear(),
    d.getUTCMonth() + 1,
    d.getUTCDate(),
    d.getUTCHours(),
    d.getUTCMinutes(),
  ]

  const { error, value } = createEvent({
    title: e.title,
    description: e.description,
    location: e.location,
    url: e.url,
    startInputType: 'utc',
    endInputType: 'utc',
    start: toTuple(e.start),
    ...(e.end ? { end: toTuple(e.end) } : {}),
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
  })
  if (error || !value)
    return new NextResponse('Failed to generate ICS', { status: 500 })

  return new NextResponse(value, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${encodeURIComponent(e.id)}.ics"`,
    },
  })
}
