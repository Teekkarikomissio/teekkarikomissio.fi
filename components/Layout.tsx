import React from 'react';
import Head from 'next/head';

import Navigation from './Navigation';
import Footer from './footer';
import useTranslation from '../hooks/useTranslation';

interface Props {
  titleKey: string;
}

const Layout: React.FC<Props> = ({ titleKey, children }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-center">
      <Head>
        <title>{t(titleKey)}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille."
        />
        <meta name="keywords" content="teekkari, turku, tekniikka, opiskelu, yliopisto" />
        <meta name="author" content="Teekkarikomissio - Teknologkommission" />
        <meta property="og:image" content="/tk-hero.jpg" />
        <link rel="shortcut icon" sizes="32x32" href="/tklogo.svg" />
      </Head>
      <Navigation />
      <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        }
      `}</style>
      <div className="lg:container mx-auto lg:px-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
