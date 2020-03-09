import React from 'react';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useTranslation from '../hooks/useTranslation';

import LocaleSwitcher from './LocaleSwitcher';

const Navigation = () => {
  const { locale, t } = useTranslation();

  const links = ['yhdistys', 'fukseille', 'teekkarilakki', 'kulttuuri', 'yrityksille'];

  const NavLink = ({ NavName = '' }) => (
    <div className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4">
      <Link href={`/[lang]/${NavName}`} as={`/${locale}/${NavName}`}>
        <a>{t(`${NavName}`)}</a>
      </Link>
    </div>
  );

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between flex-wrap bg-red-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="fill-current h-8 w-8 mr-2" src="/tklogo.svg" alt="TK logo" width="54" height="54" />
        <Link href="/[lang]" as={`/${locale}`}>
          <a className="font-semibold lg:text-xl md:text-sm tracking-tight">Teekkarikomissio</a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:border-white">
          <FontAwesomeIcon className="fill-current h-3 w-3" icon={faBars} />
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {links.map(link => {
            return <NavLink key={link} NavName={link} />;
          })}
        </div>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
