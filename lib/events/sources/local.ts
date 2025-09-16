import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { normalizeEvent } from '../normalise'
import { Event } from '../types'

const EVENTS_DIR = path.join(process.cwd(), '_content', 'events')

export async function fetchLocalEvents(): Promise<Event[]> {
  let files: string[] = []
  try {
    files = await fs.readdir(EVENTS_DIR)
  } catch {
    return []
  }

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

    events.push(
      normalizeEvent({
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
    )
  }
  return events
}
