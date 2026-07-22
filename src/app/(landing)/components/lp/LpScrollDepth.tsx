"use client";

import { useEffect } from "react";

const THRESHOLDS = [25, 50, 75, 90];

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

/* Mide profundidad de scroll para validar si las personas leen la landing
   antes de escribir por WhatsApp. Dispara un evento GA4 por umbral
   alcanzado, una sola vez por carga de página. Reusa el parámetro
   `event_label` (misma dimensión personalizada que ya usan los CTAs) en
   vez de crear una nueva en GA4. */
export default function LpScrollDepth({ source }: { source: string }) {
  useEffect(() => {
    const fired = new Set<number>();
    let ticking = false;

    function checkScroll() {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 100;

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          const { gtag } = window as GtagWindow;
          gtag?.("event", "scroll_depth", {
            event_category: "engagement",
            event_label: `${source}_${threshold}`,
          });
        }
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(checkScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll(); // por si la página carga ya scrolleada o es muy corta
    return () => window.removeEventListener("scroll", onScroll);
  }, [source]);

  return null;
}
