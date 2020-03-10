import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import useTranslation from '../../hooks/useTranslation';

const Yhdistys: React.FC = () => {
  const { t } = useTranslation();

  const boardMembers = [
    {
      img: '/tklogo.svg',
      name: 'Jeremi Nyyssönen',
      position: 'Puheenjohtaja',
      responsibilities: 'Puheenjohtaja',
    },
    {
      img: '/tklogo.svg',
      name: 'Miika Peltotalo',
      position: 'Koulutuspoliittinen komissaari',
      responsibilities: 'Koulutuspolitiikka, nettisivut, vuosijuhlat',
    },
    {
      img: '/tklogo.svg',
      name: 'Casimir Ruohomaa',
      position: 'Varapääkomissaari',
      responsibilities: 'Valtuusto(vara), teekkarijohtajaforum',
    },
    {
      img: '/tklogo.svg',
      name: 'Juhani Kalske',
      position: 'Talouskomissaari',
      responsibilities: 'Valtuusto',
    },
    {
      img: '/tklogo.svg',
      name: 'Niklas Luomala',
      position: 'Kulttuurikomissaari',
      responsibilities: 'Paavo Nurmen patsaan lakittaminen, fuksiasiat, nuorten valiokunta',
    },
    {
      img: '/tklogo.svg',
      name: 'Ilona Kairinen',
      position: 'Tapahtumakomissaari,',
      responsibilities: 'Nuorten valiokunta(vara)',
    },
    {
      img: '/tklogo.svg',
      name: 'William Lindroos',
      position: 'Viestintäkomissaari,',
      responsibilities: 'Kalenteriasiat, viestintä-kv forum:',
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
      <div className="m-8 p-4 shadow-xl rounded-lg">
        <div className="flex flex-row flex-grow items-center justify-center ">
          <div className="w-1/3 h-auto items-center justify-center">
            <img className="  " src={img} alt={name} />
          </div>
          <div className="w-1/2 h-auto">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{position}</p>
            <p className="text-gray-700 text-base">{responsibilities}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey="yhdistys">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{t('associationHeading')}</div>
            <p className="text-left text-gray-700 text-base mb-2">{t('associationContent')}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-900 font-bold text-xl mb-2">Vuoden 2020 hallitus</h1>
        {boardMembers.map(({ img, name, position, responsibilities }) => (
          <BoardCard key={`${name}`} img={img} name={name} position={position} responsibilities={responsibilities} />
        ))}
      </div>
    </Layout>
  );
};

export default withLocale(Yhdistys);
