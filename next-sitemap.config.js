/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://recustep.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/api/*'],
  transform: async (config, path) => {
    const siteUrl = (config.siteUrl ?? 'https://recustep.com').replace(/\/$/, '');
    const normalizedPath = path.startsWith('http')
      ? path
      : `${siteUrl}${path === '/' ? '' : path}`;

    return {
      loc: normalizedPath,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : path.startsWith('/services') ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: process.env.INDEXABLE === 'false'
      ? [{ userAgent: '*', disallow: '/' }]
      : [{ userAgent: '*', allow: '/' }],
  },
}