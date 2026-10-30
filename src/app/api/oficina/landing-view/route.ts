import { createHmac, randomUUID } from "node:crypto";

export const runtime = "nodejs";

/* Visita a la landing desde una campaña de AgenditApp Oficina IA
   (utm_campaign=ofi-<id>). Se reenvía firmada a la Oficina desde el
   servidor: el secreto nunca llega al navegador. Sin datos personales:
   solo los UTM. Siempre responde 204; si la Oficina no está configurada o
   no responde, no pasa nada (contrato en agenditapp-oficina/docs/CONVERSIONES.md). */

const OFICINA_CAMPAIGN = /^ofi-[a-f0-9]{24}$/;
/* Robots y navegadores automáticos que ejecutan JavaScript (rastreadores,
   revisión de anuncios, pruebas): no son visitas. Nombres concretos y la forma
   "xbot/1.0" o "compatible; ...bot", no "bot" a secas, que descartaría
   teléfonos reales (por ejemplo, la marca CUBOT). */
const AUTOMATED_AGENT =
  /headless|lighthouse|pagespeed|googlebot|bingbot|yandex|baiduspider|applebot|duckduckbot|petalbot|ahrefs|semrush|facebookexternalhit|facebot|meta-external|(?:bot|crawler|spider)[/;]|compatible;[^)]*(?:bot|crawler|spider)/i;
const UTM_KEYS = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_content: "utmContent",
  utm_term: "utmTerm",
} as const;

export async function POST(request: Request) {
  const url = process.env.OFICINA_EVENTS_URL;
  const secret = process.env.OFICINA_EVENTS_SECRET;
  const done = new Response(null, { status: 204 });
  if (!url || !secret) return done;
  const agent = request.headers.get("user-agent") ?? "";
  if (!agent || AUTOMATED_AGENT.test(agent)) return done;

  let input: Record<string, unknown>;
  try {
    input = (await request.json()) ?? {};
  } catch {
    return done;
  }
  if (typeof input.utm_campaign !== "string" || !OFICINA_CAMPAIGN.test(input.utm_campaign)) return done;

  const attribution: Record<string, string> = {};
  for (const [raw, key] of Object.entries(UTM_KEYS)) {
    const value = input[raw];
    if (typeof value === "string" && value.trim()) attribution[key] = value.trim().slice(0, 200);
  }
  const body = JSON.stringify({
    eventId: `lv:${randomUUID()}`,
    type: "landing_view",
    occurredAt: new Date().toISOString(),
    attribution,
  });
  const t = Math.floor(Date.now() / 1000);
  const v1 = createHmac("sha256", secret).update(`${t}.${body}`).digest("hex");
  try {
    await fetch(`${url.replace(/\/+$/, "")}/api/v1/conversions/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Oficina-Signature": `t=${t},v1=${v1}` },
      body,
      signal: AbortSignal.timeout(2000),
    });
  } catch (err) {
    console.error("[oficina] landing_view no enviado:", err instanceof Error ? err.message : err);
  }
  return done;
}
