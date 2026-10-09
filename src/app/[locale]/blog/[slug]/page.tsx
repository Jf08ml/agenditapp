import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { COMPARE_TABLES, type FeatureTableData } from "./compareTables";
import { getTranslations } from "next-intl/server";
import { getAllSlugs, getPost, getPostTranslations, getRelatedPosts } from "@/lib/blog";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import { DemoCtaButton } from "@/app/(landing)/components/ui/DemoCtaModal";
import { getPathname } from "@/i18n/navigation";
import { routing, ogLocale, type Locale } from "@/i18n/routing";

const BASE_URL = "https://agenditapp.com";

function blogPath(locale: Locale) {
  return getPathname({ locale, href: "/blog" });
}

function postUrl(locale: Locale, slug: string) {
  return `${BASE_URL}${blogPath(locale)}/${slug}`;
}

// --- Internal feature comparison table renderer ---
function FeatureTable({ cols, rows }: FeatureTableData) {
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
function getMdxComponents(locale: Locale, ctaLabel: string) {
  const tables = COMPARE_TABLES[locale];
  return {
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
          {ctaLabel}
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
    // Comparison tables (data per locale in ./compareTables.ts)
    CompareApps: () => <FeatureTable {...tables.apps} />,
    CompareConsultorios: () => <FeatureTable {...tables.consultorios} />,
    CompareWhatsApp: () => <FeatureTable {...tables.whatsapp} />,
    ComparePricing: () => <FeatureTable {...tables.pricing} />,
  };
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "en" ? "en-US" : "es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ogImageFor(title: string, category: string) {
  return `/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(category)}&tag=Blog`;
}

// Cada locale genera solo los artículos que existen en su carpeta
// (src/content/blog/ para español, src/content/blog/en/ para inglés), así
// que cualquier /en/blog/* sin traducción devuelve 404 en vez de renderizar
// en español.
export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};
  const url = postUrl(locale, slug);
  const ogImage = ogImageFor(post.title, post.category);
  const seoTitle =
    post.seoTitle ||
    (post.title.length > 57 ? `${post.title.slice(0, 57)}...` : post.title);

  // hreflang solo cuando el artículo existe en más de un idioma.
  const translations = getPostTranslations(slug, locale);
  const esSlug = translations[routing.defaultLocale];
  const enSlug = translations.en;
  const languages =
    esSlug && enSlug
      ? {
          es: postUrl(routing.defaultLocale, esSlug),
          en: postUrl("en", enSlug),
          "x-default": postUrl(routing.defaultLocale, esSlug),
        }
      : undefined;
  const alternateLocale = routing.locales
    .filter((l) => l !== locale && translations[l])
    .map(ogLocale);

  return {
    title: { absolute: seoTitle },
    description: post.description,
    alternates: { canonical: url, ...(languages && { languages }) },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      locale: ogLocale(locale),
      ...(alternateLocale.length > 0 && { alternateLocale }),
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
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "BlogPage" });
  const relatedPosts = getRelatedPosts(slug, 3, locale);
  const url = postUrl(locale, slug);
  const homeHref = getPathname({ locale, href: "/" });
  const blogHref = blogPath(locale);
  const inLanguage = locale === "en" ? "en" : "es-CO";
  const ogImageUrl = `${BASE_URL}${ogImageFor(post.title, post.category)}`;
  const author = post.author ?? t("post.defaultAuthor");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage,
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: author,
      jobTitle: post.authorTitle ?? t("post.defaultAuthorTitle"),
      url: `${BASE_URL}/nosotros`,
    },
    publisher: {
      "@type": "Organization",
      name: "AgenditApp",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo-text.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    isPartOf: { "@type": "Blog", name: t("post.blogName"), url: `${BASE_URL}${blogHref}` },
  };

  const howToSchema = post.howToSteps?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.title,
        description: post.description,
        inLanguage,
        image: {
          "@type": "ImageObject",
          url: ogImageUrl,
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
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: homeHref === "/" ? BASE_URL : `${BASE_URL}${homeHref}` },
      { "@type": "ListItem", position: 2, name: t("breadcrumbBlog"), item: `${BASE_URL}${blogHref}` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
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
              <Link href={homeHref} className="hover:text-brand transition-colors">
                {t("breadcrumbHome")}
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li>
              <Link href={blogHref} className="hover:text-brand transition-colors">
                {t("breadcrumbBlog")}
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
              <span className="text-xs text-muted">{post.readingTime} {t("readingTimeSuffix")}</span>
              <span className="text-xs text-muted">·</span>
              <time dateTime={post.publishedAt} className="text-xs text-muted">
                {formatDate(post.publishedAt, locale)}
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
                  {author}
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
              components={getMdxComponents(locale, t("post.cta"))}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="px-4 sm:px-6 pb-16">
            <div className="max-w-3xl mx-auto border-t border-brand/10 pt-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-heading mb-6">
                {t("post.related")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`${blogHref}/${rp.slug}`}
                    className="group bg-bg-card border border-brand/10 rounded-[16px] p-5 hover:border-brand/30 transition-all flex flex-col gap-3"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <span
                      className="inline-flex w-fit items-center px-2.5 py-1 rounded-full text-[11px] font-semibold text-brand"
                      style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                    >
                      {rp.category}
                    </span>
                    <h3 className="text-sm font-semibold text-heading group-hover:text-brand transition-colors leading-snug line-clamp-3">
                      {rp.title}
                    </h3>
                    <span className="mt-auto text-xs text-muted">{rp.readingTime} {t("readingTimeSuffix")}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-brand/10 pt-8">
            <Link
              href={blogHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
              </svg>
              {t("post.backToAll")}
            </Link>
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
