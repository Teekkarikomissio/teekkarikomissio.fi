import React from "react";
import Image from "next/image";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H1, LongText, ListItem } from "../../../components/Typography";

import paavo from "../../../public/yrityksille-paavo.jpg"

export default async function ForCompanies({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dictionary = await getDictionary(lang);
    const forCompanies = dictionary["forCompanies"];


  return (
    <div className="max-w-prose">
      <Image src={paavo} alt="Paavon lakitus" />
      <H1>{forCompanies.forCompaniesHeading}</H1>
      <LongText>{forCompanies.forCompaniesBody}</LongText>
      <ul className="list-decimal mb-8 mx-16">
        <ListItem>{forCompanies.forCompaniesListItem}</ListItem>
        <ListItem>{forCompanies.forCompaniesListItem1}</ListItem>
        <ListItem>{forCompanies.forCompaniesListItem2}</ListItem>
      </ul>
      <LongText>
        {forCompanies.forCompaniesBody1}{" "}
        <a className="underline" href="mailto:teekkarikomissio@utu.fi">
          teekkarikomissio@utu.fi
        </a>
      </LongText>
    </div>
  );
};
