/** @type {import('next-sitemap').IConfig} */
const siteUrl = (process.env.SITE_URL || 'https://recustep.com').replace(/\/$/, '');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/api/*'],
  transform: async (_config, path) => {
    const normalizedPath = path.startsWith('http')
      ? path
      : `${siteUrl}${path === '/' ? '' : path}`;

    const priority =
      path === '/lp'
        ? 0.9
        : path.startsWith('/lp/services')
          ? 0.85
          : path.startsWith('/lp/works')
            ? 0.8
            : path === '/'
              ? 1.0
              : path.startsWith('/services')
                ? 0.9
                : 0.7;

    return {
      loc: normalizedPath,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: process.env.INDEXABLE === 'false'
      ? [{ userAgent: '*', disallow: '/' }]
      : [{ userAgent: '*', allow: '/' }],
  },
};