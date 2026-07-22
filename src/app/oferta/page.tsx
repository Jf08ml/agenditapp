import type { Metadata } from "next";
import OfertaContent from "../(landing)/components/lp/OfertaContent";
import MetaPixel from "../(landing)/components/lp/MetaPixel";
import LpScrollDepth from "../(landing)/components/lp/LpScrollDepth";

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
