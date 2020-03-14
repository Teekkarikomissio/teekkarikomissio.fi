import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, H2, ShortText } from '../../components/Typography';
import useTranslation from '../../hooks/useTranslation';

const Homepage: React.FC = () => {
  const { t } = useTranslation();

  const partners = [
    {
      img: '/logo-tek.png',
      alt: 'TEK',
      href: 'https://www.tek.fi/',
    },
    {
      img: '/logo-tfif.svg',
      alt: 'TFiF',
      href: 'https://tfif.fi/',
    },
  ];

  interface PartnerCardProps {
    img: string;
    href: string;
    alt: string;
  }

  const PartnerCard: React.FC<PartnerCardProps> = ({ img, href, alt }) => {
    return (
      <div className="flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8 p-4">
        <a href={href}>
          <img src={img} alt={alt} />
        </a>
      </div>
    );
  };

  return (
    <Layout titleKey="indexTitle">
      <HeaderPicture img="/index-banner.jpg" alt="Teekkarikomissio" />

      <div className="flex lg:flex-row flex-col items-center justify-center">
        <img className="lg:h-56 w-auto" src="/logo-utu.png" alt="Utu logo" />
        <img className="h-56 w-auto" src="/logo-AboAkademi.png" alt="Åbo akademi logo" />
      </div>

      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <H1>{t('homeHeading')}</H1>
          <ShortText>{t('homeContent')}</ShortText>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row justify-between items-center">
        <img
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-1/4 lg:w-1/4 overflow-hidden"
          src="/index-teekkari.jpg"
          alt="Teekkari"
        />
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>Turun teekkareiden yhteisiä tapahtumia</H2>
            <ShortText>
              Järjestämme vuoden aikana teekkariyhteisölle perinteikkäitä ja verkostoa yhdistäviä tapahtumia.
            </ShortText>
          </div>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row-reverse justify-between items-center">
        <img
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-1/4 lg:w-1/4 overflow-hidden"
          src="/index-jaynamerkki.jpeg"
          alt="Jäynämerkki"
        ></img>
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>Teekkarikulttuuria</H2>
            <ShortText>
              Teekkarikomissio järjestää vuosittain paikalliset jäynäkilpailut, joiden kautta valitaan Turun edustaja
              valtakunnallisiin jäynäkilpailuihin.
            </ShortText>
          </div>
        </div>
      </div>

      <div className="my-16 lg:flex lg:flex-row justify-between items-center">
        <img
          className="lg:rounded-lg flex-none lg:shadow-2xl bg-cover text-center lg:h-2/5 lg:w-2/5 overflow-hidden"
          src="/paavon-lakitus.jpg"
          alt="Paavon lakitus"
        ></img>
        <div className="bg-white mx-8 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H2>Paikallista ja valtakunnallista vaikuttamista</H2>
            <p className="text-gray-700 text-base">
              Edustamme turkulaista teekkariutta sekä paikallisesti, että valtakunnallisesti. Yhteisön äänitorvena
              otamme kantaa ja ajamme yhteisölle tärkeitä asioita.
            </p>
          </div>
        </div>
      </div>

      <H1>Yhteistyössä:</H1>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 md:block">
        {partners.map(({ img, href, alt }) => (
          <PartnerCard key={`${href}${alt}`} img={img} href={href} alt={alt} />
        ))}
      </div>
    </Layout>
  );
};

export default withLocale(Homepage);
