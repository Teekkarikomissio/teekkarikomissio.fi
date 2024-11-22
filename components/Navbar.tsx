'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import LocaleSwitcher from './locale-switcher'

import tklogo from '../public/logos/tklogo.svg'
import { Locale } from '../i18n-config'
import { cn } from '@/lib/utils'
import { LanguageSpecificPaths } from '@/types'

interface NavigationBarProps {
  lang: Locale
  contentFolders: {
    href: string
    slug: string
    meta: {
      [key: string]: any
    }
    content: string
  }[]
}

type NavigationLabels = Record<string, string>

export default function Navbar({
  lang,
  contentFolders,
}: NavigationBarProps) {
  const [isOpen, toggleOpen] = useState(false)

  let paths: Record<string, string>;
  if (lang === 'sv') { 
    paths = {
    "indexTitle": "/",
    "yhdistys": "/foreningen",
    "fukseille": "/gulis",
    "teekkarilakki": "/teknologmossa",
    "kulttuuri": "/kultur",
    "yrityksille": "/till-foretag",
    "jaynakilpailut": "/jaynatavlingen",
    "dokumentit": "/dokument",
    "tapahtumat": "/evenemang",
    "ongelmatilannelomake": "/trakasserianmalan"
  }}

  if (lang === 'fi') {
    paths = {
    "indexTitle": "/",
    "yhdistys": "/yhdistys",
    "fukseille": "/fukseille",
    "teekkarilakki": "/teekkarilakki",
    "kulttuuri": "/kulttuuri",
    "yrityksille": "/yrityksille",
    "jaynakilpailut": "/jaynakilpailut",
    "dokumentit": "/dokumentit",
    "tapahtumat": "/tapahtumat",
    "ongelmatilannelomake": "/ongelmatilannelomake"
    }
  }

  const NavbarBrand = () => (
    <div className="flex items-center justify-center text-white">
      <Image className="fill-current h-8 w-8 mr-2" src={tklogo} alt="TK logo" />
      <Link href={`/${lang}/`}>Teekkarikomissio</Link>
    </div>
  )

  const NavbarLinks = () => (
    <div className="text-white flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 lg:text-center text-left lg:mb-0 mb-4">
      {contentFolders.map((folder) => {
        const href = `/${lang}/${folder}`
        return (
          <NavigationMenuItem key={folder.slug}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {folder.slug}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )
      })}
    </div>
  )

  const NavigationMenuDemo = () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {contentFolders.map((folder) => (
                <ListItem
                  key={folder.slug}
                  title={folder.slug}
                  href={folder.href}
                >
                  {folder.slug}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = 'ListItem'

  const NavbarSheet = () => {
    return (
      <Sheet>
        <SheetTrigger className="rounded-none capitalize pl-1">
          <span className="lg:hidden inline-flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white">
            <Menu size={24} />
          </span>
        </SheetTrigger>
        <SheetContent className="bg-red-800">
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="flex-col items-start space-x-0">
              <Image
                className="fill-current h-8 w-8 mr-2 mb-4"
                src={tklogo}
                alt="TK logo"
              />
              <NavbarLinks />
              <LocaleSwitcher paths={paths} lang={lang} />
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="sticky top-0 z-10 bg-red-800 p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <NavbarBrand />
          <NavbarSheet />
        </div>
        <div className="flex items-center">
          <div
            className={`lg:flex ${
              isOpen ? 'flex' : 'hidden'
            } flex-col items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row w-full`}
          >
            <NavigationMenuDemo />
            <LocaleSwitcher paths={paths} lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  )
}
