import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/doutrina",
    "/hierarquia",
    "/unidades",
    "/operacoes",
    "/recrutamento",
    "/comunidade",
    "/privacidade",
  ];

  const lastModified = new Date("2026-11-08T00:00:00.000Z");

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/recrutamento" ? 0.9 : 0.7,
  }));
}
