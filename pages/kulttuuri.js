import { withTranslation } from '../i18n';

import Layout from '../components/layout';

const Culture = ({ t }) => {
  const eventInfo = [
    {
      img: '/event-excu.jpg',
      heading: 'Tukholman excursio',
    },
    {
      img: '/event-fia.jpg',
      heading: 'TK fiacup',
    },
    {
      img: '/event-jaynastartti.jpg',
      heading: 'Paikallisten jäynäkilpailuiden starttaaminen',
    },
    {
      img: '/event-preldprowet.jpg',
      heading: 'TK:n wappuinen PREldproWET',
    },
    {
      img: '/tklogo.svg',
      heading: 'Eldprowet',
    },
    {
      img: '/event-sitz.jpg',
      heading: 'TK:n kiltojen väliset sitsit',
    },
    {
      img: '/event-paavo.jpg',
      heading: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/event-sommar.jpg',
      heading: 'Sommarträff',
    },
  ];

  const EventCard = ({ img, heading }) => {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ml-4 mr-4 p-4 shadow-xl">
        <div className="items-center justify-center">
          <img src={img} alt={heading} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Kulttuuri">
      <div className="font-bold text-xl mb-2">{t('culture:heading')}</div>
      <div className="md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 sm:block ">
        {eventInfo.map(({ img, heading }) => (
          <EventCard key={`${heading}`} img={img} heading={heading} />
        ))}
      </div>
      <h2></h2>
    </Layout>
  );
};

Culture.getInitialProps = async () => ({
  namespacesRequired: ['culture', 'nav'],
});

export default withTranslation('culture')(Culture);
