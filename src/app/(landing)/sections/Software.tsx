"use client";

import Image from "next/image";
import { motion, easeOut, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

const container: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardV: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 14l3 3 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8v2M14 18v2M8 14H6M22 14h-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Fidelidad y Retención",
    description:
      "Fideliza clientes con recompensas y mejora su experiencia con reservas fáciles y recordatorios automáticos.",
    side: "left",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="3"
          y="7"
          width="22"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M3 13h22" stroke="currentColor" strokeWidth="2" />
        <path
          d="M9 17h4M9 20h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Presencia Digital",
    description:
      "Landing profesional con dominio propio, diseño responsive y SEO optimizado para atraer más clientes.",
    side: "left",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 20v-2a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M19 4l2 2-2 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="6" y="24" fontSize="7" fill="currentColor" fontWeight="700">
          1K+
        </text>
      </svg>
    ),
    title: "Campañas y Crecimiento",
    description:
      "Envía campañas masivas por WhatsApp, segmentando a tus clientes para lograr mayor efectividad en ventas.",
    side: "left",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="4"
          y="4"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 12h20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 20h8M14 18v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 8h4M8 15h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Branding, Seguridad y Soporte",
    description:
      "Plataforma segura en la nube, personalizable, con acceso total, soporte dedicado y actualizaciones automáticas.",
    side: "right",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="5"
          y="3"
          width="18"
          height="22"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 9h10M9 13h10M9 17h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 17l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Fácil de Usar",
    description:
      "Recibe reservas online ilimitadas sin interrupciones, gestionando fácilmente tu agenda, servicios y horarios.",
    side: "right",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L3 8v6c0 6 4.5 11 11 13 6.5-2 11-7 11-13V8L14 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 14l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Gestión de Negocio",
    description:
      "Gestiona empleados, clientes, comisiones y caja, usando analíticas para controlar todo el negocio.",
    side: "right",
  },
];

const left = features.filter((f) => f.side === "left");
const right = features.filter((f) => f.side === "right");

/* ── Flechas animadas estilo Hero — desktop ── */
const PATHS = [
  { id: "sw-a0", d: "M 450 260 C 420 245, 370 152, 330 130", delay: "0.2s" },
  { id: "sw-a1", d: "M 450 260 C 420 260, 390 260, 340 260", delay: "0.5s" },
  { id: "sw-a2", d: "M 450 260 C 420 275, 370 368, 330 388", delay: "0.8s" },
  { id: "sw-a3", d: "M 450 260 C 480 245, 530 152, 570 130", delay: "0.2s" },
  { id: "sw-a4", d: "M 450 260 C 480 260, 510 260, 560 260", delay: "0.5s" },
  { id: "sw-a5", d: "M 450 260 C 480 275, 530 368, 570 388", delay: "0.8s" },
];

function ConnectorLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      viewBox="0 0 900 520"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <filter id="sw-glow">
          <feGaussianBlur stdDeviation="2" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sw-tip-glow">
          <feGaussianBlur stdDeviation="3" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {PATHS.map(({ id, d, delay }) => (
        <g key={id}>
          {/* Estela */}
          <path
            d={d}
            stroke="var(--brand)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.1"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1"
              to="0"
              dur="2s"
              repeatCount="1"
              fill="freeze"
              begin={`${delay}; ${id}-draw.end+10s`}
            />
          </path>

          {/* Línea principal */}
          <path
            id={`${id}-path`}
            d={d}
            stroke="var(--brand)"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
            filter="url(#sw-glow)"
          >
            <animate
              id={`${id}-draw`}
              attributeName="stroke-dashoffset"
              from="1"
              to="0"
              dur="2s"
              repeatCount="1"
              fill="freeze"
              begin={`${delay}; ${id}-draw.end+10s`}
            />
          </path>

          {/* Punta animada */}
          <g>
            <circle
              cx="0"
              cy="0"
              r="6"
              fill="var(--brand)"
              opacity="0.3"
              filter="url(#sw-tip-glow)"
            >
              <animateMotion
                dur="2s"
                repeatCount="1"
                fill="freeze"
                rotate="auto"
                begin={`${delay}; ${id}-draw.end+10s`}
              >
                <mpath href={`#${id}-path`} />
              </animateMotion>
              <animate
                attributeName="r"
                values="6;6;9;6"
                keyTimes="0;0.85;0.95;1"
                dur="2s"
                repeatCount="1"
                fill="freeze"
                begin={`${delay}; ${id}-draw.end+10s`}
              />
              <animate
                attributeName="opacity"
                values="0.3;0.3;0.6;0.3"
                keyTimes="0;0.85;0.95;1"
                dur="2s"
                repeatCount="1"
                fill="freeze"
                begin={`${delay}; ${id}-draw.end+10s`}
              />
            </circle>
            <path
              d="M 0 -14 L 20 0 L 0 13 Z"
              fill="var(--brand)"
              filter="url(#sw-tip-glow)"
            >
              <animateMotion
                dur="2s"
                repeatCount="1"
                fill="freeze"
                rotate="auto"
                begin={`${delay}; ${id}-draw.end+10s`}
              >
                <mpath href={`#${id}-path`} />
              </animateMotion>
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1;1.25;1"
                keyTimes="0;0.85;0.95;1"
                dur="2s"
                repeatCount="1"
                fill="freeze"
                begin={`${delay}; ${id}-draw.end+10s`}
              />
              <animate
                attributeName="opacity"
                values="0.5;0.8;1;0.6"
                keyTimes="0;0.85;0.95;1"
                dur="2s"
                repeatCount="1"
                fill="freeze"
                begin={`${delay}; ${id}-draw.end+10s`}
              />
            </path>
          </g>
        </g>
      ))}
    </svg>
  );
}

function FeatureCard({ f }: { f: (typeof features)[0]; i: number }) {
  return (
    <motion.div
      variants={cardV}
      className="card p-4 flex items-start gap-3 hover:shadow-[0_8px_28px_rgba(29,78,216,0.1)] hover:border-brand/20 border border-transparent transition-all duration-200"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-brand/8 text-brand">
        {f.icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-brand uppercase tracking-[0.15em] mb-1">
          {f.title}
        </p>
        <p className="text-sm text-muted leading-relaxed">{f.description}</p>
      </div>
    </motion.div>
  );
}

export default function Software() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* ── Header ── */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
          Plataforma completa
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-heading tracking-tight leading-tight">
          El software de gestión y reservas{" "}
          <span className="text-brand">más completo</span> a tu medida
        </h2>
        <p className="mt-4 text-base text-body leading-relaxed">
          Estas son las funciones favoritas de nuestros clientes para ahorrar
          tiempo, reducir inasistencias y multiplicar sus ingresos gracias a su
          agenda digital.
        </p>
      </motion.div>

      {/* ── Layout desktop: 3 columnas ── */}
      <div className="hidden lg:block relative">
        <ConnectorLines />
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-10 gap-y-0 items-center">
          {/* Columna izquierda */}
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5"
          >
            {left.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} />
            ))}
          </motion.div>

          {/* Centro — logo con glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center justify-center px-8"
          >
            <div className="relative">
              {/* Glow exterior */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--brand) 20%, transparent) 0%, transparent 70%)",
                  transform: "scale(2.2)",
                }}
              />
              {/* Glow medio */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--brand) 35%, transparent) 0%, transparent 60%)",
                  transform: "scale(1.6)",
                }}
              />
              {/* Máscara sólida — cubre las líneas del SVG */}
              <div
                className="absolute inset-0 rounded-full bg-bg-main"
                style={{ transform: "scale(1.12)" }}
              />
              {/* Círculo base */}
              <div className="relative h-[160px] w-[160px] rounded-full bg-brand/8 border-2 border-brand/20 flex items-center justify-center shadow-[0_0_60px_rgba(29,78,216,0.2)]">
                <Image
                  src="/icono-full-blue.png"
                  alt="AgenditApp"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5"
          >
            {right.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Layout mobile ── */}
      <div className="lg:hidden flex flex-col items-center gap-6">
        {/* Cards superiores (3 primeras) */}
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {left.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </motion.div>

        {/* Flechas + icono */}
        <div className="relative flex items-center justify-center w-full py-12">
          {/* SVG flechas mobile — salen del icono hacia arriba y abajo */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 180"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <filter id="sw-mob-glow">
                <feGaussianBlur stdDeviation="1.5" result="cb" />
                <feMerge>
                  <feMergeNode in="cb" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="sw-mob-tip">
                <feGaussianBlur stdDeviation="2" result="cb" />
                <feMerge>
                  <feMergeNode in="cb" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Flecha izquierda → arriba | Flecha derecha → abajo */}
            {[
              {
                id: "sw-m0",
                d: "M 155 90 C 80 85, 80 40, 80 18",
                delay: "0.2s",
              },
              {
                id: "sw-m1",
                d: "M 245 90 C 320 95, 320 140, 320 162",
                delay: "0.5s",
              },
            ].map(({ id, d, delay }) => (
              <g key={id}>
                <path
                  d={d}
                  stroke="var(--brand)"
                  strokeWidth="6.6"
                  strokeLinecap="round"
                  opacity="0.1"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="1"
                    to="0"
                    dur="1.6s"
                    repeatCount="1"
                    fill="freeze"
                    begin={`${delay}; ${id}-mob-draw.end+10s`}
                  />
                </path>
                <path
                  id={`${id}-mob-path`}
                  d={d}
                  stroke="var(--brand)"
                  strokeWidth="3.3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  filter="url(#sw-mob-glow)"
                >
                  <animate
                    id={`${id}-mob-draw`}
                    attributeName="stroke-dashoffset"
                    from="1"
                    to="0"
                    dur="1.6s"
                    repeatCount="1"
                    fill="freeze"
                    begin={`${delay}; ${id}-mob-draw.end+10s`}
                  />
                </path>
                <g>
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="var(--brand)"
                    opacity="0.3"
                    filter="url(#sw-mob-tip)"
                  >
                    <animateMotion
                      dur="1.6s"
                      repeatCount="1"
                      fill="freeze"
                      rotate="auto"
                      begin={`${delay}; ${id}-mob-draw.end+10s`}
                    >
                      <mpath href={`#${id}-mob-path`} />
                    </animateMotion>
                    <animate
                      attributeName="r"
                      values="5;5;8;5"
                      keyTimes="0;0.85;0.95;1"
                      dur="1.6s"
                      repeatCount="1"
                      fill="freeze"
                      begin={`${delay}; ${id}-mob-draw.end+10s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0.3;0.6;0.3"
                      keyTimes="0;0.85;0.95;1"
                      dur="1.6s"
                      repeatCount="1"
                      fill="freeze"
                      begin={`${delay}; ${id}-mob-draw.end+10s`}
                    />
                  </circle>
                  <path
                    d="M 0 -12 L 18 0 L 0 11 Z"
                    fill="var(--brand)"
                    filter="url(#sw-mob-tip)"
                  >
                    <animateMotion
                      dur="1.6s"
                      repeatCount="1"
                      fill="freeze"
                      rotate="auto"
                      begin={`${delay}; ${id}-mob-draw.end+10s`}
                    >
                      <mpath href={`#${id}-mob-path`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0.5;0.8;1;0.6"
                      keyTimes="0;0.85;0.95;1"
                      dur="1.6s"
                      repeatCount="1"
                      fill="freeze"
                      begin={`${delay}; ${id}-mob-draw.end+10s`}
                    />
                  </path>
                </g>
              </g>
            ))}
          </svg>

          {/* Icono centrado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--brand) 25%, transparent) 0%, transparent 65%)",
                  transform: "scale(2)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full bg-bg-main"
                style={{ transform: "scale(1.12)" }}
              />
              <div className="relative h-[120px] w-[120px] rounded-full bg-brand/8 border-2 border-brand/20 flex items-center justify-center shadow-[0_0_40px_rgba(29,78,216,0.18)]">
                <Image
                  src="/icono-full-blue.png"
                  alt="AgenditApp"
                  width={68}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards inferiores (3 últimas) */}
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {right.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
