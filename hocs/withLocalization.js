import React from 'react';
import Error from 'next/error';
import { LocaleProvider } from '../static-translations/LocaleContext';
import isLocale from '../static-translations/isLocale';
import Router, { useRouter } from 'next/router';
import getInitialLocale from '../static-translations/getInitialLocale';

export default WrappedPage => {
  const WithLocale = ({ lang, translations, namespaces, ...pageProps }) => {
    const { asPath } = useRouter();

    if (!lang) {
      return <Error statusCode={404} />;
    }

    if (!isLocale(lang)) {
      if (process.window) {
        // if the specified param is not a valid locale, it might be a subpath without locale prefic
        Router.push(`/${getInitialLocale()}${asPath}`);
      }
    }

    if (!translations) {
      return <Error statusCode={500} />;
    }

    return (
      <LocaleProvider lang={lang} translations={translations} namespaces={namespaces}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.displayName = `withLocalization(WrappedPage)`;

  return WithLocale;
};
