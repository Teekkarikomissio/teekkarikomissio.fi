import React from "react";
import { useRouter } from "next/router";

import { H1, H2, LongText } from "../components/Typography";

const Kulttuuri = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Kulttuuri",
      cultureHeading_neg1: "Teekkarihymni",
      cultureHeading_neg2: "Teekkarikomission kunniamerkki",
      cultureHeading: "Jäynäkulttuuri",
      cultureHeading1: "Kannanotto",
      cultureHeading2: "Teekkarikomission tapahtumat",
      cultureBody_neg1:
        "Turku on vahvasti kaksikielinen opiskelukaupunki, kuten myös paikallinen teekkareiden kirjo. Päätimme yhdessä kiltojemme kanssa konkreettisesti juhlistaa tätä monimuotoisuutta. Vuosien 2022-2024 strategiamme mukaan onkin erityisen tärkeää kehittää entistä tiiviimpää yhteistyötä yliopistojen välillä ja oppia toistemme kulttuureista.",
      cultureBody_neg2:
        "Teekkarihymnillä on jo entuudestaan pieniä paikallisia eroja. Olemmekin hyvin tyytyväisiä yhteiseen ponnistukseemme turkulaisen teekkariyhteisön laulukulttuurin yhtenäistämiseksi. Tuloksena on uusi Turkulainen version Teekkarihymnistä, jossa perinteisen tavan sijaan, lauletaan säkeistö ensin kertaalleen suomeksi, jonka jälkeen lauletaan ruotsinkielinen säkeistö. Sanat ja nuotit löytyvät kohdasta Dokumentit.",
      cultureBody:
        "Jäynäkilpailun tarkoituksena on vaalia jäynäperinteitä, edistää teekkarikulttuuria, kohottaa teekkarihenkeä ja edistää teekkaribrändin näkyvyyttä Turussa sekä tuottaa hyvää mieltä jäynän kaikilla vaikutusalueilla.",
      cultureBody1:
        "Jäynän tarkoituksena on tuottaa hyväntahtoisesti riemua itselle, jäynän kohteelle ja suurelle yleisölle. Jäynä ei tosimielellä ota kantaa uskontoon tai politiikkaan. Se on luonteeltaan yllätyksellinen, tekniikan keinoja hyväksikäyttävä ja epäsovinnainen. Jäynä voi olla kestoltaan lyhyt tai pitkä.",
      cultureBody2:
        "Jäynä ei solvaa, rienaa, turmele, varasta tai tuhoa. Jäynä ei aiheuta kenellekään taloudellisia, henkisiä tai fyysisiä vaikeuksia. Jäynä ei saa kohdistua millään muotoa poliisi- tai pelastusviranomaisiin eikä tuomariston jäseneen.",
      cultureBody3:
        "Teekkarikulttuuriin ei kuulu minkäänlainen häirintä, kiusaaminen tai epäasiallinen toiminta, eikä niitä tule katsoa läpi sormien. Tunnustamme kuitenkin tällaista tapahtuneen ja siksi pyydämme vilpittömästi teekkariyhteisönä anteeksi kaikilta huonon kohtelun uhreiksi joutuneilta.Teekkarikulttuurilla on vahvat ja vanhat perinteet, joista osa on hyviä ja osa huonoja. Hyvistä perinteistä pidetään kiinni, kun taas huonoja perinteitä muutetaan ja poistetaan. Teekkarikulttuuria kehitetään jatkuvasti yhdenvertaisemmaksi, avoimemmaksi ja saavutettavammaksi.",
      cultureBody4:
        "Työ on kuitenkin kesken. Monia syrjiviä ja epäasiallisia perinteitä ja rakenteita on saatu jo purettua, mutta urakkaa riittää yhä. Työhön on onneksi tarjolla tukea ylioppilaskunnalta, yliopistolta sekä valtakunnallisilta järjestöiltä. Lupaamme jatkossakin yhdessä rakentaa entistä rohkeammin epäkohtiin puuttuvaa teekkarikulttuuria.",
      cultureBody5:
        "Teekkariyhteisömme on valtavan laaja joukko erilaisia ihmisiä, joita yhdistää erityisesti kiinnostus tekniikkaan ja tupsulakki. Me haluamme, että jokainen yhteisön jäsen tuntee olonsa turvalliseksi ja tervetulleeksi.",
    },
    sv: {
      metaTitle: "Kultur",
      cultureHeading_neg1: "Teknologhymnen",
      cultureHeading_neg2: "Teknologkommissionens hedersmärke",
      cultureHeading: "Jäynäkultur",
      cultureHeading1: "Ställningsantagande",
      cultureHeading2: "Teknologkommissionens evenemang",
      cultureBody_neg1:
        "Åbo är en starkt tvåspråkig studiestad, vilket också syns i det lokala teknologspektret. Vi bestämde oss tillsammans med våra föreningar, att på ett konkret sätt fira denna mångfald. Enligt vår strategi för åren 2022-2024 är det speciellt viktigt för oss att vidare utveckla fortsättningsvis tätare samarbete universiteten sins emellan och lära oss från varandras kulturer.",
      cultureBody_neg2:
        "Teknologhymnen har redan från tidigare små skillnader mellan olika regioner. Vi är väldigt nöjda med vår gemensamma satsning för att förena den åboländska teknologsångkulturen. Det har resulterat i en ny Åboländsk version av Teknologhymnen, där man till skillnad från den traditionella hymnen, först sjunger den finska versen en gång och sedan den svenska. Orden och noterna hittas från sektionen Dokument.",
      cultureBody:
        "Syftet med jäynätävlingen är att värna om jäynätraditioner, befrämja teknologkulturen, förhöja teknologandan, göra teknologskapet mer synligt i Åbo och att sprida gott humör.",
      cultureBody1:
        "Jäynändet har för avsikt att skapa glädje i all välmening för en själv, föremålet av jäynän och åskådarna. En jäynä tar inte ställning till religion eller politik på allvar men är till sin karaktär överraskande och okonventionell och utnyttjar tekniska knep.",
      cultureBody2:
        "En jäynä ska inte förolämpa, förlöjliga, förstöra, stjäla eller skada. En jäynä ska inte förorsaka ekonomiska, juridiska, mentala eller fysiska svårigheter. En jäynä får under inga omständigheter vara riktad mot polis- eller räddningsmyndigheter eller jurymedlemmar.",
      cultureBody3:
        "Till teknologkulturen hör ingen form av trakasseri, mobbning eller oanständigt uppförande och vi får inte vända vår blick då sånt sker. Däremot är vi medvetna om att det verkligen har skett och vi i teknologgemenskapet vill därför ödmjukast be om förlåtelse för offren av dålig behandling. Teknologkulturen har gamla och starka traditioner, varav en del bra och andra dåliga. Vi håller hårt om de goda traditionerna, medan vi försöker ändra eller bli av med de dåliga. Teknologkulturen är levande och vi försöker hela tiden utveckla den mot mer jämnställdhet, öppenhet och tillgänglighet.",
      cultureBody4:
        "Arbetet är dock ännu i gång. Flera exkluderande och oanständiga traditioner och strukturer har vi redan tagit isär, men arbete finns ännu kvar att göra. Som tur får vi hjälp i detta arbete av studentkåren, universitetet och nationella föreningar. Vi lovar att även i fortsättningen bygga upp en teknologkultur som tar itu med sina brister.",
      cultureBody5:
        "Vårt teknologgemenskap består av en väldig mängd olika människor, som binds av ett särskilt intresse för teknologi, såväl som tofsmössan. Vi vill att varje medlem i vårt gemenskap kan känna sig trygg och välkommen.",
    },
  };

  const textContent = translations[locale];

  return (
    <>
      <H1>{textContent.cultureHeading_neg1}</H1>
      <LongText>{textContent.cultureBody_neg1}</LongText>
      <LongText>{textContent.cultureBody_neg2}</LongText>
      <H1>{textContent.cultureHeading_neg2}</H1>
      <iframe
        className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeVR8rR8ETs5XC7fUAeuadYzMHdDnOJ4UbD-2dV_KUkeeDKiQ/viewform?embedded=true"
        height="1337"
        frameborder="0"
      ></iframe>
      <H1>{textContent.cultureHeading}</H1>
      <iframe
        className="w-full min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://www.youtube.com/embed/GB0Lkq7Om24"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Valtakunnalliset jäynäkilpailut 2018"
      ></iframe>
      <LongText>{textContent.cultureBody}</LongText>
      <LongText>{textContent.cultureBody1}</LongText>
      <LongText>{textContent.cultureBody2}</LongText>
      <H2>{textContent.cultureHeading1}</H2>
      <LongText>{textContent.cultureBody3}</LongText>
      <LongText>{textContent.cultureBody4}</LongText>
      <LongText>{textContent.cultureBody5}</LongText>
    </>
  );
};

export default Kulttuuri;
