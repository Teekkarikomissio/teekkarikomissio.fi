import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fi">
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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
