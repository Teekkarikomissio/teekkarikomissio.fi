'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import LocaleSwitcher from './locale-switcher'

import tklogo from '../public/logos/tklogo.svg'
import { Locale } from '../i18n-config'
import { cn } from '@/lib/utils'

interface NavigationBarProps {
  lang: Locale
  contentFolders: {
    href: string
    slug: string
    meta: {
      title?: string
      description?: string
      [key: string]: any
    }
    content: string
    subPages?: {
      href: string
      slug: string
      meta: {
        title?: string
        description?: string
        [key: string]: any
      }
      content: string
    }[]
  }[]
}

type NavigationLabels = Record<string, string>

export default function Navbar({
  lang,
  contentFolders,
}: NavigationBarProps) {
  const [isOpen] = useState(false)

  const NavbarBrand = () => (
    <div className="flex items-center justify-center text-white">
      <Image className="fill-current h-8 w-8 mr-2" src={tklogo} alt="TK logo" />
      <Link href={`/${lang}/`}>Teekkarikomissio</Link>
    </div>
  )
  
  const NavigationMenuDemo = () => {
    return (
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-2">
          {contentFolders.map((section) => (
            <NavigationMenuItem key={section.slug}>
              {section.subPages && section.subPages.length > 0 ? (
                <>
                  <NavigationMenuTrigger className="bg-tk-blue text-white hover:bg-tk-red transition-colors">
                    {section.meta.translatedTitle?.[lang] || section.meta.title || section.slug}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-white rounded-md border border-tk-red">
                      {section.subPages.map((subPage) => (
                        <ListItem
                          key={subPage.slug}
                          title={subPage.meta.title || subPage.slug}
                          href={subPage.href}
                        >
                          {subPage.meta.description || ""}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={section.href} legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center rounded-md bg-tk-blue px-4 py-2 text-sm font-medium text-white hover:bg-tk-red transition-colors">
                    {section.meta.translatedTitle?.[lang] || section.meta.title || section.slug}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  };

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
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-800',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none hover:text-red-800">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-red-800">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = 'ListItem'

  const NavbarSheet = () => {
    const [open, setOpen] = useState(false)

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="rounded-none capitalize pl-1">
          <span className="lg:hidden inline-flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white">
            <Menu size={24} />
          </span>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] bg-tk-red border-r-0 p-0">
          <SheetHeader className="p-4">
            <SheetTitle className="text-white sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 p-4">
            <LocaleSwitcher lang={lang} />
            <nav className="flex flex-col space-y-4">
              {contentFolders.map((section) => (
                <div key={section.slug} className="flex flex-col">
                  {section.subPages && section.subPages.length > 0 ? (
                    <>
                      <Link 
                        href={section.href}
                        onClick={() => setOpen(false)}
                        className="text-white p-2 rounded-md hover:bg-white hover:text-black transition-all font-medium"
                      >
                        {section.meta.translatedTitle?.[lang] || section.meta.title || section.slug}
                      </Link>
                      <div className="flex flex-col space-y-2 pl-4 mt-2">
                        {section.subPages.map((subPage) => (
                          <Link 
                            key={subPage.slug}
                            href={subPage.href}
                            onClick={() => setOpen(false)}
                            className="text-white p-2 rounded-md hover:bg-white hover:text-black transition-all"
                          >
                            {subPage.meta.title || subPage.slug}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={section.href}
                      onClick={() => setOpen(false)}
                      className="text-white p-2 rounded-md hover:bg-white hover:text-black transition-all font-medium"
                    >
                      {section.meta.translatedTitle?.[lang] || section.meta.title || section.slug}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
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
            <LocaleSwitcher lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  )
}
