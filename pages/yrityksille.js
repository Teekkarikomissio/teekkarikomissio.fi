import React from "react";
import { useRouter } from "next/router";

import HeaderPicture from "../components/HeaderPicture";
import { H1, LongText, ListItem } from "../components/Typography";

const ForCompanies = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Yrityksille",
      forCompaniesHeading: "Yrityksille",
      forCompaniesBody: `Teekkarikomission jäseniä ovat kaikkien jäsenyhdistysten jäsenet. Kauttamme yrityksesi voi tavoittaa opiskelijoita ja työssäkäyviä teekkareita sekä muodostaa positiivisen vaikutelman verkostomme jäsenille. Teemme mielellämme yhteistyötä esimerkiksi tapahtumanäkyvyyden muodossa mm. seuraavissa tapahtumissa:`,
      forCompaniesBody1:
        "Lisäksi keskustelemme mielellämme potentiaalisista muista yhteistyömahdollisuuksista! Meihin saa yhteyttä laittamalla viestiä osoitteeseen:",
      forCompaniesListItem: "Paavo Nurmen patsaan lakituksessa",
      forCompaniesListItem1: "Wapputapahtumissa",
      forCompaniesListItem2: "Syksyn fuksitapahtumassa",
    },
    sv: {
      metaTitle: "Till företag",
      forCompaniesHeading: "Till företag",
      forCompaniesBody:
        "Till Teknologkommissionens medlemmar hör alla som är medlemmar i medlemsföreningarna. Genom oss kan ert företag nå både studerande och teknologer som redan gått ut i arbetslivet samt göra ett positivt intryck på medlemmarna i vårt nätverk. Vi samarbetar gärna till exempel i form av synlighet på evenemang, bland annat på:",
      forCompaniesBody1:
        "Därtill diskutertar vi gärna andra potentiella samarbetsmöjligheter! Man kan kontakta oss per e-post:",
      forCompaniesListItem: "Paavo Nurmi-statyns mösspåläggning",
      forCompaniesListItem1: "Wappevenemang",
      forCompaniesListItem2: "Höstens gulnäbbsevenemang",
    },
  };

  const textContent = translations[locale];

  return (
    <>
      <HeaderPicture img="/yrityksille-paavo.jpg" alt="Paavon lakitus" />
      <H1>{textContent.forCompaniesHeading}</H1>
      <LongText>{textContent.forCompaniesBody}</LongText>
      <ul className="list-decimal mb-8 mx-16">
        <ListItem>{textContent.forCompaniesListItem}</ListItem>
        <ListItem>{textContent.forCompaniesListItem1}</ListItem>
        <ListItem>{textContent.forCompaniesListItem2}</ListItem>
      </ul>
      <LongText>
        {textContent.forCompaniesBody1}{" "}
        <a className="underline" href="mailto:teekkarikomissio@utu.fi">
          teekkarikomissio@utu.fi
        </a>
      </LongText>
    </>
  );
};

export default ForCompanies;
