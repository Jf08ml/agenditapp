"use client";

import { WhatsAppCtaButton, WaIcon } from "./cta";

/* Botón flotante de WhatsApp para landings cuya conversión principal
   es el registro. Es un canal de APOYO (soporte / dudas), no un CTA
   de venta: por eso es discreto y muestra el texto "¿Dudas?" solo en
   pantallas grandes. Mide el click con `demo_whatsapp_click`. */
export default function LpWhatsAppFab({ source = "lp_fab" }: { source?: string }) {
  return (
    <WhatsAppCtaButton
      source={source}
      aria-label="¿Dudas? Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-2
        h-14 px-[15px] rounded-full bg-[#25D366] text-white
        shadow-[0_8px_24px_rgba(37,211,102,0.45)]
        transition-all hover:bg-[#22c35e] hover:scale-[1.04]"
    >
      <WaIcon size={26} />
      <span className="hidden sm:inline text-sm font-semibold pr-0.5">
        ¿Dudas?
      </span>
    </WhatsAppCtaButton>
  );
}
