// src/app/og/route.tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          padding: 64,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          fontWeight: 800,
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 20, color: "#f59e0b" }}>
          AgenditApp
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#94a3b8",
            textAlign: "center",
          }}
        >
          Sistema de Agendamiento Online
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#64748b",
            marginTop: 20,
          }}
        >
          Automatiza tu agenda • Recordatorios por WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}
