// app/api/capi/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/* Meta Conversions API: recibe el evento disparado en el browser (ver
   components/metaTracking.ts) y lo reenvía server-side a Meta con el
   mismo event_id para que deduplique contra el Pixel. event_name por
   default es "Contact" (/oferta); /oferta-registro manda
   "CTA Registro" explícitamente. */

const GRAPH_API_VERSION = "v24.0";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export async function POST(request: Request) {
  try {
    const token = process.env.META_CAPI_ACCESS_TOKEN;
    if (!PIXEL_ID || !token) {
      console.error(
        "CAPI: faltan NEXT_PUBLIC_META_PIXEL_ID o META_CAPI_ACCESS_TOKEN"
      );
      return NextResponse.json({ ok: true });
    }

    const body = await request.json();
    const {
      event_name,
      event_id,
      content_name,
      event_source_url,
      fbp,
      fbc,
    } = body ?? {};

    if (!event_id || !content_name) {
      console.error("CAPI: evento sin event_id o content_name", body);
      return NextResponse.json({ ok: true });
    }

    const user_data: Record<string, string> = {};
    const clientIp = request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim();
    const userAgent = request.headers.get("user-agent");
    if (clientIp) user_data.client_ip_address = clientIp;
    if (userAgent) user_data.client_user_agent = userAgent;
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;

    const payload: Record<string, unknown> = {
      data: [
        {
          event_name: event_name || "Contact",
          event_time: Math.floor(Date.now() / 1000),
          event_id,
          action_source: "website",
          event_source_url,
          user_data,
          custom_data: { content_name },
        },
      ],
    };

    /* Solo para validar en Events Manager > Test Events. Vaciar la env
       var antes de lanzar tráfico real o los eventos no contarán para
       optimización de campañas. */
    if (process.env.META_CAPI_TEST_EVENT_CODE) {
      payload.test_event_code = process.env.META_CAPI_TEST_EVENT_CODE;
    }

    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      console.error(
        "CAPI: error de la Conversions API:",
        res.status,
        await res.text()
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CAPI: error procesando evento:", err);
    return NextResponse.json({ ok: true });
  }
}
