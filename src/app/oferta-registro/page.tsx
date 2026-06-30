import type { Metadata } from "next";
import OfertaContent from "../(landing)/components/lp/OfertaContent";

export const metadata: Metadata = {
  title: "Crea tu cuenta gratis en AgenditApp — Agenda por WhatsApp",
  description:
    "Crea tu cuenta y empieza gratis: reservas 24/7, recordatorios por WhatsApp y menos inasistencias. Sin tarjeta, sin permanencia.",
  alternates: { canonical: "https://agenditapp.com/oferta-registro" },
  robots: { index: false, follow: false },
};

export default function OfertaRegistroPage() {
  return <OfertaContent variant="signup" />;
}
