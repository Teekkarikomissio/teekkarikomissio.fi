import React from 'react';
import { Locale } from '@/i18n-config';
import getPageBySlug from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { notFound } from 'next/navigation';

interface MarkdownPageProps {
  slug: string;
  lang: Locale;
  className?: string;
  containerClassName?: string;
}

export default async function MarkdownPage({
  slug,
  lang,
  className = '',
  containerClassName = 'max-w-prose mx-auto',
}: MarkdownPageProps) {
  try {
    const page = getPageBySlug(slug, lang);
    const content = await markdownToHtml(page.content || '');

    if (page.meta.iframe) {
      return (
        <iframe
          className="w-screen min-h-iFrameHeight"
          src={page.meta.iframe}
          height="1337"
        ></iframe>
      );
    }

    return (
      <div className={containerClassName}>
        <div
          className={className}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching or rendering Markdown page:', error);
    notFound();
  }
}
