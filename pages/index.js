import React from 'react';

import Layout from '../components/layout';

export default () => {
  const guildInfo = [
    {
      img: '/logo-date.png',
      href: 'https://date.abo.fi/',
      heading: 'Datateknologerna vid Åbo Akademi rf',
      text: 'est. 1999',
    },
    {
      img: '/logo-digit.png',
      href: 'https://digit.fi/',
      heading: 'Digit ry',
      text: 'est. 1999',
    },
    {
      img: '/logo-kk.png',
      href: 'https://kemistklubben.abo.fi/',
      heading: 'Kemistklubben vid Åbo Akademi rf',
      text: 'est. 1923',
    },
    {
      img: '/logo-nucleus.png',
      href: 'https://nucleus.fi/',
      heading: 'Nucleus ry',
      text: 'est. 2008',
    },
  ];

  const GuildCard = ({ img, href, heading, text }) => {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 lg:w-1/4 ml-4 mr-4 p-4 shadow-xl">
        <a href={href}>
          <div className="items-center justify-center">
            <img src={img} alt={heading} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{heading}</div>
            <p className="text-gray-700 text-base">{text}</p>
          </div>
        </a>
      </div>
    );
  };

  return (
    <Layout>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Mikä on TK?</div>
            <p className="text-gray-700 text-base">
              Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille. TK on
              kaksikielinen yhdistys, ja puheenjohtajan äidinkieli on samalla Komission työkieli. Yhdistysrekisterissä
              TK on rekisteröity nimellä Teekkarikomissioyhdistys (Teknologkommissionsföreningen). Arkikäytössä tämä
              nimi kuitenkin olisi liian pitkä, joten yleensä puhutaan Teekkarikomissiosta tai lyhyesti ja ytimekkäästi
              TK:sta.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Jäsenyhdistykset</div>
            <p className="text-gray-700 text-base">
              Teekkarikomissiolla on neljä jäsentä - Turussa toimivat teekkariyhdistykset. Jokainen Digit ry:n, Nucleus
              ry:n, Datateknologerna vid Åbo Akademi rf:n tai Kemistklubben vid Åbo Akademi rf:n äänioikeutettu jäsen on
              siis automaagisesti oikeutettu osallistumaan TK:n toimintaan!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:p-8 md:block md:w-full">
        {guildInfo.map(({ img, href, heading, text }) => (
          <GuildCard img={img} href={href} heading={heading} text={text} />
        ))}
      </div>
    </Layout>
  );
};
