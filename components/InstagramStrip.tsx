import Image from 'next/image'

type InstagramItem = {
  href: string
  src: string
  alt?: string
}

type Props = {
  heading: string
  ctaLabel: string
  profileUrl: string
  items: InstagramItem[]
}

export default function InstagramStrip({
  heading,
  ctaLabel,
  profileUrl,
  items,
}: Props) {
  if (!items || items.length === 0) return null

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            {ctaLabel}
          </a>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((it, idx) => (
            <li
              key={idx}
              className="relative aspect-square overflow-hidden rounded-md"
            >
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={it.alt || 'Instagram image'}
              >
                <Image
                  src={it.src}
                  alt={it.alt || ''}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
