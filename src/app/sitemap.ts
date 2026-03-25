import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticDate = "2026-03-25";

  return [
    {
      url: siteConfig.url,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
