import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Blog | Recursos para negocios de citas y agendamiento",
  description:
    "Guías, comparativas y consejos para dueños de salones de belleza, barberías y negocios de servicios. Aprende a digitalizar tu agenda, reducir ausencias y hacer crecer tu negocio.",
  keywords: [
    "blog agendamiento citas",
    "recursos salón de belleza",
    "guías barberías Colombia",
    "software reservas online",
    "gestión negocios belleza",
  ],
  alternates: { canonical: "https://agenditapp.com/blog" },
  openGraph: {
    title: "Blog AgenditApp — Recursos para negocios de citas",
    description:
      "Guías prácticas, comparativas y consejos para digitalizar tu negocio y recibir más clientes.",
    url: "https://agenditapp.com/blog",
  },
};

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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader />
      <main className="min-h-screen pt-28">
        {/* Breadcrumbs */}
        <nav className="px-4 sm:px-6 py-4 max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li className="text-heading font-medium">Blog</li>
          </ol>
        </nav>

        {/* Header */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-brand mb-5"
              style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
            >
              Recursos y guías
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              Blog <span className="text-brand">AgenditApp</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed">
              Guías prácticas, comparativas y consejos para dueños de salones de belleza,
              barberías y negocios de servicios que quieren digitalizar su agenda y crecer.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-8 pb-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-center text-muted py-20">Próximamente...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {posts.map((post, i) => {
                  const colorClass =
                    CATEGORY_COLORS[post.category] ?? "bg-brand/10 text-brand";
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className={`group bg-bg-card border border-brand/10 rounded-[20px] p-7 hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(29,78,216,0.12)] transition-all flex flex-col gap-4 ${
                        i === 0 ? "lg:col-span-2" : ""
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
                            i === 0 ? "text-2xl sm:text-3xl" : "text-lg"
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
        </section>
      </main>
      <PageFooter />
    </>
  );
}
