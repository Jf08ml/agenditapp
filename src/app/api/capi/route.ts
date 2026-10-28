// app/api/capi/route.ts
import { NextResponse } from "next/server";
import {
  OFERTA_CONTACT_NAMES,
  OFERTA_REGISTRO_NAMES,
} from "@/app/(landing)/components/metaTracking";

export const runtime = "nodejs";

/* Meta Conversions API: recibe el evento disparado en el browser (ver
   components/metaTracking.ts) y lo reenvía server-side a Meta con el
   mismo event_id para que deduplique contra el Pixel. event_name por
   default es "Contact" (/oferta); /oferta-registro manda
   "CTA Registro" explícitamente.

   Es una ruta pública: solo reenvía los eventos que la landing dispara
   de verdad (evento, content_name y página conocidos). Cualquier otra
   cosa se descarta, para que nadie pueda meter eventos falsos en el
   píxel. El token va en el cuerpo, no en la URL (documentación de la
   Conversions API: campo access_token). */

const GRAPH_API_VERSION = "v26.0";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const ALLOWED: Record<string, { names: Set<string>; paths: Set<string> }> = {
  Contact: {
    names: new Set(Object.values(OFERTA_CONTACT_NAMES)),
    paths: new Set(["/oferta", "/oferta-registro"]),
  },
  "CTA Registro": {
    names: new Set(Object.values(OFERTA_REGISTRO_NAMES)),
    paths: new Set(["/oferta-registro"]),
  },
};

const EVENT_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
// Formato de las cookies _fbp y _fbc: fb.<subdominio>.<timestamp>.<valor>
const FB_COOKIE = /^fb\.\d\.\d{10,16}\.[A-Za-z0-9_.-]{1,200}$/;

const ok = () => NextResponse.json({ ok: true });

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export async function POST(request: Request) {
  try {
    const token = process.env.META_CAPI_ACCESS_TOKEN;
    if (!PIXEL_ID || !token) {
      console.error(
        "CAPI: faltan NEXT_PUBLIC_META_PIXEL_ID o META_CAPI_ACCESS_TOKEN"
      );
      return ok();
    }

    // El navegador manda Origin en un POST con fetch: otro sitio no puede usar esta ruta.
    const self = new URL(request.url);
    const origin = request.headers.get("origin");
    if (origin && origin !== self.origin) return ok();

    const body = await request.json().catch(() => null);
    const eventName = str(body?.event_name) ?? "Contact";
    const eventId = str(body?.event_id);
    const contentName = str(body?.content_name);
    const allowed = ALLOWED[eventName];
    if (!allowed || !eventId || !EVENT_ID.test(eventId) || !contentName || !allowed.names.has(contentName)) {
      return ok();
    }

    let sourceUrl: URL;
    try {
      sourceUrl = new URL(str(body?.event_source_url) ?? "");
    } catch {
      return ok();
    }
    const path = sourceUrl.pathname.replace(/\/+$/, "");
    if (sourceUrl.host !== self.host || !allowed.paths.has(path)) return ok();

    const user_data: Record<string, string> = {};
    const clientIp = request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim();
    const userAgent = request.headers.get("user-agent");
    const fbp = str(body?.fbp);
    const fbc = str(body?.fbc);
    if (clientIp) user_data.client_ip_address = clientIp;
    if (userAgent) user_data.client_user_agent = userAgent.slice(0, 500);
    if (fbp && FB_COOKIE.test(fbp)) user_data.fbp = fbp;
    if (fbc && FB_COOKIE.test(fbc)) user_data.fbc = fbc;

    const form = new FormData();
    form.set(
      "data",
      JSON.stringify([
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          event_source_url: sourceUrl.toString().slice(0, 1000),
          user_data,
          custom_data: { content_name: contentName },
        },
      ])
    );
    form.set("access_token", token);

    /* Solo para validar en Events Manager > Test Events. Vaciar la env
       var antes de lanzar tráfico real o los eventos no contarán para
       optimización de campañas. */
    if (process.env.META_CAPI_TEST_EVENT_CODE) {
      form.set("test_event_code", process.env.META_CAPI_TEST_EVENT_CODE);
    }

    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events`,
      { method: "POST", body: form, signal: AbortSignal.timeout(5000) }
    );

    if (!res.ok) {
      console.error(
        "CAPI: error de la Conversions API:",
        res.status,
        await res.text()
      );
    }

    return ok();
  } catch (err) {
    console.error("CAPI: error procesando evento:", err);
    return ok();
  }
}
