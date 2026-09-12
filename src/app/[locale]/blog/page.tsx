import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";
import { Link as IntlLink } from "@/i18n/navigation";
import BlogList from "./BlogList";
import { withEnglish } from "@/lib/hreflang";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/blog" })}`;

  return {
    title: { absolute: t("meta.title") },
    description: t("meta.description"),
    alternates: {
      canonical,
      languages: withEnglish(getPathname({ locale: "en", href: "/blog" })),
    },
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
      url: canonical,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
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
              <IntlLink href="/" className="hover:text-brand transition-colors">
                {t("breadcrumbHome")}
              </IntlLink>
            </li>
            <li className="text-muted/50">/</li>
            <li className="text-heading font-medium">{t("breadcrumbBlog")}</li>
          </ol>
        </nav>

        {/* Header */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-brand mb-5"
              style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
            >
              {t("eyebrow")}
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              {t("heading")} <span className="text-brand">{t("headingBrand")}</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed">
              {t("subheading")}
            </p>
          </div>
        </section>

        {/* Posts grid + category filter */}
        <section className="py-8 pb-20 px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-muted py-20">{t("comingSoon")}</p>
          ) : (
            <BlogList
              posts={posts}
              categories={categories}
              labels={{
                allCategory: t("allCategory"),
                noPostsInCategory: t("noPostsInCategory"),
                readingTimeSuffix: t("readingTimeSuffix"),
                readArticle: t("readArticle"),
              }}
            />
          )}
        </section>
      </main>
      <PageFooter />
    </>
  );
}
