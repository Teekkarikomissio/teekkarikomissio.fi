import { NextResponse } from 'next/server';
import ical from 'ical';

export async function GET() {
  try {
    const calendarUrl = process.env.GOOGLE_CALENDAR_ICS_URL || 
      'https://calendar.google.com/calendar/ical/uvuvvg8nh8dt26778tef67u0h8%40group.calendar.google.com/public/basic.ics';

    const response = await fetch(calendarUrl);
    const icsData = await response.text();
    
    const parsedData = ical.parseICS(icsData);
    
    const now = new Date();
    const events = Object.values(parsedData)
      .filter((event: any) => {
        return event.type === 'VEVENT' && new Date(event.start) >= now;
      })
      .map((event: any) => ({
        id: event.uid,
        title: event.summary,
        description: event.description,
        start: event.start,
        end: event.end,
        location: event.location,
      }))
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 10); // Get next 10 events

    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching calendar:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}