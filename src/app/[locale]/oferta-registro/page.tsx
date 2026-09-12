import type { Metadata } from "next";
import OfertaContent from "../../(landing)/components/lp/OfertaContent";
import MetaPixel from "../../(landing)/components/lp/MetaPixel";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Crea tu cuenta gratis en AgenditApp — Agenda por WhatsApp",
  description:
    "Crea tu cuenta y empieza gratis: reservas 24/7, recordatorios por WhatsApp y menos inasistencias. Sin tarjeta, sin permanencia.",
  alternates: { canonical: "https://agenditapp.com/oferta-registro" },
  robots: { index: false, follow: false },
};

export default function OfertaRegistroPage() {
  return (
    <>
      <MetaPixel />
      <OfertaContent variant="signup" compact />
    </>
  );
}

// Sin versión en inglés todavía: se genera solo para el locale por defecto
// y cualquier /en/* de esta ruta debe devolver 404 en vez de renderizar en español.
export function generateStaticParams() {
  return [{ locale: routing.defaultLocale }];
}

export const dynamicParams = false;
