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
      name: 'Robert Kantero',
      position: t('associationTitle'),
      responsibilities: t('associationResponsibilities'),
      contact: 'E-mail: rkantero@abo.fi',
      contact2: 'TG: @rkantero',
    },
    {
      img: '/juhani.jpg',
      name: 'Maksim Laitinen',
      position: t('associationTitle1'),
      responsibilities: t('associationResponsibilities1'),
      contact: 'E-mail: maeela@utu.fi',
      contact2: 'TG: @maksim_sala_bim',
    },
    {
      img: '/juhani.jpg',
      name: 'Jonatan Järvinen',
      position: t('associationTitle2'),
      responsibilities: t('associationResponsibilities2'),
      contact: 'E-mail: joojar@utu.fi',
      contact2: 'TG: @jondejarvinen',
    },
    {
      img: '/juhani.jpg',
      name: 'Alex Nygård',
      position: t('associationTitle3'),
      responsibilities: t('associationResponsibilities3'),
      contact: 'E-mail: alex.nygard@abo.fi',
      contact2: 'TG: @TBA',
    },
    {
      img: '/juhani.jpg',
      name: 'Julia Pyysalo',
      position: t('associationTitle4'),
      responsibilities: t('associationResponsibilities4'),
      contact: 'E-mail: japyys@utu.fi',
      contact2: 'TG: @juliapyysalo',
    },
    {
      img: '/juhani.jpg',
      name: 'Matti Loimaranta',
      position: t('associationTitle5'),
      responsibilities: t('associationResponsibilities5'),
      contact: 'E-mail: makalo@utu.fi',
      contact2: 'TG: @MattiLoimaranta',
    },
    {
      img: '/juhani.jpg',
      name: 'Niklas Sjöqvist',
      position: t('associationTitle6'),
      responsibilities: t('associationResponsibilities6'),
      contact: 'E-mail: niklas.sjoqvist@abo.fi',
      contact2: 'TG: @sjoklas',
    },
    {
      img: '/juhani.jpg',
      name: 'Niklas Lind',
      position: t('associationTitle7'),
      responsibilities: t('associationResponsibilities7'),
      contact: 'E-mail: nielin@utu.fi',
      contact2: 'TG: @Niklaslind',
    },
  ];

  const BoardCard = ({ img, name, position, responsibilities, contact, contact2 }) => {
    return (
      <div className="max-w-full items-center justify-center rounded-lg shadow-xl m-8">
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center p-4">
          <img className="w-64" src={img} alt={name} />
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4 mb-4">
            <H2>{name}</H2>
            <p className="text-gray-700 text-lg my-4">{position}</p>
            <p className="text-gray-700 text-lg my-4">{t('associationOtherResponsibilities')} {responsibilities}</p>
            <p className="text-gray-700 text-base">{contact}</p>
            <p className="text-gray-700 text-base">{contact2}</p>
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
          {boardMembers.map(({ img, name, position, responsibilities, contact, contact2}) => (
            <BoardCard key={`${name}`} img={img} name={name} position={position} responsibilities={responsibilities} contact={contact} contact2={contact2}/>
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
