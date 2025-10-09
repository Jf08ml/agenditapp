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
} from "./(landing)/components/constants";

export const metadata: Metadata = {
  title: "AgenditApp – Reserva en línea con recordatorios por WhatsApp",
  description:
    "Landing de bienvenida, agenda online, recordatorios por WhatsApp y panel administrativo.",
  openGraph: {
    title: "AgenditApp",
    description: "Reserva en línea 24/7 con recordatorios por WhatsApp",
    url: "https://agenditapp.com",
    siteName: "AgenditApp",
    images: [
      { url: "/inicio_page.png", width: 1200, height: 845, alt: "AgenditApp" },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg data={[JSONLD_SOFTWARE, JSONLD_FAQ, JSONLD_SERVICES]} />
      <Hero />
      <Sectores />
      <Reserva />
      <Servicios />
      <Ubicacion />
      <Precio />
      <FAQ />
      <Footer />
    </>
  );
}
