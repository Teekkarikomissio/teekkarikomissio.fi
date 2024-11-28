import React from 'react'
import { Locale } from '../../i18n-config'
import Image from 'next/image'

import lander from '@/public/home-lander.jpg'
import tklogo from '@/public/logos/tklogo.svg'
import frontpageStyles from './frontpage-styles.module.css'

import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'

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
      <div className="flex w-full h-96 relative">
        <Image
          src={lander}
          alt="Lander picture"
          layout="fill"
          objectFit="cover"
          className="blur-xs absolute h-screen inset-0 object-cover"
        />
        <Image
          src={tklogo}
          alt="TK logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl"
        />
      </div>
      <article className="flex flex-col justify-center text-center max-w-prose mx-auto prose prose-stone m-8">
        <div
          className={frontpageStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=uvuvvg8nh8dt26778tef67u0h8%40group.calendar.google.com&ctz=Europe%2FHelsinki"
          className='flex h-screen w-full lg:my-16 lg:mb-16'
        />
    </>
  )
}
