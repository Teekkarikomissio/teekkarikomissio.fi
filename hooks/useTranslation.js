import { useContext } from 'react';
import { LocaleContext } from '../static-translations/LocaleContext';

export default function useTranslation(namespace) {
  const { locale } = useContext(LocaleContext);
  const stringsForNamespace = locale.translations.find(translation => translation.namespace === namespace);

  function t(key) {
    if (!stringsForNamespace) {
      console.warn(`Namespace '${namespace}' for locale '${locale.lang}' not found.`);
      return key;
    }

    if (!stringsForNamespace.translatedStrings[key]) {
      console.warn(`Translation '${key}' for locale '${locale.lang}' not found.`);
    }
    return stringsForNamespace.translatedStrings[key] || key;
  }

  return {
    t,
    locale: locale.lang,
  };
}
