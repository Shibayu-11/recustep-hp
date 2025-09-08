// app/sitemap.tsx
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://recustep.com'

  return [
    {
      url: `${baseUrl}/`,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/hp-lp`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/system`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/recruitment`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/app-development`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company`,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: 0.6,
    },
  ]
}
