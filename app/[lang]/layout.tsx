import '../../styles/globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Metadata } from 'next'

import { cn } from '../../lib/utils'
import { i18n, type Locale } from '../../i18n-config'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://teekkarikomissio.fi'),
  title: {
    template: '%s | Teekkarikomissio',
    default: 'Teekkarikomissio - Teknologkommission',
  },
  description: 'Teekkariutta yli yliopistorajojen',
  keywords: [
    'teekkarikomissio',
    'komissio',
    'teknologkommissionen',
    'teekkari',
    'turku',
  ],
  authors: [
    { name: 'Teekkarikomissio', url: 'https://teekkarikomissio.fi' }
  ],
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    url: 'https://teekkarikomissio.fi',
    title: 'Teekkarikomissio - Teknologkommission',
    description: 'Teekkariutta yli yliopistorajojen',
    siteName: 'Teekkarikomissio',
    images: [{
      url: 'https://teekkarikomissio.fi/logos/tklogo-social.png',
      width: 512,
      height: 512,
      alt: 'Teekkarikomissio Logo'
    }],
  },
  twitter: {
    card: 'summary',
    title: 'Teekkarikomissio - Teknologkommission',
    description: 'Teekkariutta yli yliopistorajojen',
    images: ['https://teekkarikomissio.fi/logos/tklogo-social.png'],
  },
  icons: [
      {
          rel: 'icon',
          url: '/favicon-light.svg',
          media: '(prefers-color-scheme: light)',
          type: 'image/svg+xml'
      },
      {
          rel: 'icon',
          url: '/favicon-dark.svg',
          media: '(prefers-color-scheme: dark)',
          type: 'image/svg+xml'
      },
      {
          rel: 'icon',
          url: '/favicon.ico'
      }
  ]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { lang } = await params;
  const contentFolders = await getNavigationByLocale(lang);

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
      <body className="min-h-screen flex flex-col">
        <Navbar
          lang={lang}
          contentFolders={contentFolders
            ?.filter((folder): folder is NonNullable<typeof folder> => folder !== null)
            .map(folder => ({
              ...folder,
              subPages: folder.subPages?.filter((subPage): subPage is NonNullable<typeof subPage> => subPage !== null) || []
            })) ?? []}
        />
        <div className="flex-1 flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
