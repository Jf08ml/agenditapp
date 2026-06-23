/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, easeOut, type Variants } from "framer-motion";
import { ChatCircle } from "@phosphor-icons/react";
import { SelectorPais } from "../components/ui/SelectorPais";
import { PAISES } from "../components/constants/paises";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const inputClass =
  "w-full rounded-[10px] bg-bg-main border border-brand/20 px-3.5 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all";

const labelClass = "block text-sm font-medium text-heading mb-1.5";

const PROMISES = [
  "Respuesta en menos de 1 hora",
  "Configuración gratis incluida",
  "Sin compromiso de compra",
];

export default function DemoLead() {
  const [nombre, setNombre] = useState("");
  const [negocio, setNegocio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [paisCodigo, setPaisCodigo] = useState("");
  const [sector, setSector] = useState("");
  const [citasMes, setCitasMes] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const paisSeleccionado = PAISES.find((p) => p.codigo === paisCodigo) ?? PAISES[0];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          negocio,
          whatsapp: `${paisSeleccionado.dial}${whatsapp}`,
          pais: `${paisSeleccionado.bandera} ${paisSeleccionado.nombre}`,
          sector,
          citasMes,
          origen: "landing-agenditapp-demo",
        }),
      });
      if (!res.ok) throw new Error("Error al enviar el formulario");

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17757114632/jMf9CO65v8YbEIiioJNC",
          event_callback: () => { console.log("Conversión reportada a Google Ads"); },
        });
        (window as any).gtag("event", "lead_demo_submit", {
          event_category: "lead",
          event_label: "Demo AgenditApp",
        });
      }

      setOk(true);
      setNombre(""); setNegocio(""); setWhatsapp("");
      setPaisCodigo("CO"); setSector(""); setCitasMes("");
    } catch (err) {
      console.error(err);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text + promises + WA alt ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{ background: "var(--warm-soft)", color: "var(--warm-deep)" }}
            >
              Demo personalizada
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-tight text-[#0F172A] text-balance m-0"
            >
              Te dejamos la agenda lista{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                en 30 minutos.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[17px] text-[#64748B] leading-relaxed"
            >
              Cuéntanos sobre tu negocio y te contactamos por WhatsApp para
              configurar tus servicios y mostrarte el panel completo.
            </motion.p>

            <motion.ul variants={fadeInUp} className="mt-7 flex flex-col gap-3">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[14px] font-medium text-[#0F172A]">
                  <span
                    className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(37,211,102,0.15)" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="var(--wa-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </motion.ul>

            {/* WhatsApp alt card */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 rounded-[14px] p-5 flex flex-col sm:flex-row sm:items-center gap-3"
              style={{ background: "#F1F3F8" }}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: "var(--wa)" }}
                >
                  <ChatCircle size={20} weight="duotone" />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] font-bold text-[#0F172A]">¿Prefieres hablar directo?</p>
                  <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                    Un asesor te muestra una demo en vivo en menos de 5 minutos.
                  </p>
                </div>
              </div>
              <DemoCtaButton source="demo_lead" className="inline-flex items-center justify-center rounded-[10px] px-4 py-2.5 text-[12px] font-semibold text-white cursor-pointer whitespace-nowrap bg-[#25D366] hover:bg-[#22c35e] transition-colors flex-shrink-0">
                Hablar por WhatsApp
              </DemoCtaButton>
            </motion.div>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div
              className="rounded-[20px] border border-brand/12 bg-bg-card p-6 sm:p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <div>
                <label className={labelClass}>Tu nombre completo</label>
                <input
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className={inputClass}
                  placeholder="Ej: Ana Pérez"
                />
              </div>

              <div>
                <label className={labelClass}>Nombre de tu negocio</label>
                <input
                  required
                  value={negocio}
                  onChange={(e) => setNegocio(e.target.value)}
                  className={inputClass}
                  placeholder="Ej: Glam Nails Studio"
                />
              </div>

              <div>
                <label className={labelClass}>WhatsApp de contacto</label>
                <div className="flex gap-2">
                  <SelectorPais value={paisCodigo} onChange={setPaisCodigo} />
                  <input
                    required
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className={`${inputClass} flex-1 min-w-0`}
                    placeholder="300 123 4567"
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-muted">
                  Selecciona tu país y escribe el número. Solo lo usamos para contactarte sobre la demo.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Tipo de negocio</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Salón de belleza / uñas</option>
                    <option>Barbería</option>
                    <option>Spa / masajes</option>
                    <option>Lashes / cejas</option>
                    <option>Entrenador / fitness</option>
                    <option>Estética médica</option>
                    <option>Academia / cursos</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Citas al mes (aprox.)</label>
                  <select
                    value={citasMes}
                    onChange={(e) => setCitasMes(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Selecciona un rango</option>
                    <option>Menos de 50</option>
                    <option>50 - 150</option>
                    <option>150 - 300</option>
                    <option>Más de 300</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-[12px] bg-brand text-white font-semibold px-5 py-3 text-sm hover:bg-brand-hover transition-colors disabled:opacity-60 shadow-md"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Enviando...
                  </>
                ) : "Quiero mi demo personalizada"}
              </button>

              {ok === true && (
                <div className="flex items-start gap-2.5 rounded-[10px] border border-success/30 bg-success/8 px-4 py-3 text-sm text-success">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l4 4 6-6"/>
                  </svg>
                  ¡Gracias! Recibimos tus datos. Te contactaremos por WhatsApp muy pronto.
                </div>
              )}
              {ok === false && (
                <div className="flex items-start gap-2.5 rounded-[10px] border border-danger/30 bg-danger/8 px-4 py-3 text-sm text-danger">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v4M8 11v1"/>
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Error al enviar. Intenta de nuevo o escríbenos por WhatsApp.
                </div>
              )}
            </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
