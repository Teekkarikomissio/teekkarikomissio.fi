import React from "react";
import { useRouter } from "next/router";

import HeaderPicture from "../components/HeaderPicture";
import { H2, ListItem } from "../components/Typography";

const OfficialDocuments = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Dokumentit",
      docsImage: "/index-banner-fi.jpg",
      docsHeading: "Teekkarikomission viralliset dokumentit",
      docsListItem1: "Säännöt",
      docsListItem2: "Ohjesäännöt",
      docsListItem3: "Strategia",
      docsListItem4: "Teekkarihymni",
      docsListItem5: "Yhdenvertaisuussuunnitelma",
      docsListText: "Nuotit",
      docsListText1: "Sanat",
    },
    sv: {
      metaTitle: "Dokument",
      docsImage: "/index-banner-sv.jpg",
      docsHeading: "Teknologkommissionens officiella dokument",
      docsListItem1: "Stadgar",
      docsListItem2: "Arbetsordning",
      docsListItem3: "Strategi",
      docsListItem4: "Teknologhymnen",
      docsListItem5: "Jämställdhetsplan",
      docsListText: "Noter",
      docsListText1: "Ord",
    },
  };

  const textContent = translations[locale];

  return (
    <>
      <HeaderPicture img={textContent.docsImage} alt="TK" />
      <H2>{textContent.docsHeading}</H2>
      <br></br>
      <ul className="list-disc mb-12 mx-16">
        <ListItem>
          {textContent.docsListItem1}{" "}
          <a className="underline" href="/rules-fi.pdf">
            FI
          </a>{" "}
          <a className="underline" href="/rules-sv.pdf">
            SV
          </a>
        </ListItem>
        <ListItem>
          {textContent.docsListItem2}{" "}
          <a className="underline" href="/sub-rules-fi.pdf">
            FI
          </a>{" "}
          <a className="underline" href="/sub-rules-sv.pdf">
            SV
          </a>
        </ListItem>
        <ListItem>
          {textContent.docsListItem3}{" "}
          <a className="underline" href="/strategia-fi.pdf">
            FI
          </a>{" "}
          <a className="underline" href="/strategia-sv.pdf">
            SV
          </a>
        </ListItem>
        <ListItem>
          {textContent.docsListItem4}{" "}
          <a className="underline" href="/teekkarihymni_teknologhymn_notes.pdf">
            {textContent.docsListText}
          </a>{" "}
          <a
            className="underline"
            href="/teekkarihymni_teknologhymn_lyrics.pdf"
          >
            {textContent.docsListText1}
          </a>
        </ListItem>
        <ListItem>
          {textContent.docsListItem5}{" "}
          <a className="underline" href="/values-fi.pdf">
            FI
          </a>{" "}
          <a>
            Väntar på översättning
          </a>
        </ListItem>
      </ul>
    </>
  );
};

export default OfficialDocuments;
