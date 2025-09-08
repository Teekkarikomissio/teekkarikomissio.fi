'use client'

import dynamic from 'next/dynamic'

const InstagramFeed = dynamic(() => import('./InstagramFeed'), {
  ssr: false,
})

interface InstagramFeedSectionProps {
  headingText: string
  strategy?: 'intersection' | 'click'
  loadButtonLabel?: string
}

export default function InstagramFeedSection({
  headingText,
  strategy = 'intersection',
  loadButtonLabel,
}: InstagramFeedSectionProps) {
  return (
    <section
      className="w-full bg-gray-50 scroll-mt-24"
      aria-labelledby="instagram-feed-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative pb-2 mb-10">
          <h2
            id="instagram-feed-heading"
            className="text-3xl font-bold text-center"
          >
            {headingText}
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-red-800" />
        </div>

        <InstagramFeed
          strategy={strategy}
          loadButtonLabel={loadButtonLabel}
          rootMargin="250px"
          idleFallbackMs={18000}
          enableFallbackTimeout={true}
          respectSaveData={true}
        />
      </div>
    </section>
  )
}
