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

# Blog — Cómo escribir artículos nuevos

Los artículos del blog son archivos `.mdx` ubicados en `src/content/blog/`. Crear uno nuevo es suficiente para que aparezca automáticamente en `/blog`, en el sitemap y sea indexable por Google.

## 1. Crear el archivo

Crea un archivo en `src/content/blog/` con un nombre en kebab-case que sea la URL del artículo:

```
src/content/blog/mi-nuevo-articulo.mdx
→ agenditapp.com/blog/mi-nuevo-articulo
```

## 2. Frontmatter obligatorio

Cada archivo debe comenzar con este bloque YAML entre `---`:

```yaml
---
title: "Título del artículo (H1 y title tag)"
description: "Descripción para Google y Open Graph. 150–160 caracteres idealmente."
publishedAt: "2026-04-08"
keywords:
  - palabra clave principal
  - segunda palabra clave
  - tercera palabra clave
readingTime: "7 min"
category: "Gestión de Negocios"
excerpt: "Resumen de 1–2 frases que aparece en la card del listado /blog."
---
```

**Categorías disponibles** (afectan el color del badge):

| Valor | Color |
| :--- | :--- |
| `Gestión de Negocios` | Azul |
| `Comparativas` | Morado |
| `WhatsApp & Comunicación` | Verde |
| `Guías Prácticas` | Ámbar |

Para añadir una categoría nueva, agrégala en el objeto `CATEGORY_COLORS` de [src/app/blog/page.tsx](src/app/blog/page.tsx).

## 3. Contenido en Markdown

Debajo del frontmatter escribe el artículo en Markdown estándar. Los encabezados H1 los genera automáticamente la plantilla a partir del `title` — empieza el contenido desde `## H2`.

```markdown
## Por qué esto importa

Párrafo normal con **negrita** y [enlace interno](/sectores/salones-belleza).

### Subtítulo H3

- Elemento de lista
- Otro elemento
```

## 4. Componentes personalizados

Dentro del MDX puedes usar estos dos componentes sin importar nada:

### `<CtaBox>` — Bloque de llamada a la acción

```mdx
<CtaBox
  title="¿Listo para empezar?"
  body="Solicita una demo gratuita y configura tu agenda en 30 minutos."
/>
```

Renderiza un bloque degradado azul con botón de demo. Úsalo una vez por artículo, cerca del final.

### `<TipBox>` — Recuadro de consejo o dato destacado

```mdx
<TipBox>
  **Dato clave:** El 98% de los mensajes de WhatsApp se abren en menos de 5 minutos.
</TipBox>
```

Renderiza un recuadro azul claro con ícono 💡. Ideal para estadísticas, advertencias o consejos que quieras resaltar.

## 5. Tablas

Las tablas Markdown estándar se renderizan con el estilo del sistema:

```markdown
| App | WhatsApp nativo | Precio |
|---|---|---|
| AgenditApp | ✅ | Accesible |
| Competidor | ❌ | Alto |
```

## 6. El artículo aparece automáticamente en

- `/blog` — listado ordenado por `publishedAt` (más reciente primero)
- `/blog/[slug]` — página individual con schema `Article` para Google
- `/sitemap.xml` — indexado dinámicamente sin cambios adicionales

No necesitas tocar ningún otro archivo.

## 7. Buenas prácticas SEO

- El `title` debe contener la palabra clave principal (idealmente al inicio)
- La `description` debe ser única por artículo, entre 150 y 160 caracteres
- Usa la palabra clave principal en el primer párrafo y al menos en un H2
- Enlaza internamente a páginas de sectores relevantes: `/sectores/salones-belleza`, `/sectores/barberias`, etc.
- Incluye el año en el título si el contenido es de actualidad ("en 2026")
- Apunta a 1.200–2.000 palabras por artículo

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
