import React from 'react';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);

  const handleLocaleChange = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${e.currentTarget.value}`));
    },
    [router]
  );

  return (
    <button
      value={locale === 'sv' ? 'fi' : 'sv'}
      onClick={handleLocaleChange}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent hover:text-yellow-400 hover:bg-white lg:mt-0"
    >
      <FontAwesomeIcon className="mr-2" icon={faLanguage} />
      {languageNames[locale === 'sv' ? 'fi' : 'sv']}
    </button>
  );
};

export default LocaleSwitcher;
