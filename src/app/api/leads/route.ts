// app/api/leads/route.ts
import { NextResponse } from "next/server";
import { firestore, admin } from "@/lib/firebaseAdmin";

const MAILER_URL =
  process.env.MAILER_URL || "https://api-email-sending.vercel.app";
const LEADS_NOTIFY_EMAIL =
  process.env.LEADS_NOTIFY_EMAIL || "lassojuanfe@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nombre,
      negocio,
      whatsapp,
      sector,
      citasMes,
      origen = "landing-agenditapp-demo",
    } = body ?? {};

    if (!nombre || !negocio || !whatsapp) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    await firestore.collection("leads").add({
      nombre,
      negocio,
      whatsapp,
      sector: sector || null,
      citasMes: citasMes || null,
      origen,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 2) Enviar email de notificación usando tu backend en Vercel
    try {
      await fetch(`${MAILER_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Si luego le pones API key al mailer:
          // "x-api-key": process.env.MAILER_KEY || "",
        },
        body: JSON.stringify({
          to: LEADS_NOTIFY_EMAIL,
          subject: "📩 Nuevo lead – AgenditApp",
          fromName: "AgenditApp Landing",
          htmlContent: `
            <h2>Nuevo formulario recibido</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Negocio:</strong> ${negocio}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p><strong>Sector:</strong> ${sector || "-"}</p>
            <p><strong>Citas/mes:</strong> ${citasMes || "-"}</p>
            <hr />
            <p>Origen: ${origen}</p>
          `,
        }),
      });
    } catch (err) {
      // No rompemos la respuesta al cliente si falla el correo,
      // solo lo dejamos logueado
      console.error("Error enviando correo de notificación:", err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error guardando lead:", err);
    return NextResponse.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
