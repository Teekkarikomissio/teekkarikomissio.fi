import { Locale } from '@/i18n-config'

const localeMap: Record<Locale, string> = {
  fi: 'fi-FI',
  sv: 'sv-SE',
  en: 'en-GB',
}

export function formatDateUTC(dateISO: string, lang: Locale) {
  const d = new Date(dateISO)
  // Fallback if invalid date
  if (isNaN(d.getTime())) return dateISO
  const locale = localeMap[lang] || 'en-GB'
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(d)
}
