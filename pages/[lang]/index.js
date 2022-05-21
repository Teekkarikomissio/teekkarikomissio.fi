import React from 'react';
import Image from 'next/image';

import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';
import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, H2, ShortText } from '../../components/Typography';
import Hero from '../../components/Hero';

function Homepage() {
  const { t } = useTranslation('home');

  const partners = [
    {
      img: '/logo-tek.png',
      alt: 'TEK',
      href: 'https://www.tek.fi/',
    },
    {
      img: '/logo-tfif.svg',
      alt: 'TFiF',
      href: 'https://tfif.fi/',
    },
  ];

  const PartnerCard = ({ img, href, alt }) => {
    return (
      <div className="flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4">
        <a href={href}>
          <Image src={img} alt={alt} layout="fill" />
        </a>
      </div>
    );
  };

  return (
    <Layout titleKey={t('metaTitle')}>
      <Hero metaTitle={t('metaTitle')} homeHeading={t('homeHeading')} homeContent={t('homeContent')} />

      <div className="relative my-16 lg:flex lg:flex-row-reverse justify-between items-center">
        <div className="relative h-64 w-48 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <Image className="rounded-lg" src="/index-teekkari.jpg" alt="Teekkari" layout="fill" />
        </div>
        <div className="relative rounded-lg bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{t('homeHeading2')}</H2>
            <ShortText>{t('homeContent2')}</ShortText>
          </div>
        </div>
      </div>

      <div className="my-16 justify-between items-center">
        <div className="relative rounded-full h-48 w-48 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <Image
            className='rounded-full'
            src="/index-jaynamerkki.jpeg"
            alt="Jäynämerkki"
            layout="fill"
          />
        </div>
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{t('homeHeading3')}</H2>
            <ShortText>{t('homeContent3')}</ShortText>
          </div>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row justify-between items-center">
        <Image
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-2/5 lg:w-2/5 overflow-hidden"
          src="/paavon-lakitus.jpg"
          alt="Paavon lakitus"
          width={600}
          height={400}
        />
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{t('homeHeading4')}</H2>
            <ShortText>{t('homeContent4')}</ShortText>
          </div>
        </div>
      </div>

      <H1>{t('homeHeading5')}</H1>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 md:block">
        {partners.map(({ img, href, alt }) => (
          <PartnerCard key={`${href}${alt}`} img={img} href={href} alt={alt} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['home', 'common', 'nav'];

  return {
    props: {
      lang,
      namespaces,
      translations: namespaces.map((namespace) => ({
        namespace,
        translatedStrings:
          TranslationStrings[lang] && TranslationStrings[lang][namespace],
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

export default withLocalization(Homepage);
