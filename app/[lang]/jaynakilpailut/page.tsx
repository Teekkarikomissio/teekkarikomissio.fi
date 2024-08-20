import React from 'react'

import { Locale } from '../../../i18n-config'
import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import yrityksilleStyles from '../frontpage-styles.module.css'

export default async function JaynaCompetition({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const capPage = getPageBySlug('jaynakilpailut/jaynakilpailut', lang)
  const content = await markdownToHtml(capPage.content || '')

  return (
    <div className="max-w-prose mx-auto">
      <div
        className={yrityksilleStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
