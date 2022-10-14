import React from 'react';
import { useRouter } from 'next/router';
import { Heading, Text, Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import LandingLayout from '../components/layouts/LandingLayout';
import ChakraNextImage from '../components/ChakraNextImage';

const MetaContent = {
  fi: {
    title: 'Teekkarikomissio',
  },
  sv: {
    title: 'Teknologkommissionen',
  },
  en: {},
};

const HomeContent = {
  fi: {
    metaTitle: 'Teekkarikomissio',
    homeTitle: 'Teekkarikomissio - Teknologkommission',
    homeHeading: 'Teekkariutta yli yliopistorajojen',
    homeHeading2: 'Turun teekkareiden yhteisiä tapahtumia',
    homeHeading3: 'Teekkarikulttuuria',
    homeHeading4: 'Paikallista ja valtakunnallista vaikuttamista',
    homeHeading5: 'Yhteistyössä:',
    homeContent:
      'Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille. TK on kaksikielinen yhdistys, ja puheenjohtajan äidinkieli on samalla Komission työkieli. Yhdistysrekisterissä TK on rekisteröity nimellä Teekkarikomissioyhdistys. Arkikäytössä tämä nimi kuitenkin olisi liian pitkä, joten yleensä puhutaan Teekkarikomissiosta tai lyhyesti ja ytimekkäästi TK:sta.',
    homeContent2: 'Järjestämme vuoden aikana teekkariyhteisölle perinteikkäitä ja verkostoa yhdistäviä tapahtumia.',
    homeContent3:
      'Teekkarikomissio järjestää vuosittain paikalliset jäynäkilpailut, joiden kautta valitaan Turun edustaja valtakunnallisiin jäynäkilpailuihin.',
    homeContent4:
      'Edustamme turkulaista teekkariutta sekä paikallisesti, että valtakunnallisesti. Yhteisön äänitorvena otamme kantaa ja ajamme yhteisölle tärkeitä asioita.',
  },
  sv: {
    metaTitle: 'Teknologkommissionen',
    homeTitle: 'Teekkarikomissio - Teknologkommissionen',
    homeHeading: 'Vad är Teknologkommissionen?',
    homeHeading2: 'Åboteknologernas gemensamma evenemang',
    homeHeading3: 'Teknologkultur',
    homeHeading4: 'Inflytande på lokal och nationell nivå',
    homeHeading5: 'I samarbete:',
    homeContent:
      'Teknologkommissionen (TK) är ett sammanbindande organ för de olika teknologföreningarna i Åbo. Teknologkommissionen är en tvåspråkig förening inom vilken ordförandes modersmål samtidigt är kommissionens arbetsspråk. I föreningsregistret är TK registrerat som Teknologkommissionsföreningen. Inom dagligt bruk skulle detta namn dock vara för långt och klumpigt, så vanligtvis talar man om Teknologkommissionen, eller helt kort endast TK.',
    homeContent2: 'Under året ordnar vi både traditionella och nätverksförenande teknologevenemang.',
    homeContent3:
      'Teknologkommissionen ordnar årligen den lokala jäynätävlingen där även Åbos representant till den nationella tävlingen väljs.',
    homeContent4:
      'Vi representerar teknologskap i Åbo både på lokal och på riksnivå. Som teknologsällskapets språkrör verkar vi för och tar ställning till för teknologer viktiga ärenden.',
  },
  en: {},
};

export default function Home(props) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const content = HomeContent[locale];

  const partners = [
    {
      img: '/tek-logo.png',
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
      <div className="flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4">
        <a href={href}>
          <Image height={64} width="100%" src={img} alt={alt} />
        </a>
      </div>
    );
  };

  const outerBoxStyles = {
    width: '100%',
    height: '100vh',
    background: 'url(/home-banner.jpg) center/cover no-repeat',
  };

  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  return (
    <LandingLayout>
      <Flex sx={outerBoxStyles}>
        <Flex sx={innerBoxStyles} backdropFilter="auto" backdropBlur="2px">
          <Heading>{content.homeTitle}</Heading>
        </Flex>
      </Flex>
      <Heading>{content.homeHeading}</Heading>
      <Heading>{content.homeHeading2}</Heading>
      <Heading> {content.homeHeading3}</Heading>
      <Heading> {content.homeHeading4}</Heading>
      <Heading> {content.homeHeading5}</Heading>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 md:block">
        {partners.map(({ img, href, alt }) => (
          <PartnerCard key={`${href}${alt}`} img={img} href={href} alt={alt} />
        ))}
      </div>
    </LandingLayout>
  );
}
