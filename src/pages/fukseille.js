import Image from 'next/image';
import React from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { Heading, Text } from '@chakra-ui/react';

const NewStudents = () => {
  const guildInfo = [
    {
      img: '/Albin_alt.png',
      href: 'https://datateknologerna.org/',
      heading: 'Datateknologerna vid Åbo Akademi rf',
      description: 'techStudentInfo',
      founded: 'est. 1999',
    },
    {
      img: '/logo-digit.png',
      href: 'https://digit.fi/',
      heading: 'Digit ry',
      description: 'techStudentInfo1',
      founded: 'est. 1999',
    },
    {
      img: '/logo-kk.png',
      href: 'https://kemistklubben.org/',
      heading: 'Kemistklubben vid Åbo Akademi rf',
      description: 'techStudentInfo2',
      founded: 'est. 1923',
    },
    {
      img: '/logo-nucleus.png',
      href: 'https://nucleus.fi/',
      heading: 'Nucleus ry',
      description: 'techStudentInfo3',
      founded: 'est. 2008',
    },
    {
      img: '/logo-adamas.png',
      href: 'https://adamas.fi/',
      heading: 'Adamas ry',
      description: 'techStudentInfo4',
      founded: 'est. 2020',
    },
    {
      img: '/logo-machina.png',
      href: 'https://www.facebook.com/KonetekniikkaMachinary/',
      heading: 'Machina ry',
      description: 'techStudentInfo5',
      founded: 'est. 2020',
    },
  ];

  const alumniInfo = [
    {
      img: '/logo-dikerho.jpg',
      href: 'https://turkudi.tek.fi/',
      heading: 'Turun DI-kerho',
      description: 'techStudentInfo6',
      founded: 'est. 1933',
    },
    {
      img: '/logo-nollakerho.png',
      href: 'https://digit.fi/alumneille',
      heading: '0-kerho',
      description: 'techStudentInfo7',
      founded: '',
    },
    {
      img: '/logo-aboatek.png',
      href: 'https://aboatekblog.wordpress.com/',
      heading: 'AboaTEK',
      description: 'techStudentInfo8',
      founded: '',
    },
  ];

  const GuildCard = ({ img, href, heading, description, founded }) => {
    return (
      <div className="max-w-full items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-xl rounded-lg m-8">
        <a className="lg:flex lg:flex-row flex flex-col items-center justify-center p-4" href={href}>
          <Image className="h-32" src={img} alt={heading} height={64} width="100%" />
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4">
            <div className="font-bold text-xl lg:w-1/2 my-2">{heading}</div>
            <p className="text-gray-700 text-base">{founded}</p>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </a>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <Image img="/fukseille-passit.jpg" height={64} width="100%" alt="Fuksipassit" />
      <Heading>{'techStudentHeading'}</Heading>
      <Text> {'techStudentBody'}</Text>
      <div className="lg:flex lg:flex-row items-center justify-center">
        {/* <img className="h-64" src={'/fukseille-date.jpg'} alt="Passi Date" />
        <img className="h-64" src={'/fukseille-digit.jpg'} alt="Passi Digit" />
        <img className="h-64" src={'/fukseille-nucleus.jpg'} alt="Passi Nucleus" />
        <img className="h-64" src={'/fukseille-kk.jpg'} alt="Passi KK" /> */}
      </div>
      <Heading>{'techStudentHeading1'}</Heading>
      <Text>{'techStudentBody1'}</Text>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 md:block">
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
      <Heading>{'techStudentHeading2'}</Heading>
      <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700" />
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 md:block">
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
    </DefaultLayout>
  );
};

export default NewStudents;
