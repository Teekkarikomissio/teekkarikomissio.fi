'use client'

import Script from 'next/script'

export default function InstagramFeed() {
  return (
    <>
      <Script 
        src="https://static.elfsight.com/platform/platform.js" 
        strategy="lazyOnload"
      />
      <div 
        className="elfsight-app-9136bd19-e490-4735-9500-89f3526dbb30" 
        data-elfsight-app-lazy
      />
    </>
  )
}