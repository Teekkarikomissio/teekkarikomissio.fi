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
      position: t('associationTitle'),
      responsibilities: t('associationResponsibilities'),
      contact: '',
    },
    {
      img: '/casimir.jpg',
      name: 'Casimir Ruohomaa',
      position: t('associationTitle1'),
      responsibilities: t('associationResponsibilities1'),
      contact: '',
    },
    {
      img: '/robert.jpg',
      name: 'Robert Kantero',
      position: t('associationTitle2'),
      responsibilities: t('associationResponsibilities2'),
      contact: 'rkantero@abo.fi',
    },
    {
      img: '/ilona.jpg',
      name: 'Ilona Kairinen',
      position: t('associationTitle3'),
      responsibilities: t('associationResponsibilities3'),
      contact: '',
    },
    {
      img: '/merimari.jpg',
      name: 'Merimari Seppänen',
      position: t('associationTitle4'),
      responsibilities: t('associationResponsibilities4'),
      contact: '',
    },
    {
      img: '/niklas.jpg',
      name: 'Niklas Luomala',
      position: t('associationTitle5'),
      responsibilities: t('associationResponsibilities5'),
      contact: '',
    },
  ];

  const BoardCard = ({ img, name, position, responsibilities, contact }) => {
    return (
      <div className="max-w-full items-center justify-center rounded-lg shadow-xl m-8">
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center p-4">
          <img className="w-64" src={img} alt={name} />
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4 mb-4">
            <H2>{name}</H2>
            <p className="text-gray-700 text-lg my-4">{position}</p>
            <p className="text-gray-700 text-base">{t('associationOtherResponsibilities')} {responsibilities}</p>
            <p className="text-gray-700 text-lg my-4">{contact}</p>
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
        <H2>{t('associationHeading1')} {new Date().getFullYear()} {t('associationHeading2')}</H2>
        <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700 my-4" />
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 md:block">
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
