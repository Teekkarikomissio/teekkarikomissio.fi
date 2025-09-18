import React from 'react'
import { i18n, Locale } from '@/i18n-config'
import MarkdownPage from '@/components/MarkdownPage'
import { notFound, redirect } from 'next/navigation'
import getPageBySlug, { getNavigationByLocale } from '@/lib/api'
import { Metadata } from 'next'
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const slugPath = slug.join('/')

  try {
    const page = getPageBySlug(`${slugPath}/${slug[slug.length - 1]}`, lang)

    return {
      title: page.meta.title,
      description: page.meta.description || '',
      openGraph: {
        title: page.meta.title,
        description: page.meta.description || '',
      },
      twitter: {
        card: 'summary_large_image',
        title: page.meta.title,
        description: page.meta.description || '',
      },
    }
  } catch (error) {
    notFound()
  }
}

export default async function DynamicPage({ params }: Props) {
  const { lang, slug } = await params
  const slugPath = slug.join('/')

  const navigation = await getNavigationByLocale(lang)
  const currentSection = navigation.find((section) => section?.slug === slug[0])

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
