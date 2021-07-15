import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import isLocale from './isLocale';
import strings from './locales/fi';

export const LocaleContext = createContext({
  locale: {
    lang: 'fi', // default lang
    translations: strings.common,
    namespaces: ['common'],
  },
  setLocale: () => null,
});

export const LocaleProvider = ({
  lang,
  translations,
  namespaces,
  children,
}) => {
  const [locale, setLocale] = useState({ lang, translations, namespaces });
  const { query } = useRouter();

  useEffect(() => {
    if (locale.lang !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale.lang);
    }
  }, [locale.lang]);

  useEffect(() => {
    const { lang } = query;
    if (typeof lang === 'string' && isLocale(lang) && locale.lang !== lang) {
      setLocale({ lang, translations, namespaces });
    }
  }, [query.lang, locale.lang, query, translations, namespaces]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
