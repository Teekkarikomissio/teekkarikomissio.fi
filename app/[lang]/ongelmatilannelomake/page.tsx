import React from 'react'

import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../../get-dictionary'
import { H1, H2, LongText } from '../../../components/Typography'

export default async function Ongelmatilannelomake({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const harassmentform = dictionary['harassmentform']

  return (
    <>
      <div className="max-w-prose">
        <H1>{harassmentform.harassmentformHeading1_neg1}</H1>
      </div>
      <iframe
        className="w-screen min-h-iFrameHeight lg:rounded-lg lg:mt-16 mb-6"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeUqgGiIkvne3TYGcohaNIVl6rcrMP4q8MocRRpbCF3QxxHyA/viewform?usp=sf_link"
        height="1337"
      ></iframe>
      <div className="max-w-prose">
        <H1>{harassmentform.harassmentformHeading1_neg1}</H1>
      </div>
    </>
  )
}