import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import HeaderPicture from "../components/HeaderPicture";
import { H2 } from "../components/Typography";

const NewStudents = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Fukseille",
      techStudentHeading: "Fuksipassit",
      techStudentBody:
        "Uusien opiskelijoiden orientointiin kuuluu keskeisenä osana fuksipassit. Näiden passien sivuilta löytyy jokaisen uuden opiskelijan lista siitä, mitä kaikkea yhteisömme toimintaan kuuluu. Passien tehtävät vaihtelevat killoittain mutta pääosin niiden tarkoitus on perehdyttää toimintaan ja kannustaa osallistumaan tapahtumiin ja tilaisuuksiin, joita järjestetään vuoden mittaan. Passin suoritettuaan fuksista tulee teekkari, joka saa lakkinsa vapun aattona.",
      techStudentHeading1: "Jäsenyhdistykset",
      techStudentBody1:
        "Teekkarikomissiolla on kuusi jäsentä - Turussa toimivat teekkariyhdistykset. Jokainen Digit ry:n, Nucleus ry:n, Adamas ry:n, Machina ry:n, Datateknologerna vid Åbo Akademi rf:n tai Kemistklubben vid Åbo Akademi rf:n äänioikeutettu jäsen on siis automaagisesti oikeutettu osallistumaan TK:n toimintaan!",
      techStudentHeading2: "Alumnikerhot",
      techStudentInfo: "Tietotekniikka",
      techStudentInfo1: "Tieto- ja viestintätekniikka",
      techStudentInfo2: "Kemian- ja prosessitekniikka",
      techStudentInfo3: "Biotekniikka ja elintarvikekehitys",
      techStudentInfo4: "Materiaalitekniikka",
      techStudentInfo5: "Konetekniikka",
      techStudentInfo6:
        "Turun DI-kerhon tarkoituksena on toimia TEKin alueellisten jäsenten yhdyssiteenä.",
      techStudentInfo7:
        "0-kerho on Digit ry:n alumnikerho, jonka tarkoitus on toimia linkkinä uusien ja vanhojen opiskelijoiden välillä.",
      techStudentInfo8: "Lounais-Suomen tekniikan akateemiset naiset",
    },
    sv: {
      metaTitle: "Gulis",
      techStudentHeading: "Guliskort",
      techStudentBody:
        "En väsentlig del av orienteringen för de nya studerandena är guliskort. Varje ny studerande får sitt eget guliskort där man hittar en lista över det som hör till vår teknologverksamhet. Uppgifterna i guliskorten varierar från ämnesförening till ämnesförening, men huvudsaken är att göra de nya studerandena insatta i verksamheten och uppmuntra dem att delta i evenemang och aktiviteter som ordnas under året. Efter att ha fyllt i sitt kort blir gulnäbben en teknolog och får sin teknologmössa på valborgsafton.",
      techStudentHeading1: "Medlemsföreningar",
      techStudentBody1:
        "Teknologkommissionen har sex medlemmar, nämligen de teknologföreningar som har sin verksamhet i Åbo. Varje röstberättigad medlem av Digit ry, Nucleus ry, Adamas ry, Machina ry, Datateknologerna vid Åbo Akademi rf och Kemistklubben vid Åbo Akademi rf är alltså automatiskt berättigad att delta i TK:s verksamhet!",
      techStudentHeading2: "Alumnföreningar",
      techStudentInfo: "Datateknik",
      techStudentInfo1: "Data- och kommunikationsteknik",
      techStudentInfo2: "Kemi- och processteknik",
      techStudentInfo3: "Bioteknik och livsmedelsutveckling",
      techStudentInfo4: "Materialteknik",
      techStudentInfo5: "Maskinteknik",
      techStudentInfo6:
        "Turun DI-kerho har till syfte att fungera som ett band mellan TEK:s medlemmar i området.",
      techStudentInfo7:
        "0-kerho är Digit ry:s alumniförening och har som ändamål att fungera som en länk mellan nya och gamla studerande.",
      techStudentInfo8: "Akademiska kvinnor inom tekniken i Egentliga Finland",
    },
  };

  const textContent = translations[locale];

  const guildInfo = [
    {
      img: "/Albin_alt.png",
      href: "https://datateknologerna.org/",
      heading: "Datateknologerna vid Åbo Akademi rf",
      description: textContent.techStudentInfo,
      founded: "est. 1999",
    },
    {
      img: "/logo-digit.png",
      href: "https://digit.fi/",
      heading: "Digit ry",
      description: textContent.techStudentInfo1,
      founded: "est. 1999",
    },
    {
      img: "/logo-kk.png",
      href: "https://kemistklubben.org/",
      heading: "Kemistklubben vid Åbo Akademi rf",
      description: textContent.techStudentInfo2,
      founded: "est. 1923",
    },
    {
      img: "/logo-nucleus.png",
      href: "https://nucleus.fi/",
      heading: "Nucleus ry",
      description: textContent.techStudentInfo3,
      founded: "est. 2008",
    },
    {
      img: "/logo-adamas.png",
      href: "https://adamas.fi/",
      heading: "Adamas ry",
      description: textContent.techStudentInfo4,
      founded: "est. 2020",
    },
    {
      img: "/logo-machina.png",
      href: "https://machina.fi",
      heading: "Machina ry",
      description: textContent.techStudentInfo5,
      founded: "est. 2020",
    },
  ];

  const alumniInfo = [
    {
      img: "/logo-dikerho.jpg",
      href: "https://turkudi.tek.fi/",
      heading: "Turun DI-kerho",
      description: textContent.techStudentInfo6,
      founded: "est. 1933",
    },
    {
      img: "/logo-nollakerho.png",
      href: "https://digit.fi/alumneille",
      heading: "0-kerho",
      description: textContent.techStudentInfo7,
      founded: "",
    },
    {
      img: "/logo-aboatek.png",
      href: "https://aboatekblog.wordpress.com/",
      heading: "AboaTEK",
      description: textContent.techStudentInfo8,
      founded: "",
    },
  ];

  const GuildCard = ({ img, href, heading, description, founded }) => {
    return (
      <div className="card w-64 bg-base-100 shadow-xl m-2 p-2">
        <div className="px-5 pt-5">
          <Image
            src={img}
            alt={heading}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{heading}</h2>
          <p>{founded}</p>
          <p>{description}</p>
          <Link className="link" href={href}>
            {href}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="prose">
        <h1>{textContent.techStudentHeading}</h1>
        <p>{textContent.techStudentBody}</p>
        <HeaderPicture img="/fukseille-passit.jpg" alt="Fuksipassit" />
        <h1>{textContent.techStudentHeading1}</h1>
        <p>{textContent.techStudentBody1}</p>
      </div>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 md:block items-center text-center">
        {guildInfo.map(({ img, href, heading, description, founded }) => (
          <GuildCard
            key={`${href}${heading}`}
            img={img}
            href={href}
            heading={heading}
            description={description}
            founded={founded}
          />
        ))}
      </div>
      <H2>{textContent.techStudentHeading2}</H2>
      <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700" />
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 md:block items-center text-center">
        {alumniInfo.map(({ img, href, heading, description, founded }) => (
          <GuildCard
            key={`${href}${heading}`}
            img={img}
            href={href}
            heading={heading}
            description={description}
            founded={founded}
          />
        ))}
      </div>
    </>
  );
};

export default NewStudents;
