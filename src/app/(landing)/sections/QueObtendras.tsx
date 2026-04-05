"use client";

import { motion, easeOut, type Variants } from "framer-motion";

/* ── Animaciones ── */
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const container: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const cardVariant: Variants = {
  initial: { opacity: 0, y: 28, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/* ── Features ── */
const features = [
  {
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="9"
          width="34"
          height="22"
          rx="3"
          stroke="#1D4ED8"
          strokeWidth="2.5"
        />
        <path
          d="M17 31v4M27 31v4M13 35h18"
          stroke="#1D4ED8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 22l4-5 4 3 4-5 4 3"
          stroke="#1D4ED8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Control que multiplica ingresos",
    hook: "Convierte el desorden en claridad.",
    description:
      "Deja atrás las libretas y controla exactamente qué servicios, empleados y clientes te dejan más dinero. Dispara tus ventas con campañas de WhatsApp y programas de fidelidad.",
  },
  {
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7"
          y="11"
          width="30"
          height="26"
          rx="3"
          stroke="#1D4ED8"
          strokeWidth="2.5"
        />
        <path d="M7 18h30" stroke="#1D4ED8" strokeWidth="2.5" />
        <path
          d="M15 7v7M29 7v7"
          stroke="#1D4ED8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="30"
          cy="31"
          r="6"
          fill="#DCE9FF"
          stroke="#1D4ED8"
          strokeWidth="2"
        />
        <path
          d="M30 28.5v3l1.8 1.8"
          stroke="#1D4ED8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 25h10M13 30h7"
          stroke="#1D4ED8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Agenda en piloto automático",
    hook: "Que tu negocio trabaje para ti.",
    description:
      "Olvídate de contestar chats interminables. Tus clientes reservan 24/7 mientras el sistema confirma automáticamente y envía recordatorios por WhatsApp para acabar con las inasistencias.",
  },
  {
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 5L37 11v11c0 9-7 16-15 18C14 38 7 31 7 22V11L22 5z"
          fill="#DCE9FF"
          stroke="#1D4ED8"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M15 22l5 5 9-9"
          stroke="#1D4ED8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Prestigio que inspira confianza",
    hook: "Destaca por encima del resto.",
    description:
      "Destaca de la competencia con una presencia online impecable bajo tu propia marca y dominio. Administra todo desde tu celular con la tranquilidad de que tu información está 100% segura en la nube.",
  },
];

/* ──────────────────────────────────────────────────────────────
   FLECHAS ANIMADAS — estilo Hero
   Arrow 1: desde la derecha → feature 1 (izquierda)
   Arrow 3: desde la izquierda → feature 3 (derecha)
   Un solo SVG ancho para ambas, más otro para la flecha inferior.
────────────────────────────────────────────────────────────── */

/** Flechas 1 y 3 — cruzan el ancho completo del grid */
function ArrowsCross() {
  return (
    <svg
      width="100%"
      viewBox="0 0 1000 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="qo-glow-cross">
          <feGaussianBlur stdDeviation="2" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="qo-tip-a1">
          <feGaussianBlur stdDeviation="3" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="qo-tip-a3">
          <feGaussianBlur stdDeviation="3" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── FLECHA 1: desde la derecha → card 3 (derecha) ── */}
      {/* Estela */}
      <path
        d="M 1200 80 C 950 5, 900 -80, 857 122"
        stroke="#1D4ED8"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.3s; qo-draw-a1.end+9s"
        />
      </path>
      {/* Línea principal */}
      <path
        id="qo-path-a1"
        d="M 1200 80 C 950 5, 900 -80, 857 122"
        stroke="#1D4ED8"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter="url(#qo-glow-cross)"
      >
        <animate
          id="qo-draw-a1"
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.3s; qo-draw-a1.end+9s"
        />
      </path>
      {/* Punta animada flecha 1 */}
      <g>
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="#1D4ED8"
          opacity="0.3"
          filter="url(#qo-tip-a1)"
        >
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.3s; qo-draw-a1.end+9s"
          >
            <mpath href="#qo-path-a1" />
          </animateMotion>
          <animate
            attributeName="r"
            values="8;8;11;8"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a1.end+9s"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;0.6;0.3"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a1.end+9s"
          />
        </circle>
        <path
          d="M 0 -18 L 26 0 L 0 16 Z"
          fill="#1D4ED8"
          filter="url(#qo-tip-a1)"
        >
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.3s; qo-draw-a1.end+9s"
          >
            <mpath href="#qo-path-a1" />
          </animateMotion>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1;1.3;1"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a1.end+9s"
          />
          <animate
            attributeName="opacity"
            values="0.5;0.8;1;0.6"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a1.end+9s"
          />
        </path>
      </g>

      {/* ── FLECHA 3: desde la izquierda → card 1 (izquierda) ── */}
      {/* Estela */}
      <path
        d="M -200 80 C 50 5, 100 -80, 143 122"
        stroke="#1D4ED8"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.3s; qo-draw-a3.end+9s"
        />
      </path>
      {/* Línea principal */}
      <path
        id="qo-path-a3"
        d="M -200 80 C 50 5, 100 -80, 143 122"
        stroke="#1D4ED8"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter="url(#qo-glow-cross)"
      >
        <animate
          id="qo-draw-a3"
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.3s; qo-draw-a3.end+9s"
        />
      </path>
      {/* Punta animada flecha 3 */}
      <g>
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="#1D4ED8"
          opacity="0.3"
          filter="url(#qo-tip-a3)"
        >
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.3s; qo-draw-a3.end+9s"
          >
            <mpath href="#qo-path-a3" />
          </animateMotion>
          <animate
            attributeName="r"
            values="8;8;11;8"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a3.end+9s"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;0.6;0.3"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a3.end+9s"
          />
        </circle>
        <path
          d="M 0 -18 L 26 0 L 0 16 Z"
          fill="#1D4ED8"
          filter="url(#qo-tip-a3)"
        >
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.3s; qo-draw-a3.end+9s"
          >
            <mpath href="#qo-path-a3" />
          </animateMotion>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1;1.3;1"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a3.end+9s"
          />
          <animate
            attributeName="opacity"
            values="0.5;0.8;1;0.6"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.3s; qo-draw-a3.end+9s"
          />
        </path>
      </g>
    </svg>
  );
}

/** Flecha mobile compacta — sale desde fuera de la derecha y apunta al icono */
function ArrowMobileRight({ id }: { id: string }) {
  const pathId = `qo-mob-r-${id}`;
  const drawId = `qo-draw-mob-r-${id}`;
  return (
    <svg
      width="80"
      height="72"
      viewBox="0 0 80 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id={`qo-glow-mr-${id}`}>
          <feGaussianBlur stdDeviation="1.5" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`qo-tip-mr-${id}`}>
          <feGaussianBlur stdDeviation="2" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 400 36 C 250 36, 160 20, 20 36"
        stroke="#1D4ED8"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.4s"
          repeatCount="1"
          fill="freeze"
          begin={`0.2s; ${drawId}.end+9s`}
        />
      </path>
      <path
        id={pathId}
        d="M 400 36 C 250 36, 160 20, 20 36"
        stroke="#1D4ED8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter={`url(#qo-glow-mr-${id})`}
      >
        <animate
          id={drawId}
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.4s"
          repeatCount="1"
          fill="freeze"
          begin={`0.2s; ${drawId}.end+9s`}
        />
      </path>
      <g>
        <circle
          cx="0"
          cy="0"
          r="6"
          fill="#1D4ED8"
          opacity="0.3"
          filter={`url(#qo-tip-mr-${id})`}
        >
          <animateMotion
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin={`0.2s; ${drawId}.end+9s`}
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animate
            attributeName="r"
            values="6;6;9;6"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;0.6;0.3"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
        </circle>
        <path
          d="M 0 -13 L 19 0 L 0 12 Z"
          fill="#1D4ED8"
          filter={`url(#qo-tip-mr-${id})`}
        >
          <animateMotion
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin={`0.2s; ${drawId}.end+9s`}
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1;1.2;1"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
          <animate
            attributeName="opacity"
            values="0.5;0.8;1;0.6"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
        </path>
      </g>
    </svg>
  );
}

/** Flecha mobile compacta — sale desde fuera de la izquierda y apunta al icono */
function ArrowMobileLeft({ id }: { id: string }) {
  const pathId = `qo-mob-l-${id}`;
  const drawId = `qo-draw-mob-l-${id}`;
  return (
    <svg
      width="80"
      height="72"
      viewBox="0 0 80 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id={`qo-glow-ml-${id}`}>
          <feGaussianBlur stdDeviation="1.5" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`qo-tip-ml-${id}`}>
          <feGaussianBlur stdDeviation="2" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M -320 36 C -160 36, -60 20, 60 36"
        stroke="#1D4ED8"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.4s"
          repeatCount="1"
          fill="freeze"
          begin={`0.2s; ${drawId}.end+9s`}
        />
      </path>
      <path
        id={pathId}
        d="M -320 36 C -160 36, -60 20, 60 36"
        stroke="#1D4ED8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter={`url(#qo-glow-ml-${id})`}
      >
        <animate
          id={drawId}
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.4s"
          repeatCount="1"
          fill="freeze"
          begin={`0.2s; ${drawId}.end+9s`}
        />
      </path>
      <g>
        <circle
          cx="0"
          cy="0"
          r="6"
          fill="#1D4ED8"
          opacity="0.3"
          filter={`url(#qo-tip-ml-${id})`}
        >
          <animateMotion
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin={`0.2s; ${drawId}.end+9s`}
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animate
            attributeName="r"
            values="6;6;9;6"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;0.6;0.3"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
        </circle>
        <path
          d="M 0 -13 L 19 0 L 0 12 Z"
          fill="#1D4ED8"
          filter={`url(#qo-tip-ml-${id})`}
        >
          <animateMotion
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin={`0.2s; ${drawId}.end+9s`}
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1;1.2;1"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
          <animate
            attributeName="opacity"
            values="0.5;0.8;1;0.6"
            keyTimes="0;0.85;0.95;1"
            dur="2.4s"
            repeatCount="1"
            fill="freeze"
            begin={`0.2s; ${drawId}.end+9s`}
          />
        </path>
      </g>
    </svg>
  );
}

/** Flecha 2 — desde la parte inferior → card 2 (centro) */
function ArrowFromBottom() {
  return (
    <svg
      width="120"
      height="200"
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="qo-glow-a2">
          <feGaussianBlur stdDeviation="2" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="qo-tip-a2">
          <feGaussianBlur stdDeviation="3" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Estela */}
      <path
        d="M 60 155 C 25 100, 95 110, 60 10"
        stroke="#1D4ED8"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.6s; qo-draw-a2.end+9s"
        />
      </path>
      {/* Línea principal */}
      <path
        id="qo-path-a2"
        d="M 60 155 C 25 100, 95 110, 60 10"
        stroke="#1D4ED8"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter="url(#qo-glow-a2)"
      >
        <animate
          id="qo-draw-a2"
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.6s; qo-draw-a2.end+9s"
        />
      </path>
      {/* Punta animada */}
      <g>
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="#1D4ED8"
          opacity="0.3"
          filter="url(#qo-tip-a2)"
        >
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.6s; qo-draw-a2.end+9s"
          >
            <mpath href="#qo-path-a2" />
          </animateMotion>
          <animate
            attributeName="r"
            values="8;8;11;8"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.6s; qo-draw-a2.end+9s"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;0.6;0.3"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.6s; qo-draw-a2.end+9s"
          />
        </circle>
        <path
          d="M 0 -18 L 26 0 L 0 16 Z"
          fill="#1D4ED8"
          filter="url(#qo-tip-a2)"
        >
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.6s; qo-draw-a2.end+9s"
          >
            <mpath href="#qo-path-a2" />
          </animateMotion>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1;1.3;1"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.6s; qo-draw-a2.end+9s"
          />
          <animate
            attributeName="opacity"
            values="0.5;0.8;1;0.6"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.6s; qo-draw-a2.end+9s"
          />
        </path>
      </g>
    </svg>
  );
}

/* ── Componente Principal ── */
export default function QueObtendras() {
  return (
    <section className="relative px-6 py-20 max-w-6xl mx-auto">
      {/* ── Título ── */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <div className="relative inline-block leading-[1.05]">
          <p className="text-4xl sm:text-5xl font-semibold text-brand opacity-10 select-none">
            ¿Qué obtendrás?
          </p>
          <p className="text-4xl sm:text-5xl font-semibold text-brand opacity-[0.22] select-none -mt-1">
            ¿Qué obtendrás?
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-heading -mt-1">
            ¿Qué obtendrás?
          </h2>
        </div>
        <p className="mt-6 text-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Conoce las herramientas de agendamiento y gestión más valoradas por
          nuestros usuarios para automatizar su día a día y escalar sus ventas.
        </p>
      </motion.div>

      {/* ── Grid de Features ── */}
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
      >
        {/* Flecha 1 (derecha→col1) y Flecha 3 (izquierda→col3) */}
        <div className="hidden md:block absolute inset-x-0 -top-[160px] pointer-events-none">
          <ArrowsCross />
        </div>

        {/* Flecha 2 — desde abajo → col 2 (centro) */}
        <div className="hidden md:block absolute left-1/2 -bottom-[200px] -translate-x-1/2 pointer-events-none">
          <ArrowFromBottom />
        </div>

        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Icono centrado con flecha al costado — 3 columnas fijas */}
            <div className="flex items-center justify-center mb-5">
              {/* Columna izquierda — flecha o spacer */}
              <div className="md:hidden w-[80px] flex-shrink-0 flex justify-end pointer-events-none">
                {i % 2 !== 0 && <ArrowMobileLeft id={`${i}`} />}
              </div>

              {/* Icono — siempre centrado */}
              <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-brand/10 border border-brand/20 shadow-card">
                {f.icon}
              </div>

              {/* Columna derecha — flecha o spacer */}
              <div className="md:hidden w-[80px] flex-shrink-0 flex justify-start pointer-events-none">
                {i % 2 === 0 && <ArrowMobileRight id={`${i}`} />}
              </div>
            </div>

            {/* Etiqueta — la función */}
            <p className="text-[10px] font-semibold text-brand uppercase tracking-[0.18em] mb-3">
              {f.title}
            </p>

            {/* Hook — el titular principal */}
            <h3 className="text-xl font-semibold text-heading leading-snug mb-3">
              {f.hook}
            </h3>

            {/* Descripción — explicación */}
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              {f.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
