// app/api/leads/route.ts
import { NextResponse } from "next/server";
import { firestore, admin } from "@/lib/firebaseAdmin";

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error guardando lead:", err);
    return NextResponse.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
