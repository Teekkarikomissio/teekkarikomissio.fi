import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fi: {
      indexTitle: "Teekkarikomissio",
      yhdistys: "Yhdistys",
      fukseille: "Fukseille",
      teekkarilakki: "Teekkarilakki",
      kulttuuri: "Kulttuuri",
      yrityksille: "Yrityksille",
      jaynakilpailut: "Jäynäkilpailut",
      viralliset: "Dokumentit",
      tapahtumat: "Tapahtumat",
    },
    sv: {
      indexTitle: "Teknologkommissionen",
      yhdistys: "Föreningen",
      fukseille: "Gulis",
      teekkarilakki: "Teknologmössa",
      kulttuuri: "Kultur",
      yrityksille: "Till Företag",
      jaynakilpailut: "Jäynätävlingen",
      viralliset: "Dokument",
      tapahtumat: "Evenemang",
    },
  };

  const textContent = translations[locale];

  const [isOpen, toggleOpen] = useState(false);

  const links = [
    "tapahtumat",
    "viralliset",
    "jaynakilpailut",
    "yhdistys",
    "fukseille",
    "teekkarilakki",
    "kulttuuri",
    "yrityksille",
  ];

  const NavLink = ({ NavName = "" }) => (
    <div className="block mt-4 lg:inline-block lg:mt-0 text-lg text-yellow-400 hover:text-white lg:mr-4">
      <Link href={NavName} as={`/${locale}/${NavName}`}>
        {textContent[NavName]}
      </Link>
    </div>
  );

  return (
    <nav className="sticky top-0 z-10  bg-red-800 p-6">
      <div className="container mx-auto lg:flex lg:flex-row lg:justify-between">
        <div className="flex justify-between">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img
              className="fill-current h-8 w-8 mr-2"
              src="/tklogo.svg"
              alt="TK logo"
              width="54"
              height="54"
            />
            <Link href="/" as={`/${locale}`}>
              {textContent.indexTitle}
            </Link>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => toggleOpen(!isOpen)}
            className="lg:hidden px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:border-white"
          >
            <FontAwesomeIcon className="fill-current h-3 w-3" icon={faBars} />
          </button>
        </div>
        <div
          className={
            isOpen
              ? ""
              : "w-full block lg:flex lg:w-auto hidden lg:block pt-6 lg:pt-0"
          }
        >
          <div className="text-sm">
            {links.map((link) => {
              return <NavLink key={link} NavName={link} />;
            })}
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const getServerSideProps = async ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  };
};

export default Navbar;
