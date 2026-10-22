import type { Locale } from "@/i18n/routing";

export type FTCol = { name: string; highlight?: boolean; sub?: string };
export type FTRow = { feature: string; values: string[] };
export type FeatureTableData = { cols: FTCol[]; rows: FTRow[] };

type CompareTables = {
  /** mejores-apps article (7 apps, feature-first, AgenditApp highlighted) */
  apps: FeatureTableData;
  /** software-agendamiento-consultorios article (4 tools, feature-first, AgenditApp highlighted) */
  consultorios: FeatureTableData;
  /** whatsapp-business article (Personal vs Business, Business highlighted) */
  whatsapp: FeatureTableData;
  /** cuanto-cuesta article (6 tools, feature-first, AgenditApp highlighted) */
  pricing: FeatureTableData;
};

// Tablas comparativas usadas como componentes MDX (<CompareApps />, etc.).
// Cada locale tiene su versión: el mismo componente en un artículo traducido
// renderiza los textos en el idioma del artículo.
export const COMPARE_TABLES: Record<Locale, CompareTables> = {
  "es-419": {
    apps: {
      cols: [
        { name: "AgenditApp", highlight: true, sub: "Recomendado" },
        { name: "AgendaPro" },
        { name: "Fresha" },
        { name: "SimplyBook" },
        { name: "Vagaro" },
        { name: "WeiBook" },
        { name: "Noona" },
      ],
      rows: [
        { feature: "Precio mensual", values: ["$12–30 USD", "$30–60 USD", "Gratis + comisión", "$9–49 USD", "$30 USD+", "$8–20 USD", "$15–30 EUR"] },
        { feature: "WhatsApp nativo", values: ["✅", "Parcial", "❌", "❌", "❌", "Limitado", "❌"] },
        { feature: "Soporte en español", values: ["✅", "✅", "❌", "Básico", "❌", "✅", "❌"] },
        { feature: "Diseñado para Colombia", values: ["✅", "Parcial", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Sin permanencia", values: ["✅", "✅", "✅", "✅", "✅", "✅", "✅"] },
        { feature: "Fidelización incluida", values: ["✅", "✅", "Parcial", "Add-on", "✅", "❌", "✅"] },
        { feature: "Integración Google Maps", values: ["✅", "✅", "✅", "✅", "✅", "❌", "Parcial"] },
      ],
    },
    consultorios: {
      cols: [
        { name: "AgenditApp", highlight: true, sub: "Recomendado" },
        { name: "AgendaPro" },
        { name: "Doctoralia" },
        { name: "Calendly" },
      ],
      rows: [
        { feature: "Precio mensual", values: ["$12–30 USD", "$30–60 USD", "Gratis + planes", "$10–20 USD"] },
        { feature: "WhatsApp nativo", values: ["✅", "Parcial", "❌", "❌"] },
        { feature: "Recordatorios automáticos", values: ["✅", "✅", "✅", "✅"] },
        { feature: "Citas recurrentes", values: ["✅", "✅", "❌", "✅"] },
        { feature: "Múltiples profesionales", values: ["✅", "✅", "✅", "Add-on"] },
        { feature: "Soporte en español", values: ["✅", "✅", "✅", "Parcial"] },
        { feature: "Adaptado a Colombia", values: ["✅", "Parcial", "Médicos solo", "❌"] },
        { feature: "Comisiones / nómina", values: ["✅", "✅", "❌", "❌"] },
        { feature: "Sin permanencia", values: ["✅", "✅", "✅", "✅"] },
      ],
    },
    whatsapp: {
      cols: [
        { name: "WhatsApp Personal" },
        { name: "WhatsApp Business", highlight: true, sub: "Recomendado" },
      ],
      rows: [
        { feature: "Perfil de empresa con horarios", values: ["❌", "✅"] },
        { feature: "Catálogo de servicios", values: ["❌", "✅"] },
        { feature: "Respuestas rápidas (atajos)", values: ["❌", "✅"] },
        { feature: "Mensaje de bienvenida automático", values: ["❌", "✅"] },
        { feature: "Mensaje de ausencia automático", values: ["❌", "✅"] },
        { feature: "Etiquetas para organizar chats", values: ["❌", "✅"] },
        { feature: "Estadísticas de mensajes", values: ["❌", "✅"] },
        { feature: "Costo", values: ["Gratis", "Gratis"] },
      ],
    },
    pricing: {
      cols: [
        { name: "AgenditApp", highlight: true, sub: "Recomendado" },
        { name: "Booksy" },
        { name: "Fresha" },
        { name: "Square" },
        { name: "Acuity" },
        { name: "Calendly" },
      ],
      rows: [
        { feature: "Precio mensual mínimo", values: ["$12 USD", "$25 USD", "Gratis*", "Gratis*", "$16 USD", "$10 USD"] },
        { feature: "WhatsApp nativo", values: ["✅", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Soporte en español", values: ["✅", "Parcial", "❌", "❌", "❌", "❌"] },
        { feature: "Comisión por transacción", values: ["❌", "❌", "2,19 %+", "2,5 %+", "❌", "❌"] },
        { feature: "Fidelización incluida", values: ["✅", "Plan alto", "Parcial", "Plan alto", "❌", "❌"] },
        { feature: "Integración Google Maps", values: ["✅", "✅", "✅", "✅", "❌", "❌"] },
        { feature: "Diseñado para Colombia", values: ["✅", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Sin permanencia", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
      ],
    },
  },
  en: {
    apps: {
      cols: [
        { name: "AgenditApp", highlight: true, sub: "Recommended" },
        { name: "AgendaPro" },
        { name: "Fresha" },
        { name: "SimplyBook" },
        { name: "Vagaro" },
        { name: "WeiBook" },
        { name: "Noona" },
      ],
      rows: [
        { feature: "Monthly price", values: ["$12–30 USD", "$30–60 USD", "Free + commission", "$9–49 USD", "$30+ USD", "$8–20 USD", "€15–30"] },
        { feature: "Native WhatsApp", values: ["✅", "Partial", "❌", "❌", "❌", "Limited", "❌"] },
        { feature: "Spanish-language support", values: ["✅", "✅", "❌", "Basic", "❌", "✅", "❌"] },
        { feature: "Built for Colombia", values: ["✅", "Partial", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "No long-term contract", values: ["✅", "✅", "✅", "✅", "✅", "✅", "✅"] },
        { feature: "Loyalty program included", values: ["✅", "✅", "Partial", "Add-on", "✅", "❌", "✅"] },
        { feature: "Google Maps integration", values: ["✅", "✅", "✅", "✅", "✅", "❌", "Partial"] },
      ],
    },
    consultorios: {
      cols: [
        { name: "AgenditApp", highlight: true, sub: "Recommended" },
        { name: "AgendaPro" },
        { name: "Doctoralia" },
        { name: "Calendly" },
      ],
      rows: [
        { feature: "Monthly price", values: ["$12–30 USD", "$30–60 USD", "Free + paid plans", "$10–20 USD"] },
        { feature: "Native WhatsApp", values: ["✅", "Partial", "❌", "❌"] },
        { feature: "Automatic reminders", values: ["✅", "✅", "✅", "✅"] },
        { feature: "Recurring appointments", values: ["✅", "✅", "❌", "✅"] },
        { feature: "Multiple practitioners", values: ["✅", "✅", "✅", "Add-on"] },
        { feature: "Spanish-language support", values: ["✅", "✅", "✅", "Partial"] },
        { feature: "Adapted to Colombia", values: ["✅", "Partial", "Doctors only", "❌"] },
        { feature: "Commissions / payroll", values: ["✅", "✅", "❌", "❌"] },
        { feature: "No long-term contract", values: ["✅", "✅", "✅", "✅"] },
      ],
    },
    whatsapp: {
      cols: [
        { name: "Personal WhatsApp" },
        { name: "WhatsApp Business", highlight: true, sub: "Recommended" },
      ],
      rows: [
        { feature: "Business profile with opening hours", values: ["❌", "✅"] },
        { feature: "Service catalog", values: ["❌", "✅"] },
        { feature: "Quick replies (shortcuts)", values: ["❌", "✅"] },
        { feature: "Automatic greeting message", values: ["❌", "✅"] },
        { feature: "Automatic away message", values: ["❌", "✅"] },
        { feature: "Labels to organize chats", values: ["❌", "✅"] },
        { feature: "Message statistics", values: ["❌", "✅"] },
        { feature: "Cost", values: ["Free", "Free"] },
      ],
    },
    pricing: {
      cols: [
        { name: "AgenditApp", highlight: true, sub: "Recommended" },
        { name: "Booksy" },
        { name: "Fresha" },
        { name: "Square" },
        { name: "Acuity" },
        { name: "Calendly" },
      ],
      rows: [
        { feature: "Lowest monthly price", values: ["$12 USD", "$25 USD", "Free*", "Free*", "$16 USD", "$10 USD"] },
        { feature: "Native WhatsApp", values: ["✅", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "Spanish-language support", values: ["✅", "Partial", "❌", "❌", "❌", "❌"] },
        { feature: "Transaction fee", values: ["❌", "❌", "2.19%+", "2.5%+", "❌", "❌"] },
        { feature: "Loyalty program included", values: ["✅", "Higher tier", "Partial", "Higher tier", "❌", "❌"] },
        { feature: "Google Maps integration", values: ["✅", "✅", "✅", "✅", "❌", "❌"] },
        { feature: "Built for Colombia", values: ["✅", "❌", "❌", "❌", "❌", "❌"] },
        { feature: "No long-term contract", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
      ],
    },
  },
};
