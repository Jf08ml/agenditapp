export function MobileArrow() {
  return (
      <svg
        width="600"
        height="300"
        viewBox="0 0 180 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter */}
          <filter id="arrowGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow más intenso para la punta */}
          <filter id="tipGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Estela */}
        <path
          d="M -10 500 C -80 200, -70 80, 0 120"
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
            begin="0s; drawLine.end+8s"
          />
        </path>

        {/* Línea principal */}
        <path
          id="arrowPathMainMobile"
          d="M -10 500 C -80 200, -70 80, 0 120"
          stroke="#1D4ED8"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          filter="url(#arrowGlow)"
        >
          <animate
            id="drawLine"
            attributeName="stroke-dashoffset"
            from="1"
            to="0"
            dur="2.8s"
            repeatCount="1"
            fill="freeze"
            begin="0s; drawLine.end+8s"
          />
        </path>

        {/* Punta animada */}
        <g>
          {/* Glow circular */}
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="#1D4ED8"
            opacity="0.3"
            filter="url(#tipGlow)"
          >
            <animateMotion
              dur="2.8s"
              repeatCount="1"
              fill="freeze"
              rotate="auto"
              begin="0s; drawLine.end+8s"
            >
              <mpath href="#arrowPathMainMobile" />
            </animateMotion>

            <animate
              attributeName="r"
              values="8;8;10;8"
              keyTimes="0;0.85;0.95;1"
              dur="2.8s"
              repeatCount="1"
              fill="freeze"
              begin="0s; drawLine.end+8s"
            />

            <animate
              attributeName="opacity"
              values="0.3;0.3;0.6;0.3"
              keyTimes="0;0.85;0.95;1"
              dur="2.8s"
              repeatCount="1"
              fill="freeze"
              begin="0s; drawLine.end+8s"
            />
          </circle>

          {/* Triángulo */}
          <path
            d="M -14 -18 L 16 0 L -14 18 Z"
            fill="#1D4ED8"
            filter="url(#tipGlow)"
          >
            <animateMotion
              dur="2.8s"
              repeatCount="1"
              fill="freeze"
              rotate="auto"
              begin="0s; drawLine.end+8s"
            >
              <mpath href="#arrowPathMainMobile" />
            </animateMotion>

            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1;1.25;1"
              keyTimes="0;0.85;0.95;1"
              dur="2.8s"
              repeatCount="1"
              fill="freeze"
              begin="0s; drawLine.end+8s"
            />

            <animate
              attributeName="opacity"
              values="0.6;0.8;1;0.6"
              keyTimes="0;0.85;0.95;1"
              dur="2.8s"
              repeatCount="1"
              fill="freeze"
              begin="0s; drawLine.end+8s"
            />
          </path>
        </g>
      </svg>
  );
}
