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
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`));
    },
    [router]
  );

  return (
    <div className="flex flex-row bg-transparent text-yellow-400 font-semibold py-2 px-3 border border-yellow-400 rounded   hover:text-black">
      <FontAwesomeIcon className="mr-2 h-8" icon={faLanguage} />
      <select
        className="bg-red-800 hover:border-transparent hover:text-black"
        value={locale}
        onChange={handleLocaleChange}
      >
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {languageNames[locale]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
