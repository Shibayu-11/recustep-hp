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


// next-sitemap.config.js（既存に統合）
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://recustep.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  transform: async (config, path) => {
    const prio =
      path === "/lp" ? 0.9 :
      path.startsWith("/lp/services") ? 0.85 :
      path.startsWith("/lp/works") ? 0.8 : 0.5;
    return {
      loc: path,
      changefreq: "weekly",
      priority: prio,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
