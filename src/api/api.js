import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// type GetPageParams = {
//   pageContentType: string,
//   slug: string,
//   locale: string,
// };

async function getPage(params) {
  const query = {
    locale: params.locale,
    'fields.slug': params.slug,
    content_type: 'page',
    'fields.content.sys.contentType.sys.id': params.pageContentType,
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}
