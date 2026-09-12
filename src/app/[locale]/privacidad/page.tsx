import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import { withEnglish } from "@/lib/hreflang";
import { getPathname } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacidad" });
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/privacidad" })}`;

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical,
      languages: withEnglish(getPathname({ locale: "en", href: "/privacidad" })),
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacidad" });
  const sections = t.raw("sections") as { n: string; title: string; body?: string }[];
  const lastUpdatedDate = new Date().toLocaleDateString(locale === "en" ? "en-US" : "es-CO");

  return (
    <>
      <PageHeader />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
              {t("badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-heading mb-3">{t("title")}</h1>
            <p className="text-body leading-relaxed">
              {t("intro")}
            </p>
          </div>

          {/* Content */}
          <div className="bg-bg-card border border-brand/10 rounded-[20px] p-6 sm:p-8 space-y-6"
            style={{ boxShadow: "var(--shadow-card)" }}>
            {sections.map((item) => (
              <div key={item.n} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-brand"
                  style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                >
                  {item.n}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading mb-1">{item.title}</p>
                  {item.body ? (
                    <p className="text-sm text-body leading-relaxed">{item.body}</p>
                  ) : (
                    <p className="text-sm text-body leading-relaxed">
                      {t.rich("arcoText", {
                        email: (chunks) => (
                          <a
                            key="email"
                            href="mailto:soporte@agenditapp.com"
                            className="text-brand underline decoration-brand/30 hover:decoration-brand transition-colors"
                          >
                            {chunks}
                          </a>
                        ),
                      })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted">
            {t("lastUpdated", { date: lastUpdatedDate })}
          </p>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
