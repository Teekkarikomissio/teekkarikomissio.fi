import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './header/header';
import Footer from './footer';

export default ({ children }) => {
  const size = {
    small: '48em', // 768px
    medium: '64em', // 1024px
    large: '85.375em', // 1366px
    xlarge: '120em', // 1920px
    xxlarge: '160em', // 2560px
  };

  const device = {
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    xlarge: `(min-width: ${size.xlarge})`,
    xxlarge: `(min-width: ${size.xxlarge})`,
    retina: `(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
  };

  const themeColors = {
    tkblue: '#313186',
    tkred: '#a11c31',
    tkyellow: '#FDEF12',
    tkgold: '#FBCC7A',
  };

  const typography = {
    fontFamily: 'roboto',
    baseFontSize: '0.8em',
    baseLineHeight: '1.5',
    headerLineHeight: '1.25',
  };

  const GlobalStyle = createGlobalStyle`
    body {
      font-size: ${typography.baseFontSize};
      line-height: ${typography.baseLineHeight};
      font-family: ${typography.fontFamily};

      h1, h2, h3, h4, h5, h6 {
        line-height: ${typography.headerLineHeight};
      }

      margin: 0;

      @media ${device.medium} {
        font-size: ${typography.baseFontSize} * 1.2;
        line-height: ${typography.baseLineHeight} * 1.2;
    
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: ${typography.headerLineHeight} * 1.2;
        }
      }
    
      @media ${device.large} {
        font-size: ${typography.baseFontSize} * 1.3;
      }
    
      @media ${device.xlarge} {
        font-size: ${typography.baseFontSize} * 1.4;
      }
    
      @media ${device.xxlarge} {
        font-size: ${typography.baseFontSize} * 1.6;
      }
    }

    ul {
      list-style-type: none;
    }
    
    p {
      font-weight: 300;
    }
  `;

  const Layout = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  `;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>Teekkarikomissio - Teknologkommission</title>
          <meta charSet="utf-8" />
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
        <Header theme={themeColors} />
        {children}
        <Footer theme={themeColors} />
      </Layout>
    </>
  );
};
