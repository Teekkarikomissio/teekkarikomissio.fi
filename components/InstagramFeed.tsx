'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface InstagramFeedProps {
  appId?: string
  strategy?: 'intersection' | 'click'
  rootMargin?: string
  idleFallbackMs?: number
  enableFallbackTimeout?: boolean
  respectSaveData?: boolean
  loadButtonLabel?: string
}

declare global {
  interface Window {
    __ELFSIGHT_SCRIPT_LOADING?: boolean
    __ELFSIGHT_SCRIPT_LOADED?: boolean
  }
}

export default function InstagramFeed({
                                        appId = '9136bd19-e490-4735-9500-89f3526dbb30',
                                        strategy = 'intersection',
                                        rootMargin = '200px',
                                        idleFallbackMs = 20000,
                                        enableFallbackTimeout = true,
                                        respectSaveData = true,
                                        loadButtonLabel = 'Load Instagram feed'
                                      }: InstagramFeedProps) {
  const [activated, setActivated] = useState(false)
  const [mountedAtLeastOnce, setMountedAtLeastOnce] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timeoutRef = useRef<number | null>(null)

  const saveData =
    typeof navigator !== 'undefined' &&
    typeof (navigator as any).connection !== 'undefined' &&
    (navigator as any).connection?.saveData === true

  const shouldAutoLoad = strategy === 'intersection' && !(respectSaveData && saveData)

  const inject = useCallback(() => {
    if (activated) return
    setActivated(true)
  }, [activated])

  useEffect(() => {
    if (!activated) return

    observerRef.current?.disconnect()

    let feedDiv = containerRef.current?.querySelector('.elfsight-feed-injected') as HTMLDivElement | null
    if (!feedDiv) {
      feedDiv = document.createElement('div')
      feedDiv.className = `elfsight-app-${appId} elfsight-feed-injected`
      feedDiv.setAttribute('data-elfsight-app-lazy', '')
      containerRef.current?.appendChild(feedDiv)
    }

    if (window.__ELFSIGHT_SCRIPT_LOADED) {
      return
    }

    if (!window.__ELFSIGHT_SCRIPT_LOADING) {
      window.__ELFSIGHT_SCRIPT_LOADING = true
      const s = document.createElement('script')
      s.src = 'https://static.elfsight.com/platform/platform.js'
      s.async = true
      s.dataset.useServiceCore = ''
      s.onload = () => {
        window.__ELFSIGHT_SCRIPT_LOADED = true
      }
      document.head.appendChild(s)
    }
  }, [activated, appId])

  useEffect(() => {
    if (!shouldAutoLoad || !containerRef.current || activated) return

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            inject()
          }
        })
      },
      { rootMargin }
    )

    observerRef.current.observe(containerRef.current)

    return () => observerRef.current?.disconnect()
  }, [shouldAutoLoad, inject, activated, rootMargin])

  useEffect(() => {
    if (
      !enableFallbackTimeout ||
      activated ||
      strategy === 'click' || // avoid fallback for explicit click strategy
      !shouldAutoLoad
    )
      return
    timeoutRef.current = window.setTimeout(() => {
      if (!activated) inject()
    }, idleFallbackMs)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [activated, enableFallbackTimeout, idleFallbackMs, inject, strategy, shouldAutoLoad])

  useEffect(() => {
    setMountedAtLeastOnce(true)
  }, [])

  const handleClick = () => {
    inject()
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[340px] flex items-center justify-center rounded-md bg-gray-100"
      aria-label="Instagram feed section"
    >
      {!activated && (
        <div className="flex flex-col items-center gap-4 p-4 text-center">
          <p className="text-sm text-gray-600">
            {strategy === 'click' || (respectSaveData && saveData)
              ? 'Click the button below to load the Instagram feed.'
              : 'Preparing to load the Instagram feed…'}
          </p>

          {(strategy === 'click' || (respectSaveData && saveData)) && (
            <button
              type="button"
              onClick={handleClick}
              className="px-4 py-2 rounded bg-red-800 text-white text-sm hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
              aria-label={loadButtonLabel}
            >
              {loadButtonLabel}
            </button>
          )}

          {strategy === 'intersection' && !(respectSaveData && saveData) && (
            <span className="text-xs text-gray-400" aria-hidden="true">
                Will load on scroll…
              </span>
          )}

          {mountedAtLeastOnce && (
            <noscript>
              Enable JavaScript to view the Instagram feed.
            </noscript>
          )}
        </div>
      )}
      {/* The real Elfsight div is appended dynamically when activated */}
    </div>
  )
}