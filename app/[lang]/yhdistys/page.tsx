import React from "react";
import Image from "next/image";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H1, H2, H3, LongText } from "../../../components/Typography";

import tklogo from "../../../public/logos/tklogo.svg"
import Reetta from "/public/board/2024/reetta-lindberg-min.jpg"
import Risto from "/public/board/2024/risto-ruohola-min.jpg"
import Jani from "/public/board/2024/jani-norrby-min.jpg"
import Roosa from "/public/board/2024/roosa-varjonen-min.jpg"
import Ellen from "/public/board/2024/ellen-ekblom-min.jpg"
import Tiitus from "/public/board/2024/tiitus-hannula-min.jpg"
import Kristoffer from "/public/board/2024/kristoffer-lindholm-min.jpg"
import Arttu from "/public/board/2024/arttujokinen-min.jpg"
import Marianne from "/public/board/2024/marianne-matinvuori-min.jpg"
import Mikko from "/public/board/2024/mikko-Lehtosalo-min.jpg"
import { BoardCard } from "@/types";

export default async function Yhdistys({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const association = dictionary["association"];

  const boardMembers = [
    {
      img: Reetta,
      name: "Reetta Lindberg",
      position: association.associationTitle,
      responsibilities: association.associationResponsibilities1,
      contact: "E-mail: resoli@utu.fi",
      contact2: "TG: @reettalindberg",
    },
    {
      img: Risto,
      name: "Risto Ruohola",
      position: association.associationTitle1,
      responsibilities: association.associationResponsibilities1,
      contact: "E-mail: risto.ruohola@abo.fi",
      contact2: "TG: @ristoruohola",
    },
    {
      img: Ellen,
      name: "Ellen Ekblom",
      position: association.associationTitle6,
      responsibilities: association.associationResponsibilities3,
      contact: "E-mail: eaekbl@utu.fi",
      contact2: "TG: @ellenekblom",
    },
    {
      img: Tiitus,
      name: "Tiitus Hannula",
      position: association.associationTitle7,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: tiitus.k.hannula@utu.fi",
      contact2: "TG: @tiitush",
    },
    {
      img: Arttu,
      name: "Arttu Jokinen",
      position: association.associationTitle3,
      //responsibilities: association.associationResponsibilities3,
      contact: "E-mail: aijoki@utu.fi",
      contact2: "TG: @ArttuJokinen",
    },
    {
      img: Jani,
      name: "Jani Norrby",
      position: association.associationTitle8,
      //responsibilities: association.associationResponsibilities5,
      contact: "E-mail: jtnorr@utu.fi",
      contact2: "TG: @jani_norppa",
    },
    {
      img: Roosa,
      name: "Roosa Varjonen",
      position: association.associationTitle5,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: rosova@utu.fi",
      contact2: "TG: @rroskaa",
    },
    {
      img: Mikko,
      name: "Mikko Lehtosalo",
      position: association.associationTitle4,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: moleht@utu.fi",
      contact2: "TG: @mleht0",
    },
    {
      img: Kristoffer,
      name: "Kristoffer Lindholm",
      position: association.associationTitle2,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: kristoffer.lindholm@abo.fi",
      //contact2: "TG: @mleht0",
    },
    {
      img: Marianne,
      name: "Marianne Matinvuori",
      position: association.associationTitle4,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: heidi.matinvuori@abo.fi",
      contact2: "TG: @Nannenen",
    },
  ];

  const BoardCard: React.FC<BoardCard> = ({
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
              <Image width="400" height="400" src={img} alt={name} />
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4 mb-4">
            <H3>{name}</H3>
            <p className="text-gray-700 text-lg my-4">{position}</p>
            <p className="text-gray-700 text-lg my-4">
              {association.associationOtherResponsibilities} {responsibilities}
            </p>
            <p className="text-gray-700 text-base">{contact}</p>
            <p className="text-gray-700 text-base">{contact2}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-prose">
      <article>
        <H1>{association.associationHeading}</H1>
        <LongText>{association.associationContent}</LongText>
      </article>
      <div>
        <H2>
          {association.associationHeading1} {new Date().getFullYear()}{" "}
          {association.associationHeading2}
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
    </div>
  );
}
