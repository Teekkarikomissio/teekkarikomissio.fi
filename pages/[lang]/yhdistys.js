import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';

const Yhdistys = () => {
  const { t } = useTranslation('association');

  const boardMembers = [
    {
      img: '/juhani.jpg',
      name: 'Juhani Kalske',
      position: 'Pääkomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/casimir.jpg',
      name: 'Casimir Ruohomaa',
      position: 'Varapääkomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/robert.jpg',
      name: 'Robert Kantero',
      position: 'Sihteeri ja viestintäkomissaari',
      responsibilities: 'Nettisivut, kalenteriasiat',
    },
    {
      img: '/ilona.jpg',
      name: 'Ilona Kairinen',
      position: 'Talouskomissaari',
      responsibilities: 'Yritysyhteistyö',
    },
    {
      img: '/merimari.jpg',
      name: 'Merimari Seppänen',
      position: 'Tapahtumakomissaari',
      responsibilities: 'Kastajaisten suunnittelu',
    },
    {
      img: '/niklas.jpg',
      name: 'Niklas Luomala',
      position: 'Kulttuurikomissaari',
      responsibilities: 'Fuksiasiat',
    },
  ];

  const BoardCard = ({ img, name, position, responsibilities }) => {
    return (
      <div className="max-w-full items-center justify-center rounded-lg shadow-xl m-8">
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center p-4">
          <img className="w-64" src={img} alt={name} />
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4 mb-4">
            <H2>{name}</H2>
            <p className="text-gray-700 text-lg my-4">{position}</p>
            <p className="text-gray-700 text-base">Muut vastuualueet: {responsibilities}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey={t('metaTitle')}>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white flex flex-col justify-between leading-normal">
          <H1>{t('associationHeading')}</H1>
          <LongText>{t('associationContent')}</LongText>
        </div>
      </div>
      <div>
        <H2>Vuoden {new Date().getFullYear()} hallitus</H2>
        <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700 my-4" />
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
          {boardMembers.map(({ img, name, position, responsibilities }) => (
            <BoardCard key={`${name}`} img={img} name={name} position={position} responsibilities={responsibilities} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['association', 'common', 'nav'];

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

export default withLocalization(Yhdistys);
