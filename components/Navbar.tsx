'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Menu } from 'lucide-react'

import LocaleSwitcher from './locale-switcher'

import tklogo from '../public/logos/tklogo.svg'
import { Locale } from '../i18n-config'

interface NavigationBarProps {
  labels: NavigationLabels
  paths: LanguageSpecificPaths
  lang: Locale
}

type NavigationLabels = Record<string, string>

interface LanguageSpecificPaths {
  fi: FinnishPaths
  sv: SwedishPaths
}

type FinnishPaths = Record<string, string>
type SwedishPaths = Record<string, string>

interface MenuButtonProps {
  isOpen: boolean
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ labels, paths, lang }: NavigationBarProps) {
  const [isOpen, toggleOpen] = useState(false)

  const handleClick = () => {
    toggleOpen(false)
  }

  const NavbarBrand = () => (
    <div className="flex items-center justify-center text-white">
      <Image className="fill-current h-8 w-8 mr-2" src={tklogo} alt="TK logo" />
      <Link href={`/${lang}/`}>{labels['indexTitle']}</Link>
    </div>
  )

  const MenuButton = ({ isOpen, toggleOpen }: MenuButtonProps) => (
    <button
      aria-label="Toggle menu"
      onClick={() => toggleOpen(!isOpen)}
      className="lg:hidden px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white"
    >
      <Menu size={24} />
    </button>
  )

  const NavbarLinks = () => (
    <div className="text-white flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 text-center">
      {Object.keys(labels ?? {})
        .filter((key) => key !== 'indexTitle')
        .map((key) => {
          const path = paths[lang]?.[key]
          const label = labels[key]
          if (!path) {
            console.warn(`Path not found for key: ${key} and lang: ${lang}`)
            return null // Skip rendering this link
          }
          const href = `/${lang}${path}`
          return (
            <Link
              onClick={handleClick}
              className="hover:text-secondary whitespace-nowrap"
              key={key}
              href={href}
            >
              {label}
            </Link>
          )
        })}
    </div>
  )

  return (
    <nav className="sticky top-0 z-10 bg-red-800 p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <NavbarBrand />
          <MenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <div className="flex items-center">
          <div
            className={`lg:flex ${
              isOpen ? 'flex' : 'hidden'
            } flex-col items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row w-full`}
          >
            <NavbarLinks />
            <LocaleSwitcher paths={paths} lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  )
}
