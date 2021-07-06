import React, { useEffect } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import getInitialLocale from '../static-translations/getInitialLocale';

function Index(props) {
  const { asPath } = useRouter();
  
  useEffect(() => {
    Router.push(`/${getInitialLocale()}${asPath}`);
  }, [asPath]);

  return (
    <Head>
      <meta
        name="description"
        content="Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille."
      />
      <meta
        name="keywords"
        content="teekkarikomissio, komissio, teknologkommissionen, kommissionen, teekkari, turku, tekniikka, opiskelu, yliopisto, tietotekniikka, biotekniikka, materiaalitekniikka, konetekniikka, fuksi, paavo, nurmi, vappu, wappu, lakitus, teekkariutta, turkulaista, TK, tk, teekkarikulttuuri, jäynäkulttuuri, teekkarilakki, yhdistys, fukseille, kulttuuri, yrityksille, fuksipassi, lakinkäyttöoikeus, käyttöoikeus, pysyväisohjesääntö, eldprowet, jäynäkilpailu"
      />
    </Head>
  );
};

export default Index;
