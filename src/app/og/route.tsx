// src/app/og/route.tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "AgenditApp";
  const subtitle = searchParams.get("subtitle") ?? "Sistema de Agendamiento Online";
  const tag = searchParams.get("tag") ?? "";

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
          padding: "64px 72px",
          justifyContent: "center",
        }}
      >
        {/* Brand wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#f59e0b", letterSpacing: "-0.5px" }}>
            AgenditApp
          </div>
          {tag && (
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#94a3b8",
                background: "rgba(148,163,184,0.12)",
                borderRadius: 6,
                padding: "3px 10px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </div>
          )}
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: title.length > 50 ? 44 : 56,
            fontWeight: 700,
            color: "#f8fafc",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: "#64748b",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #f59e0b 100%)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
