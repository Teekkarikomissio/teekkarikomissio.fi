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
import { ScrollArea } from '@/components/ui/scroll-area'

import LocaleSwitcher from './locale-switcher'

import tklogo from '../public/logos/tklogo.svg'
import { Locale } from '@/i18n-config'
import { cn } from '@/lib/utils'

interface PageMeta {
  title?: string
  description?: string
  translatedTitle?: Record<string, string>
  [key: string]: unknown
}

interface NavigationBarProps {
  lang: Locale
  contentFolders: {
    href: string
    slug: string
    meta: PageMeta
    content: string
    subPages?: {
      href: string
      slug: string
      meta: PageMeta
      content: string
    }[]
  }[]
}

export default function Navbar({ lang, contentFolders }: NavigationBarProps) {
  const [isOpen] = useState(false)

  const NavbarBrand = () => (
    <div className="flex items-center justify-center text-white">
      <Image className="fill-current h-8 w-8 mr-2" src={tklogo} alt="TK logo" />
      <Link href={`/${lang}/`}>Teekkarikomissio</Link>
    </div>
  )

  const NavigationMenuDesktop = () => {
    return (
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-2">
          {contentFolders.map((section) => (
            <NavigationMenuItem className="relative" key={section.slug}>
              {section.subPages && section.subPages.length > 0 ? (
                <>
                  <NavigationMenuTrigger className="bg-tk-blue text-white hover:bg-tk-red transition-colors">
                    {section.meta.translatedTitle?.[lang] ||
                      section.meta.title ||
                      section.slug}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {(() => {
                      const many = section.subPages.length > 8

                      const listItems = section.subPages.map((subPage) => (
                        <ListItem
                          key={subPage.slug}
                          title={subPage.meta.title || subPage.slug}
                          href={subPage.href}
                        >
                          {subPage.meta.description || ''}
                        </ListItem>
                      ))

                      return (
                        <div
                          className={cn(
                            'w-[400px] bg-white rounded-md border border-primary/20 ring-1 ring-primary/10 shadow-lg',
                            many && 'max-h-96 overflow-y-auto pr-2'
                          )}
                          style={{
                            scrollbarGutter: many ? 'stable' : undefined,
                          }}
                        >
                          <ul className="grid gap-3 p-4">{listItems}</ul>
                        </div>
                      )
                    })()}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-tk-blue px-4 py-2 text-sm font-medium text-white hover:bg-tk-red transition-colors"
                >
                  {section.href.startsWith('http') ? (
                    <a
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {section.meta.translatedTitle?.[lang] ||
                        section.meta.title ||
                        section.slug}
                    </a>
                  ) : (
                    <Link href={section.href}>
                      {section.meta.translatedTitle?.[lang] ||
                        section.meta.title ||
                        section.slug}
                    </Link>
                  )}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    )
  }

  const ListItem = React.forwardRef<
    React.ElementRef<typeof NavigationMenuLink>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuLink> & {
      title: string
    }
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:text-primary">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-primary">
            {children}
          </p>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = 'ListItem'

  const NavigationMenuMobile = () => {
    const [open, setOpen] = useState(false)

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="lg:hidden inline-flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white capitalize pl-1"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] bg-tk-red border-r-0 p-0"
        >
          <SheetHeader className="p-4">
            <SheetTitle className="text-white sr-only">
              Navigation Menu
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4">
            <div className="p-4">
              <LocaleSwitcher lang={lang} />
            </div>
            <ScrollArea className="h-[calc(100vh-150px)]">
              <div className="px-4 pb-8">
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
                            {section.meta.translatedTitle?.[lang] ||
                              section.meta.title ||
                              section.slug}
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
                          {section.meta.translatedTitle?.[lang] ||
                            section.meta.title ||
                            section.slug}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="sticky top-0 z-10 bg-primary p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <NavbarBrand />
          <NavigationMenuMobile />
        </div>
        <div className="flex items-center">
          <div
            className={`lg:flex ${
              isOpen ? 'flex' : 'hidden'
            } flex-col items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row w-full`}
          >
            <NavigationMenuDesktop />
            <LocaleSwitcher lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  )
}
