import React from 'react'
import { H1, ShortText } from '../../components/Typography'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../get-dictionary'
import Image from 'next/image'

import jaynamerkki from '../../public/index-jaynamerkki.jpeg'
import teekkari from '../../public/index-teekkari.jpg'
import paavo from '../../public/paavon-lakitus.jpg'
import tek from '../../public/logos/tek-logo.png'
import tfif from '../../public/logos/logo-tfif.svg'
import lander from '@/public/home-lander.jpg'
import tklogo from '@/public/logos/tklogo.svg'

import { PartnerCard } from '@/types'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const home = dictionary['home']

  const partners = [
    {
      img: tek,
      alt: 'TEK',
      href: 'https://www.tek.fi/',
    },
    {
      img: tfif,
      alt: 'TFiF',
      href: 'https://tfif.fi/',
    },
  ]

  const PartnerCard: React.FC<PartnerCard> = ({ img, href, alt }) => {
    return (
      <div className="flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4">
        <a href={href}>
          <Image src={img} alt={alt} />
        </a>
      </div>
    )
  }

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
        {/* <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl">{home.metaTitle}</h1> */}
        <Image
          src={tklogo}
          alt="TK logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl"
        />
      </div>
      <div className='max-w-prose'>
        <article className="prose mt-8 text-center">
          <h2>{home.homeHeading}</h2>
          <ShortText>{home.homeContent}</ShortText>
        </article>
        <div className="my-16 lg:flex lg:flex-row flex flex-col justify-between items-center">
          <Image
            className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover items-center lg:h-1/4 lg:w-1/4 w-64 overflow-hidden"
            src={teekkari}
            alt="Teekkari"
          />
          <article className="prose m-8">
            <h2>{home.homeHeading2}</h2>
            <p>{home.homeContent2}</p>
          </article>
        </div>
        <div className="my-16 lg:flex lg:flex-row-reverse flex flex-col justify-between items-center">
          <Image
            className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover items-center lg:h-1/4 lg:w-1/4 w-64 overflow-hidden"
            src={jaynamerkki}
            alt="Jäynämerkki"
          ></Image>
          <article className="prose m-8">
            <h2>{home.homeHeading3}</h2>
            <p>{home.homeContent3}</p>
          </article>
        </div>
        <div className="my-16 lg:flex lg:flex-row justify-between items-center">
          <Image
            className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover items-center lg:h-2/5 lg:w-2/5 overflow-hidden"
            src={paavo}
            alt="Paavon lakitus"
          />
          <article className="prose m-8">
            <h2>{home.homeHeading4}</h2>
            <p>{home.homeContent4}</p>
          </article>
        </div>
        <H1>{home.homeHeading5}</H1>
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 md:block">
          {partners.map(({ img, href, alt }) => (
            <PartnerCard
              key={`${href}${alt}`}
              img={img}
              href={href}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </>
  )
}
