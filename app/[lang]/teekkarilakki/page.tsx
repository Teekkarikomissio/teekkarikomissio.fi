import React from "react";
import Image from "next/image";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H2, LongText, ListItem } from "../../../components/Typography";

import teekkarilakki from "../../../public/teekkarihattu.jpg"

export default async function Cap({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const cap = dictionary["cap"];

  return (
    <div className="max-w-prose">
      <Image src={teekkarilakki} alt="Turun teekkarilakki" />
      <div className="max-w-prose w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{cap.capHeadingOne}</H2>
            <LongText>{cap.capOneListItemOne}</LongText>
            <LongText>{cap.capOneListItemTwo}</LongText>
            <H2>{cap.capHeadingTwo}</H2>
            <LongText>{cap.capBodyTwo}</LongText>
            <ul className="list-disc list-inside text-justify mx-16">
              <ListItem>{cap.capTwoListItemOne}</ListItem>
              <ListItem>{cap.capTwoListItemTwo}</ListItem>
              <ListItem>{cap.capTwoListItemThree}</ListItem>
            </ul>
            <H2>{cap.capHeadingThree}</H2>
            <LongText>{cap.capBodyThree}</LongText>
            <ul className="list-disc list-inside text-justify mx-16 mb-5">
              <ListItem>{cap.capThreeListItemOne}</ListItem>
              <ListItem>{cap.capThreeListItemTwo}</ListItem>
            </ul>
            <LongText>{cap.capFooterThreeFirst}</LongText>
            <LongText>{cap.capFooterThreeSecond}</LongText>
            <H2>{cap.capHeadingFour}</H2>
            <LongText>{cap.capFourListItemOne}</LongText>
            <LongText>{cap.capFourListItemTwo}</LongText>
            <LongText>{cap.capFourListItemThree}</LongText>
            <H2>{cap.capHeadingFive}</H2>
            <LongText>{cap.capBodyFive}</LongText>
            <H2>{cap.capHeadingSix}</H2>
            <LongText>{cap.capBodySix}</LongText>
            <ul className="list-disc list-inside text-justify mx-16">
              <ListItem>{cap.capListItemOne}</ListItem>
              <ListItem>{cap.capListItemTwo}</ListItem>
              <ListItem>{cap.capListItemThree}</ListItem>
              <ListItem>{cap.capListItemFour}</ListItem>
              <ListItem>{cap.capListItemFive}</ListItem>
              <ListItem>{cap.capListItemSix}</ListItem>
              <ListItem>{cap.capListItemSeven}</ListItem>
              <ListItem>{cap.capListItemEight}</ListItem>
              <ListItem>{cap.capListItemNine}</ListItem>
            </ul>
            <br></br>
            <LongText>{cap.capBodySeven}</LongText>
          </div>
        </div>
      </div>
    </div>
  );
}
