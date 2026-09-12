import type { Metadata } from "next";
import PresentacionContent from "../(landing)/components/lp/PresentacionContent";

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
