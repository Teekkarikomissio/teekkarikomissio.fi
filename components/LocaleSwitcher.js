import React, { useCallback } from 'react';
import Router, { useRouter } from 'next/router';
import { locales } from '../static-translations/config';
import useTranslation from '../hooks/use-i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locale, t } = useTranslation('common');

  const handleLocaleChange = useCallback(
    event => {
      const regex = new RegExp(`^/(${locales.join('|')})`);
      Router.push(router.pathname, router.asPath.replace(regex, `/${event.currentTarget.value}`));
    },
    [router]
  );

  return (
    <button
      value={locale === 'sv' ? 'fi' : 'sv'}
      onClick={handleLocaleChange}
      className="mt-4 inline-flex text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent hover:text-yellow-400 hover:bg-white lg:mt-0"
    >
      <FontAwesomeIcon className="mr-2 h-4" icon={faLanguage} />
      {t(locale === 'sv' ? 'fi' : 'sv')}
    </button>
  );
}
