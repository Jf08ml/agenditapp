import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { withEnglish } from "@/lib/hreflang";
import { routing, ogLocale, ogAlternateLocale, type Locale } from "@/i18n/routing";
import Hero from "../(landing)/sections/Hero";
import ProofBar from "../(landing)/sections/ProofBar";
import Problem from "../(landing)/sections/Problem";
import QueObtendras from "../(landing)/sections/QueObtendras";
import Sectores from "../(landing)/sections/Sectores";
import Reserva from "../(landing)/sections/Reserva";
import Servicios from "../(landing)/sections/Servicios";
import PagosVentas from "../(landing)/sections/PagosVentas";
import WhatsAppShowcase from "../(landing)/sections/WhatsAppShowcase";
import Software from "../(landing)/sections/Software";
import CasosDeExito from "../(landing)/sections/CasosDeExito";
import Ubicacion from "../(landing)/sections/Ubicacion";
import ROICalculator from "../(landing)/sections/ROICalculator";
import Precio from "../(landing)/sections/Precio";
import FAQ from "../(landing)/sections/FAQ";
import DemoLead from "../(landing)/sections/DemoLead";
import Footer from "../(landing)/sections/Footer";
import PromoPopup from "../(landing)/components/ui/PromoPopup";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import {
  getJsonldSoftware,
  getJsonldFaq,
  getJsonldServices,
  getJsonldOrganization,
  getJsonldWebsite,
  JSONLD_TESTIMONIALS,
} from "../(landing)/components/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  const canonical =
    locale === routing.defaultLocale
      ? "https://agenditapp.com"
      : "https://agenditapp.com/en";

  return {
    title: { absolute: t("title") },
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: canonical,
      siteName: "AgenditApp",
      images: [
        {
          url: "/inicio_page.png",
          width: 1200,
          height: 845,
          alt: t("ogImageAlt"),
        },
      ],
      locale: ogLocale(locale),
      alternateLocale: ogAlternateLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/inicio_page.png"],
      creator: "@AgenditApp",
    },
    alternates: {
      canonical,
      languages: withEnglish("/en"),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [jsonldOrganization, jsonldWebsite, jsonldSoftware, jsonldFaq, jsonldServices] =
    await Promise.all([
      getJsonldOrganization(locale),
      getJsonldWebsite(locale),
      getJsonldSoftware(locale),
      getJsonldFaq(locale),
      getJsonldServices(locale),
    ]);

  return (
    <>
      <SchemaOrg
        data={[
          jsonldOrganization,
          jsonldWebsite,
          jsonldSoftware,
          jsonldFaq,
          jsonldServices,
          JSONLD_TESTIMONIALS,
        ]}
      />
      <Hero />
      <ProofBar />
      <QueObtendras />
      <Problem />
      <Reserva />
      <Servicios />
      <PagosVentas />
      <WhatsAppShowcase />
      <Software />
      <Sectores />
      <CasosDeExito />
      <Ubicacion />
      <ROICalculator />
      <Precio />
      <FAQ />
      <DemoLead />
      <Footer />
      <PromoPopup source="home" />
    </>
  );
}
