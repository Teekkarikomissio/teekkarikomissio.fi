import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H2, LongText, ListItem } from '../../components/Typography';
import HeaderPicture from '../../components/HeaderPicture';

const Cap = () => {
  const { t } = useTranslation('cap');

  return (
    <Layout titleKey={t('metaTitle')}>
      <HeaderPicture img="/teekkarihattu.jpg" alt="Turun teekkarilakki" />
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{t('capHeadingOne')}</H2>
            <LongText>{t('capBodyOne')}</LongText>
            <H2>{t('capHeadingTwo')}</H2>
            <LongText>{t('capBodyTwo')}</LongText>
            <H2>{t('capHeadingThree')}</H2>
            <LongText>{t('capBodyThree')}</LongText>
            <H2>{t('capHeadingFour')}</H2>
            <LongText>{t('capBodyFour')}</LongText>
            <H2>{t('capHeadingFive')}</H2>
            <LongText>{t('capBodyFive')}</LongText>
            <ul className="list-disc text-justify mx-16">
              <ListItem>
                Lippuairueessa toimiville ja kulkueissa, joissa kaikille kuuluu asusteeksi teekkari- tai ylioppilaslakki
              </ListItem>
              <ListItem>Virallinen Wappulehden myyntitapahtuma</ListItem>
              <ListItem>Valtakunnallinen jäynäkilpailu</ListItem>
              <ListItem>Tietoteekkarien taistot</ListItem>
              <ListItem>RekomBIOnaatio</ListItem>
              <ListItem>ATK-YTP</ListItem>
              <ListItem>Lukioesittelyt</ListItem>
              <ListItem>Kuoro - ja orkesteriesiintymiset, joihin kaikille kuuluu asusteena ylioppilaslakki</ListItem>
              <ListItem>TEKin tapahtumat, joissa asusteeseen kuuluu teekkarilakki</ListItem>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['cap', 'common', 'nav'];

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

export default withLocalization(Cap);
