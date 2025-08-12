'use client'

import dynamic from 'next/dynamic'

const InstagramFeed = dynamic(() => import('./InstagramFeed'), {
  ssr: false
})

interface InstagramFeedSectionProps {
  headingText: string
}

export default function InstagramFeedSection({ headingText }: InstagramFeedSectionProps) {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative pb-2 mb-8">
          <h2 className="text-3xl font-bold text-center">
            {headingText}
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-red-800"></div>
        </div>
        <div className="w-full">
          <InstagramFeed />
        </div>
      </div>
    </div>
  )
}