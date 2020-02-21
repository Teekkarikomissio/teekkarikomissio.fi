import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Hero = styled.img`
  max-width: 100%;
  display: block;
  margin: auto;
`;

export default () => {
  return (
    <Layout>
      <Hero src="/tk-hero.jpg" />
      <Title>Heipä hei!</Title>
      <p>
        Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille. TK on
        kaksikielinen yhdistys, ja puheenjohtajan äidinkieli on samalla Komission työkieli. Yhdistysrekisterissä TK on
        rekisteröity nimellä Teekkarikomissioyhdistys (Teknologkommissionsföreningen). Arkikäytössä tämä nimi kuitenkin
        olisi liian pitkä, joten yleensä puhutaan Teekkarikomissiosta tai lyhyesti ja ytimekkäästi TK:sta.
      </p>
      <Title> Mitä TK oikeastaan tekee?</Title>
      <p>
        Teekkarikomissio hoitaa jäsenyhdistyksilleen yhteisiä asioita, edustaa Turun teekkareita ylioppilaskunta-tasolla
        ja vastaa heidän korkeakoulupoliittisista kannanotoista. Lisäksi Komissio on tärkeä yhdyskanava Turussa
        toimiville teekkariyhdistyksille. Käytännössä Teekkarikomission järjestämään toimintaan kuuluu hallituksen ja
        yhdistyksen kokouksia, edustusmatkoja sekä enemmän tai vähemmän säännöllisiä tapahtumia.
      </p>
    </Layout>
  );
};
