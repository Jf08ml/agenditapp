// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllPosts, getLatestPublishedAt } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agenditapp.com";

  // Keep the blog index "fresh" automatically: use the latest post date.
  const blogIndexLastModified = getLatestPublishedAt() ?? "2026-06-10";

  const blogPosts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [
    {
      url: `${base}`,
      lastModified: "2026-06-10",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/funcionalidades`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/precios`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/sectores`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/sectores/salones-belleza`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/barberias`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/spas`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/consultorios`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/abogados`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/odontologia`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/psicologia`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/nutricion`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/veterinarias`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/estetica-medica`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/fotografia`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/gimnasios`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/lash-brow`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/musica`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/danza-yoga`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sectores/tutorias`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/nosotros`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/terminos`,
      lastModified: "2026-05-29",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/privacidad`,
      lastModified: "2026-05-29",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/blog`,
      lastModified: blogIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Comparativas vs competidores — alta prioridad, páginas transaccionales de fondo de embudo
    {
      url: `${base}/vs/fresha`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/vs/agendapro`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/vs/booksy`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/vs/weibook`,
      lastModified: "2026-06-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Landings por país
    {
      url: `${base}/mx`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/cl`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/ar`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/es`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/cr`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/ec`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
