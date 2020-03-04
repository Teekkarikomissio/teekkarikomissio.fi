import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import useTranslation from '../../hooks/useTranslation';

const Kulttuuri: React.FC = () => {
  const { t } = useTranslation();

  const eventInfo = [
    {
      img: '/event-excu.jpg',
      heading: 'Tukholman excursio',
    },
    {
      img: '/event-fia.jpg',
      heading: 'TK fiacup',
    },
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
      img: '/event-sitz.jpg',
      heading: 'TK:n kiltojen väliset sitsit',
    },
    {
      img: '/event-paavo.jpg',
      heading: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/event-sommar.jpg',
      heading: 'Sommarträff',
    },
  ];

  const EventCard = ({ imgUrl = '/', heading = 'TK' }) => {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ml-4 mr-4 p-4 shadow-xl">
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
    <Layout titleKey="Kulttuuri">
      <img src="/event-header.png" alt="Wappu" className="rounded-b" />

      <div className="font-bold text-xl mb-2">{t('cultureHeading')}</div>
      <div className="md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 sm:block">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} imgUrl={img} heading={heading} />
        ))}
      </div>
    </Layout>
  );
};

export default withLocale(Kulttuuri);
