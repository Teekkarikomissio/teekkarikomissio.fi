import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { H2 } from "../../../components/Typography";
import { GuildCardProps } from "@/types";
import fukseillePassit from "@/public/fukseille-passit.jpg"

import albin from "@/public/logos/Albin_alt.png"
import digit from "@/public/logos/logo-digit.png"
import kk from "@/public/logos/logo-kk.png"
import nucleus from "@/public/logos/logo-nucleus.png"
import adamas from "@/public/logos/logo-adamas.png"
import machina from "@/public/logos/logo-machina.png"
import diKerho from "@/public/logos/logo-dikerho.jpg"
import nollaKerho from "@/public/logos/logo-nollakerho.png"
import aboaTek from "@/public/logos/logo-aboatek.png"

export default async function NewStudents({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dictionary = await getDictionary(lang);
    const newStudents = dictionary["newStudents"];

  const guildInfo = [
    {
      img: albin,
      href: "https://datateknologerna.org/",
      heading: "Datateknologerna vid Åbo Akademi rf",
      description: newStudents.techStudentInfo,
      founded: "est. 1999",
    },
    {
      img: digit,
      href: "https://digit.fi/",
      heading: "Digit ry",
      description: newStudents.techStudentInfo1,
      founded: "est. 1999",
    },
    {
      img: kk,
      href: "https://kemistklubben.org/",
      heading: "Kemistklubben vid Åbo Akademi rf",
      description: newStudents.techStudentInfo2,
      founded: "est. 1923",
    },
    {
      img: nucleus,
      href: "https://nucleus.fi/",
      heading: "Nucleus ry",
      description: newStudents.techStudentInfo3,
      founded: "est. 2008",
    },
    {
      img: adamas,
      href: "https://adamas.fi/",
      heading: "Adamas ry",
      description: newStudents.techStudentInfo4,
      founded: "est. 2020",
    },
    {
      img: machina,
      href: "https://machina.fi",
      heading: "Machina ry",
      description: newStudents.techStudentInfo5,
      founded: "est. 2020",
    },
  ];

  const alumniInfo = [
    {
      img: diKerho,
      href: "https://turkudi.tek.fi/",
      heading: "Turun DI-kerho",
      description: newStudents.techStudentInfo6,
      founded: "est. 1933",
    },
    {
      img: nollaKerho,
      href: "https://digit.fi/alumneille",
      heading: "0-kerho",
      description: newStudents.techStudentInfo7,
      founded: "",
    },
    {
      img: aboaTek,
      href: "https://aboatekblog.wordpress.com/",
      heading: "AboaTEK",
      description: newStudents.techStudentInfo8,
      founded: "",
    },
  ];

  const GuildCard: React.FC<GuildCardProps> = ({ img, href, heading, description, founded }) => {
    return (
      <div className="card w-64 bg-base-100 shadow-xl m-2 p-2">
        <div className="px-5 pt-5">
          <Image
            src={img}
            alt={heading}
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
        <h1>{newStudents.techStudentHeading}</h1>
        <p>{newStudents.techStudentBody}</p>
        <Image src={fukseillePassit} alt="Fuksipassit" />
        <h1>{newStudents.techStudentHeading1}</h1>
        <p>{newStudents.techStudentBody1}</p>
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
      <H2>{newStudents.techStudentHeading2}</H2>
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
