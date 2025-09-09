import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale } from '@/i18n-config'

export type NewsItem = {
  slug: string
  title: string
  date: string
  summary?: string
  cover?: string
  content: string
}

const NEWS_DIR = path.join(process.cwd(), '_content', 'news')

function getNewsFiles(locale: Locale): string[] {
  if (!fs.existsSync(NEWS_DIR)) return []
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(`.${locale}.md`))
}

export function getAllNews(locale: Locale): NewsItem[] {
  try {
    const files = getNewsFiles(locale)
    const items = files.map((file) => {
      const fullPath = path.join(NEWS_DIR, file)
      const raw = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(raw)
      const slug = file.replace(`.${locale}.md`, '')
      const iso = new Date((data.date as string) || Date.now()).toISOString()
      return {
        slug,
        title: data.title as string,
        date: iso,
        summary: data.summary as string | undefined,
        cover: data.cover as string | undefined,
        content,
      }
    })

    return items.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (e) {
    console.error('Failed to read news content:', e)
    return []
  }
}

export function getLatestNews(locale: Locale, limit = 4): NewsItem[] {
  return getAllNews(locale).slice(0, limit)
}
