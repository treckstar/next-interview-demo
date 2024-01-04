import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://interviewiq.sites.treckstar.net",
      lastModified: new Date(),
    },
    {
      url: "https://interviewiq.sites.treckstar.net/demo",
      lastModified: new Date(),
    },
  ];
}
