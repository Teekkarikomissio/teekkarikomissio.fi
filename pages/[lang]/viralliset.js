import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, H3, LongText, ListItem } from '../../components/Typography';

const OfficialDocuments = () => {
  const { t } = useTranslation('officialDocuments');

  return (
    <Layout titleKey={t('metaTitle')}>
      <H2>{t('docsHeading')}</H2>
      <br></br>
      <ul className="list-decimal mb-8 mx-16">
        <ListItem>{t('docsListItem1')}
        <a href="/rules-fi.pdf">FI</a>
        <a href="/rules-sv.pdf">SV</a>
        </ListItem>
        <ListItem>{t('docsListItem2')}
        <a href="/sub-rules-fi.pdf">FI</a>
        </ListItem>
        <ListItem>{t('docsListItem3')}
        <a href="/stragia-fi.pdf">FI</a>
        </ListItem>
      </ul>
    </Layout>
  );  
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['officialDocuments', 'common', 'nav'];

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

export default withLocalization(OfficialDocuments);