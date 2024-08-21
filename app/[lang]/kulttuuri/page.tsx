import React from 'react'

import { Locale } from '../../../i18n-config'
import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import markdownStyles from '../../../components/markdown-styles.module.css'

export default async function Kulttuuri({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const culturePage = getPageBySlug('kulttuuri/kulttuuri', lang)
  const content = await markdownToHtml(culturePage.content || '')

  return (
    <>
      <iframe
        className="w-screen min-h-iFrameHeight mb-6"
        src="https://www.youtube.com/embed/GB0Lkq7Om24"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Valtakunnalliset jäynäkilpailut 2018"
        height="500"
      ></iframe>
      <div className="max-w-prose">
        <div className="max-w-2xl mx-auto">
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
      <iframe
        className="w-screen min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeVR8rR8ETs5XC7fUAeuadYzMHdDnOJ4UbD-2dV_KUkeeDKiQ/viewform?embedded=true"
        height="1337"
      ></iframe>
    </>
  )
}
