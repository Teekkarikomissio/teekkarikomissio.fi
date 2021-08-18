import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';

const Kulttuuri = () => {
  const { t } = useTranslation('culture');

  const eventInfo = [
    {
      img: '/event-jaynastartti.jpg',
      heading: 'Paikallisten jäynäkilpailuiden starttaaminen',
    },
    {
      img: '/event-preldprowet.jpg',
      heading: 'TK:n wappuinen PREldproWET',
    },
    {
      img: '/tklogo.svg',
      heading: 'Eldprowet',
    },
    {
      img: '/event-paavo.jpg',
      heading: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/event-sommar.jpg',
      heading: 'Sommarträff',
    },
    {
      img: '/event-sitz.jpg',
      heading: 'TK:n kiltojen väliset sitsit',
    },
    {
      img: '/event-fia.jpg',
      heading: 'TK fiacup',
    },
  ];

  const EventCard = ({ imgUrl = '/', heading = 'TK' }) => {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4 shadow-xl rounded-lg">
        <div className="items-center justify-center">
          <img src={imgUrl} alt={heading} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey={t('metaTitle')}>
      <iframe
        className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16"
        src="https://www.youtube.com/embed/GB0Lkq7Om24"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Valtakunnalliset jäynäkilpailut 2018"
      ></iframe>
      <H1>{t('cultureHeading')}</H1>
      <LongText>{t('cultureBody')}</LongText>
      <LongText>{t('cultureBody1')}</LongText>
      <LongText>{t('cultureBody2')}</LongText>
      {/* <TextBox heading={'Teekkariwappu'} body={'https://www.teekkariwappu.fi/'} /> */}
      <H2>{t('cultureHeading1')}</H2>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} imgUrl={img} heading={heading} />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['culture', 'common', 'nav'];

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

export default withLocalization(Kulttuuri);
