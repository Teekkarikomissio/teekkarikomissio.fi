const MAX_EXCERPT_LENGTH = 160

function markdownToPlainText(markdown: string) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~>#]/g, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getNewsExcerpt(content: string, excerpt?: unknown) {
  if (typeof excerpt === 'string' && excerpt.trim()) {
    return excerpt.trim()
  }

  const plainText = markdownToPlainText(content)

  if (plainText.length <= MAX_EXCERPT_LENGTH) {
    return plainText
  }

  return `${plainText.slice(0, MAX_EXCERPT_LENGTH).replace(/\s+\S*$/, '')}…`
}
