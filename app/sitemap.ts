import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zapsolutions-demo.sites.treckstar.net",
      lastModified: new Date(),
    },
    {
      url: "https://zapsolutions-demo.sites.treckstar.net/demo",
      lastModified: new Date(),
    },
  ];
}
