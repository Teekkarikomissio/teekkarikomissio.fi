import '../../styles/globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Metadata } from 'next'

import { cn } from '../../lib/utils'
import { i18n, type Locale } from '../../i18n-config'
//import { ThemeProvider } from '../../components/theme-provider'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import { getNavigationByLocale } from '@/lib/api'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { lang } = await params
  const contentFolders = (await getNavigationByLocale(lang)).filter((item): item is NonNullable<typeof item> => Boolean(item))

  return (
    <html
      lang={lang}
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        roboto_mono.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <Navbar
          lang={lang}
          contentFolders={contentFolders}
        />
        <div className="flex-expand flex flex-col items-center max-h-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://teekkarikomissio.fi/'),
  title: 'Teekkarikomissio - Teknologkommission',
  description:
    'Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille.',
  keywords:
    'teekkarikomissio, komissio, teknologkommissionen, kommissionen, teekkari, turku, tekniikka, opiskelu, yliopisto, tietotekniikka, biotekniikka, materiaalitekniikka, konetekniikka, fuksi, paavo, nurmi, vappu, wappu, lakitus, teekkariutta, turkulaista, TK, tk, teekkarikulttuuri, jäynäkulttuuri, teekkarilakki, yhdistys, fukseille, kulttuuri, yrityksille, fuksipassi, lakinkäyttöoikeus, käyttöoikeus, pysyväisohjesääntö, eldprowet, jäynäkilpailu',
  authors: [{ name: 'Teekkarikomissio', url: 'https://teekkarikomissio.fi/' }],
  openGraph: {
    images: '/index-banner-fi.jpg',
  },
}
