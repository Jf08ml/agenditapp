import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPost } from "@/lib/blog";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import { DemoCtaButton } from "@/app/(landing)/components/ui/DemoCtaModal";

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
      <DemoCtaButton className="inline-flex items-center px-7 py-3 rounded-[12px] bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-md">
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
  return {
    title: `${post.title} | AgenditApp Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://agenditapp.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://agenditapp.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
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
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "AgenditApp",
      url: "https://agenditapp.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AgenditApp",
      url: "https://agenditapp.com",
      logo: { "@type": "ImageObject", url: "https://agenditapp.com/logo-text.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://agenditapp.com/blog/${slug}` },
    keywords: post.keywords.join(", "),
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
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
            <p className="text-lg text-body leading-relaxed border-b border-brand/10 pb-8">
              {post.description}
            </p>
          </div>
        </header>

        {/* Article body */}
        <article className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <MDXRemote source={post.content} components={mdxComponents} />
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
