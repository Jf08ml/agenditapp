/**
 * Flecha animada para el hero side-by-side.
 * Parte desde el borde izquierdo del screenshot (columna derecha)
 * y apunta hacia el botón "Crear mi demo gratis" (columna izquierda).
 *
 * Path: M(420,50) → arc → (20,200)
 *   Inicio: borde izquierdo del screenshot, tercio superior
 *   Fin:    zona del botón primario en la columna de texto
 */
export function HeroSideArrow() {
  return (
    <svg
      width="440"
      height="250"
      viewBox="0 0 440 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      aria-hidden
    >
      <defs>
        <filter id="sideArrowGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sideTipGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Estela (trail) */}
      <path
        d="M 420 180 C 310 280, 10 220, -20 240"
        stroke="#1D4ED8"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
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
          begin="0.4s; sideDrawLine.end+8s"
        />
      </path>

      {/* Línea principal */}
      <path
        id="sideArrowPath"
        d="M 420 180 C 310 280, 10 220, -20 240"
        stroke="#1D4ED8"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter="url(#sideArrowGlow)"
      >
        <animate
          id="sideDrawLine"
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="2.8s"
          repeatCount="1"
          fill="freeze"
          begin="0.4s; sideDrawLine.end+8s"
        />
      </path>

      {/* Punta animada */}
      <g>
        {/* Glow circular */}
        <circle cx="0" cy="0" r="8" fill="#1D4ED8" opacity="0.3" filter="url(#sideTipGlow)">
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.4s; sideDrawLine.end+8s"
          >
            <mpath href="#sideArrowPath" />
          </animateMotion>
          <animate
            attributeName="r"
            values="8;8;10;8"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.4s; sideDrawLine.end+8s"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;0.6;0.3"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.4s; sideDrawLine.end+8s"
          />
        </circle>

        {/* Triángulo */}
        <path d="M 0 -12 L 22 0 L 0 12 Z" fill="#1D4ED8" filter="url(#sideTipGlow)">
          <animateMotion
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            rotate="auto"
            begin="0.4s; sideDrawLine.end+8s"
          >
            <mpath href="#sideArrowPath" />
          </animateMotion>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1;1.3;1"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.4s; sideDrawLine.end+8s"
          />
          <animate
            attributeName="opacity"
            values="0.6;0.8;1;0.6"
            keyTimes="0;0.85;0.95;1"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0.4s; sideDrawLine.end+8s"
          />
        </path>
      </g>
    </svg>
  );
}
