// app/robots.ts
import type { MetadataRoute } from "next";
export const dynamic = "force-static"; 

const getBaseUrl = () => {
  const envUrl = process.env.SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }
  return "https://recustep.com";
};

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
