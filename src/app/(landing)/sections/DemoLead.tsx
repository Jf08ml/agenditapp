/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { DemoCtaButton } from "../components/ui/DemoCtaModal";
import { motion, easeOut, type Variants, type Transition } from "framer-motion";

const tIn: Transition = { duration: 0.7, ease: easeOut };

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: tIn },
};

const cardIn: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...tIn, when: "beforeChildren" },
  },
};

export default function DemoLead() {
  const [nombre, setNombre] = useState("");
  const [negocio, setNegocio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sector, setSector] = useState("");
  const [citasMes, setCitasMes] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    try {
      // Aquí puedes apuntar a TU backend real
      // por ejemplo: https://api.agenditapp.com/public/leads
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          negocio,
          whatsapp,
          sector,
          citasMes,
          origen: "landing-agenditapp-demo",
        }),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

      // 👉 Aquí disparamos la conversión de Google Ads
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17757114632/jMf9CO65v8YbEIiioJNC",
          // event_callback es opcional si no quieres redirigir
          event_callback: () => {
            console.log("Conversión reportada a Google Ads");
          },
        });
      }

      // (Opcional) Evento GA4 tipo lead
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_demo_submit", {
          event_category: "lead",
          event_label: "Demo AgenditApp",
        });
      }

      setOk(true);
      setNombre("");
      setNegocio("");
      setWhatsapp("");
      setSector("");
      setCitasMes("");
    } catch (err) {
      console.error(err);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Demo personalizada
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Déjanos tus datos y te instalamos la agenda
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          Cuéntanos un poco sobre tu negocio y te contactamos por WhatsApp para
          mostrarte AgenditApp, configurar tus servicios y dejarte una agenda
          lista para usar.
        </p>
      </motion.div>

      {/* Card con formulario + alternativa WhatsApp */}
      <motion.div
        className="mt-8 grid gap-8 md:grid-cols-[3fr,2fr]"
        variants={cardIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Formulario */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-slate-200 mb-1">
                Tu nombre completo
              </label>
              <input
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Ej: Ana Pérez"
              />
            </div>

            <div>
              <label className="block text-slate-200 mb-1">
                Nombre de tu negocio
              </label>
              <input
                required
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Ej: Glam Nails Studio"
              />
            </div>

            <div>
              <label className="block text-slate-200 mb-1">
                WhatsApp de contacto
              </label>
              <input
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Ej: 300 123 4567"
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Usaremos este número solo para contactarte sobre la demo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-slate-200 mb-1">
                  Tipo de negocio
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
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
                <label className="block text-slate-200 mb-1">
                  Citas al mes (aprox.)
                </label>
                <select
                  value={citasMes}
                  onChange={(e) => setCitasMes(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
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
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-sky-400 text-slate-950 font-semibold px-5 py-2.5 text-sm shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:bg-sky-300 transition-colors disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Quiero mi demo personalizada"}
            </button>

            {ok === true && (
              <p className="text-xs text-emerald-400 mt-2">
                ✅ ¡Gracias! Hemos recibido tus datos. Te contactaremos por
                WhatsApp muy pronto.
              </p>
            )}
            {ok === false && (
              <p className="text-xs text-red-400 mt-2">
                Ocurrió un error al enviar el formulario. Intenta de nuevo o
                escríbenos por WhatsApp.
              </p>
            )}
          </form>
        </div>

        {/* Lado derecho: refuerzo + alternativa WhatsApp */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 text-sm text-slate-300 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">
            ¿Prefieres hablar directo por WhatsApp?
          </h3>
          <p className="text-slate-400 text-sm">
            Si no quieres llenar formularios, puedes escribirnos ahora mismo. Te
            ayudamos a ver si AgenditApp encaja con tu negocio y te mostramos
            cómo se vería tu agenda.
          </p>
          <DemoCtaButton
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-400/60 px-4 py-2 text-sm text-emerald-100 font-semibold shadow-[0_0_16px_rgba(16,185,129,0.4)] hover:bg-emerald-400 hover:text-slate-950 hover:shadow-[0_0_24px_rgba(16,185,129,0.6)] transition-colors cursor-pointer"
          >
            💬 Hablar ahora por WhatsApp
          </DemoCtaButton>
        </div>
      </motion.div>
    </section>
  );
}
