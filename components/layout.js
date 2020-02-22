import Head from 'next/head';

import Header from './header/header';
import Navigation from './header/navigation';
import Footer from './footer';

export default ({ children }) => {
  return (
    <div className="flex flex-col text-center">
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
        <link rel="shortcut icon" sizes="32x32" href="/tklogo.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" />
      </Head>
      <Navigation />
      <Header />
      <div className="container mx-auto px-4"> {children}</div>
      <Footer />
    </div>
  );
};
