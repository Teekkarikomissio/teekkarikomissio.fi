import React from "react";
import { useRouter } from "next/router";

import { H2 } from "../components/Typography";

const Tapahtumat = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Tapahtumat",
      eventHeading: "Teekkarikomission tapahtumat",
      eventEvent: "Paikallisten jäynäkilpailuiden starttaaminen",
      eventEvent1: "TK:n wappuinen PREldproWET",
      eventEvent2: "Eldprowet",
      eventEvent3: "Paavo Nurmen patsaan lakitus",
      eventEvent4: "Sommarträff",
      eventEvent5: "TK:n kiltojen väliset sitsit",
      eventEvent6: "TK FIA-Cup",
    },
    sv: {
      metaTitle: "Evenemang",
      eventHeading: "Teknologkommissionens evenemang",
      eventEvent: "Starten av den lokala jäynätävlingen",
      eventEvent1: "TK:s wappiga PREldproWET",
      eventEvent2: "Eldprowet",
      eventEvent3: "Paavo Nurmi-statyns mösspåläggning",
      eventEvent4: "Sommarträff",
      eventEvent5: "TK sitz",
      eventEvent6: "TK FIA-Cup",
    },
  };

  const textContent = translations[locale];

  const eventInfo = [
    {
      img: "/event-jaynastartti.jpg",
      heading: textContent.eventEvent,
    },
    {
      img: "/event-preldprowet.jpg",
      heading: textContent.eventEvent1,
    },
    {
      img: "/tklogo.svg",
      heading: textContent.eventEvent2,
    },
    {
      img: "/event-paavo.jpg",
      heading: textContent.eventEvent3,
    },
    {
      img: "/event-sommar.jpg",
      heading: textContent.eventEvent4,
    },
    {
      img: "/event-sitz.jpg",
      heading: textContent.eventEvent5,
    },
    {
      img: "/event-fia.jpg",
      heading: textContent.eventEvent6,
    },
  ];

  const EventCard = ({ imgUrl = "/", heading = "TK" }) => {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4 shadow-xl rounded-lg">
        <div className="items-center justify-center">
          <img src={imgUrl} alt={heading} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <H2>{textContent.eventHeading}</H2>
      <div className="flex h-screen my-6">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=uvuvvg8nh8dt26778tef67u0h8%40group.calendar.google.com&ctz=Europe%2FHelsinki"
          style={{ flex: 1 }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} imgUrl={img} heading={heading} />
        ))}
      </div>
    </>
  );
};

export default Tapahtumat;
