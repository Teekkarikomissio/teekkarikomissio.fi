"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

import LocaleSwitcher from "./locale-switcher";
import { ModeToggle } from "./ui/modeToggle";

import tklogo from "../public/logos/tklogo.svg";
import { Locale } from "../i18n-config";

interface NavigationBarProps {
  labels: NavigationLabels;
  paths: LanguageSpecificPaths;
  lang: Locale;
}

type NavigationLabels = Record<string, string>;

interface LanguageSpecificPaths {
  fi: FinnishPaths;
  sv: SwedishPaths;
}

type FinnishPaths = Record<string, string>;
type SwedishPaths = Record<string, string>;

export default function Navbar({
  labels,
  paths,
  lang,
}: NavigationBarProps) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10  bg-red-800 p-6 mb-8">
      <div className="container mx-auto lg:flex lg:flex-row lg:justify-between">
        <div className="flex justify-between">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image
              className="fill-current h-8 w-8 mr-2"
              src={tklogo}
              alt="TK logo"
            />
            <Link href={`/${lang}/`}>{labels["indexTitle"]}</Link>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => toggleOpen(!isOpen)}
            className="lg:hidden px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:border-white"
          >
            <Menu size={24} />
          </button>
        </div>
        <div
          className={
            isOpen
              ? ""
              : "w-full lg:flex lg:w-auto hidden pt-6 lg:pt-0 items-center text-center"
          }
        >
          <div className="text-sm items-center text-center flex flex-row space-x-1">
            {Object.keys(labels).map((key) => {
              // Exclude 'indexTitle' to avoid redundant home link in the navbar
              if (key !== "indexTitle") {
                const href = `/${lang}${paths[lang][key]}`;
                const label = labels[key];
                return (
                  <Link key={key} href={href}>
                    {label}
                  </Link>
                );
              }
            })}
            <LocaleSwitcher paths={paths} lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  );
}
