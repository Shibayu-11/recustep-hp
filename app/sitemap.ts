// app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://recustep.com";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0, lastModified },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/services/hp-lp`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/services/system`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/services/recruitment`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/services/app-development`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/services/artbloom`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/services/syokulab`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/company`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.6, lastModified },
  ];
}
