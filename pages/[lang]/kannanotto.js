import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';

const Commitment = () => {
  const { t } = useTranslation('commitment');

  return (
    <Layout titleKey={t('metaTitle')}>
      <H2>{t('commitmentHeading')}</H2>
      <br></br>
      <LongText className="max-w-prose">Sosiaalisessa mediassa on noussut viikonlopun aikana esille viime vuosien varrelta tapauksia, joissa teekkariyhteisössä on koettu häirintää, painostusta alkoholin käyttöön ja alastomuuteen sekä auktoriteettiaseman väärinkäyttöä.</LongText>
      <LongText>Teekkarikulttuuriin ei kuulu minkäänlainen häirintä, kiusaaminen tai epäasiallinen toiminta, eikä niitä tule katsoa läpi sormien. Tunnustamme kuitenkin tällaista tapahtuneen ja siksi pyydämme vilpittömästi teekkariyhteisönä anteeksi kaikilta huonon kohtelun uhreiksi joutuneilta.Teekkarikulttuurilla on vahvat ja vanhat perinteet, joista osa on hyviä ja osa huonoja. Hyvistä perinteistä pidetään kiinni, kun taas huonoja perinteitä muutetaan ja poistetaan. Teekkarikulttuuria kehitetään jatkuvasti yhdenvertaisemmaksi, avoimemmaksi ja saavutettavammaksi.</LongText>
      <LongText>Työ on kuitenkin kesken. Monia syrjiviä ja epäasiallisia perinteitä ja rakenteita on saatu jo purettua, mutta urakkaa riittää yhä. Työhön on onneksi tarjolla tukea ylioppilaskunnalta, yliopistolta sekä valtakunnallisilta järjestöiltä. Lupaamme jatkossakin yhdessä rakentaa entistä rohkeammin epäkohtiin puuttuvaa teekkarikulttuuria.</LongText>
      <LongText>Teekkariyhteisömme on valtavan laaja joukko erilaisia ihmisiä, joita yhdistää erityisesti kiinnostus tekniikkaan ja tupsulakki. Me haluamme, että jokainen yhteisön jäsen tuntee olonsa turvalliseksi ja tervetulleeksi.</LongText>
      <LongText>Over the past weekend, there has come up cases in the social media about harassment, pressure to use alcohol and nudity, and abuse of authority in the teekkari community, that have happened during the past few years.</LongText>
      <LongText>Teekkari culture does not involve any harassment, bullying or inappropriate activity and these things should not be looked through the fingers. However, we acknowledge that this has happened and therefore, as a teekkari community, we sincerely apologize to all those who have experienced any bad treatment. Good traditions are adhered to, while bad traditions are changed and removed. Teekkari culture is constantly being developed to be more equal, open and accessible.</LongText>
      <LongText>However, work is in progress. Many discriminatory and inappropriate traditions and structures have already been dismantled, but there is still enough work to be done. Fortunately, support for the work is available from the student union, the university and national organizations. We promise to continue to work together more boldly to build a teekkari culture where grievances are observed.</LongText>
      <LongText>Our teekkari community has a huge range of different people, united by a particular interest in technology and a teekkari cap. We want every member of the community to feel safe and welcome.</LongText>
      <br></br>
    </Layout>
  );  
};

export async function getStaticProps({ params: { lang } }) {
  const namespaces = ['commitment', 'common', 'nav'];

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

export default withLocalization(Commitment);
