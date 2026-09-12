"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Datos estructurales del mock de chat (quién envía, si es un botón); el
// texto y el timestamp de cada mensaje vienen de las traducciones y se
// combinan con este array por índice.
const MESSAGE_META = [
  { from: "biz" as const },
  { from: "biz" as const },
  { from: "me" as const },
  { from: "biz" as const },
  { from: "me" as const, isButton: true },
];

type PhoneMessage = {
  from: "biz" | "me";
  isButton?: boolean;
  t: string;
  meta: string;
};

function WAPhone({
  shown,
  businessName,
  onlineStatus,
  messages,
}: {
  shown: number[];
  businessName: string;
  onlineStatus: string;
  messages: PhoneMessage[];
}) {
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: 280, height: 520, borderRadius: 36,
          background: "#0B1220", padding: 8,
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ width: "100%", height: "100%", borderRadius: 30, overflow: "hidden", background: "#ECE5DD" }}>
          {/* Header */}
          <div style={{ background: "#075E54", color: "white", padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3l-5 5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B9D,#C44CC4)", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 12, color: "white", flexShrink: 0 }}>
              R
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{businessName}</div>
              <div style={{ fontSize: 9, opacity: 0.7 }}>{onlineStatus}</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="white" aria-hidden>
              <circle cx="8" cy="3" r="1.4" /><circle cx="8" cy="8" r="1.4" /><circle cx="8" cy="13" r="1.4" />
            </svg>
          </div>

          {/* Chat */}
          <div style={{ padding: "12px 10px", height: "calc(100% - 50px)", overflow: "hidden", background: "linear-gradient(180deg,#ECE5DD 0%,#E0DDD4 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 5 }}>
            {messages.map((m, i) => {
              const visible = shown.includes(i);
              const isMe = m.from === "me";
              return (
                <div
                  key={i}
                  style={{
                    alignSelf: isMe ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    background: m.isButton ? "#25D366" : isMe ? "#DCF8C6" : "white",
                    color: m.isButton ? "white" : "#111",
                    padding: "6px 9px",
                    borderRadius: 9,
                    borderTopLeftRadius: !isMe ? 2 : 9,
                    borderTopRightRadius: isMe ? 2 : 9,
                    fontSize: 11.5, lineHeight: 1.4, whiteSpace: "pre-wrap",
                    boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity .35s ease, transform .35s ease",
                    fontWeight: m.isButton ? 700 : 400,
                  }}
                >
                  {m.t}
                  <div style={{ fontSize: 8.5, color: m.isButton ? "rgba(255,255,255,0.8)" : "#888", marginTop: 2, textAlign: "right" }}>
                    {m.meta}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppShowcase() {
  const t = useTranslations("WhatsAppShowcase");
  const bullets = t.raw("bullets") as string[];
  const phoneMessages = t.raw("phone.messages") as { text: string; meta: string }[];
  const messages: PhoneMessage[] = MESSAGE_META.map((m, i) => ({
    ...m,
    t: phoneMessages[i].text,
    meta: phoneMessages[i].meta,
  }));

  const [shown, setShown] = useState([0, 1, 2]);

  useEffect(() => {
    const tids: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setShown([0, 1, 2]);
      tids.push(setTimeout(() => setShown([0, 1, 2, 3]), 1800));
      tids.push(setTimeout(() => setShown([0, 1, 2, 3, 4]), 3000));
    };

    run();
    const interval = setInterval(() => {
      tids.forEach(clearTimeout);
      tids.length = 0;
      run();
    }, 6500);

    return () => { tids.forEach(clearTimeout); clearInterval(interval); };
  }, []);

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ background: "linear-gradient(180deg, #0A2A6B 0%, #061846 100%)", color: "white" }}
    >
      {/* Green glow */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.22) 0%, transparent 65%)", filter: "blur(40px)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: texto ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{ background: "rgba(37,211,102,0.15)", color: "#25D366", border: "1px solid rgba(37,211,102,0.28)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              {t("badge")}
            </span>

            <h2
              className="font-bold leading-[1.1] tracking-tight text-white text-balance m-0"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              {t("heading.prefix")}{" "}
              <span style={{ color: "#25D366" }}>{t("heading.highlight")}</span>
            </h2>

            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              {t("description")}
            </p>

            <ul className="mt-7 flex flex-col gap-3 p-0 m-0 list-none">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-center gap-3 text-[15px]"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6l3 3 5-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: phone ── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <WAPhone
              shown={shown}
              businessName={t("phone.businessName")}
              onlineStatus={t("phone.onlineStatus")}
              messages={messages}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
