import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import { H1, H2, LongText } from '../../../components/Typography'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GuildCardProps } from '@/types'
import fukseillePassit from '@/public/fukseille-passit.jpg'
import albin from '@/public/logos/Albin_alt.png'
import digit from '@/public/logos/logo-digit.png'
import kk from '@/public/logos/logo-kk.png'
import nucleus from '@/public/logos/logo-nucleus.png'
import adamas from '@/public/logos/logo-adamas.png'
import machina from '@/public/logos/logo-machina.png'
import asklepio from '@/public/logos/logo-asklepio.png'
import diKerho from '@/public/logos/logo-dikerho.jpg'
import nollaKerho from '@/public/logos/logo-nollakerho.png'
import aboaTek from '@/public/logos/logo-aboatek.png'
import optima from  '@/public/logos/logo-optima.jpg'

export default async function NewStudents({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const newStudents = dictionary['newStudents']

  const guildInfo = [
    {
      img: albin,
      href: 'https://datateknologerna.org/',
      heading: 'Datateknologerna vid Åbo Akademi rf',
      description: newStudents.techStudentInfo,
      founded: 'est. 1999',
    },
    {
      img: digit,
      href: 'https://digit.fi/',
      heading: 'Digit ry',
      description: newStudents.techStudentInfo1,
      founded: 'est. 1999',
    },
    {
      img: kk,
      href: 'https://kemistklubben.org/',
      heading: 'Kemistklubben vid Åbo Akademi rf',
      description: newStudents.techStudentInfo2,
      founded: 'est. 1923',
    },
    {
      img: nucleus,
      href: 'https://nucleus.fi/',
      heading: 'Nucleus ry',
      description: newStudents.techStudentInfo3,
      founded: 'est. 2008',
    },
    {
      img: adamas,
      href: 'https://adamas.fi/',
      heading: 'Adamas ry',
      description: newStudents.techStudentInfo4,
      founded: 'est. 2020',
    },
    {
      img: machina,
      href: 'https://machina.fi',
      heading: 'Machina ry',
      description: newStudents.techStudentInfo5,
      founded: 'est. 2020',
    },
    {
      img: asklepio,
      href: 'https://asklepio.fi/',
      heading: 'Asklepio ry',
      description: newStudents.techStudentInfo6,
      founded: 'est. 2022',
    },
    {
      img: optima,
      href: 'https://linktr.ee/optimary',
      heading: 'Optima ry',
      description: newStudents.techStudentInfo10,
      founded: 'est. 2023',
    },
  ]

  const alumniInfo = [
    {
      img: diKerho,
      href: 'https://turkudi.tek.fi/',
      heading: 'Turun DI-kerho',
      description: newStudents.techStudentInfo7,
      founded: 'est. 1933',
    },
    {
      img: nollaKerho,
      href: 'https://digit.fi/alumneille',
      heading: '0-kerho',
      description: newStudents.techStudentInfo8,
      founded: '',
    },
    {
      img: aboaTek,
      href: 'https://aboatekblog.wordpress.com/',
      heading: 'AboaTEK',
      description: newStudents.techStudentInfo9,
      founded: '',
    },
  ]

  const GuildCard: React.FC<GuildCardProps> = ({
    img,
    href,
    heading,
    description,
    founded,
  }) => {
    return (
      <Card className="w-[325px] h-[365px] items-center break-inside-avoid-column">
        <CardHeader className='items-center text-wrap'>
          <CardTitle>{heading}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Image src={img} alt={heading} className='w-32 h-full' />
          <CardDescription>{founded}</CardDescription>
          <Link href={href}>{href}</Link>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="max-w-prose">
      <div className="prose">
        <H1>{newStudents.techStudentHeading}</H1>
        <LongText>{newStudents.techStudentBody}</LongText>
        <Image src={fukseillePassit} alt="Fuksipassit" />
        <H1>{newStudents.techStudentHeading1}</H1>
        <LongText>{newStudents.techStudentBody1}</LongText>
      </div>
      <div className="flex flex-col lg:block lg:columns-2 lg:gap-2 items-center">
        {guildInfo.map(({ img, href, heading, description, founded }) => (
          <GuildCard
            key={`${href}${heading}`}
            img={img}
            href={href}
            heading={heading}
            description={description}
            founded={founded}
          />
        ))}
      </div>
      <H2>{newStudents.techStudentHeading2}</H2>
      <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700" />
      <div className="flex flex-col lg:block lg:columns-2 lg:gap-2 items-center my-8">
        {alumniInfo.map(({ img, href, heading, description, founded }) => (
          <GuildCard
            key={`${href}${heading}`}
            img={img}
            href={href}
            heading={heading}
            description={description}
            founded={founded}
          />
        ))}
      </div>
    </div>
  )
}
