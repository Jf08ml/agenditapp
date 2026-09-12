import type { Metadata } from "next";
import Link from "next/link";
import type { IconWeight } from "@phosphor-icons/react";
import { getTranslations } from "next-intl/server";
import {
  Sparkle, Scissors, Flower, Eye, Stethoscope, Tooth, Brain, Barbell,
  Leaf, PawPrint, Syringe, Camera, MusicNotes, Books, Scales, YinYang,
} from "@phosphor-icons/react/dist/ssr";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import { withEnglish } from "@/lib/hreflang";
import { getPathname } from "@/i18n/navigation";
import { ogLocale, ogAlternateLocale, type Locale } from "@/i18n/routing";

type PIEntry = { Icon: React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>; color: string };
const SECTOR_ICON_MAP: Record<string, PIEntry> = {
  "💇‍♀️": { Icon: Sparkle,    color: "#DB2777" },
  "💈":   { Icon: Scissors,   color: "#1D4ED8" },
  "🧖‍♀️": { Icon: Flower,     color: "#059669" },
  "🏥":   { Icon: Stethoscope,color: "#0D9488" },
  "👁️":  { Icon: Eye,        color: "#7C3AED" },
  "🏋️‍♀️": { Icon: Barbell,   color: "#EA580C" },
  "🦷":   { Icon: Tooth,      color: "#0EA5E9" },
  "🧠":   { Icon: Brain,      color: "#4338CA" },
  "🥗":   { Icon: Leaf,       color: "#059669" },
  "🐶":   { Icon: PawPrint,    color: "#D97706" },
  "💃":   { Icon: YinYang,    color: "#4338CA" },
  "🎸":   { Icon: MusicNotes, color: "#7C3AED" },
  "📚":   { Icon: Books,      color: "#D97706" },
  "📸":   { Icon: Camera,     color: "#475569" },
  "⚖️":  { Icon: Scales,     color: "#1D4ED8" },
  "💉":   { Icon: Syringe,    color: "#E11D48" },
};

// Solo datos estructurales (slug/ícono); el copy (title/description/keywords)
// viene de los mensajes de next-intl bajo "sectors.<slug>" y se combina con
// este array por slug en el componente.
const SECTOR_STRUCTURE = [
  { slug: "salones-belleza", icon: "💇‍♀️" },
  { slug: "barberias", icon: "💈" },
  { slug: "spas", icon: "🧖‍♀️" },
  { slug: "consultorios", icon: "🏥" },
  { slug: "lash-brow", icon: "👁️" },
  { slug: "gimnasios", icon: "🏋️‍♀️" },
  { slug: "odontologia", icon: "🦷" },
  { slug: "psicologia", icon: "🧠" },
  { slug: "nutricion", icon: "🥗" },
  { slug: "veterinarias", icon: "🐶" },
  { slug: "danza-yoga", icon: "💃" },
  { slug: "musica", icon: "🎸" },
  { slug: "tutorias", icon: "📚" },
  { slug: "fotografia", icon: "📸" },
  { slug: "abogados", icon: "⚖️" },
  { slug: "estetica-medica", icon: "💉" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SectoresPage" });
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/sectores" })}`;

  return {
    title: { absolute: t("meta.title") },
    description: t("meta.description"),
    alternates: {
      canonical,
      languages: withEnglish(getPathname({ locale: "en", href: "/sectores" })),
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

export default async function SectoresPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SectoresPage" });
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/sectores" })}`;
  const sectorsCopy = t.raw("sectors") as Record<
    string,
    { title: string; description: string; keywords: string[] }
  >;
  const sectores = SECTOR_STRUCTURE.map((s) => ({ ...s, ...sectorsCopy[s.slug] }));

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: "https://agenditapp.com" },
      { "@type": "ListItem", position: 2, name: t("breadcrumbSectores"), item: canonical },
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
              {t("badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
              {t("heading.prefix")}{" "}
              <span className="text-brand">{t("heading.highlight")}</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("subheading")}
            </p>
            <DemoCtaButton source="sectores" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-brand text-white text-sm font-semibold hover:bg-brand-hover transition-colors shadow-md cursor-pointer">
              {t("heroCta")}
            </DemoCtaButton>
          </div>
        </section>

        {/* Grid */}
        <section className="py-8 pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectores.map((sector) => (
                <Link
                  key={sector.slug}
                  href={`/sectores/${sector.slug}`}
                  className="group bg-bg-card border border-brand/10 rounded-[20px] p-6 hover:border-brand/30 transition-all duration-200 flex flex-col"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {(() => {
                    const e = SECTOR_ICON_MAP[sector.icon];
                    return (
                      <div
                        className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 flex-shrink-0"
                        style={{ background: e ? `${e.color}18` : "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                      >
                        {e ? <e.Icon size={26} weight="duotone" color={e.color} /> : <span className="text-2xl">{sector.icon}</span>}
                      </div>
                    );
                  })()}
                  <h2 className="text-base font-semibold text-heading mb-2 group-hover:text-brand transition-colors">
                    {sector.title}
                  </h2>
                  <p className="text-sm text-body leading-relaxed mb-4 flex-1">{sector.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sector.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-brand/6 text-brand border border-brand/15"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("viewDetails")}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
                    </svg>
                  </span>
                </Link>
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
              {t("notFoundHeading")}
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              {t("notFoundBody")}
            </p>
            <DemoCtaButton source="sectores_cta" className="inline-flex items-center px-7 py-3.5 rounded-[12px] bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer shadow-md">
              {t("notFoundCta")}
            </DemoCtaButton>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
