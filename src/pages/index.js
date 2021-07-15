// import React, { useEffect } from 'react';
// import Head from 'next/head';
// import Router, { useRouter } from 'next/router';
// // import getInitialLocale from '../static-translations/getInitialLocale';

// function Index(props) {
//   const router = useRouter();
//   const { locale, locales, defaultLocale } = router;

//   return (
//     <Head>
//       <meta
//         name="description"
//         content="Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille."
//       />
//       <meta
//         name="keywords"
//         content="teekkarikomissio, komissio, teknologkommissionen, kommissionen, teekkari, turku, tekniikka, opiskelu, yliopisto, tietotekniikka, biotekniikka, materiaalitekniikka, konetekniikka, fuksi, paavo, nurmi, vappu, wappu, lakitus, teekkariutta, turkulaista, TK, tk, teekkarikulttuuri, jäynäkulttuuri, teekkarilakki, yhdistys, fukseille, kulttuuri, yrityksille, fuksipassi, lakinkäyttöoikeus, käyttöoikeus, pysyväisohjesääntö, eldprowet, jäynäkilpailu"
//       />
//     </Head>
//   );
// }

// export default Index;

import React from 'react';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner/Banner';
import { Footer } from '../components/Footer/Footer';

import HomeStyles from '../styles/Home.module.scss';

export const Img = ({ className = '', ...props }) => (
  <div className="unset-img full-bleed">
    <Image className={`${className} custom-img`} layout="fill" {...props} />
  </div>
);

export default function Homepage(props) {
  const { homePageContent } = props;

  const partners = [
    {
      img: '/logo-tek.png',
      alt: 'TEK',
      href: 'https://www.tek.fi/',
    },
    {
      img: '/logo-tfif.svg',
      alt: 'TFiF',
      href: 'https://tfif.fi/',
    },
  ];

  const PartnerCard = ({ img, href, alt }) => {
    return (
      <a href={href}>
        <img src={img} alt={alt} />
      </a>
    );
  };

  return (
    <>
      <Navigation />
      <Banner />
      <div className={HomeStyles['grid--wrapper']}>
        <div className={HomeStyles['intro']}>
          <Markdown>{homePageContent.fields.intro}</Markdown>
        </div>
        <div className={HomeStyles['events']}>
          <img src="/index-teekkari.png" alt="Teekkari" />
          <Markdown>{homePageContent.fields.events}</Markdown>
        </div>
        <div className={HomeStyles['events']}>
          <Markdown>{homePageContent.fields.culture}</Markdown>
          <img src="/index-jaynamerkki.png" alt="Jäynämerkki"></img>
        </div>
        <div className={HomeStyles['events']}>
          <img src="/paavon-lakitus.jpg" alt="Paavon lakitus"></img>
          <Markdown>{homePageContent.fields.influencing}</Markdown>
        </div>
        <div className={HomeStyles['events']}>
          <Markdown>{homePageContent.fields.collaboration}</Markdown>
        </div>
      </div>
      <div className={HomeStyles['partners']}>
        {partners.map(({ img, href, alt }) => (
          <PartnerCard key={`${href}${alt}`} img={img} href={href} alt={alt} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/bhnx2gxvmzaa/environments/master/entries/1hNDC9PObV6TydgWGyPUMo?access_token=bGonsARJb1zRfGF1Ly3BH7EUaBhjjrhd50PV7qRTtlA&locale=${locale}`
  );
  const homePageContent = await res.json();

  if (homePageContent.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      homePageContent,
    },
  };
}
