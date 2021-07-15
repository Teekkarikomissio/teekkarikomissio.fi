import React from 'react';
import Markdown from 'markdown-to-jsx';

export default function Association(props) {
  const { associationPageContent } = props;

  const boardMembers = [
    {
      img: '/juhani.jpg',
      name: 'Juhani Kalske',
      position: 'Pääkomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/casimir.jpg',
      name: 'Casimir Ruohomaa',
      position: 'Varapääkomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/robert.jpg',
      name: 'Robert Kantero',
      position: 'Sihteeri ja viestintäkomissaari',
      responsibilities: 'Nettisivut, kalenteriasiat',
    },
    {
      img: '/ilona.jpg',
      name: 'Ilona Kairinen',
      position: 'Talouskomissaari',
      responsibilities: 'Yritysyhteistyö',
    },
    {
      img: '/merimari.jpg',
      name: 'Merimari Seppänen',
      position: 'Tapahtumakomissaari',
      responsibilities: 'Kastajaisten suunnittelu',
    },
    {
      img: '/niklas.jpg',
      name: 'Niklas Luomala',
      position: 'Kulttuurikomissaari',
      responsibilities: 'Fuksiasiat',
    },
  ];

  const BoardCard = ({ img, name, position, responsibilities }) => {
    return (
      <div>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p className="text-gray-700 text-lg my-4">{position}</p>
        <p className="text-gray-700 text-base">
          Muut vastuualueet: {responsibilities}
        </p>
      </div>
    );
  };

  console.log(associationPageContent);

  return (
    <div>
      <Markdown>{associationPageContent.fields.startingWords}</Markdown>
      <Markdown>{associationPageContent.fields.boardTitle}</Markdown>
      <img src={associationPageContent.fields.firstMember} alt="First member" />
      {boardMembers.map(({ img, name, position, responsibilities }) => (
        <BoardCard
          key={`${name}`}
          img={img}
          name={name}
          position={position}
          responsibilities={responsibilities}
        />
      ))}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/bhnx2gxvmzaa/environments/master/entries/7le6U0AJhAL6Ht9QrfbH8Q?access_token=bGonsARJb1zRfGF1Ly3BH7EUaBhjjrhd50PV7qRTtlA&locale=${locale}`
  );
  const associationPageContent = await res.json();

  if (associationPageContent.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      associationPageContent,
    },
  };
}
