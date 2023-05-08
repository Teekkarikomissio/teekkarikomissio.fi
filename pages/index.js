import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderPicture from "../components/HeaderPicture";
import { H1, H2, ShortText } from "../components/Typography";

function Homepage() {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Teekkarikomissio",
      homeTitle: "Teekkarikomissio - Teknologkommission",
      homeImage: "/index-banner-fi.jpg",
      homeHeading: "Teekkariutta yli yliopistorajojen",
      homeHeading2: "Turun teekkareiden yhteisiä tapahtumia",
      homeHeading3: "Teekkarikulttuuria",
      homeHeading4: "Paikallista ja valtakunnallista vaikuttamista",
      homeHeading5: "Yhteistyössä:",
      homeContent:
        "Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille. TK on kaksikielinen yhdistys, ja puheenjohtajan äidinkieli on samalla Komission työkieli. Yhdistysrekisterissä TK on rekisteröity nimellä Teekkarikomissioyhdistys. Arkikäytössä tämä nimi kuitenkin olisi liian pitkä, joten yleensä puhutaan Teekkarikomissiosta tai lyhyesti ja ytimekkäästi TK:sta.",
      homeContent2:
        "Järjestämme vuoden aikana teekkariyhteisölle perinteikkäitä ja verkostoa yhdistäviä tapahtumia.",
      homeContent3:
        "Teekkarikomissio järjestää vuosittain paikalliset jäynäkilpailut, joiden kautta valitaan Turun edustaja valtakunnallisiin jäynäkilpailuihin.",
      homeContent4:
        "Edustamme turkulaista teekkariutta sekä paikallisesti, että valtakunnallisesti. Yhteisön äänitorvena otamme kantaa ja ajamme yhteisölle tärkeitä asioita.",
    },
    sv: {
      metaTitle: "Teknologkommissionen",
      homeTitle: "Teekkarikomissio - Teknologkommissionen",
      homeImage: "/index-banner-sv.jpg",
      homeHeading: "Vad är Teknologkommissionen?",
      homeHeading2: "Åboteknologernas gemensamma evenemang",
      homeHeading3: "Teknologkultur",
      homeHeading4: "Inflytande på lokal och nationell nivå",
      homeHeading5: "I samarbete:",
      homeContent:
        "Teknologkommissionen (TK) är ett sammanbindande organ för de olika teknologföreningarna i Åbo. Teknologkommissionen är en tvåspråkig förening inom vilken ordförandes modersmål samtidigt är kommissionens arbetsspråk. I föreningsregistret är TK registrerat som Teknologkommissionsföreningen. Inom dagligt bruk skulle detta namn dock vara för långt och klumpigt, så vanligtvis talar man om Teknologkommissionen, eller helt kort endast TK.",
      homeContent2:
        "Under året ordnar vi både traditionella och nätverksförenande teknologevenemang.",
      homeContent3:
        "Teknologkommissionen ordnar årligen den lokala jäynätävlingen där även Åbos representant till den nationella tävlingen väljs.",
      homeContent4:
        "Vi representerar teknologskap i Åbo både på lokal och på riksnivå. Som teknologsällskapets språkrör verkar vi för och tar ställning till för teknologer viktiga ärenden.",
    },
  };

  const textContent = translations[locale];

  const partners = [
    {
      img: "/tek-logo.png",
      alt: "TEK",
      href: "https://www.tek.fi/",
    },
    {
      img: "/logo-tfif.svg",
      alt: "TFiF",
      href: "https://tfif.fi/",
    },
  ];

  const PartnerCard = ({ img, href, alt }) => {
    return (
      <div className="flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4">
        <a href={href}>
          <img src={img} alt={alt} />
        </a>
      </div>
    );
  };

  return (
    <>
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
      <HeaderPicture img={textContent.homeImage} alt="Teekkarikomissio" />

      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <H1>{textContent.homeHeading}</H1>
          <ShortText>{textContent.homeContent}</ShortText>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row justify-between items-center">
        <img
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-1/4 lg:w-1/4 overflow-hidden"
          src="/index-teekkari.jpg"
          alt="Teekkari"
        />
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{textContent.homeHeading2}</H2>
            <ShortText>{textContent.homeContent2}</ShortText>
          </div>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row-reverse justify-between items-center">
        <img
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-1/4 lg:w-1/4 overflow-hidden"
          src="/index-jaynamerkki.jpeg"
          alt="Jäynämerkki"
        ></img>
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{textContent.homeHeading3}</H2>
            <ShortText>{textContent.homeContent3}</ShortText>
          </div>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row justify-between items-center">
        <img
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-2/5 lg:w-2/5 overflow-hidden"
          src="/paavon-lakitus.jpg"
          alt="Paavon lakitus"
        ></img>
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{textContent.homeHeading4}</H2>
            <ShortText>{textContent.homeContent4}</ShortText>
          </div>
        </div>
      </div>

      <H1>{textContent.homeHeading5}</H1>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 md:block">
        {partners.map(({ img, href, alt }) => (
          <PartnerCard key={`${href}${alt}`} img={img} href={href} alt={alt} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
