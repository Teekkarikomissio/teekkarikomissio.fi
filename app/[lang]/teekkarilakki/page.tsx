import React from "react";

import { Locale } from "../../../i18n-config";
import getPageBySlug from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import markdownStyles from '../../../components/markdown-styles.module.css'

export default async function Cap({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const capPage = getPageBySlug('teekkarilakki/teekkarilakki', lang)
  const content = await markdownToHtml(capPage.content || '')

  return (
    <div className="max-w-prose">
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
