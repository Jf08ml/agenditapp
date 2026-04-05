# AgenditApp

Software de agendamiento y gestión para negocios de servicios (salones, barberías, spas, clínicas, academias). Reservas 24/7, recordatorios por WhatsApp y finanzas integradas.

## Inicio rápido

```bash
npm run dev      # desarrollo
npm run build    # producción
npm run lint     # linting
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

---

# Guía de Diseño — AgenditApp

## Paleta de Colores Oficial

### Marca y Acción

| Token | HEX | Clase Tailwind | Uso |
| :--- | :--- | :--- | :--- |
| Brand Primary | `#1D4ED8` | `bg-brand` / `text-brand` | Botones principales, links activos, iconos clave |
| Brand Hover | `#2563EB` | `bg-brand-hover` | `:hover` en botones, estados activos y seleccionados |

### Fondos

| Token | HEX | Clase Tailwind | Uso |
| :--- | :--- | :--- | :--- |
| Fondo Principal | `#F8FAFC` | `bg-bg-main` | Fondo general del sitio y dashboard |
| Fondo Card | `#FFFFFF` | `bg-bg-card` | Cards y módulos, con `shadow-card` |

> Shadow estándar para cards: `box-shadow: 0 8px 24px rgba(0,0,0,0.05)`

### Tipografía

| Token | HEX | Clase Tailwind | Uso |
| :--- | :--- | :--- | :--- |
| Título | `#0F172A` | `text-heading` | H1, H2, H3 |
| Cuerpo | `#334155` | `text-body` | Párrafos y texto normal |
| Secundario | `#64748B` | `text-muted` | Labels, captions, texto de apoyo |

### Estados

| Token | HEX | Clase Tailwind | Uso |
| :--- | :--- | :--- | :--- |
| Éxito | `#10B981` | `text-success` / `bg-success` | Cita confirmada, pago aprobado, acción exitosa |
| Error | `#EF4444` | `text-danger` / `bg-danger` | Error de pago, campo requerido, eliminaciones |

---

## Tipografía

**Poppins** — cargada vía `next/font/google`, disponible globalmente.

| Peso | Nombre | Uso |
| :--- | :--- | :--- |
| 400 | Regular | Texto normal, párrafos |
| 500 | Medium | Botones, subtítulos |
| 600 | SemiBold | Títulos H1–H3, logo textual |

> **Nunca uses** Light (300) ni Black (900). Mantén limpieza visual.

---

## Border Radius

| Variable CSS | Valor | Uso |
| :--- | :--- | :--- |
| `--radius-sm` | `10px` | Inputs, chips, badges |
| `--radius-md` | `12px` | Botones, cards pequeñas |
| `--radius-lg` | `14px` | Cards grandes, modales, paneles |

---

## Clases de Utilidad Globales

Definidas en `globals.css` para uso directo:

```html
<!-- Botón primario -->
<button class="btn-primary">Solicitar Demo</button>

<!-- Card estándar -->
<div class="card p-6">...</div>
```

---

## Tokens en CSS

Disponibles como variables CSS en todo el proyecto:

```css
var(--brand)          /* #1D4ED8 */
var(--brand-hover)    /* #2563EB */
var(--bg-main)        /* #F8FAFC */
var(--bg-card)        /* #FFFFFF */
var(--text-heading)   /* #0F172A */
var(--text-body)      /* #334155 */
var(--text-muted)     /* #64748B */
var(--success)        /* #10B981 */
var(--danger)         /* #EF4444 */
var(--shadow-card)    /* 0 8px 24px rgba(0,0,0,0.05) */
var(--radius-sm)      /* 10px */
var(--radius-md)      /* 12px */
var(--radius-lg)      /* 14px */
```

---

## Personalidad Visual

AgenditApp comunica: tecnología moderna · producto escalable · claridad · startup confiable · diseño cuidado.

**No comunica:** software viejo · herramienta improvisada · app informal.
