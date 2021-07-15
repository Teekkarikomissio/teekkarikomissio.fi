// import React, { useState } from 'react';
// import useTranslation from '../../hooks/useTranslation';

// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// import LocaleSwitcher from './LocaleSwitcher';

// const Navigation = () => {
//   const { locale, t } = useTranslation('nav');
//   const [isOpen, toggleOpen] = useState(false);

//   const links = [
//     'jaynakilpailut',
//     'kannanotto',
//     'yhdistys',
//     'fukseille',
//     'teekkarilakki',
//     'kulttuuri',
//     'yrityksille',
//   ];

//   const NavLink = ({ NavName = '' }) => (
//     <div className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white lg:mr-4">
//       <Link href={`/[lang]/${NavName}`} as={`/${locale}/${NavName}`}>
//         {t(NavName)}
//       </Link>
//     </div>
//   );

//   return (
//     <nav className="sticky top-0 z-10  bg-red-800 p-6">
//       <div className="container mx-auto lg:flex lg:flex-row lg:justify-between">
//         <div className="flex justify-between">
//           <div className="flex items-center flex-shrink-0 text-white mr-6">
//             <img
//               className="fill-current h-8 w-8 mr-2"
//               src="/tklogo.svg"
//               alt="TK logo"
//               width="54"
//               height="54"
//             />
//             <Link
//               className="font-semibold lg:text-xl md:text-sm tracking-tight"
//               href="/[lang]"
//               as={`/${locale}`}
//             >
//               {t('indexTitle')}
//             </Link>
//           </div>
//           <button
//             aria-label="Toggle menu"
//             onClick={() => toggleOpen(!isOpen)}
//             className="lg:hidden px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:border-white"
//           >
//             <FontAwesomeIcon className="fill-current h-3 w-3" icon={faBars} />
//           </button>
//         </div>
//         <div
//           className={
//             isOpen
//               ? ''
//               : 'w-full block lg:flex lg:w-auto hidden lg:block pt-6 lg:pt-0'
//           }
//         >
//           <div className="text-sm">
//             {links.map((link) => {
//               return <NavLink key={link} NavName={link} />;
//             })}
//             <LocaleSwitcher />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

import NavigationStyles from './Navigation.module.scss';

export const Navigation = () => {
  const { asPath, locale } = useRouter();

  const LocaleSwitcher = () => {
    const language = locale === 'fi' ? 'sv' : 'fi';
    return (
      <>
        <Link active={language} href={asPath} locale={language}>
          <a className={NavigationStyles['selector']}>
            <h4>{language.toUpperCase()}</h4>
            <FontAwesomeIcon icon={faLanguage} width="54" height="54" />
          </a>
        </Link>
      </>
    );
  };

  const Brand = () => {
    const brandName =
      locale === 'fi' ? 'Teekkarikomissio' : 'Teknologkommission';

    return (
      <>
        <Link href="/">
          <a>
            <h2>{brandName}</h2>
            <Image src="/tklogo.svg" alt="TK logo" width="54" height="54" />
          </a>
        </Link>
      </>
    );
  };

  const PageLink = (props) => {
    return (
      <>
        <Link href="/">
          <a>
            <h3>{props.pageName}</h3>
          </a>
        </Link>
      </>
    );
  };

  return (
    <nav role="navigation">
      <ul id="menu" className={NavigationStyles['menu']}>
        <li>
          <Brand />
        </li>
        <li>
          <PageLink pageName={'Yhdistys'} />
        </li>
        <li>
          <PageLink pageName={'Fukseille'} />
        </li>
        <li>
          <PageLink pageName={'Teekkarilakki'} />
        </li>
        <li>
          <PageLink pageName={'Kulttuuri'} />
        </li>
        <li>
          <PageLink pageName={'Yrityksille'} />
        </li>
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
    </nav>
  );
};
