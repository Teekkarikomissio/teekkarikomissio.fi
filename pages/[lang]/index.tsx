import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import useTranslation from '../../hooks/useTranslation';

const Homepage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout titleKey="indexTitle">
      <HeaderPicture img="/banner-index.jpg" alt="Teekkarikomissio" />
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <div className="text-gray-900 font-bold text-xl mb-2">{t('homeHeading')}</div>
          <p className="text-left text-gray-700 text-base mb-2">{t('homeContent')}</p>
        </div>
      </div>

      <div className="my-16 text-black flex flex-row justify-around items-center">
        <img className="flex h-48" src="/logo-utu.png" alt="Utu logo" />
        <FontAwesomeIcon className="flex h-32" icon={faTimes} />
        <img className="flex h-48" src="/logo-AboAkademi.png" alt="Åbo akademi logo" />
      </div>

      <div className="my-16 flex flex-row justify-between items-center">
        <img
          className="rounded-lg flex-none shadow-2xl bg-cover text-center h-2/5 w-2/5 overflow-hidden"
          src="/paavon-lakitus.jpg"
          alt="Paavon lakitus"
        />
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Turun teekkarien yhteisiä tapahtumia</div>
            <p className="text-gray-700 text-base">
              Järjestämme vuoden aikana teekkariyhteisölle perinteikkäitä ja verkostoa yhdistäviä tapahtumia.
            </p>
          </div>
        </div>
      </div>

      <div className="my-16 flex flex-row-reverse justify-between items-center">
        <img
          className="rounded-lg flex-none shadow-2xl bg-cover text-center h-2/5 w-2/5 overflow-hidden"
          src="/paavon-lakitus.jpg"
          alt="Paavon lakitus"
        ></img>
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(Homepage);
