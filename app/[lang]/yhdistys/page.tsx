import React from "react";
import Image from "next/image";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H2, H3 } from "../../../components/Typography";

import tklogo from "../../../public/logos/tklogo.svg"
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
      img: tklogo,
      name: "Reetta Lindberg",
      position: association.associationTitle,
      responsibilities: association.associationResponsibilities1,
      contact: "E-mail: resoli@utu.fi",
      contact2: "TG: @reettalindberg",
    },
    {
      img: tklogo,
      name: "Risto Ruohola",
      position: association.associationTitle1,
      responsibilities: association.associationResponsibilities1,
      contact: "E-mail: risto.ruohola@abo.fi",
      contact2: "TG: @ristoruohola",
    },
    {
      img: tklogo,
      name: "Ellen Ekblom",
      position: association.associationTitle6,
      responsibilities: association.associationResponsibilities3,
      contact: "E-mail: eaekbl@utu.fi",
      contact2: "TG: @ellenekblom",
    },
    {
      img: tklogo,
      name: "Tiitus Hannula",
      position: association.associationTitle7,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: tiitus.k.hannula@utu.fi",
      contact2: "TG: @tiitush",
    },
    {
      img: tklogo,
      name: "Arttu Jokinen",
      position: association.associationTitle3,
      //responsibilities: association.associationResponsibilities3,
      contact: "E-mail: aijoki@utu.fi",
      contact2: "TG: @ArttuJokinen",
    },
    {
      img: tklogo,
      name: "Jani Norrby",
      position: association.associationTitle8,
      //responsibilities: association.associationResponsibilities5,
      contact: "E-mail: jtnorr@utu.fi",
      contact2: "TG: @jani_norppa",
    },
    {
      img: tklogo,
      name: "Roosa Varjonen",
      position: association.associationTitle5,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: rosova@utu.fi",
      contact2: "TG: @rroskaa",
    },
    {
      img: tklogo,
      name: "Mikko Lehtosalo",
      position: association.associationTitle4,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: moleht@utu.fi",
      contact2: "TG: @mleht0",
    },
    {
      img: tklogo,
      name: "Kristoffer Lindholm",
      position: association.associationTitle2,
      //responsibilities: association.associationResponsibilities7,
      contact: "E-mail: kristoffer.lindholm@abo.fi",
      //contact2: "TG: @mleht0",
    },
    {
      img: tklogo,
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
              <Image src={img} alt={name} />
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
    <>
      <article className="prose">
        <h1>{association.associationHeading}</h1>
        <p>{association.associationContent}</p>
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
    </>
  );
}
