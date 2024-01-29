import React from "react";
import Image from "next/image";


import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { H2, ListItem } from "../../../components/Typography";

import liput from "../../../public/tk-banner.jpg";

export default async function OfficialDocuments({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const documents = dictionary["documents"];

  return (
    <div className='max-w-prose'>
      <Image className="lg:rounded-lg lg:mt-16" src={liput} alt="TK" />
      <H2>{documents.docsHeading}</H2>
      <br></br>
      <ul className="list-disc mb-12 mx-16">
        <ListItem>
          {documents.docsListItem1}{" "}
          <a className="underline" href="/rules-fi.pdf">
            FI
          </a>{" "}
          <a className="underline" href="/rules-sv.pdf">
            SV
          </a>
        </ListItem>
        <ListItem>
          {documents.docsListItem2}{" "}
          <a className="underline" href="/sub-rules-fi.pdf">
            FI
          </a>{" "}
          <a className="underline" href="/sub-rules-sv.pdf">
            SV
          </a>
        </ListItem>
        <ListItem>
          {documents.docsListItem3}{" "}
          <a className="underline" href="/strategia-fi.pdf">
            FI
          </a>{" "}
          <a className="underline" href="/strategia-sv.pdf">
            SV
          </a>
        </ListItem>
        <ListItem>
          {documents.docsListItem4}{" "}
          <a className="underline" href="/teekkarihymni_teknologhymn_notes.pdf">
            {documents.docsListText}
          </a>{" "}
          <a
            className="underline"
            href="/teekkarihymni_teknologhymn_lyrics.pdf"
          >
            {documents.docsListText1}
          </a>
        </ListItem>
        <ListItem>
          {documents.docsListItem5}{" "}
          <a className="underline" href="/values-fi.pdf">
            FI
          </a>{" "}
          <a>Väntar på översättning</a>
        </ListItem>
      </ul>
    </div>
  );
}
