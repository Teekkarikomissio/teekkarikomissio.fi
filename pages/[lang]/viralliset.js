import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, H2, H3, LongText, ListItem, ShortText } from '../../components/Typography';

const OfficialDocuments = () => {
  const { t } = useTranslation('officialDocuments');

  return (
    <Layout titleKey={t('metaTitle')}>
      <HeaderPicture img={t('docsImage')} alt="TK" />
      <H2>{t('docsHeading')}</H2>
      <br></br>
      <ul className="list-disc mb-12 mx-16">
        <ListItem>
          {t('docsListItem1')}
          {' '}
          <a className="underline" href="/rules-fi.pdf">FI</a>
          {' '}
          <a className="underline" href="/rules-sv.pdf">SV</a>
        </ListItem>
        <ListItem>
          {t('docsListItem2')}
          {' '}
          <a className="underline" href="/sub-rules-fi.pdf">FI</a>
        </ListItem>
        <ListItem>
          {t('docsListItem3')}
          {' '}
          <a className="underline" href="/strategia-fi.pdf">FI</a>
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