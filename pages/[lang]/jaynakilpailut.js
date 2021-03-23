import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, H3, LongText } from '../../components/Typography';
import jaynacompetition from '../../static-translations/locales/fi/jaynacompetition';

const JaynaCompetition = () => {
  const { t } = useTranslation('jaynacompetition');

  return (
    <Layout titleKey={t('metaTitle')}>
      <H2>{t('jaynacompetitionHeading')}</H2>
      <br></br>
      <H1>{t('jaynajulistus')}</H1>
      <H3 className="max-w-prose">{t('jaynaHeading1')}</H3>
      <LongText>{t('jaynaText1')}</LongText>
      <LongText>{t('jaynaText2')}</LongText>
      <LongText>{t('jaynaText3')}</LongText>
      <H3>{t('jaynaHeading2')}</H3>
      <LongText>{t('jaynaText4')}</LongText>
      <LongText>{t('jaynaText5')}</LongText>
      <LongText>{t('jaynaText6')}</LongText>
      <H3>{t('jaynaHeading3')}</H3>
      <LongText>{t('jaynaText7')}</LongText>
      <LongText>{t('jaynaText8')}</LongText>
      <LongText>{t('jaynaText9')}</LongText>
      <LongText>{t('jaynaText10')}</LongText>
      <LongText>{t('jaynaText11')}</LongText>
      <br></br>
      <H1>{t('jaynaRules')}</H1>
      <H3>{t('jaynaRuleHeading1')}</H3>
      <LongText>{t('jaynaRuleText1')}</LongText>
      <H3>{t('jaynaRuleHeading2')}</H3>
      <LongText>{t('jaynaRuleText2')}</LongText>
      <H3>{t('jaynaRuleHeading3')}</H3>
      <LongText>{t('jaynaRuleText3')}</LongText>
      <LongText>{t('jaynaRuleText4')}</LongText>
      <H3>{t('jaynaRuleHeading4')}</H3>
      <LongText>{t('jaynaRuleText5')}</LongText>
      <H3>{t('jaynaRuleHeading5')}</H3>
      <LongText>{t('jaynaRuleText6')}</LongText>
      <LongText>{t('jaynaRuleText7')}</LongText>
      <LongText>{t('jaynaRuleText8')}</LongText>
      <H3>{t('jaynaRuleHeading6')}</H3>
      <LongText>{t('jaynaRuleText9')}</LongText>
      <H3>{t('jaynaRuleHeading7')}</H3>
      <LongText>{t('jaynaRuleText10')}</LongText>
      <LongText>{t('jaynaRuleText11')}</LongText>
      <LongText>{t('jaynaRuleText12')}</LongText>
      <H3>{t('jaynaRuleHeading8')}</H3>
      <LongText>{t('jaynaRuleText13')}</LongText>
      <H3>{t('jaynaRuleHeading9')}</H3>
      <LongText>{t('jaynaRuleText14')}</LongText>
      <H3>{t('jaynaRuleHeading10')}</H3>
      <LongText>{t('jaynaRuleText15')}</LongText>
      <H3>{t('jaynaRuleHeading11')}</H3>
      <LongText>{t('jaynaRuleText16')}</LongText>
      <LongText>{t('jaynaRuleText17')}</LongText>
      <LongText>{t('jaynaRuleText18')}</LongText>
    </Layout>
  );  
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['jaynacompetition', 'common', 'nav'];

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

export default withLocalization(JaynaCompetition);
