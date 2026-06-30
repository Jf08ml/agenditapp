"use client";

import Image from "next/image";
import { WhatsAppCtaButton, WaIcon } from "./cta";

/* Header minimal para landings de campaña: solo el logo (sin tabs de
   navegación) y, opcionalmente, un botón de WhatsApp de respaldo.
   El logo NO enlaza a ningún lado para mantener al visitante dentro
   del funnel. */
export default function LpHeader({
  showWhatsApp = true,
  source = "lp_header",
}: {
  showWhatsApp?: boolean;
  source?: string;
}) {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-4 pt-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Image
          src="/logo-text.png"
          alt="AgenditApp"
          width={170}
          height={52}
          priority
          className="h-9 sm:h-10 w-auto object-contain select-none"
        />

        {showWhatsApp && (
          <WhatsAppCtaButton
            source={source}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#25D366] text-white text-[13px] sm:text-sm font-semibold shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#22c35e]"
          >
            <WaIcon size={16} />
            <span className="hidden sm:inline">Hablar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </WhatsAppCtaButton>
        )}
      </div>
    </header>
  );
}
