import React from "react";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H1, H2, H3, LongText } from "../../../components/Typography";

export default async function JaynaCompetition({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const jaynaCompetition = dictionary["jaynaCompetition"];

  return (
    <div className='max-w-prose'>
      <H2>{jaynaCompetition.jaynacompetitionHeading}</H2>
      <br></br>
      <H1>{jaynaCompetition.jaynajulistus}</H1>
      <H3>{jaynaCompetition.jaynaHeading1}</H3>
      <LongText>{jaynaCompetition.jaynaText1}</LongText>
      <LongText>{jaynaCompetition.jaynaText2}</LongText>
      <LongText>{jaynaCompetition.jaynaText3}</LongText>
      <H3>{jaynaCompetition.jaynaHeading4}</H3>
      <LongText>{jaynaCompetition.jaynaText12}</LongText>
      <H3>{jaynaCompetition.jaynaHeading2}</H3>
      <LongText>{jaynaCompetition.jaynaText4}</LongText>
      <LongText>{jaynaCompetition.jaynaText5}</LongText>
      <LongText>{jaynaCompetition.jaynaText6}</LongText>
      <H3>{jaynaCompetition.jaynaHeading3}</H3>
      <LongText>{jaynaCompetition.jaynaText7}</LongText>
      <LongText>{jaynaCompetition.jaynaText8}</LongText>
      <LongText>{jaynaCompetition.jaynaText9}</LongText>
      <LongText>{jaynaCompetition.jaynaText10}</LongText>
      <LongText>{jaynaCompetition.jaynaText11}</LongText>
      <br></br>
      <H1>{jaynaCompetition.jaynaRules}</H1>
      <H3>{jaynaCompetition.jaynaRuleHeading1}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText1}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading2}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText2}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading3}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText3}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText4}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading4}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText5}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading5}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText6}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText7}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText19}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText8}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading6}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText9}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading7}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText10}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText11}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText12}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading8}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText13}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading9}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText14}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading10}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText15}</LongText>
      <H3>{jaynaCompetition.jaynaRuleHeading11}</H3>
      <LongText>{jaynaCompetition.jaynaRuleText16}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText17}</LongText>
      <LongText>{jaynaCompetition.jaynaRuleText18}</LongText>
    </div>
  );
}
