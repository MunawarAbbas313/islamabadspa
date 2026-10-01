import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { massageTypes } from "@/lib/massage-types";
import { SITE } from "@/lib/site";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: [string, number, Freq][] = [
    ["", 1.0, "weekly"],
    ["/massage-center-islamabad", 0.95, "weekly"],
    ["/massage-center-f-7-islamabad", 0.95, "weekly"],
    ["/spa-f-7-islamabad", 0.95, "weekly"],
    ["/massage-f-7-islamabad", 0.9, "weekly"],
    ["/massage-types", 0.9, "weekly"],
    ["/services", 0.9, "weekly"],
    ["/full-body-massage", 0.9, "weekly"],
    ["/body-massage", 0.85, "weekly"],
    ["/spa-services", 0.85, "weekly"],
    ["/contact", 0.85, "monthly"],
    ["/location", 0.8, "monthly"],
    ["/why-choose-us", 0.7, "monthly"],
    ["/about", 0.7, "monthly"],
    ["/blog", 0.8, "weekly"],
    ["/privacy-policy", 0.2, "yearly"],
  ];

  const staticRoutes: MetadataRoute.Sitemap = pages.map(([path, priority, changeFrequency]) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const massageRoutes: MetadataRoute.Sitemap = massageTypes.map((m) => ({
    url: `${SITE.url}/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
    // Next.js does not XML-escape image URLs, so escape "&" ourselves
    images: [m.image.replace(/&/g, "&amp;")],
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const d = new Date(post.date);
    return {
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: isNaN(d.getTime()) ? now : d.toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...massageRoutes, ...blogRoutes];
}
