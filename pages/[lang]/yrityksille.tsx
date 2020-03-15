import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, LongText, ListItem } from '../../components/Typography';
import useTranslation from '../../hooks/useTranslation';

const ForCompanies = () => {
  const { t } = useTranslation();

  return (
    <Layout titleKey="yrityksille">
      <HeaderPicture img="/yrityksille-paavo.jpg" alt="Paavon lakitus" />
      <H1>{t('forCompaniesHeading')}</H1>
      <LongText>{t('forCompaniesBody')} </LongText>
      <ul className="list-decimal mb-8 mx-16">
        <ListItem>Paavo Nurmen patsaan lakituksessa</ListItem>
        <ListItem>Wapputapahtumissa</ListItem>
        <ListItem>Syksyn fuksitapahtumassa</ListItem>
      </ul>
      <LongText>
        Lisäksi keskustelemme mielellämme potentiaalisista muista yhteistyömahdollisuuksista! Meihin saa yhteyttä
        laittamalla viestiä osoitteeseen:{' '}
        <a className="underline" href="mailto:teekkarikomissio@lists.utu.fi">
          teekkarikomissio@lists.utu.fi
        </a>
      </LongText>
    </Layout>
  );
};

export default withLocale(ForCompanies);
