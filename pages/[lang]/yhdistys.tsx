import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import { H1, H2, LongText } from '../../components/Typography';
import useTranslation from '../../hooks/useTranslation';

const Yhdistys: React.FC = () => {
  const { t } = useTranslation();

  const boardMembers = [
    {
      img: '/tklogo.svg',
      name: 'Jeremi Nyyssönen',
      position: 'Puheenjohtaja',
      responsibilities: 'Paavo Nurmen patsaan lakitus',
    },
    {
      img: '/tklogo.svg',
      name: 'Miika Peltotalo',
      position: 'Koulutuspoliittinen komissaari',
      responsibilities: 'Nettisivut, vuosijuhlat',
    },
    {
      img: '/tklogo.svg',
      name: 'Casimir Ruohomaa',
      position: 'Varapääkomissaari',
      responsibilities: 'TEK valtuusto, teekkarijohtajaforum',
    },
    {
      img: '/tklogo.svg',
      name: 'Juhani Kalske',
      position: 'Talouskomissaari',
      responsibilities: 'TEK valtuusto',
    },
    {
      img: '/tklogo.svg',
      name: 'Niklas Luomala',
      position: 'Kulttuurikomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakitus, fuksiasiat, TEK nuorten valiokunta, jäynäkisat',
    },
    {
      img: '/tklogo.svg',
      name: 'Ilona Kairinen',
      position: 'Tapahtumakomissaari,',
      responsibilities: 'Tapahtumat, TEK nuorten valiokunta',
    },
    {
      img: '/tklogo.svg',
      name: 'William Lindroos',
      position: 'Viestintäkomissaari',
      responsibilities: 'Kalenteriasiat, viestintä- ja kv-forum',
    },
    {
      img: '/tklogo.svg',
      name: 'Hektor Dahlberg',
      position: 'Sihteeri',
      responsibilities: 'Teekkarikulttuuriforum',
    },
  ];

  interface BoardCardProps {
    img: string;
    name: string;
    position: string;
    responsibilities: string;
  }

  const BoardCard: React.FC<BoardCardProps> = ({ img, name, position, responsibilities }) => {
    return (
      <div className="max-w-full items-center justify-center rounded-lg shadow-xl m-8">
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center p-4">
          <img className="w-64" src={img} alt={name} />
          <div className="w-2/3 flex flex-col items-center justify-center h-auto lg:ml-4 mb-4">
            <H2>{name}</H2>
            <p className="text-gray-700 text-lg my-4">{position}</p>
            <p className="text-gray-700 text-base">Muut vastuualueet: {responsibilities}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey="yhdistys">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white flex flex-col justify-between leading-normal">
          <H1>{t('associationHeading')}</H1>
          <LongText>{t('associationContent')}</LongText>
        </div>
      </div>
      <div>
        <H2>Vuoden 2020 hallitus</H2>
        <div className="border-b-4 border-solid border-blue-700 lg:border-blue-700 my-4" />
        <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4 md:block">
          {boardMembers.map(({ img, name, position, responsibilities }) => (
            <BoardCard key={`${name}`} img={img} name={name} position={position} responsibilities={responsibilities} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(Yhdistys);
