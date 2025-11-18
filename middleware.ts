import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects a plain object, so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  return 'fi'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (
    [
      '/favicon.ico',
      '/favicon.png',
      '/favicon-dark.svg',
      '/favicon-light.svg',
      '/manifest.json',
      '/admin',
      '/.netlify',
      '/.next',
      '#access_token',
      '/sitemap.xml',
      '/robots.txt',
    ].some((path) => pathname.startsWith(path)) ||
    /\.(pdf|png|jpg|svg|ico|yml|xml)$/.test(pathname)
  ) {
    return
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
    // Optional: Match all root level pages
    '/',
  ],
}
