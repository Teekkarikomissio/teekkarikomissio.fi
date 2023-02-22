import React from 'react';
import { useRouter } from 'next/router';
import { Heading, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import DefaultLayout from '../components/layouts/DefaultLayout';

const capContent = {
  fi: {
    metaTitle: 'Teekkarilakki',
    capHeadingOne: '§1 Teekkarilakki',
    capBodyOne:
      'Turkulainen teekkarilakki (myöhemmin lakki) on turkulaisen teekkarin tunnus. Turun yliopiston ja Åbo Akademin teekkarilakki on tupsulakki, jossa on valkoinen pyöreä samettipäällys, musta samettireuna ja musta lippa sekä musta silkkitupsu. Lakin mustaan samettireunukseen, lipan keskikohdalle, on kiinnitetty Turun yliopiston tai Åbo Akademin ylioppilaskunnan kultainen kokardi riippuen minkä yliopiston alla lakkia käytetään. Turun yliopiston lakin vuori on sinivalkoinen ja Åbo Akademin lakin vuori keltamusta. Lakit tilaa Teekkarikomission hallitus kiltojen tarpeiden mukaisesti, mutta lakin voi tilata myös Teekkarikomission hallituksen myöntämällä erityisluvalla.',
    capHeadingTwo: '§2 Käyttöoikeus',
    capBodyTwo:
      'Lakkia ovat oikeutettuja käyttämään Turun yliopistosta tai Åbo Akademista diplomi-insinööriksi valmistuneet henkilöt sekä Turun yliopistossa tai Åbo Akademissa opiskelevat tekniikan ylioppilaat, tai ne, joille lakki on kertaalleen myönnetty.',
    capHeadingThree: `§3 Lakin myöntäminen`,
    capBodyThree:
      'Teekkarikomissio myöntää lakinkäyttöoikeuden ja lakki voidaan myöntää aikaisintaan ensimmäisen opiskeluvuoden vappuaattona. Jokainen kilta luovuttaa lakin aikaisintaan 30.4. omien kriteereidensä mukaisesti.',
    capHeadingFour: '§4 Lakin käyttö',
    capBodyFour:
      'Lakkia ei saa luovuttaa henkilölle, jolla ei ole lakin kanto-oikeutta. 30.4. klo 18.00 – 30.9. klo 23.59 välisenä aikana lakkia voi käyttää vapaasti. Muina aikoina lakkia saa käyttää ainoastaan Teekkarikomission hallituksen luvalla tai pysyväisohjesäännön mukaisesti. Lakin käyttöoikeutta haetaan kirjallisesti. Hallitus merkitsee myönnetyt ja evätyt käyttöoikeudet hallituksen kokouksen pöytäkirjoihin. Lakin kanssa sekä vaatetuksen että käytöksen tulee olla lakin arvolle sopivaa. Muussa tapauksessa lakki tulee piilottaa sen maineen säilyttämiseksi.',
    capHeadingFive: '§5 Kiltapinssi',
    capBodyFive:
      'Turun yliopistosta tai Åbo Akademista diplomi-insinööriksi valmistuneet henkilöt ovat oikeutettuja käyttämään oman kiltansa pinssiä tupsun kiinnityskohdan yläpuolella, valkoiseen samettiin kiinnitettynä.',
    capHeadingSix: '§6 Pysyväisohjesääntö',
    capBodySix: 'Myönnetään pysyvä lakinkäyttöoikeus seuraaviin tilaisuuksiin:',
    capListItemOne: 'Fuksien lakkisovituksiin fukseille',
    capListItemTwo: 'Kirkastusjuhlat',
    capListItemThree: 'Kuoro- ja orkesteriesiintymiset, joihin kaikille kuuluu asusteena ylioppilaslakki',
    capListItemFour:
      'Lippuairueessa toimiville ja kulkueissa, joissa kaikille kuuluu asusteeksi  teekkari- tai ylioppilaslakki',
    capListItemFive: 'Lukioesittelyt',
    capListItemSix: 'RekomBIOnaatio',
    capListItemSeven: 'Tietoteekkarien taistot',
    capListItemEight:
      'Valtakunnallinen jäynäkilpailu ja muut TEKin tapahtumat, joissa asusteeseen kuuluu teekkarilakki',
    capListItemNine: 'Virallinen Wappulehden myyntitapahtuma',
    capBodySeven:
      'Lisäksi myönnetään pysyvä henkilökohtainen lakinkäyttöoikeus Turun yliopistosta tai Åbo Akademista diplomi-insinööriksi valmistuvalle omiin valmistujaispäiviin ja -juhliin.',
  },
  sv: {
    metaTitle: 'Teknologmössa',
    capHeadingOne: '§1 Teknologmössa',
    capHeadingTwo: '§2 Användningsrätt',
    capHeadingThree: '§3 Beviljande av mössa',
    capHeadingFour: '§4 Användning av mössa',
    capHeadingFive: '§5 Föreningspins',
    capHeadingSix: '§6 Permanenta stadganden',
    capBodyOne:
      'Den åboländska teknologmössan (senare mössan) är kännetecknet för en Åbo teknolog. Åbo Akademis och Åbo Universitets teknologmössa är en tofsmössa med ett vitt och runt sammetsöverdrag, svarta sammetskanter, en svart skärm och en svart silkestofs. Beroende på vilken studentkår man hör till sätts antingen Åbo Akademis eller Åbo Universitets gyllene lyra fast på den svarta sammetskanten. Fodret av Åbo Akademis mössa är gult och svart medan Åbo Universitets är blått och vitt. Teknologkommissionens styrelse beställer mössorna enligt föreningarnas behov, men man kan även beställa mössan själv med särskilt tillstånd av Teknologkommissionens styrelse.',
    capBodyTwo:
      'Från Åbo Akademi eller Åbo Universitet utexaminerade diplomingenjörer samt teknologie studerande vid Åbo Akademi eller Åbo Universitet eller dem som mössan redan en gång beviljats är berättigade att bära mössan.',
    capBodyThree:
      'Teknologkommissionen beviljar användningsrätten till mössan och mössan kan beviljas tidigast på valborgsmässoafton på ens första studieår. Varje förening överlåter mössan tidigast 30.4. enligt egna kriterier.',
    capBodyFour:
      'Mössan får inte överlåtas till en som inte har rätt att bära åboteknologernas mössa. Mellan den 30 april kl 18 och den 30 september kl 23.59 får mössan användas fritt. Utanför detta tidsintervall kan Teknologkommissionens styrelse bevilja ett tillstånd att använda mössan, eller så kan styrelsen införa en permanent stadga för årliga evenemang. Användningsrätten till mössan ansöks skriftligt. Styrelsen protokollför de godkända och icke godkända ansökningarna. Klädseln och beteendet ska respektera värdet av mössan. I andra fall ska mössan gömmas för att bevara dess rykte.',
    capBodyFive:
      'Utexaminerade diplomingenjörer från Turun Yliopisto eller Åbo Akademi har rätten att använda sin ämnesförenings pins ovanför tofsens fäste, fäst i den vita sammeten.',
    capBodySix: 'Permanent mössanvändningsrätt beviljas för följande tillfällen:',
    capBodySeven:
      'I tillägg beviljas permanent personlig mössanvändningsrätt åt utexaminerade diplomingenjörer från Turun Yliopisto eller Åbo Akademi under deras egen examensdag och -fest.',
    capListItemOne: 'Åt gulisarna under deras mössprvovningar',
    capListItemTwo: 'Kirkastusjuhlat',
    capListItemThree: 'Kör- och orkesteruppträdanden där teknolog- eller studentmössa hör till accessoarer',
    capListItemFour: 'Fantåg där teknolog- eller studentmössa hör till accessoarer',
    capListItemFive: 'Presentationer för gymnasieelever',
    capListItemSix: 'RekomBIOnaatio',
    capListItemSeven: 'Tietoteekkarien taistot',
    capListItemEight: 'Den nationella jäynätävlingen och andra TEKs evenemang, där teknologmössan hör till accessoarer',
    capListItemNine: 'Det officiella Wappulehti-tidningens försäljningsevenemang',
  },
};

const Cap = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const content = capContent[locale];

  return (
    <DefaultLayout>
      <Image src="/teekkarihattu.jpg" alt="Turun teekkarilakki" height="100vh" width="100%" />
      <Heading>{content.capHeadingOne}</Heading>
      <Text>{content.capBodyOne}</Text>
      <Heading>{content.capHeadingTwo}</Heading>
      <Text>{content.capBodyTwo}</Text>
      <Heading>{content.capHeadingThree}</Heading>
      <Text>{content.capBodyThree}</Text>
      <Heading>{content.capHeadingFour}</Heading>
      <Text>{content.capBodyFour}</Text>
      <Heading>{content.capHeadingFive}</Heading>
      <Text>{content.capBodyFive}</Text>
      <Heading>{content.capHeadingSix}</Heading>
      <Text>{content.capBodySix}</Text>
      <ul className="list-disc text-justify mx-16">
        <li>{content.capListItemOne}</li>
        <li>{content.capListItemTwo}</li>
        <li>{content.capListItemThree}</li>
        <li>{content.capListItemFour}</li>
        <li>{content.capListItemFive}</li>
        <li>{content.capListItemSix}</li>
        <li>{content.capListItemSeven}</li>
        <li>{content.capListItemEight}</li>
        <li>{content.capListItemNine}</li>
      </ul>
      <Text>{content.capBodySeven}</Text>
    </DefaultLayout>
  );
};

export default Cap;
