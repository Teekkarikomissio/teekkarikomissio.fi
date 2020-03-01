import React from 'react';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';

import LocaleSwitcher from './LocaleSwitcher';

const Navigation = () => {
  const { locale, t } = useTranslation();

  return (
    <ul className="sticky top-0 z-10 flex items-center justify-between flex-wrap bg-red-800 p-6">
      <li className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="fill-current h-8 w-8 mr-2" src="/tklogo.svg" alt="TK logo" width="54" height="54" />
        <Link href="/[lang]" as={`/${locale}`}>
          <a className="font-semibold lg:text-xl md:text-sm tracking-tight">Teekkarikomissio / Teknologkommission</a>
        </Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4">
        <Link href="/[lang]/yhdistys" as={`/${locale}/yhdistys`}>
          <a>{t('yhdistys')}</a>
        </Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4">
        <Link href="/[lang]/teekkarius" as={`/${locale}/teekkarius`}>
          <a>{t('teekkarius')}</a>
        </Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4">
        <Link href="/[lang]/teekkarilakki" as={`/${locale}/teekkarilakki`}>
          <a>{t('teekkarilakki')}</a>
        </Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4">
        <Link href="/[lang]/kulttuuri" as={`/${locale}/kulttuuri`}>
          <a>{t('kulttuuri')}</a>
        </Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4">
        <Link href="/[lang]/yrityksille" as={`/${locale}/yrityksille`}>
          <a>{t('yrityksille')}</a>
        </Link>
      </li>
      <li>
        <LocaleSwitcher />
      </li>
    </ul>
    // <div >
    //   <div >

    //   </div>
    //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div className="text-sm lg:flex-grow">
    //       {links.map(({ href }) => (
    //         <div
    //           key={`${href}`}
    //           className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4"
    //         >
    //           <Link href={`/[lang]/${href}`} as={`/${locale}/${href}`}>
    //             <a>{t(`${href}`)}</a>
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <LocaleSwitcher />
    // </div>
  );
};

export default Navigation;
