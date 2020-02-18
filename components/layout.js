import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

export default ({ children }) => {
  const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

  const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  };

  const Layout = styled.div`
    margin: auto;
    text-align: center;

    @media ${device.laptop} {
      max-width: 800px;
    }

    @media ${device.desktop} {
      max-width: 1400px;
    }
  `;

  const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid gray;
    box-shadow: 5px 5px #ccc;
    padding: 10px;
    margin: 10px;

    // Switch to rows on large devices
    @media ${device.laptop} {
      flex-direction: row;
    }
  `;

  return (
    <Layout>
      <Head>
        <title>Teekkarikomissio - Teknologkommission</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille."
        />
        <meta name="keywords" content="teekkari, turku" />
        <meta name="author" content="Teekkarikomissio - Teknologkommission" />
        <meta name="theme-color" content="#A11C31" />
        <meta property="og:image" content="/tk-hero.jpg" />
        <link rel="shortcut icon" sizes="32x32" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" />
      </Head>
      <Header />
      <CardWrapper>{children}</CardWrapper>
      <Footer />
    </Layout>
  );
};
