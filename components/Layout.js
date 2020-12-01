import React from 'react';
import Head from 'next/head';

import Navigation from './Navigation';
import Footer from './footer';

const Layout = ({ titleKey, children }) => {
  return (
    <div className="flex flex-col text-center">
      <Head>
        <title>{titleKey}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille."
        />
        <meta
          name="keywords"
          content="teekkarikomissio, komissio, teknologkommissionen, kommissionen, teekkari, turku, tekniikka, opiskelu, yliopisto, tietotekniikka, biotekniikka, materiaalitekniikka, konetekniikka, fuksi, paavo, nurmi, vappu, wappu, lakitus, teekkariutta, turkulaista, TK, tk, teekkarikulttuuri, jäynäkulttuuri, teekkarilakki, yhdistys, fukseille, kulttuuri, yrityksille, fuksipassi, lakinkäyttöoikeus, käyttöoikeus, pysyväisohjesääntö, eldprowet, jäynäkilpailu"
        />
        <meta name="author" content="Teekkarikomissio - Teknologkommissionen" />
        <meta property="og:image" content="/index-banner.jpg" />
        <link rel="shortcut icon" sizes="32x32" href="/tklogo.svg" />
      </Head>
      <Navigation />
      <div className="flex-expand flex flex-col items-center max-h-full">
        <div className="container mx-auto max-w-prose max-h-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
