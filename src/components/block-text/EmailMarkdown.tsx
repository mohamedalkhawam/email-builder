import insane, { type AllowedTags } from 'insane';
import { marked } from 'marked';
import { type CSSProperties, useMemo } from 'react';

const ALLOWED_TAGS: AllowedTags[] = [
  'a',
  'article',
  'b',
  'blockquote',
  'br',
  'caption',
  'code',
  'del',
  'details',
  'div',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'i',
  'img',
  'ins',
  'kbd',
  'li',
  'main',
  'ol',
  'p',
  'pre',
  'section',
  'span',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'th',
  'thead',
  'tr',
  'u',
  'ul',
];
const GENERIC_ALLOWED_ATTRIBUTES = ['style', 'title'];

function sanitizer(html: string): string {
  return insane(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      ...ALLOWED_TAGS.reduce<Record<string, string[]>>((res, tag) => {
        res[tag] = [...GENERIC_ALLOWED_ATTRIBUTES];
        return res;
      }, {}),
      img: ['src', 'srcset', 'alt', 'width', 'height', ...GENERIC_ALLOWED_ATTRIBUTES],
      table: ['width', ...GENERIC_ALLOWED_ATTRIBUTES],
      td: ['align', 'width', ...GENERIC_ALLOWED_ATTRIBUTES],
      th: ['align', 'width', ...GENERIC_ALLOWED_ATTRIBUTES],
      a: ['href', 'target', ...GENERIC_ALLOWED_ATTRIBUTES],
      ol: ['start', ...GENERIC_ALLOWED_ATTRIBUTES],
      ul: ['start', ...GENERIC_ALLOWED_ATTRIBUTES],
    },
  });
}

function renderMarkdownString(str: string): string {
  // Parse using marked
  const html = marked.parse(str) as string;

  // Post-process the HTML to add our custom attributes
  const processedHtml = html
    // Add target="_blank" to links
    .replace(/<a href="([^"]+)"/g, '<a href="$1" target="_blank"')
    // Add width="100%" to tables
    .replace(/<table>/g, '<table width="100%">');

  // Sanitize the final result
  return sanitizer(processedHtml);
}

type Props = {
  style: CSSProperties;
  markdown: string;
};

export default function EmailMarkdown({ markdown, ...props }: Props) {
  const data = useMemo(() => renderMarkdownString(markdown), [markdown]);
  return <div {...props} dangerouslySetInnerHTML={{ __html: data }} />;
}
