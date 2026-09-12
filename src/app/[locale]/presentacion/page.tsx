import type { Metadata } from "next";
import PresentacionContent from "../../(landing)/components/lp/PresentacionContent";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "AgenditApp — Agendamiento online con WhatsApp automático",
  description:
    "Conoce AgenditApp: organiza tus citas, automatiza recordatorios por WhatsApp y recibe reservas 24/7. Empieza gratis, sin tarjeta.",
  alternates: { canonical: "https://agenditapp.com/presentacion" },
  robots: { index: false, follow: true },
};

export default function PresentacionPage() {
  return <PresentacionContent />;
}

// Sin versión en inglés todavía: se genera solo para el locale por defecto
// y cualquier /en/* de esta ruta debe devolver 404 en vez de renderizar en español.
export function generateStaticParams() {
  return [{ locale: routing.defaultLocale }];
}

export const dynamicParams = false;
