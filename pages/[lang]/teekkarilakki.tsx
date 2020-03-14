import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import { H2, LongText, ListItem } from '../../components/Typography';
import HeaderPicture from '../../components/HeaderPicture';
import useTranslation from '../../hooks/useTranslation';

const Cap: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout titleKey="teekkarilakki">
      <HeaderPicture img="/teekkarihattu.jpg" alt="Turun teekkarilakki" />
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none flex flex-col justify-between leading-normal">
          <div className="mb-8 mx-4 p-4">
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
            <ul className="list-disc text-left ">
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

export default withLocale(Cap);
