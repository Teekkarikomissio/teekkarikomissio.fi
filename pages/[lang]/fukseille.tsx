import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
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
      description: 'JATKOAIKA TEEKKARIELÄMÄLLE',
      founded: 'est. 1933',
    },
    {
      img: '/logo-nollakerho.png',
      href: 'https://digit.fi/alumneille',
      heading: '0-kerho',
      description:
        '0-kerho on Digit ry:n vanhempien opiskelijoiden klubi, jonka tarkoituksena järjestää puuhaa opinnoissaan edenneille ja toimia linkkinä koulutusohjelmasta valmistuneiden ja vielä opiskelevien kesken.',
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
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4 shadow-xl rounded-lg">
        <a className="flex flex-row flex-grow items-center justify-center " href={href}>
          <div className="w-1/3 h-auto items-center justify-center">
            <img className="  " src={img} alt={heading} />
          </div>
          <div className="w-1/2 h-auto">
            <div className="font-bold text-xl mb-2">{heading}</div>
            <p className="text-gray-700 text-base">{founded}</p>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </a>
      </div>
    );
  };

  const TextBox = ({ heading = '', body = '' }) => {
    return (
      <div className="bg-white p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h1 className="text-gray-900 font-bold text-xl mb-2">{heading}</h1>
          <p className="text-left text-gray-700 text-base mb-2">{body}</p>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey="Fukseille" imageSrc="">
      <TextBox heading="Fuksipassit" body="Asiaa fuksipasseista." />
      <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700" />
      <TextBox heading={t('techStudentHeading')} body={t('techStudentBody')} />
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
      <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700" />
      <TextBox heading="Alumnikerhot" body="Turussa on alumnitoimintaa." />
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
