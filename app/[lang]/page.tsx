import React from 'react'
import { Metadata } from 'next'
import { Locale } from '@/i18n-config'
import Image from 'next/image'
import frontpageStyles from './frontpage-styles.module.css'

import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import NewsSection from '@/components/NewsSection'
import HomeEventsSection from '@/components/home/HomeEventsSection'

type Props = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params

  const title =
    lang === 'sv'
      ? 'Teknologskap över universitetsgränserna'
      : lang === 'en'
        ? 'Teekkari culture across university boundaries'
        : 'Teekkariutta yli yliopistorajojen'

  const description =
    lang === 'sv'
      ? 'Teknologkommissionen är ett sammanbindande kontaktforum för teknologföreningar i Åbo.'
      : lang === 'en'
        ? 'The Teekkarikomissio is a unifying contact forum for teekkari associations operating in Turku.'
        : 'Teekkarikomissio on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: 'https://teekkarikomissio.fi/home-landing-2.jpg',
          width: 1200,
          height: 630,
          alt: 'Teekkarikomissio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://teekkarikomissio.fi/home-landing-2.jpg'],
    },
  }
}

const frontPageContent = {
  fi: {
    association: {
      description:
        'Teekkarikomissio on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille.',
    },
    culture: {
      title: 'Teekkarikulttuuria',
      description:
        'Teekkarikomissio järjestää vuosittain paikalliset jäynäkilpailut, joiden kautta valitaan Turun edustaja valtakunnallisiin jäynäkilpailuihin.',
    },
    influence: {
      title: 'Paikallista ja valtakunnallista vaikuttamista',
      description:
        'Edustamme turkulaista teekkariutta sekä paikallisesti, että valtakunnallisesti. Yhteisön äänitorvena otamme kantaa ja ajamme yhteisölle tärkeitä asioita.',
    },
    headings: {
      news: 'Ajankohtaista',
      viewAll: 'Näytä kaikki',
      insta: 'Instagram',
      instaCta: 'Seuraa Instagramissa',
      partners: 'Yhteistyössä',
      calendar: 'Tapahtumakalenteri',
      readMoreLabel: 'Lue lisää',
    },
  },
  sv: {
    association: {
      description:
        'Teknologkommissionen är ett sammanbindande kontaktforum för teknologföreningar i Åbo.',
    },
    culture: {
      title: 'Teknologkultur',
      description:
        'Teknologkommissionen ordnar årligen den lokala jäynätävlingen där även Åbos representant till den nationella tävlingen väljs.',
    },
    influence: {
      title: 'Inflytande på lokal och nationell nivå',
      description:
        'Vi representerar teknologskap i Åbo både på lokal och på riksnivå. Som teknologsällskapets språkrör verkar vi för och tar ställning till för teknologer viktiga ärenden.',
    },
    headings: {
      news: 'Aktuellt',
      viewAll: 'Visa alla',
      insta: 'Instagram',
      instaCta: 'Följ på Instagram',
      partners: 'I samarbete',
      calendar: 'Evenemangskalender',
      readMoreLabel: 'Läs mer',
    },
  },
  en: {
    association: {
      description:
        'The Teekkarikomissio is a unifying contact forum for teekkari associations operating in Turku.',
    },
    culture: {
      title: 'Teekkari Culture',
      description:
        "The Teekkari Commission organizes annual local jäynä competitions, through which Turku's representative is selected for the national competitions.",
    },
    influence: {
      title: 'Local and National Influence',
      description:
        "We represent Turku's tech students both locally and nationally. As the community's voice, we advocate for and drive important matters for our community.",
    },
    headings: {
      news: 'Latest News',
      viewAll: 'View all',
      insta: 'Instagram',
      instaCta: 'Follow on Instagram',
      partners: 'In Cooperation With',
      calendar: 'Event Calendar',
      readMoreLabel: 'Read more',
    },
  },
}

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params

  const homePage = getPageBySlug('home/home', lang)
  const content = await markdownToHtml(homePage.content || '')

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary w-full relative overflow-hidden pb-5 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[60vh] pt-8 lg:pt-16">
            <div className="flex items-center lg:pr-8">
              <div className="w-full py-8 lg:py-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {lang === 'sv' ? (
                    <>
                      Teknologskap <br />
                      över universitetsgränserna
                    </>
                  ) : lang === 'en' ? (
                    <>
                      Teekkari culture <br />
                      across university boundaries
                    </>
                  ) : (
                    <>
                      Teekkariutta <br />
                      yli yliopistorajojen
                    </>
                  )}
                </h1>
                <p className="text-xl md:text-2xl text-yellow-100">
                  Teekkarikomissio | Teknologkommissionen
                </p>
              </div>
            </div>
            <div className="relative h-[45vh] lg:h-auto pl-4 -mr-4 sm:-mr-6 lg:mx-0 lg:-right-32 lg:top-0 lg:-bottom-16">
              <Image
                src={'/home-landing-2.jpg'}
                alt="Tech student life at Turku"
                fill
                priority
                className="object-cover brightness-90 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pb-2 mb-8">
            <h2 className="text-3xl font-bold text-center">
              {frontPageContent[lang].association.description}
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-16">
          {/* Culture Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/index-jaynamerkki.svg"
              alt="Paavo Nurmi"
              width={300}
              height={200}
              className="rounded-lg w-full lg:w-auto max-w-[300px]"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
                {frontPageContent[lang].culture.title}
              </h3>
              <p className="text-lg text-center lg:text-left">
                {frontPageContent[lang].culture.description}
              </p>
            </div>
          </div>

          {/* Influence Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/paavon-lakitus.jpg"
              alt="Paavon lakitus"
              width={300}
              height={200}
              className="rounded-lg w-full lg:w-auto max-w-[300px]"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
                {frontPageContent[lang].influence.title}
              </h3>
              <p className="text-lg text-center lg:text-left">
                {frontPageContent[lang].influence.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Section */}
      <HomeEventsSection lang={lang} />

      {/* News Section */}
      <NewsSection
        lang={lang}
        heading={frontPageContent[lang].headings.news}
        viewAllLabel={frontPageContent[lang].headings.viewAll}
        readMoreLabel={frontPageContent[lang].headings.readMoreLabel}
      />

      {/*this is disabled for now, as we do not have access to the Facebook account to access Instagram Graph API*/}

      {/*/!* Lightweight Instagram strip (example) *!/*/}
      {/*<InstagramStrip*/}
      {/*  heading={frontPageContent[lang].headings.insta}*/}
      {/*  ctaLabel={frontPageContent[lang].headings.instaCta}*/}
      {/*  profileUrl="https://www.instagram.com/turunteekkari/"*/}
      {/*  items={[*/}
      {/*    {*/}
      {/*      href: 'https://www.instagram.com/turunteekkari/',*/}
      {/*      src: '/event-sommar.jpg',*/}
      {/*      alt: '',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      href: 'https://www.instagram.com/turunteekkari/',*/}
      {/*      src: '/event-jaynastartti.jpg',*/}
      {/*      alt: '',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      href: 'https://www.instagram.com/turunteekkari/',*/}
      {/*      src: '/event-excu.jpg',*/}
      {/*      alt: '',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      href: 'https://www.instagram.com/turunteekkari/',*/}
      {/*      src: '/event-sitz.jpg',*/}
      {/*      alt: '',*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}

      {/* Partners Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative pb-2 mb-8">
            <h2 className="text-3xl font-bold text-center">
              {frontPageContent[lang].headings.partners}
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-primary"></div>
          </div>
          <article
            className={frontpageStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  )
}
