import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { routing, type Locale } from "@/i18n/routing";

const BLOG_ROOT = path.join(process.cwd(), "src/content/blog");

// Los artículos en español (locale por defecto) viven en la raíz de
// src/content/blog/; cada traducción vive en una subcarpeta con el código
// del locale (p.ej. src/content/blog/en/) con su propio slug traducido y un
// `translationOf` en el frontmatter que apunta al slug en español.
function blogDir(locale: Locale) {
  return locale === routing.defaultLocale ? BLOG_ROOT : path.join(BLOG_ROOT, locale);
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  publishedAt: string;
  keywords: string[];
  readingTime: string;
  category: string;
  excerpt: string;
  howToSteps?: HowToStep[];
  author?: string;
  authorTitle?: string;
  /** Solo en traducciones: slug del artículo original en español. */
  translationOf?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(locale: Locale = routing.defaultLocale): PostMeta[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getPost(slug: string, locale: Locale = routing.defaultLocale): Post | null {
  const filePath = path.join(blogDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<PostMeta, "slug">), content };
}

export function getAllSlugs(locale: Locale = routing.defaultLocale): string[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

/**
 * Slug de cada versión disponible de un artículo, por locale. Siempre incluye
 * el locale pedido; los demás solo si existe la traducción.
 */
export function getPostTranslations(
  slug: string,
  locale: Locale = routing.defaultLocale
): Partial<Record<Locale, string>> {
  const post = getPost(slug, locale);
  if (!post) return {};
  const originalSlug =
    locale === routing.defaultLocale ? slug : post.translationOf;
  if (!originalSlug) return { [locale]: slug };

  const result: Partial<Record<Locale, string>> = {
    [routing.defaultLocale]: originalSlug,
  };
  for (const l of routing.locales) {
    if (l === routing.defaultLocale) continue;
    const match = getAllPosts(l).find((p) => p.translationOf === originalSlug);
    if (match) result[l] = match.slug;
  }
  return result;
}

/**
 * Returns posts related to the given slug, prioritizing the same category and
 * then shared keywords. Falls back to the most recent posts to always fill the
 * requested count. Excludes the current post.
 */
export function getRelatedPosts(
  slug: string,
  limit = 3,
  locale: Locale = routing.defaultLocale
): PostMeta[] {
  const all = getAllPosts(locale);
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  const others = all.filter((p) => p.slug !== slug);
  const currentKeywords = new Set((current.keywords ?? []).map((k) => k.toLowerCase()));

  const scored = others
    .map((post) => {
      let score = 0;
      if (post.category === current.category) score += 10;
      score += (post.keywords ?? []).filter((k) =>
        currentKeywords.has(k.toLowerCase())
      ).length;
      return { post, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.post.publishedAt > b.post.publishedAt ? -1 : 1;
    });

  return scored.slice(0, limit).map((s) => s.post);
}

/** Categories present across all posts, ordered by post count (desc). */
export function getAllCategories(locale: Locale = routing.defaultLocale): string[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts(locale)) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);
}

/** Most recent publishedAt date across all posts (YYYY-MM-DD), or null if none. */
export function getLatestPublishedAt(locale: Locale = routing.defaultLocale): string | null {
  const posts = getAllPosts(locale);
  return posts.length ? posts[0].publishedAt : null;
}
