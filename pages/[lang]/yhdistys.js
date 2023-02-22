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
      img: '/Matti 2023.JPG',
      name: 'Matti Loimaranta',
      position: t('associationTitle'),
      responsibilities: t('associationResponsibilities1'),
      contact: 'E-mail: makalo@utu.fi',
      contact2: 'TG: @MattiLoimaranta',
    },
    {
      img: '/Niklas S 2023.jpg',
      name: 'Niklas Sjöqvist',
      position: t('associationTitle1'),
      responsibilities: t('associationResponsibilities1'),
      contact: 'E-mail: niklas.sjoqvist@abo.fi',
      contact2: 'TG: @sjoklas',
    },
    {
      img: '/Niklas L 2023.JPG',
      name: 'Niklas Lind',
      position: t('associationTitle2'),
      responsibilities: t('associationResponsibilities7'),
      contact: 'E-mail: nielin@utu.fi',
      contact2: 'TG: @jondejarvinen',
    },
    {
      img: '/Juho 2023.JPG',
      name: 'Juho Ollila',
      position: t('associationTitle3'),
      responsibilities: t('associationResponsibilities7'),
      contact: 'E-mail: jtolli@utu.fi',
      contact2: 'TG: @juhollila',
    },
    {
      img: '/Mikko 2023.JPG',
      name: 'Mikko Lehtosalo',
      position: t('associationTitle4'),
      responsibilities: t('associationResponsibilities3'),
      contact: 'E-mail: moleht@utu.fi',
      //contact2: 'TG: @',
    },
    {
      img: '/Reetta 2023.JPG',
      name: 'Reetta Lindberg',
      position: t('associationTitle5'),
      responsibilities: t('associationResponsibilities5'),
      contact: 'E-mail: resoli@utu.fi',
      contact2: 'TG: @reettalindberg',
    },
    {
      img: '/Einar 2023.JPG',
      name: 'Einar Helkkula',
      position: t('associationTitle6'),
      responsibilities: t('associationResponsibilities8'),
      contact: 'E-mail: einar.helkkula@abo.fi',
      contact2: 'TG: @EinarEinarEinar',
    },
    {
      img: '/Max 2023.JPG',
      name: 'Max Andersson',
      position: t('associationTitle7'),
      responsibilities: t('associationResponsibilities7'),
      contact: 'E-mail: maxander@abo.fi',
      contact2: 'TG: @maxintili',
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
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
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
