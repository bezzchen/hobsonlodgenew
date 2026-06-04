import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/rules", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
] satisfies {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  path: string;
  priority: number;
}[];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
