import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: { absolute: "Blog AgenditApp | Guías para Salones, Barberías y Spas" },
  description:
    "Guías, comparativas y consejos para digitalizar tu salón, barbería o spa: WhatsApp, marketing, fidelización y agendamiento online.",
  alternates: { canonical: "https://agenditapp.com/blog" },
  openGraph: {
    title: "Blog AgenditApp — Recursos para negocios de citas",
    description:
      "Guías prácticas, comparativas y consejos para digitalizar tu negocio y recibir más clientes.",
    url: "https://agenditapp.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

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

        {/* Posts grid + category filter */}
        <section className="py-8 pb-20 px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-muted py-20">Próximamente...</p>
          ) : (
            <BlogList posts={posts} categories={categories} />
          )}
        </section>
      </main>
      <PageFooter />
    </>
  );
}
