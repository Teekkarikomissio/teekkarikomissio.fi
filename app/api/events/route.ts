import { NextResponse } from 'next/server';
import { getAllEvents } from '@/lib/events';

export const revalidate = 3600; // seconds

export async function GET() {
  const events = await getAllEvents();
  return NextResponse.json({ events });
}
