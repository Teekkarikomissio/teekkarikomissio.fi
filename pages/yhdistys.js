import Layout from '../components/layout';

export default () => {
  return (
    <Layout title="Yhdistys">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Mitä TK oikeastaan tekee?</div>
            <p className="text-gray-700 text-base">
              Teekkarikomissio hoitaa jäsenyhdistyksilleen yhteisiä asioita, edustaa Turun teekkareita
              ylioppilaskunta-tasolla ja vastaa heidän korkeakoulupoliittisista kannanotoista. Lisäksi Komissio on
              tärkeä yhdyskanava Turussa toimiville teekkariyhdistyksille. Käytännössä Teekkarikomission järjestämään
              toimintaan kuuluu hallituksen ja yhdistyksen kokouksia, edustusmatkoja sekä enemmän tai vähemmän
              säännöllisiä tapahtumia.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
