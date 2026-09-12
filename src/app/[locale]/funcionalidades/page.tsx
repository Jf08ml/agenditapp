import type { Metadata } from "next";
import { Link as IntlLink } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { IconWeight } from "@phosphor-icons/react";
import {
  CalendarBlank, ChatsCircle, Briefcase, Gift, Globe,
  Megaphone, ShieldCheck, Rocket, Lightbulb, GraduationCap,
  CreditCard, Stack, Storefront,
} from "@phosphor-icons/react/dist/ssr";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import { withEnglish } from "@/lib/hreflang";
import { getPathname } from "@/i18n/navigation";
import { ogLocale, ogAlternateLocale, type Locale } from "@/i18n/routing";

type PhosphorIcon = React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Funcionalidades" });
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/funcionalidades" })}`;

  return {
    title: { absolute: t("meta.title") },
    description: t("meta.description"),
    alternates: {
      canonical,
      languages: withEnglish(getPathname({ locale: "en", href: "/funcionalidades" })),
    },
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
      url: canonical,
      images: ["/inicio_page.png"],
      locale: ogLocale(locale),
      alternateLocale: ogAlternateLocale(locale),
    },
  };
}

// Solo íconos y colores; el texto (categoría, nombre, descripción) viene de
// las traducciones y se combina con este array por índice.
const CATEGORY_ICONS: { Icon: PhosphorIcon; color: string }[] = [
  { Icon: CalendarBlank, color: "#1D4ED8" },
  { Icon: ChatsCircle, color: "#25D366" },
  { Icon: Briefcase, color: "#0D9488" },
  { Icon: CreditCard, color: "#16A34A" },
  { Icon: Stack, color: "#0EA5E9" },
  { Icon: Storefront, color: "#CA8A04" },
  { Icon: Gift, color: "#DB2777" },
  { Icon: Globe, color: "#7C3AED" },
  { Icon: Megaphone, color: "#EA580C" },
  { Icon: ShieldCheck, color: "#475569" },
];

const HIGHLIGHT_ICONS: { Icon: PhosphorIcon; color: string }[] = [
  { Icon: Rocket, color: "#1D4ED8" },
  { Icon: Lightbulb, color: "#D97706" },
  { Icon: GraduationCap, color: "#4338CA" },
];

type FeatureCopy = { nombre: string; descripcion: string };
type CategoryCopy = { categoria: string; features: FeatureCopy[] };
type HighlightCopy = { title: string; desc: string };

export default async function FuncionalidadesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Funcionalidades" });

  const categoriesCopy = t.raw("categories") as CategoryCopy[];
  const highlightsCopy = t.raw("highlights") as HighlightCopy[];

  const funcionalidades = CATEGORY_ICONS.map((icon, idx) => ({
    ...icon,
    ...categoriesCopy[idx],
  }));

  const highlights = HIGHLIGHT_ICONS.map((icon, idx) => ({
    ...icon,
    ...highlightsCopy[idx],
  }));

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumb.home"), item: "https://agenditapp.com" },
      { "@type": "ListItem", position: 2, name: t("breadcrumb.current"), item: "https://agenditapp.com/funcionalidades" },
    ],
  };

  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-5">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              {t("hero.titleStart")}{" "}
              <span className="text-brand">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <DemoCtaButton source="funcionalidades" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-brand text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-md cursor-pointer">
              {t("hero.cta")}
            </DemoCtaButton>
          </div>
        </section>

        {/* Features by category */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-14">
            {funcionalidades.map((cat, idx) => (
              <div key={cat.categoria}>
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.color}18` }}
                  >
                    <cat.Icon size={26} weight="duotone" color={cat.color} />
                  </div>
                  <h2 className="text-2xl font-semibold text-heading">{cat.categoria}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.features.map((f) => (
                    <div
                      key={f.nombre}
                      className="bg-bg-card border border-brand/10 rounded-[16px] p-5 hover:border-brand/25 transition-all duration-200"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      <h3 className="text-sm font-semibold text-heading mb-1.5">{f.nombre}</h3>
                      <p className="text-sm text-body leading-relaxed">{f.descripcion}</p>
                    </div>
                  ))}
                </div>

                {idx < funcionalidades.length - 1 && (
                  <div className="mt-12 border-t border-brand/8" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-heading text-center mb-10">
              {t("highlightsSection.heading")}
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="text-center bg-bg-card border border-brand/10 rounded-[16px] p-6"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex justify-center mb-3">
                    <span className="flex items-center justify-center w-12 h-12 rounded-[12px]" style={{ background: `${h.color}18` }}>
                      <h.Icon size={26} weight="duotone" color={h.color} />
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-heading mb-2">{h.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 sm:px-6">
          <div
            className="max-w-4xl mx-auto text-center rounded-[24px] p-10 sm:p-14"
            style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              {t("ctaSection.heading")}
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              {t("ctaSection.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <DemoCtaButton source="funcionalidades_cta" className="inline-flex items-center px-7 py-3.5 rounded-[12px] bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-md">
                {t("ctaSection.primaryButton")}
              </DemoCtaButton>
              <IntlLink
                href="/precios"
                className="inline-flex items-center px-7 py-3.5 rounded-[12px] border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                {t("ctaSection.secondaryButton")}
              </IntlLink>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
