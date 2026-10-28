"use client";

import { useEffect } from "react";

/* Avisa a AgenditApp Oficina IA de una visita que llega desde una de sus
   campañas (utm_campaign=ofi-<id>). Una vez por carga de página; no usa
   cookies ni identificadores del visitante. El resto del tráfico no se envía. */
export default function OficinaLandingView() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const campaign = params.get("utm_campaign");
    if (!campaign || !/^ofi-[a-f0-9]{24}$/.test(campaign)) return;
    const body: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = params.get(key);
      if (value) body[key] = value;
    }
    fetch("/api/oficina/landing-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {});
  }, []);
  return null;
}
