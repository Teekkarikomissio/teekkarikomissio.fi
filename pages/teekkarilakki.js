import React from "react";
import { useRouter } from "next/router";

import { H2, LongText, ListItem } from "../components/Typography";
import HeaderPicture from "../components/HeaderPicture";

const Cap = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Teekkarilakki",

      capHeadingOne: "§1 Teekkarilakki",
      capOneListItemOne:
        "Turkulainen teekkarilakki (myöhemmin lakki) on turkulaisen teekkarin tunnus.",
      capOneListItemTwo:
        "Turun yliopiston ja Åbo Akademin teekkarilakki on tupsulakki, jossa on valkoinen pyöreä samettipäällys, musta samettireuna ja musta lippa sekä musta silkkitupsu. Lakin mustaan samettireunukseen, lipan keskikohdalle, on kiinnitetty Turun yliopiston ylioppilaskunnan tai Åbo Akademin ylioppilaskunnan kultainen kokardi riippuen minkä yliopiston alla lakkia käytetään. Turun yliopiston lakin vuori on sinivalkoinen ja Åbo Akademin lakin vuori keltamusta. Lakit tilaa Teekkarikomission hallitus kiltojen tarpeiden mukaisesti, mutta lakin voi tilata myös Teekkarikomission hallituksen myöntämällä erityisluvalla.",

      capHeadingTwo: "§2 Käyttöoikeus",
      capBodyTwo: "Lakkia ovat oikeutettuja käyttämään seuraavat henkilöt:",
      capTwoListItemOne:
        "Turun yliopistosta tai Åbo Akademista diplomi-insinööriksi valmistuneet henkilöt",
      capTwoListItemTwo:
        "Turun yliopistossa tai Åbo Akademissa opiskelevat tekniikan ylioppilaat, joille lakki on kertaalleen myönnetty",
      capTwoListItemThree: "Ne, joille lakki on kertaalleen myönnetty",

      capHeadingThree: `§3 Lakin myöntäminen`,
      capBodyThree:
        "Teekkarikomissio myöntää lakinkäyttöoikeuden ja lakki voidaan myöntää aikaisintaan ensimmäisen opiskeluvuoden vappuaattona. Jokainen kilta luovuttaa lakin aikaisintaan 30.4. seuraavat kriteerit täyttäville henkilöille:",
      capThreeListItemOne:
        "Täyttänyt kiltansa fuksipassin killan kriteerien mukaisesti",
      capThreeListItemTwo: "Osallistunut Eldprowetiin",
      capFooterThreeFirst:
        "Muutoin teekkarilakki myönnetään Teekkarikomission toimesta viimeistään diplomi-insinööriksi valmistuneelle henkilölle.",
      capFooterThreeSecond:
        "Teekkarikomissio voi erityistapauksissa poiketa näistä kriteereistä. Tällöin tarvitaan Teekkarikomission hallituksen 3/4 enemmistön kannatus.",

      capHeadingFour: "§4 Lakin käyttö",
      capFourListItemOne:
        "Lakkia ei saa luovuttaa henkilölle, jolla ei ole lakin kanto-oikeutta.",
      capFourListItemTwo:
        "30.4. klo 18.00 - 30.9. klo 23.59 välisenä aikana lakkia voi käyttää vapaasti. Muina aikoina lakkia saa käyttää ainoastaan Teekkarikomission hallituksen luvalla tai pysyväisohjesäännön mukaisesti. Lakin käyttöoikeutta haetaan kirjallisesti. Hallitus merkitsee myönnetyt ja evätyt käyttöoikeudet hallituksen kokouksen pöytäkirjoihin.",
      capFourListItemThree:
        "Lakin kanssa sekä vaatetuksen että käytöksen tulee olla lakin arvolle sopivaa. Muussa tapauksessa lakki tulee piilottaa sen maineen säilyttämiseksi.",

      capHeadingFive: "§5 Kiltapinssi",
      capBodyFive:
        "Turun yliopistosta tai Åbo Akademista diplomi-insinööriksi valmistuneet henkilöt ovat oikeutettuja käyttämään oman kiltansa pinssiä tupsun kiinnityskohdan yläpuolella, valkoiseen samettiin kiinnitettynä.",

      capHeadingSix: "§6 Pysyväisohjesääntö",
      capBodySix:
        "Myönnetään pysyvä lakinkäyttöoikeus seuraaviin tilaisuuksiin:",
      capListItemOne: "Fuksien lakkisovituksiin fukseille",
      capListItemTwo: "Kirkastusjuhlat",
      capListItemThree:
        "Kuoro- ja orkesteriesiintymiset, joihin kaikille kuuluu asusteena ylioppilaslakki",
      capListItemFour:
        "Lippuairueessa toimiville ja kulkueissa, joissa kaikille kuuluu asusteeksi  teekkari- tai ylioppilaslakki",
      capListItemFive: "Lukioesittelyt",
      capListItemSix: "RekomBIOnaatio",
      capListItemSeven: "Tietoteekkarien taistot",
      capListItemEight:
        "Valtakunnallinen jäynäkilpailu ja muut TEKin tapahtumat, joissa asusteeseen kuuluu teekkarilakki",
      capListItemNine: "Virallinen Wappulehden myyntitapahtuma",
      capBodySeven:
        "Lisäksi myönnetään pysyvä henkilökohtainen lakinkäyttöoikeus Turun yliopistosta tai Åbo Akademista diplomi-insinööriksi valmistuvalle omiin valmistujaispäiviin ja -juhliin.",
    },
    sv: {
      metaTitle: "Teknologmössa",

      capHeadingOne: "§1 Teknologmössa",
      capOneListItemOne:
        "Den åboländska teknologmössan (senare mössan) är kännetecknet för en Åbo teknolog.",
      capOneListItemTwo:
        "Åbo Akademis och Åbo Universitets teknologmössa är en tofsmössa med ett vitt och runt sammetsöverdrag, svarta sammetskanter, en svart skärm och en svart silkestofs. Beroende på vilken studentkår man hör till sätts antingen Åbo Akademis eller Åbo Universitets gyllene lyra fast på den svarta sammetskanten. Fodret av Åbo Akademis mössa är gult och svart medan Åbo Universitets är blått och vitt. Teknologkommissionens styrelse beställer mössorna enligt föreningarnas behov, men man kan även beställa mössan själv med särskilt tillstånd av Teknologkommissionens styrelse.",

      capHeadingTwo: "§2 Användningsrätt",
      capBodyTwo: "Följande personer har rätt att bära mössan:",
      capTwoListItemOne:
        "Från Åbo Akademi eller Åbo Universitet utexaminerade diplomingenjörer",
      capTwoListItemTwo:
        "Teknologie studerande vid Åbo Akademi eller Åbo Universitet som har beviljats rättigheten att bära mössan",
      capTwoListItemThree:
        "Dem som mössan redan en gång beviljats är berättigade att bära mössan.",

      capHeadingThree: `§3 Beviljande av mössa`,
      capBodyThree:
        "Teknologkommissionen beviljar användningsrätten till mössan och mössan kan beviljas tidigast på valborgsmässoafton på ens första studieår. Varje förening överlåter mössan tidigast 30.4. enligt egna kriterier:",
      capThreeListItemOne:
        "Fyllt på föreningens gulispass enligt föreningens kriterier",
      capThreeListItemTwo: "Deltagit i Eldprowet",
      capFooterThreeFirst:
        "Annars beviljas teknologmössan av Teknologkomissionen senast när en utexaminerar sig och blir en diplomingenjör.",
      capFooterThreeSecond:
        "I särskilda fall kan Teknologkommissionen avvika från dessa kriterier. I detta fall krävs stöd av 3/4 majoritet av Teknologkommissiones styrelse.",

      capHeadingFour: "§4 Användning av mössa",
      capFourListItemOne:
        "Mössan får inte överlåtas till en som inte har rätt att bära åboteknologernas mössa.",
      capFourListItemTwo:
        "Mellan den 30 april kl 18 och den 30 september kl 23.59 får mössan användas fritt. Utanför detta tidsintervall kan Teknologkommissionens styrelse bevilja ett tillstånd att använda mössan, eller kan mässan bäras enligt de permanenta mössanvändningsrätterna. Användningsrätten till mössan ansöks skriftligt. Styrelsen protokollför de godkända och icke godkända ansökningarna.",
      capFourListItemThree:
        "Klädseln och beteendet ska respektera värdet av mössan. I andra fall ska mössan gömmas för att bevara dess rykte.",

      capHeadingFive: "§5 Föreningspins",
      capBodyFive:
        "Utexaminerade diplomingenjörer från Turun Yliopisto eller Åbo Akademi har rätten att använda sin ämnesförenings pins ovanför tofsens fäste, fäst i den vita sammeten.",

      capHeadingSix: "§6 Permanenta stadganden",
      capBodySix:
        "Permanent mössanvändningsrätt beviljas för följande tillfällen:",
      capListItemOne: "Åt gulisarna under deras mössprvovningar",
      capListItemTwo: "Kirkastusjuhlat",
      capListItemThree:
        "Kör- och orkesteruppträdanden där teknolog- eller studentmössa hör till accessoarer",
      capListItemFour:
        "Fantåg där teknolog- eller studentmössa hör till accessoarer",
      capListItemFive: "Presentationer för gymnasieelever",
      capListItemSix: "RekomBIOnaatio",
      capListItemSeven: "Tietoteekkarien taistot",
      capListItemEight:
        "Den nationella jäynätävlingen och andra TEKs evenemang, där teknologmössan hör till accessoarer",
      capListItemNine:
        "Det officiella Wappulehti-tidningens försäljningsevenemang",
      capBodySeven:
        "I tillägg beviljas permanent personlig mössanvändningsrätt åt utexaminerade diplomingenjörer från Turun Yliopisto eller Åbo Akademi under deras egen examensdag och -fest.",
    },
  };

  const textContent = translations[locale];

  return (
    <>
      <HeaderPicture img="/teekkarihattu.jpg" alt="Turun teekkarilakki" />
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>{textContent.capHeadingOne}</H2>
            <LongText>{textContent.capOneListItemOne}</LongText>
            <LongText>{textContent.capOneListItemTwo}</LongText>
            <H2>{textContent.capHeadingTwo}</H2>
            <LongText>{textContent.capBodyTwo}</LongText>
            <ul className="list-disc text-justify mx-16">
              <ListItem>{textContent.capTwoListItemOne}</ListItem>
              <ListItem>{textContent.capTwoListItemTwo}</ListItem>
              <ListItem>{textContent.capTwoListItemThree}</ListItem>
            </ul>
            <H2>{textContent.capHeadingThree}</H2>
            <LongText>{textContent.capBodyThree}</LongText>
            <ul className="list-disc text-justify mx-16">
              <ListItem>{textContent.capThreeListItemOne}</ListItem>
              <ListItem>{textContent.capThreeListItemTwo}</ListItem>
            </ul>
            <LongText>{textContent.capFooterThreeFirst}</LongText>
            <LongText>{textContent.capFooterThreeSecond}</LongText>
            <H2>{textContent.capHeadingFour}</H2>
            <LongText>{textContent.capFourListItemOne}</LongText>
            <LongText>{textContent.capFourListItemTwo}</LongText>
            <LongText>{textContent.capFourListItemThree}</LongText>
            <H2>{textContent.capHeadingFive}</H2>
            <LongText>{textContent.capBodyFive}</LongText>
            <H2>{textContent.capHeadingSix}</H2>
            <LongText>{textContent.capBodySix}</LongText>
            <ul className="list-disc text-justify mx-16">
              <ListItem>{textContent.capListItemOne}</ListItem>
              <ListItem>{textContent.capListItemTwo}</ListItem>
              <ListItem>{textContent.capListItemThree}</ListItem>
              <ListItem>{textContent.capListItemFour}</ListItem>
              <ListItem>{textContent.capListItemFive}</ListItem>
              <ListItem>{textContent.capListItemSix}</ListItem>
              <ListItem>{textContent.capListItemSeven}</ListItem>
              <ListItem>{textContent.capListItemEight}</ListItem>
              <ListItem>{textContent.capListItemNine}</ListItem>
            </ul>
            <br></br>
            <LongText>{textContent.capBodySeven}</LongText>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cap;
