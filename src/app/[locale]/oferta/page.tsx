import type { Metadata } from "next";
import OfertaContent from "../../(landing)/components/lp/OfertaContent";
import MetaPixel from "../../(landing)/components/lp/MetaPixel";
import LpScrollDepth from "../../(landing)/components/lp/LpScrollDepth";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Empieza gratis con AgenditApp — Llena tu agenda por WhatsApp",
  description:
    "Recibe reservas 24/7 y reduce las inasistencias hasta un 60% con recordatorios por WhatsApp. Pruébalo gratis, sin tarjeta.",
  alternates: { canonical: "https://agenditapp.com/oferta" },
  robots: { index: false, follow: false },
};

export default function OfertaPage() {
  return (
    <>
      <MetaPixel />
      <LpScrollDepth source="oferta" />
      <OfertaContent variant="whatsapp" hideEarlyCtas />
    </>
  );
}

// Sin versión en inglés todavía: se genera solo para el locale por defecto
// y cualquier /en/* de esta ruta debe devolver 404 en vez de renderizar en español.
export function generateStaticParams() {
  return [{ locale: routing.defaultLocale }];
}

export const dynamicParams = false;
