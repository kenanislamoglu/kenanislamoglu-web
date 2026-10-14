// www is served only to redirect: one canonical host for search engines.
export default {
  /** @param {Request} request @param {{ ASSETS: Fetcher }} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.kenanislamoglu.com') {
      url.hostname = 'kenanislamoglu.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
