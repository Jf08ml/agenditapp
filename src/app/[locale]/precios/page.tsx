import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import Precio from "../../(landing)/sections/Precio";
import { withEnglish } from "@/lib/hreflang";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PreciosPage" });
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/precios" })}`;

  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical,
      languages: withEnglish(getPathname({ locale: "en", href: "/precios" })),
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
      images: ["/inicio_page.png"],
    },
  };
}

export default async function PreciosPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [t, tJsonld] = await Promise.all([
    getTranslations({ locale, namespace: "PreciosPage" }),
    getTranslations({ locale, namespace: "Jsonld" }),
  ]);
  const canonical = `https://agenditapp.com${getPathname({ locale, href: "/precios" })}`;
  const faq = t.raw("faq") as Array<{ q: string; a: string }>;

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: "https://agenditapp.com" },
      { "@type": "ListItem", position: 2, name: t("breadcrumbPrecios"), item: canonical },
    ],
  };

  const OFFER_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AgenditApp",
    description: tJsonld("softwareDescription"),
    image: "https://agenditapp.com/inicio_page.png",
    brand: { "@type": "Brand", name: "AgenditApp" },
    offers: [
      {
        "@type": "Offer",
        name: tJsonld("services.basico.name"),
        price: "10",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: t("offers.basico.description"),
        url: canonical,
      },
      {
        "@type": "Offer",
        name: tJsonld("services.esencial.name"),
        price: "20",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: t("offers.esencial.description"),
        url: canonical,
      },
      {
        "@type": "Offer",
        name: tJsonld("services.marca.name"),
        price: "30",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: t("offers.marca.description"),
        url: canonical,
      },
    ],
  };

  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, OFFER_SCHEMA]} />
      <PageHeader />

      <main className="min-h-screen pt-28">
        <Precio asH1 />

        {/* Comparativas — enlace contextual fondo de embudo */}
        <section className="pb-4 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted">
              {t("comparativasIntro")}{" "}
              <Link href="/vs/fresha" className="text-brand hover:underline transition-colors">Fresha</Link>
              {" · "}
              <Link href="/vs/agendapro" className="text-brand hover:underline transition-colors">AgendaPro</Link>
              {" · "}
              <Link href="/vs/booksy" className="text-brand hover:underline transition-colors">Booksy</Link>
              {" · "}
              <Link href="/vs/weibook" className="text-brand hover:underline transition-colors">Weibook</Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-heading text-center mb-10">{t("faqHeading")}</h2>
            <div className="flex flex-col gap-3">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group bg-bg-card border border-brand/10 rounded-[14px] px-5 py-4 hover:border-brand/25 transition-colors"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <summary className="cursor-pointer font-semibold text-heading text-sm list-none flex justify-between items-center gap-4">
                    {item.q}
                    <span className="text-brand text-lg leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-body leading-relaxed border-t border-brand/8 pt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
