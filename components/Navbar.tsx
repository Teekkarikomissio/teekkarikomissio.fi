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
import { getFolderContents } from '@/lib/api'

import tklogo from '../public/logos/tklogo.svg'
import { Locale } from '../i18n-config'
import { cn } from '@/lib/utils'

const CONTENT_FOLDERS = getFolderContents('_content');

interface NavigationBarProps {
  labels: NavigationLabels
  paths: LanguageSpecificPaths
  lang: Locale
}

interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

interface NewNavBarProps {
  contentFolders: string[];
  navItems: Record<string, NavItem[]>;
  lang: string;
}

type NavigationLabels = Record<string, string>

interface LanguageSpecificPaths {
  fi: FinnishPaths
  sv: SwedishPaths
}

type FinnishPaths = Record<string, string>
type SwedishPaths = Record<string, string>

export default function Navbar({ labels, paths, lang }: NavigationBarProps) {
  const [isOpen, toggleOpen] = useState(false)

  const yhdistys: { title: string; href: string; description: string }[] = [
    {
      title: 'Yhdistys',
      href: '/fi/yhdistys',
      description: 'Mitä TK oikeastaan tekee?',
    },
    {
      title: 'Yhteystiedot',
      href: '/fi/yhdistys/yhteystiedot',
      description: 'Yhteystiedot',
    },
    {
      title: 'Dokumentit',
      href: '/fi/yhdistys/dokumentit',
      description: 'Dokumentit',
    },
  ]

  const fukseille: { title: string; href: string; description: string }[] = [
    {
      title: 'Yhdistys',
      href: '/fi/yhdistys',
      description: 'Mitä TK oikeastaan tekee?',
    },
  ]

  const kulttuuri: { title: string; href: string; description: string }[] = [
    {
      title: 'Yhdistys',
      href: '/fi/yhdistys',
      description: 'Mitä TK oikeastaan tekee?',
    },
  ]

  const tapahtumat: { title: string; href: string; description: string }[] = [
    {
      title: 'Yhdistys',
      href: '/fi/yhdistys',
      description: 'Mitä TK oikeastaan tekee?',
    },
  ]

  const yhteistyo: { title: string; href: string; description: string }[] = [
    {
      title: 'Yhdistys',
      href: '/fi/yhdistys',
      description: 'Mitä TK oikeastaan tekee?',
    },
  ]

  const NavbarBrand = () => (
    <div className="flex items-center justify-center text-white">
      <Image className="fill-current h-8 w-8 mr-2" src={tklogo} alt="TK logo" />
      <Link href={`/${lang}/`}>{labels['indexTitle']}</Link>
    </div>
  )

  const NavbarLinks = () => (
    <div className="text-white flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 lg:text-center text-left lg:mb-0 mb-4">
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
            <NavigationMenuItem key={key}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
    </div>
  )

  const NavMenuItem: React.FC<{ item: NavItem; lang: string }> = ({ item, lang }) => (
    <NavigationMenuItem>
      {item.children ? (
        <>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.children.map((child) => (
                <ListItem
                  key={child.title}
                  title={child.title}
                  href={`/${lang}${child.href}`}
                >
                  {child.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <Link href={`/${lang}${item.href}`} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.title}
          </NavigationMenuLink>
        </Link>
      )}
    </NavigationMenuItem>
  )

  const NewNavBar = () => {
    return (
      <NavigationMenu>
      <NavigationMenuList>
        {contentFolders.map((folder) => {
          const items = navItems[folder.toLowerCase()];
          if (!items) return null;
          return <NavMenuItem key={folder} item={{ title: folder, children: items }} lang={lang} />;
        })}
        <NavMenuItem 
          item={{ title: "Ongelmatilannelomake", href: "/docs" }} 
          lang={lang}
        />
      </NavigationMenuList>
    </NavigationMenu>
    )
  }

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
            <NewNavBar />
            <LocaleSwitcher paths={paths} lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  )
}
