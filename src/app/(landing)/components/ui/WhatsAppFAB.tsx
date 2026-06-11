"use client";

import { DemoCtaButton } from "./DemoCtaModal";

export default function WhatsAppFAB() {
  return (
    <DemoCtaButton
      source="fab"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center
        w-14 h-14 rounded-full bg-[#25D366] text-white
        shadow-[0_8px_24px_rgba(37,211,102,0.45)]
        transition-transform hover:scale-105"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.52 1.36 5.06L2.05 22l5.16-1.35a9.94 9.94 0 0 0 4.82 1.23h.01c5.46 0 9.91-4.45 9.91-9.92 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm5.84 14.13c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.29.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.06.91 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.65-.07.18-.2.76-.89.96-1.19.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.7-.18 1.4z" />
      </svg>
    </DemoCtaButton>
  );
}
