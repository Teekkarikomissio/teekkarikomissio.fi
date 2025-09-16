import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { type Locale } from '@/i18n-config'
import { notFound } from 'next/navigation'

interface NavigationItem {
  title: string
  path: string
  items: NavigationItem[]
}

interface SubPage {
  href: string
  slug: string
  parentSlug: string
  meta: any
  content: string
}

interface ContentFolder {
  href: string
  slug: string
  meta: {
    title: string
    translatedTitle: any
    [key: string]: any
  }
  content: string
  subPages: SubPage[]
}

export default function getPageBySlug(pageName: string, locale: Locale) {
  const pagesDirectory = path.join(process.cwd(), '_content')
  const fullPath = path.join(pagesDirectory, `${pageName}.${locale}.md`)

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)
    return { href: `/${locale}/${pageName}`, meta: data, content }
  } catch (error) {
    notFound()
  }
}

export function getFolderContents(folderPath: string, locale: Locale) {
  try {
    // Check if directory exists first
    if (!fs.existsSync(folderPath)) {
      return []
    }

    const contents = fs.readdirSync(folderPath)

    return contents.reduce((acc: NavigationItem[], item: string) => {
      const fullPath = path.join(folderPath, item)
      const stats = fs.statSync(fullPath)

      if (stats.isDirectory()) {
        // Handle directory
        const subItems = getFolderContents(fullPath, locale)
        if (subItems.length > 0) {
          acc.push({
            title: item,
            path: fullPath.split('_content/')[1],
            items: subItems,
          })
        }
      } else if (stats.isFile() && item.endsWith(`.${locale}.md`)) {
        // Handle markdown file
        const title = path.basename(item, `.${locale}.md`)
        acc.push({
          title,
          path: fullPath.split('_content/')[1].replace(`.${locale}.md`, ''),
          items: [],
        })
      }

      return acc
    }, [])
  } catch (error) {
    console.error(`Error processing folder ${folderPath}:`, error)
    return []
  }
}

export function getNavigationByLocale(locale: Locale): ContentFolder[] {
  const contentDirectory = path.join(process.cwd(), '_content')
  const sections = [
    'yhdistys',
    'fukseille',
    'kulttuuri',
    'tapahtumat',
    'yhteistyo',
    'ongelmatilannelomake',
  ]

  try {
    const pages = sections
      .map((section) => {
        const sectionPath = path.join(contentDirectory, section)

        if (!fs.existsSync(sectionPath)) {
          return null
        }

        // Get main content first
        const mainContentPath = path.join(
          sectionPath,
          `${section}.${locale}.md`
        )
        let mainContent

        try {
          if (fs.existsSync(mainContentPath)) {
            const fileContents = fs.readFileSync(mainContentPath, 'utf8')
            mainContent = matter(fileContents)
          }
        } catch (error) {
          console.error(`Error reading main content for ${section}:`, error)
        }

        // Get subfolders and their contents
        const contents = fs.readdirSync(sectionPath)
        const subPages: SubPage[] = contents
          .filter((item) => {
            const fullPath = path.join(sectionPath, item)
            return fs.statSync(fullPath).isDirectory()
          })
          .map((folder) => {
            try {
              const subPagePath = path.join(
                sectionPath,
                folder,
                `${folder}.${locale}.md`
              )

              if (!fs.existsSync(subPagePath)) {
                return null
              }

              const subPageContents = fs.readFileSync(subPagePath, 'utf8')
              const { content: subContent, data: subData } =
                matter(subPageContents)

              return {
                href: `/${locale}/${section}/${folder}`,
                slug: folder,
                parentSlug: section,
                meta: subData,
                content: subContent,
              }
            } catch (error) {
              console.error(`Error reading subpage ${folder}:`, error)
              return null
            }
          })
          .filter((item): item is SubPage => item !== null)

        return mainContent || subPages.length > 0
          ? {
              href: `/${locale}/${section}`,
              slug: section,
              meta: {
                ...(mainContent?.data || {}),
                title: section,
                translatedTitle:
                  sectionTranslations[
                    section as keyof typeof sectionTranslations
                  ],
              },
              content: mainContent?.content || '',
              subPages,
            }
          : null
      })
      .filter((item): item is ContentFolder => item !== null)

    // Append external Annual Ball XXV link as a top-level nav item (temporary)
    // const annualBallItem: ContentFolder = {
    //   href: 'https://digit.fi/ilmo/teekkarikomissioyhdistys-ry-n-25-vuosijuhla',
    //   slug: 'annual-ball-xxv',
    //   meta: {
    //     title: 'Annual Ball XXV',
    //     translatedTitle: {
    //       fi: 'Vuosijuhlat XXV',
    //       sv: 'Årsfest XXV',
    //       en: 'Annual Ball XXV',
    //     },
    //   },
    //   content: '',
    //   subPages: [],
    // }

    return [...pages]
  } catch (error) {
    console.error('Error in getNavigationByLocale:', error)
    return []
  }
}

const sectionTranslations = {
  yhdistys: {
    en: 'Association',
    sv: 'Föreningen',
    fi: 'Yhdistys',
  },
  fukseille: {
    en: 'For Freshmen',
    sv: 'För Gulisar',
    fi: 'Fukseille',
  },
  kulttuuri: {
    en: 'Culture',
    sv: 'Kultur',
    fi: 'Kulttuuri',
  },
  tapahtumat: {
    en: 'Events',
    sv: 'Evenemang',
    fi: 'Tapahtumat',
  },
  yhteistyo: {
    en: 'Cooperation',
    sv: 'Samarbete',
    fi: 'Yhteistyö',
  },
  ongelmatilannelomake: {
    en: 'Problem Report Form',
    sv: 'Trakasserianmälan',
    fi: 'Ongelmatilannelomake',
  },
}
