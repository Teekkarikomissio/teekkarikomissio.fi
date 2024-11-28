import React from 'react'
import { Locale } from '../../../i18n-config'
import MarkdownPage from '@/components/MarkdownPage'
import { notFound, redirect } from 'next/navigation'
import { getNavigationByLocale } from '@/lib/api'
import { i18n } from '@/i18n-config'

import dynamicPageStyles from './dynamic-page.module.css'

interface Props {
  params: Promise<{
    lang: Locale
    slug: string[]
  }>
}

export async function generateStaticParams() {
  const paths: { lang: Locale; slug: string[] }[] = []

  for (const locale of i18n.locales) {
    const contentFolders = await getNavigationByLocale(locale)

    contentFolders.forEach((folder) => {
      paths.push({
        lang: locale as Locale,
        slug: [folder!.slug],
      })

      folder?.subPages?.forEach((subPage) => {
        paths.push({
          lang: locale as Locale,
          slug: [folder.slug, subPage!.slug],
        })
      })
    })
  }

  return paths
}

export default async function DynamicPage({ params }: Props) {
  const { lang, slug } = await params
  const slugPath = slug.join('/')

  const navigation = await getNavigationByLocale(lang)
  const currentSection = navigation.find(section => section?.slug === slug[0])

  if (!currentSection) {
    notFound()
  }

  if (slug.length === 1 && currentSection.subPages?.length > 0) {
    const firstSubPage = currentSection.subPages[0]
    redirect(`/${lang}/${currentSection.slug}/${firstSubPage?.slug}`)
  }

  try {
    return (
      <MarkdownPage
        slug={`${slugPath}/${slug[slug.length - 1]}`}
        lang={lang}
        className={dynamicPageStyles['markdown']}
        containerClassName="max-w-prose mx-auto"
      />
    )
  } catch (error) {
    notFound()
  }
}
