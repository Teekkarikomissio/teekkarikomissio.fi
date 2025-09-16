export type Event = {
  id: string
  title: string
  description?: string
  location?: string
  url?: string
  start: Date
  end?: Date
  allDay?: boolean
  tags?: string[]
  lang?: string // language code e.g. fi, sv, en
  source?: 'ics' | 'local'
}
