import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { H2, H3 } from "../components/Typography";

const Yhdistys = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Yhdistys",
      associationHeading: "Mitä TK oikeastaan tekee?",
      associationContent:
        "Teekkarikomissio hoitaa jäsenyhdistyksilleen yhteisiä asioita, edustaa Turun teekkareita ylioppilaskunta-tasolla ja vastaa heidän korkeakoulupoliittisista kannanotoista. Lisäksi Komissio on tärkeä yhdyskanava Turussa toimiville teekkariyhdistyksille. Käytännössä Teekkarikomission järjestämään toimintaan kuuluu hallituksen ja yhdistyksen kokouksia, edustusmatkoja sekä enemmän tai vähemmän säännöllisiä tapahtumia.",
      associationHeading1: "Vuoden",
      associationHeading2: "hallitus",
      associationOtherResponsibilities: "Muut vastuualueet:",
      associationTitle: "Pääkomissaari",
      associationTitle1: "Varapääkomissaari",
      associationTitle2: "Sihteeri",
      associationTitle3: "Talouskomissaari",
      associationTitle4: "Tapahtumakomissaari",
      associationTitle5: "Kulttuurikomissaari",
      associationTitle6: "Viestintäkomissaari",
      associationTitle7: "Ulkoasiainkomissaari",
      associationTitle8: "Järjestökomissaari",
      associationResponsibilities: "Paavo Nurmen patsaan lakitus ja nettisivut",
      associationResponsibilities1: "Paavo Nurmen patsaan lakitus",
      associationResponsibilities2: "Kalenteriasiat",
      associationResponsibilities3: "Yhdenvertaisuuskomissaari",
      associationResponsibilities4: "Kalenteriasiat",
      associationResponsibilities5: "Fuksiasiat",
      associationResponsibilities6: "N/A",
      associationResponsibilities7: "N/A",
      associationResponsibilities8: "Nettisivut",
    },
    sv: {
      metaTitle: "Föreningen",
      associationHeading: "Vad gör TK egentligen?",
      associationContent:
        "Teknologkommissionen sköter om gemensamma ärenden för medlemsföreningarna, representerar Åbos teknologer på studentkårs nivå samt svarar för deras högskolepolitiska ställningstaganden. Dessutom är Kommissionen en viktig förbindelsekanal mellan de teknologföreningar som är verksamma inom Åbo. I praktiken hör styrelsens samt föreningens möten, representationsresor samt mer eller mindre regelbundna evenemang till Teknologkommissionens verksamhet.",
      associationHeading1: "År",
      associationHeading2: "styrelse",
      associationOtherResponsibilities: "Övriga ansvar:",
      associationTitle: "Huvudkommissarie",
      associationTitle1: "Vice huvudkommissarie",
      associationTitle2: "Sekreterare",
      associationTitle3: "Ekonomiekommissarie",
      associationTitle4: "Evenemangskommissarie",
      associationTitle5: "Kulturkommissarie",
      associationTitle6: "Kommunikationskommissarie",
      associationTitle7: "Utrikeskommissarie",
      associationTitle8: "Föreningkommissarie",
      associationResponsibilities:
        "Paavo Nurmi-statyns mösspåläggning och webbsidan",
      associationResponsibilities1: "Paavo Nurmi-statyns mösspåläggning",
      associationResponsibilities2: "Kalenderärenden",
      associationResponsibilities3: "Jämställdhetskommissarie",
      associationResponsibilities4: "Kalenderärenden",
      associationResponsibilities5: "Gulisärenden",
      associationResponsibilities6: "N/A",
      associationResponsibilities7: "N/A",
      associationResponsibilities8: "Webbsida",
    },
  };

  const textContent = translations[locale];

  const boardMembers = [
    {
      img: "/tklogo.svg",
      name: "Reetta Lindberg",
      position: textContent.associationTitle,
      responsibilities: textContent.associationResponsibilities1,
      contact: "E-mail: resoli@utu.fi",
      contact2: "TG: @reettalindberg",
    },
    {
      img: "/tklogo.svg",
      name: "Risto Ruohola",
      position: textContent.associationTitle1,
      responsibilities: textContent.associationResponsibilities1,
      contact: "E-mail: risto.ruohola@abo.fi",
      contact2: "TG: @ristoruohola",
    },
    {
      img: "/tklogo.svg",
      name: "Ellen Ekblom",
      position: textContent.associationTitle6,
      responsibilities: textContent.associationResponsibilities3,
      contact: "E-mail: eaekbl@utu.fi",
      contact2: "TG: @ellenekblom",
    },
    {
      img: "/tklogo.svg",
      name: "Tiitus Hannula",
      position: textContent.associationTitle7,
      //responsibilities: textContent.associationResponsibilities7,
      contact: "E-mail: tiitus.k.hannula@utu.fi",
      contact2: "TG: @tiitush",
    },
    {
      img: "/tklogo.svg",
      name: "Arttu Jokinen",
      position: textContent.associationTitle3,
      //responsibilities: textContent.associationResponsibilities3,
      contact: "E-mail: aijoki@utu.fi",
      contact2: 'TG: @ArttuJokinen',
    },
    {
      img: "/tklogo.svg",
      name: "Jani Norrby",
      position: textContent.associationTitle8,
      //responsibilities: textContent.associationResponsibilities5,
      contact: "E-mail: jtnorr@utu.fi",
      contact2: "TG: @jani_norppa",
    },
    {
      img: "/tklogo.svg",
      name: "Roosa Varjonen",
      position: textContent.associationTitle5,
      //responsibilities: textContent.associationResponsibilities7,
      contact: "E-mail: rosova@utu.fi",
      contact2: "TG: @rroskaa",
    },
    {
      img: "/tklogo.svg",
      name: "Mikko Lehtosalo",
      position: textContent.associationTitle4,
      //responsibilities: textContent.associationResponsibilities7,
      contact: "E-mail: moleht@utu.fi",
      contact2: "TG: @mleht0",
    },
    {
      img: "/tklogo.svg",
      name: "Kristoffer Lindholm",
      position: textContent.associationTitle2,
      //responsibilities: textContent.associationResponsibilities7,
      contact: "E-mail: kristoffer.lindholm@abo.fi",
      //contact2: "TG: @mleht0",
    },
    {
      img: "/tklogo.svg",
      name: "Marianne Matinvuori",
      position: textContent.associationTitle4,
      //responsibilities: textContent.associationResponsibilities7,
      contact: "E-mail: heidi.matinvuori@abo.fi",
      contact2: "TG: @Nannenen",
    },
  ];

  const BoardCard = ({
    img,
    name,
    position,
    responsibilities,
    contact,
    contact2,
  }) => {
    return (
      <div className="max-w-full items-center justify-center rounded-lg shadow-xl m-3">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="avatar">
            <div className="w-64 mask mask-squircle">
              <Image src={img} alt={name} fill />
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4 mb-4">
            <H3>{name}</H3>
            <p className="text-gray-700 text-lg my-4">{position}</p>
            <p className="text-gray-700 text-lg my-4">
              {textContent.associationOtherResponsibilities} {responsibilities}
            </p>
            <p className="text-gray-700 text-base">{contact}</p>
            <p className="text-gray-700 text-base">{contact2}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <article className="prose">
        <h1>{textContent.associationHeading}</h1>
        <p>{textContent.associationContent}</p>
      </article>
      <div>
        <H2>
          {textContent.associationHeading1} {new Date().getFullYear()}{" "}
          {textContent.associationHeading2}
        </H2>
        <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700 my-4" />
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5 md:block">
          {boardMembers.map(
            ({ img, name, position, responsibilities, contact, contact2 }) => (
              <BoardCard
                key={`${name}`}
                img={img}
                name={name}
                position={position}
                responsibilities={responsibilities}
                contact={contact}
                contact2={contact2}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Yhdistys;
