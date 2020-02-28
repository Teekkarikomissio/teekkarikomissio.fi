import React, { useState, useEffect } from 'react';
import UserContext from '../user-context';
import { i18n, Link, withTranslation } from '../../i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ t }) => {
  const links = [
    {
      href: '/yhdistys',
      label: t('nav:association'),
    },
    {
      href: '/teekkarius',
      label: t('nav:being-technology-student'),
    },
    {
      href: '/lakki',
      label: t('nav:cap'),
    },
    {
      href: '/kulttuuri',
      label: t('nav:culture'),
    },
    {
      href: '/yrityksille',
      label: t('nav:for-companies'),
    },
  ];

  const contextType = UserContext;
  const menuOpen = useState(false);

  const toggleLang = () => {
    const { toggleLang } = this.context;
    toggleLang();
  };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between flex-wrap bg-red-800 p-6">
      <a className="flex items-center flex-shrink-0 text-white mr-6" href="/">
        <img className="fill-current h-8 w-8 mr-2" src="./tklogo.svg" width="54" height="54" />
        <span className="font-semibold lg:text-xl md:text-sm tracking-tight">
          Teekkarikomissio / Teknologkommission
        </span>
      </a>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {links.map(({ href, label }) => (
            <div
              key={`${href}${label}`}
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4"
            >
              <Link href={href} as={label.toLowerCase()}>
                <a>{label}</a>
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'fi' ? 'sv' : 'fi')}
          className="bg-transparent text-yellow-400 font-semibold py-2 px-4 border border-yellow-400 rounded-full hover:border-transparent hover:bg-yellow-400 hover:text-black"
        >
          <FontAwesomeIcon className="mr-2" icon={faLanguage} width="54" height="54" />
          <span>{t('nav:change-locale')}</span>
        </button>
      </div>
    </nav>
  );
};

Navigation.getInitialProps = async () => ({
  namespacesRequired: ['nav', 'common'],
});

export default withTranslation('nav')(Navigation);
