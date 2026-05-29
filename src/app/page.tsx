import type { Metadata } from "next";
import { HREFLANG_ALTERNATES } from "@/lib/hreflang";
import Hero from "./(landing)/sections/Hero";
import ProofBar from "./(landing)/sections/ProofBar";
import Problem from "./(landing)/sections/Problem";
import QueObtendras from "./(landing)/sections/QueObtendras";
import Sectores from "./(landing)/sections/Sectores";
import Reserva from "./(landing)/sections/Reserva";
import Servicios from "./(landing)/sections/Servicios";
import WhatsAppShowcase from "./(landing)/sections/WhatsAppShowcase";
import Software from "./(landing)/sections/Software";
import CasosDeExito from "./(landing)/sections/CasosDeExito";
import Ubicacion from "./(landing)/sections/Ubicacion";
import ROICalculator from "./(landing)/sections/ROICalculator";
import Precio from "./(landing)/sections/Precio";
import FAQ from "./(landing)/sections/FAQ";
import DemoLead from "./(landing)/sections/DemoLead";
import Footer from "./(landing)/sections/Footer";
import SchemaOrg from "./(landing)/components/seo/SchemaOrg";
import {
  JSONLD_SOFTWARE,
  JSONLD_FAQ,
  JSONLD_SERVICES,
  JSONLD_ORGANIZATION,
  JSONLD_WEBSITE,
  JSONLD_TESTIMONIALS,
} from "./(landing)/components/constants";

export const metadata: Metadata = {
  title: "AgenditApp | Sistema de Agendamiento Online y Gestión de Citas Automático",
  description:
    "Plataforma moderna de agendamiento inteligente para negocios de belleza, bienestar y servicios profesionales. Recibe citas online, envía recordatorios automáticos por WhatsApp y gestiona tu agenda desde cualquier dispositivo. Ideal para salones, barberías, spas, consultorios y más.",
  openGraph: {
    title: "AgenditApp | Sistema de Agendamiento Online y Gestión de Citas",
    description:
      "Automatiza tu agenda y recibe reservas 24/7. Recordatorios por WhatsApp, gestión de clientes y panel administrativo completo. Sin permanencia. Prueba gratis.",
    url: "https://agenditapp.com",
    siteName: "AgenditApp",
    images: [
      {
        url: "/inicio_page.png",
        width: 1200,
        height: 845,
        alt: "AgenditApp - Sistema de agendamiento online para negocios",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenditApp | Agendamiento Online Automático",
    description:
      "Automatiza reservas, envía recordatorios por WhatsApp y gestiona tu negocio desde una sola plataforma. Prueba gratis.",
    images: ["/inicio_page.png"],
    creator: "@AgenditApp",
  },
  alternates: {
    canonical: "https://agenditapp.com",
    languages: HREFLANG_ALTERNATES,
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        data={[
          JSONLD_ORGANIZATION,
          JSONLD_WEBSITE,
          JSONLD_SOFTWARE,
          JSONLD_FAQ,
          JSONLD_SERVICES,
          JSONLD_TESTIMONIALS,
        ]}
      />
      <Hero />
      <ProofBar />
      <QueObtendras />
      <Problem />
      <Reserva />
      <Servicios />
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
    </>
  );
}
