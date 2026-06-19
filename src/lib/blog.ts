import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

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
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<PostMeta, "slug">), content };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

/**
 * Returns posts related to the given slug, prioritizing the same category and
 * then shared keywords. Falls back to the most recent posts to always fill the
 * requested count. Excludes the current post.
 */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts();
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
export function getAllCategories(): string[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);
}

/** Most recent publishedAt date across all posts (YYYY-MM-DD), or null if none. */
export function getLatestPublishedAt(): string | null {
  const posts = getAllPosts();
  return posts.length ? posts[0].publishedAt : null;
}
