import React from 'react'

import { Locale } from '../../../i18n-config'
import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import yhdistysStyles from './yhdistys-styles.module.css'

export default async function Yhdistys({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const yhdistysPage = getPageBySlug('yhdistys/yhdistys', lang)
  const content = await markdownToHtml(yhdistysPage.content || '')

  return (
    <article className="flex flex-col justify-center text-center max-w-prose prose-stone">
      <div
        className={yhdistysStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}
