import React from 'react';
import TranslationStrings from '../../static-translations/locales';
import withLocalization from '../../hocs/withLocalization';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import { H1, LongText } from '../../components/Typography';

const Commitment = () => {
  const { t } = useTranslation('commitment');

  return (
    <Layout titleKey={t('metaTitle')}>
      <H1>{t('commitmentHeading')}</H1>
      <br></br>
      <LongText className="max-w-prose">Sosiaalisessa mediassa on noussut viikonlopun aikana esille viime vuosien varrelta tapauksia, joissa teekkariyhteisössä on koettu häirintää, painostusta alkoholin käyttöön ja alastomuuteen sekä auktoriteettiaseman väärinkäyttöä.
      </LongText>
      <LongText>Teekkarikulttuuriin ei kuulu minkäänlainen häirintä, kiusaaminen tai epäasiallinen toiminta, eikä niitä tule katsoa läpi sormien. Teekkarikulttuurilla on vahvat ja vanhat perinteet, joista osa on hyviä ja osa huonoja. Hyvistä perinteistä pidetään kiinni, kun taas huonoja perinteitä muutetaan ja poistetaan. Teekkarikulttuuria kehitetään jatkuvasti yhdenvertaisemmaksi, avoimemmaksi ja saavutettavammaksi. 
      </LongText>
      <LongText>Työ on kuitenkin kesken. Monia syrjiviä ja epäasiallisia perinteitä ja rakenteita on saatu jo purettua, mutta urakkaa riittää yhä. Työhön on onneksi tarjolla tukea ylioppilaskunnalta, yliopistolta sekä valtakunnallisilta järjestöiltä. Lupaamme jatkossakin yhdessä rakentaa entistä rohkeammin epäkohtiin puuttuvaa teekkarikulttuuria.
      </LongText>
      <LongText>Teekkariyhteisömme on valtavan laaja joukko erilaisia ihmisiä, joita yhdistää erityisesti kiinnostus tekniikkaan ja tupsulakki. Me haluamme, että jokainen yhteisön jäsen tuntee olonsa turvalliseksi ja tervetulleeksi.
      </LongText>
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
