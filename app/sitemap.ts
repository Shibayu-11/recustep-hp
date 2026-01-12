// app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const getBaseUrl = () => {
  const envUrl = process.env.SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }
  return "https://recustep.com";
};

const buildEntry = (
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"],
): MetadataRoute.Sitemap[number] => ({
  url: `${getBaseUrl()}${path}`,
  changeFrequency,
  priority,
  lastModified: new Date(),
});

export default function sitemap(): MetadataRoute.Sitemap {
  const columnPaths = [
    "/columns/homepage-osaka-design",
    "/columns/homepage-osaka-estimate",
    "/columns/homepage-osaka-automation",
    "/columns/homepage-osaka-benefits",
    "/columns/homepage-osaka-speed",
    "/columns/homepage-osaka-guide",
    "/columns/webagency-osaka-benefits",
    "/columns/webagency-osaka-support",
    "/columns/homepage-osaka-analysis",
    "/columns/homepage-osaka-insights",
  ];

  return [
    buildEntry("/", 1, "weekly"),
    buildEntry("/services", 0.9, "weekly"),
    buildEntry("/services/hp-lp", 0.9, "weekly"),
    buildEntry("/services/system", 0.9, "weekly"),
    buildEntry("/services/recruitment", 0.9, "weekly"),
    buildEntry("/services/app-development", 0.9, "weekly"),
    buildEntry("/services/artbloom", 0.7, "monthly"),
    buildEntry("/services/syokulab", 0.7, "monthly"),
    buildEntry("/services/recuste", 0.7, "monthly"),
    buildEntry("/blog", 0.6, "weekly"),
    buildEntry("/columns", 0.6, "weekly"),
    ...columnPaths.map((path) => buildEntry(path, 0.6, "weekly")),
    buildEntry("/company", 0.7, "monthly"),
    buildEntry("/contact", 0.6, "monthly"),
    buildEntry("/lp", 0.9, "weekly"),
    buildEntry("/privacy", 0.3, "yearly"),
    buildEntry("/terms", 0.3, "yearly"),
  ];
}
