import React from 'react'

import { Locale } from '../../../i18n-config'
import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import dokumentitStyles from './dokumentit-styles.module.css'

export default async function OfficialDocuments({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dokumentPage = getPageBySlug('dokumentit/dokumentit', lang)
  const content = await markdownToHtml(dokumentPage.content || '')

  return (
    <div className="max-w-prose mx-auto mb-52">
      <div
        className={dokumentitStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
