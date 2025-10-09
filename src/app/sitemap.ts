// src/app/sitemap.ts
export default function sitemap() {
  const base = "https://agenditapp.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/terminos`, lastModified: new Date() },
    { url: `${base}/privacidad`, lastModified: new Date() },
  ];
}
