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
    <Layout titleKey="kulttuuri">
      <img className="rounded-lg mt-16 mb-8" src="/event-header.png" alt="Teekkariwappu" />
      <TextBox heading={t('cultureHeading')} body={t('cultureBody')} />
      <TextBox
        heading={'Jäynäkulttuuri'}
        body={
          'Turussa jäynistä vastaa Hermann Group, joka muodostuu Digitin ja Nucleuksen jäsenistä. Heidän jäynänsä ovat menestyneet erittäin hyvin viime vuosien jäynäkisoissa.'
        }
      />
      <div className="w-full">
        <iframe
          className="w-full min-h-iFrameHeight"
          src="https://www.youtube.com/embed/GB0Lkq7Om24"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Valtakunnalliset jäynäkilpailut 2018"
        ></iframe>
      </div>
      <TextBox heading={'Teekkariwappu'} body={'https://www.teekkariwappu.fi/'} />
      <TextBox heading={'Teekkarikomission tapahtumat'} body={''} />
      <div className="md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 sm:block">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} imgUrl={img} heading={heading} />
        ))}
      </div>
    </Layout>
  );
};

export default withLocale(Kulttuuri);
