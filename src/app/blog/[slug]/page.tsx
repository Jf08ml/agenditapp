import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPost } from "@/lib/blog";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import { DemoCtaButton } from "@/app/(landing)/components/ui/DemoCtaModal";

// --- Internal feature comparison table renderer ---
type FTCol = { name: string; highlight?: boolean; sub?: string };
type FTRow = { feature: string; values: string[] };

function FeatureTable({ cols, rows }: { cols: FTCol[]; rows: FTRow[] }) {
  return (
    <div className="overflow-x-auto my-8 rounded-[14px] border border-brand/15">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th
              className="px-4 py-3 text-left text-xs font-semibold text-heading uppercase tracking-wider"
              style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)" }}
            />
            {cols.map((col, i) => (
              <th
                key={i}
                className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider"
                style={
                  col.highlight
                    ? { background: "var(--brand)", color: "white" }
                    : { background: "color-mix(in srgb, var(--brand) 8%, transparent)" }
                }
              >
                {col.name}
                {col.sub && (
                  <span className="block text-[10px] font-normal mt-0.5 normal-case tracking-normal opacity-75">
                    {col.sub}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-brand/3 transition-colors">
              <td className="px-4 py-3 font-medium text-heading border-t border-brand/8 whitespace-nowrap">
                {row.feature}
              </td>
              {row.values.map((val, j) => {
                const isHighlight = cols[j]?.highlight;
                const isCheck = val === "✅";
                const isCross = val === "❌";
                return (
                  <td
                    key={j}
                    className={[
                      "px-4 py-3 text-center border-t border-brand/8",
                      isCheck || isCross ? "text-xl leading-none" : "text-sm",
                      isCheck ? (isHighlight ? "text-brand" : "text-green-600") : "",
                      isCross ? "text-muted/40" : "",
                      !isCheck && !isCross && isHighlight ? "font-semibold text-brand" : "",
                      !isCheck && !isCross && !isHighlight ? "text-body" : "",
                    ].join(" ")}
                    style={isHighlight ? { background: "color-mix(in srgb, var(--brand) 5%, transparent)" } : {}}
                  >
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Custom MDX components matching the design system ---
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl sm:text-3xl font-semibold text-heading mt-10 mb-4 leading-snug scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-semibold text-heading mt-7 mb-3 leading-snug scroll-mt-24"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-semibold text-heading mt-5 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-body leading-relaxed mb-4 text-base" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 flex flex-col gap-2 pl-0 list-none" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 flex flex-col gap-2 pl-5 list-decimal marker:text-brand" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-body leading-relaxed flex gap-2.5 items-start text-base" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-heading" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-brand font-medium underline decoration-brand/30 hover:decoration-brand transition-colors"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-brand pl-5 py-2 my-5 rounded-r-[10px]"
      style={{ background: "color-mix(in srgb, var(--brand) 7%, transparent)" }}
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 rounded-[14px] border border-brand/15">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      className="text-xs font-semibold text-heading uppercase tracking-wider"
      style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)" }}
      {...props}
    />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left text-heading" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-body border-t border-brand/8" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-brand/3 transition-colors" {...props} />
  ),
  hr: () => <hr className="border-brand/15 my-8" />,
  // Custom components available in MDX
  CtaBox: ({ title, body }: { title: string; body: string }) => (
    <div
      className="my-8 rounded-[20px] p-8 text-center"
      style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
    >
      <p className="text-lg font-semibold text-white mb-2">{title}</p>
      <p className="text-white/75 text-sm mb-5">{body}</p>
      <DemoCtaButton source="blog" className="inline-flex items-center px-7 py-3 rounded-[12px] bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-md">
        Solicitar demo gratis
      </DemoCtaButton>
    </div>
  ),
  TipBox: ({ children }: { children: React.ReactNode }) => (
    <div
      className="my-5 rounded-[14px] p-5 flex gap-3"
      style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)", border: "1px solid color-mix(in srgb, var(--brand) 20%, transparent)" }}
    >
      <span className="text-xl flex-shrink-0 mt-0.5">💡</span>
      <div className="text-sm text-body leading-relaxed">{children}</div>
    </div>
  ),
  // Bullet list item with checkmark icon
  CheckItem: ({ children }: { children: React.ReactNode }) => (
    <li className="flex gap-2.5 items-start text-body text-base leading-relaxed">
      <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span>{children}</span>
    </li>
  ),
  // Comparison table: mejores-apps article (7 apps, feature-first, AgenditApp highlighted)
  CompareApps: () => (
    <FeatureTable
      cols={[
        { name: "AgenditApp", highlight: true, sub: "Recomendado" },
        { name: "AgendaPro" },
        { name: "Fresha" },
        { name: "SimplyBook" },
        { name: "Vagaro" },
        { name: "WeiBook" },
        { name: "Noona" },
      ]}
      rows={[
        { feature: "Precio mensual", values: ["$10–30 USD", "$30–60 USD", "Gratis + comisión", "$9–49 USD", "$30 USD+", "$8–20 USD", "$15–30 EUR"] },
        { feature: "WhatsApp nativo", values: ["✅", "Parcial", "❌", "❌", "❌", "Limitado", "❌"] },
        { feature: "Soporte en español", values: ["✅", "✅", "❌", "Básico", "❌", "✅", "❌"] },
        { feature: "Diseñado para Colombia", values: ["✅", "Parcial", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Sin permanencia", values: ["✅", "✅", "✅", "✅", "✅", "✅", "✅"] },
        { feature: "Fidelización incluida", values: ["✅", "✅", "Parcial", "Add-on", "✅", "❌", "✅"] },
        { feature: "Integración Google Maps", values: ["✅", "✅", "✅", "✅", "✅", "❌", "Parcial"] },
      ]}
    />
  ),
  // Comparison table: software-agendamiento-consultorios article (4 tools, feature-first, AgenditApp highlighted)
  CompareConsultorios: () => (
    <FeatureTable
      cols={[
        { name: "AgenditApp", highlight: true, sub: "Recomendado" },
        { name: "AgendaPro" },
        { name: "Doctoralia" },
        { name: "Calendly" },
      ]}
      rows={[
        { feature: "Precio mensual", values: ["$10–30 USD", "$30–60 USD", "Gratis + planes", "$10–20 USD"] },
        { feature: "WhatsApp nativo", values: ["✅", "Parcial", "❌", "❌"] },
        { feature: "Recordatorios automáticos", values: ["✅", "✅", "✅", "✅"] },
        { feature: "Citas recurrentes", values: ["✅", "✅", "❌", "✅"] },
        { feature: "Múltiples profesionales", values: ["✅", "✅", "✅", "Add-on"] },
        { feature: "Soporte en español", values: ["✅", "✅", "✅", "Parcial"] },
        { feature: "Adaptado a Colombia", values: ["✅", "Parcial", "Médicos solo", "❌"] },
        { feature: "Comisiones / nómina", values: ["✅", "✅", "❌", "❌"] },
        { feature: "Sin permanencia", values: ["✅", "✅", "✅", "✅"] },
      ]}
    />
  ),
  // Comparison table: whatsapp-business article (Personal vs Business, Business highlighted)
  CompareWhatsApp: () => (
    <FeatureTable
      cols={[
        { name: "WhatsApp Personal" },
        { name: "WhatsApp Business", highlight: true, sub: "Recomendado" },
      ]}
      rows={[
        { feature: "Perfil de empresa con horarios", values: ["❌", "✅"] },
        { feature: "Catálogo de servicios", values: ["❌", "✅"] },
        { feature: "Respuestas rápidas (atajos)", values: ["❌", "✅"] },
        { feature: "Mensaje de bienvenida automático", values: ["❌", "✅"] },
        { feature: "Mensaje de ausencia automático", values: ["❌", "✅"] },
        { feature: "Etiquetas para organizar chats", values: ["❌", "✅"] },
        { feature: "Estadísticas de mensajes", values: ["❌", "✅"] },
        { feature: "Costo", values: ["Gratis", "Gratis"] },
      ]}
    />
  ),
  // Comparison table: cuanto-cuesta article (6 tools, feature-first, AgenditApp highlighted)
  ComparePricing: () => (
    <FeatureTable
      cols={[
        { name: "AgenditApp", highlight: true, sub: "Recomendado" },
        { name: "Booksy" },
        { name: "Fresha" },
        { name: "Square" },
        { name: "Acuity" },
        { name: "Calendly" },
      ]}
      rows={[
        { feature: "Precio mensual mínimo", values: ["$10 USD", "$25 USD", "Gratis*", "Gratis*", "$16 USD", "$10 USD"] },
        { feature: "WhatsApp nativo", values: ["✅", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Soporte en español", values: ["✅", "Parcial", "❌", "❌", "❌", "❌"] },
        { feature: "Comisión por transacción", values: ["❌", "❌", "2,19 %+", "2,5 %+", "❌", "❌"] },
        { feature: "Fidelización incluida", values: ["✅", "Plan alto", "Parcial", "Plan alto", "❌", "❌"] },
        { feature: "Integración Google Maps", values: ["✅", "✅", "✅", "✅", "❌", "❌"] },
        { feature: "Diseñado para Colombia", values: ["✅", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Sin permanencia", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
      ]}
    />
  ),
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const ogImage = `/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.category)}&tag=Blog`;
  const seoTitle =
    post.seoTitle ||
    (post.title.length > 57 ? `${post.title.slice(0, 57)}...` : post.title);
  return {
    title: { absolute: seoTitle },
    description: post.description,
    alternates: { canonical: `https://agenditapp.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://agenditapp.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://agenditapp.com/blog/${slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "es-CO",
    image: {
      "@type": "ImageObject",
      url: `https://agenditapp.com/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.category)}&tag=Blog`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author ?? "Equipo AgenditApp",
      jobTitle: post.authorTitle ?? "Especialistas en gestión de negocios de citas",
      url: "https://agenditapp.com/nosotros",
    },
    publisher: {
      "@type": "Organization",
      name: "AgenditApp",
      url: "https://agenditapp.com",
      logo: { "@type": "ImageObject", url: "https://agenditapp.com/logo-text.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://agenditapp.com/blog/${slug}` },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    isPartOf: { "@type": "Blog", name: "Blog AgenditApp", url: "https://agenditapp.com/blog" },
  };

  const howToSchema = post.howToSteps?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.title,
        description: post.description,
        inLanguage: "es-CO",
        image: {
          "@type": "ImageObject",
          url: `https://agenditapp.com/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.category)}&tag=Blog`,
          width: 1200,
          height: 630,
        },
        step: post.howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://agenditapp.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://agenditapp.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, ...(howToSchema ? [howToSchema] : [])]) }}
      />
      <PageHeader />
      <main className="min-h-screen pt-28">
        {/* Breadcrumbs */}
        <nav className="px-4 sm:px-6 py-4 max-w-3xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted flex-wrap">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li>
              <Link href="/blog" className="hover:text-brand transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li className="text-heading font-medium line-clamp-1">{post.title}</li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="py-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-brand"
                style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
              >
                {post.category}
              </span>
              <span className="text-xs text-muted">{post.readingTime} de lectura</span>
              <span className="text-xs text-muted">·</span>
              <time dateTime={post.publishedAt} className="text-xs text-muted">
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-heading tracking-tight leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-body leading-relaxed mb-6">
              {post.description}
            </p>
            {/* Author block */}
            <div className="flex items-center gap-3 py-4 border-t border-b border-brand/10">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-brand text-xs font-bold select-none"
                style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}
              >
                {(post.author ?? "EA")
                  .split(" ")
                  .slice(0, 2)
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-heading leading-none">
                  {post.author ?? "Equipo AgenditApp"}
                </p>
                {post.authorTitle && (
                  <p className="text-xs text-muted mt-1">{post.authorTitle}</p>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </article>

        {/* Back to blog */}
        <div className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-brand/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
              </svg>
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
