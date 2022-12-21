import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';

const Tapahtumat = () => {
  const { t } = useTranslation('events');

  const eventInfo = [
    {
      img: '/event-jaynastartti.jpg',
      heading: t('eventEvent'),
    },
    {
      img: '/event-preldprowet.jpg',
      heading: t('eventEvent1'),
    },
    {
      img: '/tklogo.svg',
      heading: t('eventEvent2'),
    },
    {
      img: '/event-paavo.jpg',
      heading: t('eventEvent3'),
    },
    {
      img: '/event-sommar.jpg',
      heading: t('eventEvent4'),
    },
    {
      img: '/event-sitz.jpg',
      heading: t('eventEvent5'),
    },
    {
      img: '/event-fia.jpg',
      heading: t('eventEvent6'),
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
      
      <H2>{t('eventHeading')}</H2>
      <div className='flex h-screen my-6'>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=uvuvvg8nh8dt26778tef67u0h8%40group.calendar.google.com&ctz=Europe%2FHelsinki" 
          style={{ flex: 1 }} 
          frameBorder="0" 
          scrolling="no" />
      </div>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} imgUrl={img} heading={heading} />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['events', 'common', 'nav'];

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

export default withLocalization(Tapahtumat);
