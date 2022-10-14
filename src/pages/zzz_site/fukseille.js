import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, H2, ShortText, LongText } from '../../components/Typography';

const NewStudents = () => {
  const { t } = useTranslation('techStudent');

  const guildInfo = [
    {
      img: '/Albin_alt.png',
      href: 'https://datateknologerna.org/',
      heading: 'Datateknologerna vid Åbo Akademi rf',
      description: t('techStudentInfo'),
      founded: 'est. 1999',
    },
    {
      img: '/logo-digit.png',
      href: 'https://digit.fi/',
      heading: 'Digit ry',
      description: t('techStudentInfo1'),
      founded: 'est. 1999',
    },
    {
      img: '/logo-kk.png',
      href: 'https://kemistklubben.org/',
      heading: 'Kemistklubben vid Åbo Akademi rf',
      description: t('techStudentInfo2'),
      founded: 'est. 1923',
    },
    {
      img: '/logo-nucleus.png',
      href: 'https://nucleus.fi/',
      heading: 'Nucleus ry',
      description: t('techStudentInfo3'),
      founded: 'est. 2008',
    },
    {
      img: '/logo-adamas.png',
      href: 'https://adamas.fi/',
      heading: 'Adamas ry',
      description: t('techStudentInfo4'),
      founded: 'est. 2020',
    },
    {
      img: '/logo-machina.png',
      href: 'https://www.facebook.com/KonetekniikkaMachinary/',
      heading: 'Machina ry',
      description: t('techStudentInfo5'),
      founded: 'est. 2020',
    },
  ];

  const alumniInfo = [
    {
      img: '/logo-dikerho.jpg',
      href: 'https://turkudi.tek.fi/',
      heading: 'Turun DI-kerho',
      description: t('techStudentInfo6'),
      founded: 'est. 1933',
    },
    {
      img: '/logo-nollakerho.png',
      href: 'https://digit.fi/alumneille',
      heading: '0-kerho',
      description:
        t('techStudentInfo7'),
      founded: '',
    },
    {
      img: '/logo-aboatek.png',
      href: 'https://aboatekblog.wordpress.com/',
      heading: 'AboaTEK',
      description: t('techStudentInfo8'),
      founded: '',
    },
  ];

  const GuildCard = ({ img, href, heading, description, founded }) => {
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
    <Layout titleKey={t('metaTitle')}>
      <HeaderPicture img="/fukseille-passit.jpg" alt="Fuksipassit" />
      <H1>{t('techStudentHeading')}</H1>
      <LongText> {t('techStudentBody')}</LongText>
      <div className="lg:flex lg:flex-row items-center justify-center">
        {/* <img className="h-64" src={'/fukseille-date.jpg'} alt="Passi Date" />
        <img className="h-64" src={'/fukseille-digit.jpg'} alt="Passi Digit" />
        <img className="h-64" src={'/fukseille-nucleus.jpg'} alt="Passi Nucleus" />
        <img className="h-64" src={'/fukseille-kk.jpg'} alt="Passi KK" /> */}
      </div>
      <H1>{t('techStudentHeading1')}</H1>
      <ShortText>{t('techStudentBody1')}</ShortText>
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
      <H2>{t('techStudentHeading2')}</H2>
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

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['techStudent', 'common', 'nav'];

  return {
    props: {
      lang,
      namespaces,
      translations: namespaces.map(namespace => ({
        namespace,
        translatedStrings: TranslationStrings[lang] && TranslationStrings[lang][namespace],
      })),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'fi' } }, { params: { lang: 'sv' } }],
    fallback: false,
  };
}

export default withLocalization(NewStudents);
