/**
 * `build.format: 'file'` makes Astro.url.pathname end in `.html` during the
 * static build, but Cloudflare Pages serves those files at extensionless URLs.
 * Normalise to what visitors actually see so canonical tags and nav highlighting
 * agree with the live site.
 */
export function cleanPath(url: URL): string {
  const path = url.pathname.replace(/(?:\/index)?\.html$/, '').replace(/\/+$/, '');
  return path === '' ? '/' : path;
}
