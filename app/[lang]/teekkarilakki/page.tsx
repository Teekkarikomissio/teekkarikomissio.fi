import React from 'react'

import { Locale } from '../../../i18n-config'
import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import teekkarilakkiStyles from './teekkarilakki-styles.module.css'

export default async function Cap({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const capPage = getPageBySlug('teekkarilakki/teekkarilakki', lang)
  const content = await markdownToHtml(capPage.content || '')

  return (
    <div className="max-w-prose mx-auto">
      <div
        className={teekkarilakkiStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
