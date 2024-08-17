import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(html).process(markdown);
  // return result.toString();
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
