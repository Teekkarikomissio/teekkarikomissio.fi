import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import { H1, H2, ShortText } from '../../components/Typography';
import useTranslation from '../../hooks/useTranslation';

const NewStudents: React.FC = () => {
  const { t } = useTranslation();

  const guildInfo = [
    {
      img: '/logo-date.png',
      href: 'https://date.abo.fi/',
      heading: 'Datateknologerna vid Åbo Akademi rf',
      description: 'Tietotekniikka',
      founded: 'est. 1999',
    },
    {
      img: '/logo-digit.png',
      href: 'https://digit.fi/',
      heading: 'Digit ry',
      description: 'Tieto- ja viestintätekniikka',
      founded: 'est. 1999',
    },
    {
      img: '/logo-kk.png',
      href: 'https://kemistklubben.abo.fi/',
      heading: 'Kemistklubben vid Åbo Akademi rf',
      description: 'Kemian- ja prosessitekniikka',
      founded: 'est. 1923',
    },
    {
      img: '/logo-nucleus.png',
      href: 'https://nucleus.fi/',
      heading: 'Nucleus ry',
      description: 'Biotekniikka ja elintarvikekehitys',
      founded: 'est. 2008',
    },
  ];

  const alumniInfo = [
    {
      img: '/logo-dikerho.jpg',
      href: 'https://turkudi.tek.fi/',
      heading: 'Turun DI-kerho',
      description: 'Turun DI-kerhon tarkoituksena on toimia TEKin alueellisten jäsenten yhdyssiteenä.',
      founded: 'est. 1933',
    },
    {
      img: '/logo-nollakerho.png',
      href: 'https://digit.fi/alumneille',
      heading: '0-kerho',
      description:
        '0-kerho on Digit ry:n alumnikerho, jonka tarkoitus on toimia linkkinä uusien ja vanhojen opiskelijoiden välillä.',
      founded: '',
    },
    {
      img: '/logo-aboatek.png',
      href: 'https://aboatekblog.wordpress.com/',
      heading: 'AboaTEK',
      description: 'Lounais-Suomen tekniikan akateemiset naiset',
      founded: '',
    },
  ];

  interface GuildCardProps {
    img: string;
    href: string;
    heading: string;
    description: string;
    founded: string;
  }

  const GuildCard: React.FC<GuildCardProps> = ({ img, href, heading, description, founded }) => {
    return (
      <div className="max-w-full items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-xl rounded-lg m-8">
        <a className="lg:flex lg:flex-row flex flex-col items-center justify-center p-4" href={href}>
          <img className="h-32" src={img} alt={heading} />
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
    <Layout titleKey="fukseille">
      {/* <TextBox heading="Fuksipassit" body="Asiaa fuksipasseista." /> */}
      {/* <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700 rounded" /> */}
      <H1>{t('techStudentHeading')}</H1>
      <div className="mx-4">
        <ShortText>{t('techStudentBody')}</ShortText>
      </div>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 md:block">
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
      <H2>Alumnikerhot</H2>
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
    </Layout>
  );
};

export default withLocale(NewStudents);
