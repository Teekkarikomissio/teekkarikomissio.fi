import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeOptimizeImages from './rehypeOptimizeImages'

export default async function markdownToHtml(markdown: string, options?: { imageSizes: string }) {
  const processor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSanitize)
  if (options) processor.use(rehypeOptimizeImages, { sizes: options.imageSizes })
  const result = await processor.use(rehypeStringify).process(markdown)
  return result.toString()
}
