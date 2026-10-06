import path from 'node:path'
import sharp from 'sharp'
import { getImageProps } from 'next/image'
import type { Root, Element } from 'hast'

// Opt-in for below-the-fold Markdown, after sanitization. Keep CMS links and alt text.
export default function rehypeOptimizeImages({ sizes }: { sizes: string }) {
  return async (tree: Root) => {
    const publicDirectory = path.resolve(process.cwd(), 'public')

    async function optimize(image: Element) {
      image.properties.loading = 'lazy'
      image.properties.decoding = 'async'
      const src = image.properties.src
      if (typeof src !== 'string' || !src.startsWith('/') || src.startsWith('//')) return

      const file = path.resolve(publicDirectory, `.${src}`)
      if (!file.startsWith(`${publicDirectory}${path.sep}`)) return

      // Missing or unsupported CMS assets should retain their original markup.
      const metadata = await sharp(file)
        .metadata()
        .catch(() => null)
      if (!metadata?.width || !metadata.height) return

      const { props } = getImageProps({
        src,
        alt: String(image.properties.alt || ''),
        width: metadata.width,
        height: metadata.height,
        sizes,
        loading: 'lazy',
        unoptimized: metadata.format === 'svg' || (metadata.pages || 1) > 1,
      })
      image.properties = {
        ...image.properties,
        src: props.src,
        width: props.width,
        height: props.height,
        ...(props.srcSet ? { srcSet: props.srcSet, sizes: props.sizes } : {}),
      }
    }

    async function walk(node: Root | Element): Promise<void> {
      await Promise.all(
        node.children.map(async (child) => {
          if (child.type !== 'element') return
          if (child.tagName === 'img') await optimize(child)
          else await walk(child)
        })
      )
    }

    await walk(tree)
  }
}
