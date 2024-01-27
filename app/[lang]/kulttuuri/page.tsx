import React from "react";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H1, H2, LongText } from "../../../components/Typography";

export default async function Kulttuuri({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const culture = dictionary["culture"];

  return (
    <>
      <H1>{culture.cultureHeading_neg1}</H1>
      <LongText>{culture.cultureBody_neg1}</LongText>
      <LongText>{culture.cultureBody_neg2}</LongText>
      <H1>{culture.cultureHeading_neg2}</H1>
      <iframe
        className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeVR8rR8ETs5XC7fUAeuadYzMHdDnOJ4UbD-2dV_KUkeeDKiQ/viewform?embedded=true"
        height="1337"
      ></iframe>
      <H1>{culture.cultureHeading}</H1>
      <iframe
        className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://www.youtube.com/embed/GB0Lkq7Om24"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Valtakunnalliset jäynäkilpailut 2018"
        height="500"
      ></iframe>
      <LongText>{culture.cultureBody}</LongText>
      <LongText>{culture.cultureBody1}</LongText>
      <LongText>{culture.cultureBody2}</LongText>
      <H2>{culture.cultureHeading1}</H2>
      <LongText>{culture.cultureBody3}</LongText>
      <LongText>{culture.cultureBody4}</LongText>
      <LongText>{culture.cultureBody5}</LongText>
    </>
  );
}
