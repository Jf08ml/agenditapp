"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

const CATEGORY_COLORS: Record<string, string> = {
  "Gestión de Negocios": "bg-blue-50 text-blue-700",
  "Comparativas": "bg-purple-50 text-purple-700",
  "WhatsApp & Comunicación": "bg-green-50 text-green-700",
  "Guías Prácticas": "bg-amber-50 text-amber-700",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const ALL = "Todos";

export default function BlogList({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);
  const filters = [ALL, ...categories];

  return (
    <>
      {/* Category filter */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-2.5">
        {filters.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer border ${
                isActive
                  ? "bg-brand text-white border-brand"
                  : "bg-bg-card text-body border-brand/15 hover:border-brand/40"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-muted py-20">No hay artículos en esta categoría.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filtered.map((post, i) => {
              const colorClass = CATEGORY_COLORS[post.category] ?? "bg-brand/10 text-brand";
              // Only feature the first card when showing all posts.
              const featured = active === ALL && i === 0;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group bg-bg-card border border-brand/10 rounded-[20px] p-7 hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(29,78,216,0.12)] transition-all flex flex-col gap-4 ${
                    featured ? "lg:col-span-2" : ""
                  }`}
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${colorClass}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">{post.readingTime} de lectura</span>
                  </div>
                  <div>
                    <h2
                      className={`font-semibold text-heading group-hover:text-brand transition-colors leading-snug mb-2 ${
                        featured ? "text-2xl sm:text-3xl" : "text-lg"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p className="text-body text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.author && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{post.author}</span>
                        </>
                      )}
                    </div>
                    <span className="text-sm font-medium text-brand group-hover:gap-2 inline-flex items-center gap-1.5 transition-all">
                      Leer artículo
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
