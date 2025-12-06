import type { Metadata } from "next";
import Hero from "./(landing)/sections/Hero";
import Sectores from "./(landing)/sections/Sectores";
import Reserva from "./(landing)/sections/Reserva";
import Servicios from "./(landing)/sections/Servicios";
import Ubicacion from "./(landing)/sections/Ubicacion";
import Precio from "./(landing)/sections/Precio";
import FAQ from "./(landing)/sections/FAQ";
import Footer from "./(landing)/sections/Footer";
import SchemaOrg from "./(landing)/components/seo/SchemaOrg";
import {
  JSONLD_SOFTWARE,
  JSONLD_FAQ,
  JSONLD_SERVICES,
  JSONLD_ORGANIZATION,
} from "./(landing)/components/constants";
import DemoLead from "./(landing)/sections/DemoLead";

export const metadata: Metadata = {
  title: "AgenditApp | Sistema de Agendamiento Online y Gestión de Citas Automático",
  description:
    "Plataforma moderna de agendamiento inteligente para negocios de belleza, bienestar y servicios profesionales. Recibe citas online, envía recordatorios automáticos por WhatsApp y gestiona tu agenda desde cualquier dispositivo. Ideal para salones, barberías, spas, consultorios y más.",
  keywords: [
    "agendamiento online",
    "sistema de reservas",
    "agenda digital",
    "software de citas",
    "gestión de turnos",
    "agenda para salones de belleza",
    "reservas automáticas",
    "recordatorios por WhatsApp",
    "app para agendar citas Colombia",
    "software para barberías",
    "agenda para spa",
    "sistema de citas profesional",
  ],
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
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        data={[
          JSONLD_ORGANIZATION,
          JSONLD_SOFTWARE,
          JSONLD_FAQ,
          JSONLD_SERVICES,
        ]}
      />
      <Hero />
      <Sectores />
      <Reserva />
      <Servicios />
      <Ubicacion />
      <Precio />
      <DemoLead />
      <FAQ />
      <Footer />
    </>
  );
}
