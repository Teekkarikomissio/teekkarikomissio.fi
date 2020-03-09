import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="fi">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="description"
            content="Teekkarikomissio (TK) on yhteensitova kontaktifoorumi Turussa toimiville teekkariyhdistyksille."
          />
          <meta name="keywords" content="teekkari, turku, tekniikka, opiskelu, yliopisto" />
          <meta name="author" content="Teekkarikomissio - Teknologkommission" />
          <meta name="theme-color" content="#A11C31" />
          <meta property="og:image" content="/tk-hero.jpg" />
          <link rel="shortcut icon" sizes="32x32" href="/tklogo.svg" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:600,800&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
