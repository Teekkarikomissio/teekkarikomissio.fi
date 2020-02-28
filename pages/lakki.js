import { withTranslation } from '../i18n';

import Layout from '../components/layout';

const Cap = ({ t }) => {
  return (
    <Layout title="Yhdistys">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Teekkarilakki ja sen käyttö</div>
            <p className="text-left text-gray-700 text-base mb-2">
              Teekkarilakki on teekkarin tunnus. Turun yliopiston ja Åbo Akademin teekkarilakki on tupsulakki, jossa on
              valkoinen pyöreä samettipäällys, musta samettireuna ja musta lippa sekä musta silkkitupsu. Lakin mustaan
              samettireunukseen lipan keskikohdalle on kiinnitetty Turun yliopiston tai Åbo Akademin ylioppilaskunnan
              kultainen kokardi riippuen minkä yliopiston al la lakkia käytetään. Turun yliopiston lakin vuori on
              sinivalkoinen ja Åbo Akademin lakin vuori keltamusta. Lakit tilaa Teekkarikomission hallitus yhdessä
              kiltojen kanssa.
            </p>
            <p className="text-left text-gray-700 text-base mb-2">
              Turkulaista teekkarilakkia ovat oikeutettuja käyttämään Turun yli opistosta tai Åbo Akademista diplomi -
              insinööriksi valmistuneet henkilöt sekä Turun yliopistossa tai Åbo Akademissa opiskelevat tekniikan
              ylioppilaat, tai ne, joille lakki on kertaalleen myönnetty.
            </p>
            <p className="text-left text-gray-700 text-base mb-2">
              Teekkarikomissio myöntää lakinkäyttöoikeuden ja lakki voidaan myöntää aikaisintaan ensimmäisen
              opiskeluvuoden vappuaattona. Jokainen kilta luovuttaa lakin aikaisintaan 30.4. omien kriteereidensä
              mukaan.
            </p>
            <p className="text-left text-gray-700 text-base mb-2">
              Lakkia ei saa luovuttaa henkilölle, jolla ei ole turkulaisen teekkar ilakin kanto - oikeutta. 30.4. klo
              18.00 – 30.9. klo 23.59 välisenä aikana lakkia voi käyttää vapaasti. Muina aikoina Teekkarikomission
              hallituksen päätöksellä voidaan myöntää lupa käyttöön tai hallitus voi säätää pysyväisohjesäännön
              vuosittaisia tapahtumia varten. Lakin käyttöoikeutta haetaan kirjallisesti. Hallitus merkitsee myönnetyt
              ja evätyt käyttöoikeudet hallituksen kokouksen pöytäkirjoihin. Lakin kanssa vaatetuksen ja käytöksen tulee
              olla lakin arvolle sopivaa ja riittävää. Liiallisessa päihtymistilassa lakki tulisi piilottaa sen maineen
              säilyttämiseksi.
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">Pysyväisohjesääntö</div>
            <p className="text-left text-gray-700 text-base mb-2">
              Myönnetään pysyvä lakinkäyttöoikeus seuraaviin tilaisuuksiin: - Lippuairueessa toimiville ja kulkueissa,
              joissa kaikille kuuluu asusteeksi teekkari- tai ylioppilaslakki - Virallinen Wappulehden myyntitapahtuma -
              Valtakunnallinen jäynäkilpailu - Tietoteekkarien taistot - RekomBIOnaatio - ATK - YTP - Lukioesittelyt -
              Kuoro - ja orkesteriesiintymiset, joihin kaikille kuuluu asusteena ylioppilaslakki - TEKin tapahtumat,
              joissa asusteeseen kuuluu teekkarilakki
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Cap.getInitialProps = async () => ({
  namespacesRequired: ['cap', 'nav'],
});

export default withTranslation('cap')(Cap);
