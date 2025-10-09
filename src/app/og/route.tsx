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
          background: "#0f172a",
          color: "white",
          padding: 64,
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 56,
          fontWeight: 800,
        }}
      >
        <div>AgenditApp</div>
        <div style={{ fontSize: 28, fontWeight: 500 }}>
          Agenda online + WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}
