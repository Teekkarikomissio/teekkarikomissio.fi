import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';

const Kulttuuri = () => {
  const { t } = useTranslation('culture');

  return (
    <Layout titleKey={t('metaTitle')}>
      <H1>{t('cultureHeading_neg1')}</H1>
      <LongText>{t('cultureBody_neg1')}</LongText>
      <LongText>{t('cultureBody_neg2')}</LongText>
      <H1>{t('cultureHeading_neg2')}</H1>
      <iframe
      className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6" 
      src="https://docs.google.com/forms/d/e/1FAIpQLSeVR8rR8ETs5XC7fUAeuadYzMHdDnOJ4UbD-2dV_KUkeeDKiQ/viewform?embedded=true" 
      height="1337" 
      frameborder="0"
      ></iframe>
      <H1>{t('cultureHeading')}</H1>
      <iframe
        className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://www.youtube.com/embed/GB0Lkq7Om24"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Valtakunnalliset jäynäkilpailut 2018"
      ></iframe>
      <LongText>{t('cultureBody')}</LongText>
      <LongText>{t('cultureBody1')}</LongText>
      <LongText>{t('cultureBody2')}</LongText>
      <H2>{t('cultureHeading1')}</H2>
      <LongText>{t('cultureBody3')}</LongText>
      <LongText>{t('cultureBody4')}</LongText>
      <LongText>{t('cultureBody5')}</LongText>
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
