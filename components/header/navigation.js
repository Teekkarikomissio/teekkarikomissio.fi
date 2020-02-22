import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  const links = [
    {
      href: '/yhdistys',
      label: 'Yhdistys',
    },
    {
      href: '/kulttuuri',
      label: 'Kulttuuri',
    },
    {
      href: '/yrityksille',
      label: 'Yrityksille',
    },
  ];

  const state = { menuOpen: false };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between flex-wrap bg-red-800 p-6">
      <a className="flex items-center flex-shrink-0 text-white mr-6" href="/">
        <img className="fill-current h-8 w-8 mr-2" src="./tklogo.svg" width="54" height="54" />
        <span className="font-semibold text-xl tracking-tight">Teekkarikomissio / Teknologkommission</span>
      </a>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {links.map(({ href, label }) => (
            <a
              key={`${href}${label}`}
              href={href}
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white mr-4"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
