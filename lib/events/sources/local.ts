import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { normalizeEvent } from '../normalise'
import { Event } from '../types'
import { Locale } from '@/i18n-config'

const EVENTS_DIR = path.join(process.cwd(), '_content', 'events')

export async function fetchLocalEvents(): Promise<Event[]> {
  let files: string[] = []
  try {
    files = await fs.readdir(EVENTS_DIR)
  } catch {
    return []
  }

  console.log('[DEBUG] Event files found:', files)

  const events: Event[] = []
  for (const file of files) {
    if (
      !file.endsWith('.md') &&
      !file.endsWith('.mdx') &&
      !file.endsWith('.yml') &&
      !file.endsWith('.yaml')
    )
      continue
    const full = path.join(EVENTS_DIR, file)
    const raw = await fs.readFile(full, 'utf8')
    const { data, content } = matter(raw)

    const start = data.start ? new Date(data.start) : undefined
    if (!start) continue

    const end = data.end ? new Date(data.end) : undefined

    let detectedLang = data.lang
    const localeMatch = file.match(/\.(fi|sv|en)\.md$/)
    if (localeMatch) {
      detectedLang = localeMatch[1]
    }

    const event = normalizeEvent({
      id: data.id,
      title: data.title || path.parse(file).name,
      description: data.description || content,
      location: data.location,
      url: data.url,
      start,
      end,
      allDay: !!data.allDay,
      tags: data.tags,
      lang: detectedLang,
      source: 'local',
    })

    console.log('[DEBUG] Loaded event:', {
      file,
      id: event.id,
      lang: event.lang,
      title: event.title,
    })
    events.push(event)
  }

  console.log('[DEBUG] Total events loaded:', events.length)
  return events
}

export async function fetchLocalEventsByLocale(
  locale: Locale
): Promise<Event[]> {
  const allEvents = await fetchLocalEvents()
  return allEvents.filter((event) => event.lang === locale)
}

export async function fetchLocalEventById(
  eventId: string,
  locale?: Locale
): Promise<Event | null> {
  let files: string[] = []
  try {
    files = await fs.readdir(EVENTS_DIR)
  } catch {
    return null
  }

  if (locale) {
    const localeFile = `${eventId}.${locale}.md`
    if (files.includes(localeFile)) {
      const full = path.join(EVENTS_DIR, localeFile)
      const raw = await fs.readFile(full, 'utf8')
      const { data, content } = matter(raw)

      const start = data.start ? new Date(data.start) : undefined
      if (!start) return null

      const end = data.end ? new Date(data.end) : undefined

      return normalizeEvent({
        id: data.id || eventId,
        title: data.title || eventId,
        description: data.description || content,
        location: data.location,
        url: data.url,
        start,
        end,
        allDay: !!data.allDay,
        tags: data.tags,
        lang: locale,
        source: 'local',
      })
    }
  }

  // Fallback: find any file matching the event ID
  for (const file of files) {
    if (!file.endsWith('.md')) continue

    const full = path.join(EVENTS_DIR, file)
    const raw = await fs.readFile(full, 'utf8')
    const { data, content } = matter(raw)

    if (data.id === eventId) {
      const start = data.start ? new Date(data.start) : undefined
      if (!start) continue

      const end = data.end ? new Date(data.end) : undefined

      return normalizeEvent({
        id: data.id,
        title: data.title || path.parse(file).name,
        description: data.description || content,
        location: data.location,
        url: data.url,
        start,
        end,
        allDay: !!data.allDay,
        tags: data.tags,
        lang: data.lang,
        source: 'local',
      })
    }
  }

  return null
}
