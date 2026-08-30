import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const [posts, notes] = await Promise.all([
    getCollection('engineering-log', ({ data }) => !data.draft),
    getCollection('field-notes', ({ data }) => !data.draft),
  ]);

  const items = [
    ...posts.map((post) => ({ ...post.data, link: `/engineering-log/${post.id}` })),
    ...notes.map((note) => ({ ...note.data, link: `/field-notes/${note.id}` })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
  });
}
