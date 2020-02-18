import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => {
  return (
    <Layout>
      <Title>Heipä hei!</Title>
      {/* <img src="/tk-hero.jpg" /> */}
    </Layout>
  );
};
