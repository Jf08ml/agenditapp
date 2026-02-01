"use client";

import { WHATSAPP_HREF } from "../components/constants";
import {
  motion,
  easeOut,
  easeIn,
  type Variants,
  type Transition,
} from "framer-motion";

export default function Precio() {
  // Transiciones reutilizables
  const tIn: Transition = { duration: 0.7, ease: easeOut };
  const tInFast: Transition = { duration: 0.5, ease: easeOut };
  const tOut: Transition = { duration: 0.35, ease: easeIn };

  // Variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0, transition: tIn },
    exit: { opacity: 0, y: 12, transition: tOut },
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

  const listContainer: Variants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const listItem: Variants = {
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0, transition: tInFast },
  };

  const rowIn: Variants = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: tInFast },
  };

  const CHECK = (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  const INCLUDED_ALL = [
    "Reservas y citas ilimitadas (24/7)",
    "Panel administrativo y agenda visual",
    "Gestión de servicios, empleados y clientes",
    "Analíticas + comisiones / nómina por empleado",
    "Horarios por empleado y por negocio (reserva online)",
    "Sistema de fidelidad para retener clientes",
    "Branding en la plataforma (logo, nombre y colores)",
  ];

  type PlanKey = "basico" | "esencial" | "marca";

  const COMPARISON_ROWS: Array<{
    label: string;
    hint?: string;
    values: Record<PlanKey, boolean | string>;
  }> = [
    {
      label: "Reservas y citas ilimitadas",
      values: { basico: true, esencial: true, marca: true },
    },
    {
      label: "Panel administrativo",
      values: { basico: true, esencial: true, marca: true },
    },
    {
      label: "Servicios, empleados y clientes",
      values: { basico: true, esencial: true, marca: true },
    },
    {
      label: "Analíticas + comisiones / nómina",
      values: { basico: true, esencial: true, marca: true },
    },
    {
      label: "Horarios por negocio y por empleado",
      values: { basico: true, esencial: true, marca: true },
    },
    {
      label: "Fidelidad + branding (logo, nombre, colores)",
      values: { basico: true, esencial: true, marca: true },
    },
    {
      label: "Landing de bienvenida",
      values: {
        basico: "Sencilla",
        esencial: "Sencilla",
        marca: "Profesional",
      },
    },
    {
      label: "Subdominio (tu-negocio.agenditapp.com)",
      values: { basico: true, esencial: true, marca: false },
    },
    {
      label: "Dominio propio (tumarca.com)",
      values: { basico: false, esencial: false, marca: true },
    },
    {
      label: "WhatsApp desde tu número",
      hint: "Mensajes automáticos desde tu WhatsApp Business",
      values: { basico: false, esencial: true, marca: true },
    },
    {
      label: "Mensaje de agendamiento (configurable)",
      values: { basico: false, esencial: true, marca: true },
    },
    {
      label: "Recordatorios automáticos",
      values: {
        basico: false,
        esencial: "1 recordatorio",
        marca: "2 recordatorios",
      },
    },
    {
      label: "Mensajes editables",
      values: { basico: false, esencial: true, marca: true },
    },
    {
      label: "Enlace para confirmar/cancelar citas",
      hint: "Tus clientes pueden confirmar o cancelar desde WhatsApp",
      values: { basico: false, esencial: true, marca: true },
    },
    {
      label: "Campañas de WhatsApp (envío masivo)",
      values: { basico: false, esencial: false, marca: true },
    },
  ];

  function ValueCell({ value }: { value: boolean | string }) {
    if (typeof value === "boolean") {
      return value ? (
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
            {CHECK}
          </span>
          <span className="text-sm text-slate-200">Sí</span>
        </span>
      ) : (
        <span className="text-sm text-slate-500">—</span>
      );
    }
    return <span className="text-sm text-slate-200">{value}</span>;
  }

  return (
    <section id="membresía" className="px-6 py-16 max-w-6xl mx-auto">
      {/* Encabezado */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-3">
          Planes y precios
        </span>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Membresía simple,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            resultados reales
          </span>
        </h2>

        <p className="mt-3 text-lg text-slate-300">
          Agenda online, automatiza WhatsApp y controla tu negocio sin enredos.
          Sin permanencia, sin costos ocultos.
        </p>

        {/* Mini trust bar */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: "Reservas 24/7", d: "Tus clientes reservan solos" },
            { t: "Todo centralizado", d: "Agenda, clientes, servicios" },
            { t: "Menos ausencias", d: "Recordatorios automáticos" },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
            >
              <p className="text-white font-semibold">{b.t}</p>
              <p className="text-slate-400 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grid de planes (resumen) */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Plan Básico */}
        <motion.div
          className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm"
          variants={cardIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3, boxShadow: "0 18px 50px rgba(15,23,42,0.75)" }}
          transition={tIn}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white">Plan Básico</h3>
              <p className="mt-1 text-sm text-slate-400">
                Para ordenar tu agenda y empezar a recibir reservas online.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
              Empezar
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-white">$10 USD</span>
            <span className="text-slate-400 text-sm">/ mes</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Mes a mes · Cancela cuando quieras
          </p>

          <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-700/70 px-4 py-3 text-xs sm:text-sm text-slate-300">
            <p>
              Incluye <b>subdominio</b> + <b>landing sencilla</b>:
              <br />
              <span className="font-mono text-sky-300">
                tu-negocio.agenditapp.com
              </span>
            </p>
          </div>

          <motion.ul
            className="mt-5 grid gap-2 text-sm text-slate-200"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Reservas ilimitadas + panel administrativo",
              "Gestión de servicios, empleados y clientes",
              "Analíticas + comisiones / nómina",
              "Fidelidad + branding de tu marca",
            ].map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span>{txt}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-6">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-xl bg-emerald-500 text-white font-bold inline-block shadow-md text-sm text-center"
              >
                Quiero el plan de $10 USD
              </a>
            </motion.span>
            <p className="text-xs text-slate-500 mt-3">
              Ideal si estás empezando o quieres orden sin complicarte.
            </p>
          </div>
        </motion.div>

        {/* Plan Esencial */}
        <motion.div
          className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm"
          variants={cardIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3, boxShadow: "0 18px 50px rgba(15,23,42,0.75)" }}
          transition={tIn}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white">Plan Esencial</h3>
              <p className="mt-1 text-sm text-slate-400">
                Automatiza WhatsApp y reduce ausencias con recordatorio.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-200">
              Más elegido
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-white">$20 USD</span>
            <span className="text-slate-400 text-sm">/ mes</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Mes a mes · Sin permanencia
          </p>

          <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-700/70 px-4 py-3 text-xs sm:text-sm text-slate-300">
            <p>
              Incluye <b>subdominio</b> + <b>landing sencilla</b> y
              automatización:
              <br />
              <span className="font-mono text-sky-300">
                tu-negocio.agenditapp.com
              </span>
            </p>
          </div>

          <motion.ul
            className="mt-5 grid gap-2 text-sm text-slate-200"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Todo lo del Básico",
              "WhatsApp desde tu número (Business)",
              "Mensaje de agendamiento configurable",
              "1 recordatorio automático (horario configurable)",
              "Enlace para confirmar/cancelar citas",
              "Mensajes editables a tu gusto",
            ].map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-300" />
                <span>{txt}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-6">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-xl bg-sky-400 text-black font-bold inline-block shadow-md text-sm text-center"
              >
                Quiero el plan de $20 USD
              </a>
            </motion.span>
            <p className="text-xs text-slate-500 mt-3">
              Ideal si manejas muchas citas y quieres ahorrar tiempo.
            </p>
          </div>
        </motion.div>

        {/* Plan Marca Propia */}
        <motion.div
          className="p-6 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm relative overflow-hidden"
          variants={cardIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -3, boxShadow: "0 20px 55px rgba(15,23,42,0.85)" }}
          transition={tIn}
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="flex items-start justify-between gap-3 relative">
            <div>
              <h3 className="text-xl font-bold text-white">
                Marca Propia (Dominio)
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Presencia digital con tu dominio + campañas masivas por
                WhatsApp.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-amber-400/60 bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
              Pro
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-white">$30 USD</span>
            <span className="text-slate-400 text-sm">/ mes</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Más marca, más confianza, más reservas
          </p>

          <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-600/80 px-4 py-3 text-xs sm:text-sm text-slate-300">
            <p>
              Incluye tu <b>dominio propio</b>:
              <br />
              <span className="font-mono text-sky-300">tumarca.com</span> /{" "}
              <span className="font-mono text-sky-300">tumarca.com.co</span>
            </p>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-300">
              <li>• Mayor confianza al reservar</li>
              <li>• Tu marca se ve más profesional</li>
              <li>• Mejor presencia para redes y Google</li>
            </ul>
          </div>

          <motion.ul
            className="mt-5 grid gap-2 text-sm text-slate-200"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Todo lo del Esencial",
              "Landing más profesional",
              "2 recordatorios automáticos (horas configurables)",
              "Enlace para confirmar/cancelar citas",
              "Campañas de WhatsApp (envíos masivos)",
              "Soporte prioritario + acompañamiento para dominio",
            ].map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-300" />
                <span>{txt}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-6 relative">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-bold inline-block shadow-md text-sm text-center"
              >
                Quiero el plan de $30 USD
              </a>
            </motion.span>
            <p className="text-xs text-slate-500 mt-3">
              Ideal si quieres marca propia y crecimiento constante.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Nota inferior */}
      <motion.p
        className="mt-6 text-sm text-slate-400"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        Todos los planes incluyen acceso completo a la plataforma. Puedes
        cambiar de plan cuando quieras.
      </motion.p>

      {/* Mini comparativa (responsive) */}
      <motion.div
        className="mt-12"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              Comparar planes
            </h3>
            <p className="text-slate-300 mt-2">
              Diferencias claras: WhatsApp, recordatorios, dominio y campañas.
            </p>
          </div>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-200 font-semibold text-sm hover:bg-sky-500/15 transition-colors"
          >
            Ayúdame a elegir por WhatsApp
          </a>
        </div>

        {/* Desktop: tabla ligera */}
        <div className="hidden lg:block mt-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-950/40 border-b border-white/10">
              <div className="col-span-5 p-5">
                <p className="text-sm text-slate-400">Funcionalidad</p>
              </div>
              <div className="col-span-7 grid grid-cols-3">
                {[
                  {
                    name: "Básico",
                    price: "$10",
                    pill: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
                  },
                  {
                    name: "Esencial",
                    price: "$20",
                    pill: "border-sky-500/40 bg-sky-500/10 text-sky-200",
                  },
                  {
                    name: "Marca Propia",
                    price: "$30",
                    pill: "border-amber-400/60 bg-amber-400/15 text-amber-200",
                  },
                ].map((p) => (
                  <div key={p.name} className="p-5 border-l border-white/10">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-bold">{p.name}</p>
                      <span
                        className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${p.pill}`}
                      >
                        {p.price} USD
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mt-1">/ mes</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {COMPARISON_ROWS.map((row) => (
                <motion.div
                  key={row.label}
                  variants={rowIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-12"
                >
                  <div className="col-span-5 p-5">
                    <p className="text-white font-medium">{row.label}</p>
                    {row.hint ? (
                      <p className="text-slate-400 text-sm mt-1">{row.hint}</p>
                    ) : null}
                  </div>

                  <div className="col-span-7 grid grid-cols-3">
                    <div className="p-5 border-l border-white/10">
                      <ValueCell value={row.values.basico} />
                    </div>
                    <div className="p-5 border-l border-white/10">
                      <ValueCell value={row.values.esencial} />
                    </div>
                    <div className="p-5 border-l border-white/10">
                      <ValueCell value={row.values.marca} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-400 mt-4 text-center">
            Tip: si quieres reducir ausencias → Esencial. Si quieres marca y
            crecer con campañas → Marca Propia.
          </p>
        </div>

        {/* Mobile/Tablet: acordeón simple por plan */}
        <div className="lg:hidden mt-6 grid gap-4">
          {[
            {
              k: "basico" as const,
              title: "Básico",
              price: "$10 USD / mes",
              border: "border-emerald-500/25",
              badge: "Empezar",
              badgeClass:
                "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
            },
            {
              k: "esencial" as const,
              title: "Esencial",
              price: "$20 USD / mes",
              border: "border-sky-500/25",
              badge: "Más elegido",
              badgeClass: "border-sky-500/40 bg-sky-500/10 text-sky-200",
            },
            {
              k: "marca" as const,
              title: "Marca Propia",
              price: "$30 USD / mes",
              border: "border-amber-400/25",
              badge: "Pro",
              badgeClass: "border-amber-400/60 bg-amber-400/15 text-amber-200",
            },
          ].map((p) => (
            <details
              key={p.title}
              className={`rounded-2xl border ${p.border} bg-slate-900/40 p-5`}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-lg">{p.title}</p>
                  <p className="text-slate-400 text-sm">{p.price}</p>
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${p.badgeClass}`}
                >
                  {p.badge}
                </span>
              </summary>

              <div className="mt-4 border-t border-white/10 pt-4">
                <ul className="space-y-3">
                  {COMPARISON_ROWS.filter((r) => {
                    const v = r.values[p.k];
                    return typeof v === "boolean" ? v : Boolean(v);
                  }).map((r) => (
                    <li key={r.label} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 border border-white/10 text-sky-200">
                        {CHECK}
                      </span>
                      <div>
                        <p className="text-slate-200 text-sm">{r.label}</p>
                        {typeof r.values[p.k] === "string" ? (
                          <p className="text-slate-400 text-xs mt-0.5">
                            {r.values[p.k] as string}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block w-full text-center px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-bold shadow-md text-sm"
                >
                  Pedir este plan por WhatsApp
                </a>
              </div>
            </details>
          ))}
        </div>

        {/* Incluye en todos (compacto) */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/35 p-6">
          <p className="text-white font-bold text-lg">
            Incluido en todos los planes
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Lo esencial para operar y controlar tu negocio, desde el día 1.
          </p>

          <motion.ul
            className="mt-5 grid gap-3 sm:grid-cols-2"
            variants={listContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {INCLUDED_ALL.map((txt) => (
              <motion.li
                key={txt}
                variants={listItem}
                className="flex items-start gap-3"
              >
                <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-200">
                  {CHECK}
                </span>
                <span className="text-slate-200 text-sm">{txt}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
