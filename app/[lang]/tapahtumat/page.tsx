import React from "react";

import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H2 } from "../../../components/Typography";
import Image from "next/image";

import jaynastartti from "../../../public/event-jaynastartti.jpg";
import preldprowet from "../../../public/event-preldprowet.jpg";
import tklogo from "../../../public/logos/tklogo.svg";
import paavo from "../../../public/event-paavo.jpg";
import sommar from "../../../public/event-sommar.jpg";
import sitz from "../../../public/event-sitz.jpg";
import fia from "../../../public/event-fia.jpg";

export default async function Tapahtumat({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const events = dictionary["events"];

  const eventInfo = [
    {
      img: jaynastartti,
      heading: events.eventEvent,
    },
    {
      img: preldprowet,
      heading: events.eventEvent1,
    },
    {
      img: tklogo,
      heading: events.eventEvent2,
    },
    {
      img: paavo,
      heading: events.eventEvent3,
    },
    {
      img: sommar,
      heading: events.eventEvent4,
    },
    {
      img: sitz,
      heading: events.eventEvent5,
    },
    {
      img: fia,
      heading: events.eventEvent6,
    },
  ];

  const EventCard = ({ imgUrl = "/", heading = "TK" }) => {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4 shadow-xl rounded-lg">
        <div className="items-center justify-center">
          <Image src={imgUrl} alt={heading} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <H2>{events.eventHeading}</H2>
      <div className="flex h-screen my-6">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=uvuvvg8nh8dt26778tef67u0h8%40group.calendar.google.com&ctz=Europe%2FHelsinki"
          style={{ flex: 1 }}
        />
      </div>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} imgUrl={img} heading={heading} />
        ))}
      </div>
    </>
  );
}
