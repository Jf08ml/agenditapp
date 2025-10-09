// src/app/robots.ts
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://agenditapp.com/sitemap.xml",
  };
}
