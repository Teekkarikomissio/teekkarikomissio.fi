import React from "react";
import { useRouter } from "next/router";

import { H1, H2, H3, LongText } from "../components/Typography";

const JaynaCompetition = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      metaTitle: "Jäynäkilpailut",
      jaynacompetitionHeading:
        "Turun paikalliset jäynäkilpailut ovat käynnissä 30.1.–2.4.!",
      jaynajulistus: "Jäynäjulistus 2023",
      jaynaHeading1: "Teekkarikomissio järjestää jäynäkilpailun!",
      jaynaHeading2: "Millainen jäynän tulee olla?",
      jaynaHeading3: "Osallistuminen",
      jaynaHeading4: "Kiltasarja",
      jaynaText1:
        "Lähes joka vuosi TEK (Tekniikan Akateemiset) järjestää kansallisen jäynäkilpailun suomalaisille teekkareille. Kaikki teekkarikaupungit saavat osallistua kilpailuun yhdellä joukkueella. Teekkarikomissio järjestääkin nyt karsinnat, joiden voittaja pääsee edustamaan Turkua kansallisiin kilpailuihin. Turun karsintojen voittaja julistetaan Turun teekkariwapun aikana. Voittajajoukkue pääsee edustamaan Turkua vuoden 2023 jäynäkilpailuun, sekä saa hienoja palkintoja, mainetta ja kunniaa.",
      jaynaText2:
        "Kilpailun voittajan lisäksi palkitaan paras fuksijoukkue runsain palkinnoin ja erityismainnoin. Jokainen fuksijoukkue saa kiitokseksi osallistumisesta TEKin sponsoroimia palkintoja. Fuksijoukkueen kokoonpano on määritelty kilpailun säännöissä.",
      jaynaText3:
        "Hyväksytystä osallistumisesta palkitaan myös Virallisella jäynäkisahaalarimerkillä.",
      jaynaText4:
        "Jäynä ei saa tuhota kenenkään omaisuutta, jäynään ei saa kuulua varkautta, eikä jäynä saa aiheuttaa rahallisia kustannuksia. Jäynän tulee olla hyvän maun mukainen ja naurattaa tekijöitä, opiskelijoita sekä ulkopuolisia ihmisiä. Jäynä ei saa ottaa kantaa uskontoihin tai politiikkaan. Mitä enemmän ”teknistä osaamista” sitä korkealuokkaisempi jäynä",
      jaynaText5:
        "3§ ”Jäynän tarkoituksena on tuottaa hyväntahtoisesti riemua itselle, jäynän kohteelle ja suurelle yleisölle. Jäynä ei tosimielellä ota kantaa uskontoon tai politiikkaan. Se on luonteeltaan yllätyksellinen, tekniikan keinoja hyväksikäyttävä ja epäsovinnainen. Jäynä voi olla kestoltaan lyhyt tai pitkä.",
      jaynaText6:
        "Jäynä ei solvaa, rienaa, turmele, varasta tai tuhoa. Jäynä ei aiheuta kenellekään taloudellisia, henkisiä tai fyysisiä vaikeuksia. Jäynä ei saa kohdistua millään muotoa poliisi- tai pelastusviranomaisiin eikä tuomariston jäseneen.”",
      jaynaText7:
        "Kaikkien joukkueiden tulee toimittaa jäynädokumentaationsa Teekkarikomission hallitukselle (teekkarikomissio@lists.utu.fi) 2.4.2023 klo. 23.59 mennessä esimerkiksi kuva-, video- ja/tai kirjallisena materiaalina",
      jaynaText8:
        "Haluamme sinut edustamaan Turkua jäynäfinaaliin, joten perusta joukkue ja ala miettiä hyvää jäynää!",
      jaynaText9: "Lisää infoa Teekkarikomission kulttuurikomissaarilta.",
      jaynaText10: "Reetta Lindberg, resoli@utu.fi, 0453175825!",
      jaynaText11:
        "Teekkarikomissio toivottaa oikein hyvää wapun odotusta kaikille!",
      jaynaText12:
        "Lisäksi tänä vuonna pyörii jälleen Kiltasarja! Kiltasarjassa jokaista osallistuvaa kiltaa edustaa yksi (1) joukkue, jonka kaikkien jäsenten tulee olla edustamansa killan jäseniä. Kiltasarja tuomaroidaan ja palkitaan erikseen yleisestä sarjasta, johon myös kiltasarjan joukkueet tai joukkueiden jäsenet saavat osallistua (toki eri jäynällä). Kiltasarjan palkintona toimii silmiä hivelevä Jäynäpölkky, joka pääsee koristamaan voittajakillan kiltahuoneen/toimiston hyllyjä, kun taas jäynäämättä jättävien kiltasarjaan osallistuvien kiltojen seiniä koristaa jäynäkilpailuiden häpeädiplomi.  Muutoin kiltasarjaa koskevat samat säännöt kuin yleistäkin sarjaa.",
      jaynaRules: "Teekkarikomission teekkarijäynäkilpailun 2023 säännöt",
      jaynaRuleHeading1: "1§ Jäynäkilpailun tarkoitus",
      jaynaRuleHeading2: "2§ Osallistujat",
      jaynaRuleHeading3: "3§ Jäynän määritelmä",
      jaynaRuleHeading4: "4§ Toteuttamisvastuu",
      jaynaRuleHeading5: "5§ Jäynäjoukkue",
      jaynaRuleHeading6: "6§ Tuomaristo",
      jaynaRuleHeading7: "7§ Jäynäjulistus, kilpailuaika ja -paikka",
      jaynaRuleHeading8: "8§ Muuta huomioitavaa",
      jaynaRuleHeading9: "9§ Arvosteluperiaatteet",
      jaynaRuleHeading10: "10§ Voittajan julkistaminen ja palkitseminen",
      jaynaRuleHeading11: "11§ Sääntöjen tulkitseminen ja muuttaminen",
      jaynaRuleText1:
        "Jäynäkilpailun tarkoituksena on vaalia jäynäperinteitä, edistää teekkarikulttuuria, kohottaa teekkarihenkeä ja edistää teekkaribrändin näkyvyyttä Turussa sekä tuottaa hyvää mieltä jäynän kaikilla vaikutusalueilla.",
      jaynaRuleText2:
        "Jäynäkisaan voi osallistua joukkueita turkulaisista teekkarikilloista. Osallistuvien joukkueiden määrää ei ole rajoitettu. Kukin yhdistys ja joukkue olkoot tietoisia siitä, että joukkue edustaa jäynäkilpailussa paitsi itseään, myös edustamaansa yhdistystä ja Teekkarikomissiota.",
      jaynaRuleText3:
        "Jäynän tarkoituksena on tuottaa hyväntahtoisesti riemua itselle, jäynän kohteelle ja suurelle yleisölle. Jäynä ei tosimielellä ota kantaa uskontoon tai politiikkaan. Se on luonteeltaan yllätyksellinen, tekniikan keinoja hyväksikäyttävä ja epäsovinnainen. Jäynä voi olla kestoltaan lyhyt tai pitkä.",
      jaynaRuleText4:
        "Jäynä ei solvaa, rienaa, turmele, varasta tai tuhoa. Jäynä ei aiheuta kenellekään taloudellisia, henkisiä tai fyysisiä vaikeuksia. Jäynä ei saa kohdistua millään muotoa poliisi- tai pelastusviranomaisiin eikä tuomariston jäseneen.",
      jaynaRuleText5:
        "Osallistujat vastaavat itse kaikesta toiminnastaan kilpailun aikana.",
      jaynaRuleText6:
        "Joukkueen koko on kolmesta kahdeksaan (3–8) jäynääjää, joista vähintään puolet ovat teekkareita tai teekkarifukseja. Joukkueen tulee nimetä itselleen kapteeni, joka vastaa joukkueen viestinnästä tuomariston suuntaan. Joukkueen kapteenin tulee olla teekkari.",
      jaynaRuleText7:
        "Fuksijoukkue koostuu kolmesta kahdeksaan (3–8) jäynääjästä, joista enintään yksi on teekkari ja loput teekkarifukseja. Fuksijoukkueessa joukkueen kapteeni voi olla myös teekkarifuksi.",
      jaynaRuleText19:
        "Kiltasarjan joukkueen koko on kolmesta kahdeksaan (3-8) jäynääjää, joista kaikkien tulee olla edustamansa killan jäseniä.",
      jaynaRuleText8:
        "Säännöistä poikkeavaa joukkueen kokoonpanoa voi anoa hyväksyttäväksi Teekkarikomission hallitukselta.",
      jaynaRuleText9:
        "Tuomaristona toimii Teekkarikomission hallitus, joka kilpailuajan umpeuduttua päättää kokouksessaan voittajan. Kilpailun päätuomarina toimii istuva kulttuurikomissaari. Tuomariston tehtävänä on ohjata ja valvoa kilpailun kulkua. Lisäksi jokainen tuomariston jäsen on velvoitettu ohjeistamaan oman yhdistyksensä joukkueita sekä lisäämään jäynäkulttuuria ja -tietoisuutta yhdistyksessään kisojen jatkuvuuden takaamiseksi.",
      jaynaRuleText10:
        "Jäynäkilpailun aikataulun, kilpailuajan ja muut yksityiskohdat määrittelee Teekkarikomission hallitus jäynäjulistuksessa.",
      jaynaRuleText11:
        "Kilpailuajan umpeutuessa jäynädokumentaatio on oltava toimitettuna Teekkarikomission hallitukselle. Kilpailuaikana joukkueet tekevät yhden (1) mahdollisimman hauskan, ajankohtaisen, huomiota herättävän, teekkariperinteitä vaalivan sekä teekkarikulttuuria myönteisessä mielessä esiin tuovan jäynän. Kilpailussa toteuttamaansa jäynää joukkue ei ole saanut käyttää aikaisemmin.",
      jaynaRuleText12:
        "Kilpailualueena on Telluksen maa-, ilma ja vesialueet. Avaruudessa tehtäviä jäyniä varten pitää hakea erityislupa Teekkarikomissiolta.",
      jaynaRuleText13:
        "Näiden sääntöjen lisäksi on noudatettava EU:n lainsäädäntöä, Suomen lakia, suorituspaikkakunnalla voimassa olevaa järjestyssääntöä, hyviä tapoja sekä yleensä mitä mieleen muistuu.",
      jaynaRuleText14:
        "Kilpailun arvostelussa kiinnitetään huomiota erityisesti kohdassa kolme (3) mainittuihin seikkoihin. Joukkueiden tulee kiinnittää erityistä huomiota tekemiensä jäynien todennettavuuteen. Tämä voi tapahtua joko suullisesti, kirjallisesti, monumentaalisesti, visuaalisesti, magneettisesti tai muutoin saattamalla tehdyt jäynät Teekkarikomission tietoisuuteen arvostelua varten. Mieluiten jäynät tulee todentaa videoimalla. Teekkarikomission jäsenen voi myös tarvittaessa pyytää todentamaan jäynän toteutuksen paikan päälle.",
      jaynaRuleText15:
        "Teekkarikomissio julkistaa kilpailun tulokset erikseen ilmoitettuna ajankohtana, erikseen ilmoitetussa paikassa. Voittajille luovutetaan kiertopalkinto. Tämän lisäksi voittajat saavat mittaamattomasti mainetta ja kunniaa. Voittajajoukkueen jäsenet ovat oikeutettuja kantamaan Teekkarikomission määrittelemää punakeltaista jäynätupsua teekkarilakkiinsa kiinnitettynä sekä pääsevät edustamaan Turkua TEKin valtakunnalliseen teekkarijäynäkilpailuun.",
      jaynaRuleText16: "Näitä sääntöjä tulkitsee Teekkarikomission hallitus.",
      jaynaRuleText17:
        "Teekkarikomission hallitus voi yksimielisellä päätöksellä muuttaa sääntöjä. Sääntöjen muuttaminen tulee saattaa jäsenjärjestöjen tietouteen hyvissä ajoin, ellei kyseessä ole kesken kisojen tehtävä sääntömuutos, jolloin sääntömuutoksesta tulee ilmoittaa pikimmiten.",
      jaynaRuleText18:
        "Jäsenyhdistyksellä on oikeus riitauttaa tehdyt sääntömuutokset. Riitatilanteessa sääntömuutos käsitellään yhdistyksen kokouksessa. Sääntöjä voi tällöin muuttaa vähintään 3⁄4 enemmistöllä annetuista äänistä.",
    },
    sv: {
      metaTitle: "Jäynätavlingen",
      jaynacompetitionHeading:
        "Åbos regionala jäynätävlingar är i gång 30.1.–2.4.!",
      jaynajulistus: "Jäynämanifest 2023",
      jaynaHeading1: "Teknologkommissionen ordnar Teknologjäynätävling!",
      jaynaHeading2: "Hurdan skall en jäynä vara?",
      jaynaHeading3: "Deltagande",
      jaynaHeading4: "Föreningsserien",
      jaynaText1:
        "Nästan varje år håller TEK (Tekniikan Akateemiset) en nationell jäynätävling för alla Finlands teknologer. Alla teknologorter får bidra till tävlingen med ett lag. Teknologkommissionen ordnar ett kval varifrån vinnarlaget reser vidare till den nationella finalen för att tävla mot andra teknologorter. Teknologkommissionen kommer att utse årets vinnare under teknologwappen. Vinnarna får representera Åbo i jäynätävlingen år 2023 och kommer att få fina priser, ära och berömmelse.",
      jaynaText2:
        "Vid sidan om tävlingens vinnare så belönas också det bästa gulislaget med flera pris och omnämningar. Varje gulislag får TEK sponsorerade pris som tack för deltagande. Gulislagens konfiguration är klargjort i tävlingens regler.",
      jaynaText3:
        "För ett godkänt deltagande belönas man ytterligare med ett Officiellt jäynähalarmärke.",
      jaynaText4:
        "En jäynä får inte förstöra egendom, man får inte stjäla något och inte orsaka några ekonomiska förluster. Jäynän skall vara i god smak och försöka bidra glädje till såväl idkaren som för utomstående personer. En jäynä får inte ha religiöst eller politiskt syfte. Ju mera ”teknisk kunskap” som används desto mera högklassad blir jäynän.",
      jaynaText5:
        '3§ "Målet med jäynän är att skapa godhjärtad fröjd åt sig själv, jäynäns recipient och allmänna publiken. Jäynän tar inte seriöst del i politik eller religion. Den är överraskande, använder sig av teknik och är okenventionell. Jäynän kan hålla på en kort stund eller en längre tid.',
      jaynaText6:
        'Jäynän får ej förolämpa, fördärva, förstöra, stjäla eller orsaka helgerån. Jäynän får ej orsaka någon finansiella, fysiska, eller mentala problem. Jäynän får ej på något vis riktas mot polisen, räddningsmyndigheter eller juryn."',
      jaynaText7:
        "Alla lag skall skicka in sina tävlingsbidrag som fotodokument, videomaterial, skriftlig redogörelse eller som något annat passande sätt senast den 2.4.2023 kl. 23.59 till Teknologkommissionens styrelse (teekkarikomissio@lists.utu.fi).",
      jaynaText8:
        "Vi vill ha just dig att representera Åbo till jäynäfinalen så grunda ett lag direkt och börja fundera på en bra jäynä!",
      jaynaText9:
        "Mera information fås av Teknologkommissionens kulturkommissarie.",
      jaynaText10: "Reetta Lindberg, resoli@utu.fi, 0453175825",
      jaynaText11:
        "För övrigt önskar Teknologkommissionen er alla trevliga kommande wappen!",
      jaynaText12:
        "I år fortsätter också en tävlingsserie för ämnesföreningar! I Föreningsserien representeras varje ämnesförening av ett (1) lag, där alla lagets medlemmar hör till den representerade ämnesföreningen. Föreningsserien döms skilt från den allmänna serien. Föreningsseriens deltagare får också delta i den allmänna serien (dock med en annan jäynä). Föreningsseriens pris är Jäynäkubb, som den vinnande ämnesföreningen kan använda för att pryda deras kafferum. De ämnesföreningar som inte deltar i föreningsserien kommer däremot att få ett skamdiplom upphängt i deras föreningsutrymme. Föreningsserien har annars samma regler som den allmänna tävlingsserien.",
      jaynaRules: "Teknologkommissionens jäynätävling 2023 regler",
      jaynaRuleHeading1: "1§ Jäynätävlingens mening",
      jaynaRuleHeading2: "2§ Deltagare",
      jaynaRuleHeading3: "3§ Definition av jäynä",
      jaynaRuleHeading4: "4§ Genomförandeansvar",
      jaynaRuleHeading5: "5§ Jäynälag",
      jaynaRuleHeading6: "6§ Jury",
      jaynaRuleHeading7: "7§ Jäynämanifest, tävlingstid och -plats",
      jaynaRuleHeading8: "8§ Annat att tänka på",
      jaynaRuleHeading9: "9§ Bedömningskriterier",
      jaynaRuleHeading10: "10§ Utseende och belöning av vinnarna",
      jaynaRuleHeading11: "11§ Tolkande och ändrande av reglerna",
      jaynaRuleText1:
        "Jäynätävlingens mening är att underhålla jäynätraditionerna, framföra teknologkultur, upphöja teknologanda och ge mera synlighet åt Åbos teknologbrand, samt framföra glädje på alla jäynäns fronter.",
      jaynaRuleText2:
        "Lag från teknologföreningar i Åbo kan delta i jäynätävlingen. Antalet deltagande lag är inte begränsat. Märk väl, att varje lag representerar inte endast sig själva, utan även sina respektive föreningar, samt Teknologkommissionen.",
      jaynaRuleText3:
        "Målet med jäynän är att skapa godhjärtad fröjd åt sig själv, jäynäns recipient och allmänna publiken. Jäynän tar inte seriöst del i politik eller religion. Den är överraskande, använder sig av teknik och är okenventionell. Jäynän kan hålla på en kort stund eller en längre tid.",
      jaynaRuleText4:
        "Jäynän får ej förolämpa, fördärva, förstöra, stjäla eller orsaka helgerån. Jäynän får ej orsaka någon finansiella, fysiska, eller mentala problem. Jäynän får ej på något vis riktas mot polisen, räddningsmyndigheter eller juryn.",
      jaynaRuleText5:
        "Deltagarna bär själva ansvaret över sina handlingar under hela tävlingen.",
      jaynaRuleText6:
        "Lagstorleken är mellan tre och åtta (3-8) jäynäre, varav minst hälften är teknologer eller teknologgulisar. Laget ska utse en kapten, som ansvarar för kommunikationen med juryn. Lagkaptenen bör vara teknolog.",
      jaynaRuleText7:
        "Gulislag består av tre till åtta (3-8) jäynäre, varav högst en är teknolog och resten är teknologgulisar. I gulislag kan lagkaptenen vara gulis.",
      jaynaRuleText19:
        "Ämnesförenings lags storlek är mellan tre och åtta (3-8) jäynäre, varav alla är medlemmar av gillet som de representerar.",
      jaynaRuleText8:
        "Man kan be Teknologkommissionens styrelse om lov att delta med ett lag som inte möter ovanstående regler.",
      jaynaRuleText9:
        "Teknologkommissionens styrelse fungerar som tävlingens jury. Då jäynätävlinges tid är slut, utser juryn en vinnare. Teknolokommissionens sittande kulturkommissarie fungerar som huvuddomare. Juryns uppgift är att vägleda och övervaka tävlingens gång. Däröver är varje jurymedlem förpliktad att guida sin egen förenings lag och öka jäynäkultur och - tillkännedom i sin förening för att försäkra tävlingarnas framtid.",
      jaynaRuleText10:
        "Jäynätävlingens tidtabell, tävlingstiden och andra detaljer bestämmer Teknologkommissionens styrelse i jäynämanifestet.",
      jaynaRuleText11:
        "Då tävlingstiden tar slut, bör jäynädokumentationen vara levererad åt Teknologkommissionens styrelse. Under tävlingstiden gör lagen en (1) så rolig, aktuell, iögonfallande och teknologtraditionerna befrämjande jäynä som möjligt. Jäynän använd i tävlingen får laget ej ha använt tidigare.",
      jaynaRuleText12:
        "Tävlingsområdet är Tellus land-, luft- och vattenområden. För jäynän utförda i rymden krävs särskilt tillstånd av Teknologkommissionen.",
      jaynaRuleText13:
        "Utöver dessa regler, bör följas även EU:s lagstiftning, Finlands lag, rådande ordningsregler, goda seder och annat man kan råka tänka sig.",
      jaynaRuleText14:
        "I tävlingens bedömning tas speciellt i beaktande artiklarna nämnda i paragraf tre (3). Lagen bör lägga stor uppmärksamhet på sin jäynäs verifierbarhet. Detta kan ske oralt, per text, monumentalt, visuellt, magnetiskt, eller på annat vis utsläppa jäynän in för bedömning åt juryn. Helst verifieras jäynörnä genom att filma dem. Vid behov kan man även be en medlem av Teknologkommissionen att komma på plats för att verifiera jäynän.",
      jaynaRuleText15:
        "Teknologkommissionen offentliggör tävlingens resultat under en särskilt nämnd tid, på ett särskilt nämnt ställe. Vinnarna får ett vandrande pris. Utöver detta, får vinnarna också omätbar ära och berömmelse. Medlemmarna i det vinnande laget är berättigade att bära Teknologkommissionens fastställda rödgula jäynätofs i sin tofsmössa och får representera Åbo i TEKs nationella teknologjäynätävling.",
      jaynaRuleText16: "Teknologkommissionens styrelse tolkar dessa regler.",
      jaynaRuleText17:
        "Teknologkommissionens styrelse kan med ett enigt beslut ändra på reglerna. Ändringar på reglerna måste göras kända för medlemsföreningarna i god tid, ifall ändringarna i fråga inte sker under tävlingstiden. I så fall, ska ändringarna meddelas så fort som möjligt.",
      jaynaRuleText18:
        "Medlemsföreningarna har möjlighet att överklaga regeländringar. I såna fall behandlas överklagelsen på föreningens möte. Där kan reglerna ändras med minst en 3⁄4 majoritetsröst.",
    },
  };

  const textContent = translations[locale];

  return (
    <>
      <H2>{textContent.jaynacompetitionHeading}</H2>
      <br></br>
      <H1>{textContent.jaynajulistus}</H1>
      <H3 className="max-w-prose">{textContent.jaynaHeading1}</H3>
      <LongText>{textContent.jaynaText1}</LongText>
      <LongText>{textContent.jaynaText2}</LongText>
      <LongText>{textContent.jaynaText3}</LongText>
      <H3>{textContent.jaynaHeading4}</H3>
      <LongText>{textContent.jaynaText12}</LongText>
      <H3>{textContent.jaynaHeading2}</H3>
      <LongText>{textContent.jaynaText4}</LongText>
      <LongText>{textContent.jaynaText5}</LongText>
      <LongText>{textContent.jaynaText6}</LongText>
      <H3>{textContent.jaynaHeading3}</H3>
      <LongText>{textContent.jaynaText7}</LongText>
      <LongText>{textContent.jaynaText8}</LongText>
      <LongText>{textContent.jaynaText9}</LongText>
      <LongText>{textContent.jaynaText10}</LongText>
      <LongText>{textContent.jaynaText11}</LongText>
      <br></br>
      <H1>{textContent.jaynaRules}</H1>
      <H3>{textContent.jaynaRuleHeading1}</H3>
      <LongText>{textContent.jaynaRuleText1}</LongText>
      <H3>{textContent.jaynaRuleHeading2}</H3>
      <LongText>{textContent.jaynaRuleText2}</LongText>
      <H3>{textContent.jaynaRuleHeading3}</H3>
      <LongText>{textContent.jaynaRuleText3}</LongText>
      <LongText>{textContent.jaynaRuleText4}</LongText>
      <H3>{textContent.jaynaRuleHeading4}</H3>
      <LongText>{textContent.jaynaRuleText5}</LongText>
      <H3>{textContent.jaynaRuleHeading5}</H3>
      <LongText>{textContent.jaynaRuleText6}</LongText>
      <LongText>{textContent.jaynaRuleText7}</LongText>
      <LongText>{textContent.jaynaRuleText19}</LongText>
      <LongText>{textContent.jaynaRuleText8}</LongText>
      <H3>{textContent.jaynaRuleHeading6}</H3>
      <LongText>{textContent.jaynaRuleText9}</LongText>
      <H3>{textContent.jaynaRuleHeading7}</H3>
      <LongText>{textContent.jaynaRuleText10}</LongText>
      <LongText>{textContent.jaynaRuleText11}</LongText>
      <LongText>{textContent.jaynaRuleText12}</LongText>
      <H3>{textContent.jaynaRuleHeading8}</H3>
      <LongText>{textContent.jaynaRuleText13}</LongText>
      <H3>{textContent.jaynaRuleHeading9}</H3>
      <LongText>{textContent.jaynaRuleText14}</LongText>
      <H3>{textContent.jaynaRuleHeading10}</H3>
      <LongText>{textContent.jaynaRuleText15}</LongText>
      <H3>{textContent.jaynaRuleHeading11}</H3>
      <LongText>{textContent.jaynaRuleText16}</LongText>
      <LongText>{textContent.jaynaRuleText17}</LongText>
      <LongText>{textContent.jaynaRuleText18}</LongText>
    </>
  );
};

export default JaynaCompetition;
