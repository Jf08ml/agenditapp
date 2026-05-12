# Handoff: Unificación de diseño AgenditApp

> **Objetivo**: fusionar el diseño nuevo (este proyecto) con la página actual de producción en `https://www.agenditapp.com` **sin eliminar contenido ni romper SEO**. El resultado es una sola landing en el repo Next.js de producción que conserva todo lo bueno de ambos.

---

## 1. Inventario comparativo

### Lo que existe HOY en producción (NO se debe perder)
- Identidad visual: logo `logo-text.png`, color primario `#1D4ED8`, favicon, icono `icono-full-blue.png`
- Meta tags / SEO completo: title, description, keywords, OG (`inicio_page.png`), Twitter cards, canonical
- Datos reales:
  - Signup: `https://app.agenditapp.com/signup`
  - WhatsApp comercial: `+57 318 434 5284` (`wa.me/573184345284`)
  - Mensaje pre-cargado de WhatsApp: `"Hola 👋 quiero mi demo de AgenditApp para mi negocio"`
- Rutas internas existentes:
  - `/funcionalidades`, `/sectores`, `/sectores/{salones-belleza|barberias|spas|consultorios|psicologia|odontologia}`
  - `/precios`, `/blog`, `/terminos`, `/privacidad`
- Screenshots reales del producto: `agenda-virtual-desktop.png`, `reserva-paso-1-mockup.png`, `servicios-precios-mockup.png`, `ubicacion-mockup.png`
- Secciones únicas de producción a CONSERVAR:
  - **¿Qué obtendrás?** — 3 pilares (control, piloto automático, prestigio)
  - **Catálogo de servicios** — mockup con precios visibles
  - **Ubicación** — dirección + mapa + botón "Cómo llegar"
  - **Tabla comparativa de planes** (matriz de funcionalidades)
  - **Sectores** con páginas dedicadas y CTA "Ver más detalles"
- Locale `es_CO`, dominio canónico `agenditapp.com`

### Lo que aporta el DISEÑO NUEVO (este proyecto)
- Hero rediseñado con:
  - Pill "Nuevo · Plan desde $10 USD/mes"
  - H1 a 3 líneas con remate emocional
  - Microcopy "Sin tarjeta · Listo en 10 min · Cancela cuando quieras"
  - Badge animado "reserva confirmada hace X seg"
- **ProofBar** con stats (200+, 60%, 24/7, 4.9★)
- **Sección Problema** — comparativa "Sin AgenditApp" vs "Con AgenditApp"
- **Cómo funciona en 4 pasos** con número visual
- **WhatsApp Showcase** — chat animado con bubble de confirmación
- **Grid de sectores** con 10 iconos (vs 6 actuales)
- **Testimonios rotatorios** con stat destacado (−60%, +3h, 18×)
- **Calculadora de ROI** interactiva (ticket promedio × inasistencias)
- Pricing cards con toggle Mensual/Anual
- FAQ ampliada (8 preguntas vs 6)
- Formulario de demo con campos extra (tipo de negocio, volumen)
- Footer CTA emocional final
- **Bilingüe ES/EN** vía objeto `COPY`
- **Tweaks panel** (idioma, acento, secciones on/off)
- Fuentes: Inter + Instrument Serif (Google Fonts)
- Animaciones reveal on scroll

---

## 2. Orden recomendado de secciones (versión unificada)

```
1.  Nav (logo prod + links existentes + CTA "Registrarse" → app.agenditapp.com/signup)
2.  Hero (nuevo + screenshot real agenda-virtual-desktop.png)
3.  ProofBar (nuevo)
4.  ¿Qué obtendrás? (prod — 3 pilares)              ← MANTENER
5.  Problema: Sin vs Con (nuevo)
6.  Cómo funciona en 4 pasos (nuevo + screenshots reales)
7.  Catálogo de servicios (prod + servicios-precios-mockup.png)  ← MANTENER
8.  WhatsApp Showcase (nuevo — chat animado)
9.  Plataforma completa / Funciones (nuevo grid 8 items)
10. Sectores (nuevo grid 10 iconos, link "Ver más" a /sectores/*)
11. Ubicación (prod + ubicacion-mockup.png)          ← MANTENER
12. Testimonios (nuevo — 3 casos)
13. Calculadora ROI (nuevo)
14. Pricing cards (nuevo + toggle mensual/anual)
15. Tabla comparativa de planes (prod)               ← MANTENER
16. Demo personalizada (form nuevo, action → WhatsApp existente)
17. FAQ (nuevo, 8 preguntas — fusionar con las 6 actuales)
18. Footer CTA final (nuevo)
19. Footer (prod con todas las rutas reales)
```

---

## 3. Tareas concretas para Claude Code

### A. Setup de assets
- [ ] Importar todos los strings de `copy.jsx` a `i18n/landing.ts` (o equivalente Next.js)
- [ ] Mantener idioma único `es` para producción; dejar `en` como dictionary para futuro `/en`
- [ ] Reemplazar `LINKS.*` del proyecto por constantes ya existentes en el repo prod
- [ ] Asegurar que todos los botones primarios apunten a `app.agenditapp.com/signup`
- [ ] Todos los CTAs "Hablar / Contactar" apuntan a `wa.me/573184345284?text=...`

### B. Conversión de cada componente (JSX → componente Next.js)
Los componentes están en `parts/` de este proyecto:

| Archivo | Componente nuevo Next.js | Notas |
|---|---|---|
| `parts/nav.jsx` | `components/landing/Nav.tsx` | **Fusionar** con Nav actual: logo prod + links prod + scroll suave a anclas + CTA `signup` |
| `parts/hero.jsx` | `components/landing/Hero.tsx` | Reemplazar mockup placeholder por `next/image` con `agenda-virtual-desktop.png` |
| `parts/proof-bar.jsx` | `components/landing/ProofBar.tsx` | Nuevo |
| `parts/pillars.jsx` | `components/landing/Pillars.tsx` | Sección "¿Qué obtendrás?" de prod, rediseñada |
| `parts/problem.jsx` | `components/landing/Problem.tsx` | Nuevo |
| `parts/how.jsx` | `components/landing/HowItWorks.tsx` | Usar mockups reales de pasos 1–4 |
| `parts/catalog.jsx` | `components/landing/Catalog.tsx` | Catálogo de servicios de prod, rediseñado con mock interactivo |
| `parts/features.jsx` | `components/landing/Features.tsx` | Reemplaza grid de "Funcionalidades" actual |
| `parts/whatsapp.jsx` | `components/landing/WhatsAppShowcase.tsx` | Nuevo — animar con Framer Motion |
| `parts/sectors.jsx` | `components/landing/Sectors.tsx` | Cada item linkea a `/sectores/{slug}` |
| `parts/location.jsx` | `components/landing/Location.tsx` | Ubicación de prod, mapa rediseñado |
| `parts/testimonials.jsx` | `components/landing/Testimonials.tsx` | Nuevo |
| `parts/roi.jsx` | `components/landing/ROICalculator.tsx` | Nuevo — usar `useState` controlado |
| `parts/pricing.jsx` | `components/landing/PricingCards.tsx` | Mantener tabla comparativa existente debajo |
| `parts/compare.jsx` | `components/landing/Compare.tsx` | Tabla comparativa de planes, rediseñada |
| `parts/faq.jsx` | `components/landing/FAQ.tsx` | Fusionar preguntas: usar las 8 del nuevo (cubren las 6 prod) |
| `parts/demo-form.jsx` | `components/landing/DemoForm.tsx` | `action` → endpoint actual; fallback a WhatsApp |
| `parts/footer-cta.jsx` | `components/landing/FooterCTA.tsx` | Nuevo, antes del Footer existente |

### C. Estilos
- [ ] Migrar variables CSS de `Landing AgenditApp.html` `<style>` a tokens Tailwind o `globals.css`:
  - `--blue: #1E6BFF` → considerar alinear con `#1D4ED8` actual de prod
  - `--blue-deep`, `--blue-soft`, `--ink`, `--muted`, `--line`, `--bg`
  - `--wa: #25D366`, `--wa-deep: #128C7E`
  - `--warm: oklch(0.74 0.16 50)` como acento secundario
  - `--shadow-sm/md/lg`
- [ ] Mantener `font-family: Inter` (ya en uso) + agregar `Instrument Serif` para hero remate emocional
- [ ] Animación `reveal` on scroll: implementar con `IntersectionObserver` o Framer Motion `whileInView`

### D. SEO y meta — NO TOCAR
- [ ] No modificar ningún `<head>` actual de `app/page.tsx` o `app/layout.tsx`
- [ ] Mantener `metadata` export con titles, descriptions, OG, Twitter
- [ ] Conservar locale `es_CO` y canonical

### E. Detalles a validar al final
- [ ] Botón "Registrarse" / "Crear demo" siempre → `app.agenditapp.com/signup`
- [ ] Todos los WhatsApp con el mismo texto pre-cargado
- [ ] El logo es la imagen `logo-text.png`, no texto
- [ ] La tabla comparativa de planes sigue funcional y los precios coinciden ($10/$20/$30 USD)
- [ ] Las rutas `/sectores/*` siguen vivas y los iconos del grid linkean correctamente
- [ ] Lighthouse mobile ≥ 90 antes de mergear

---

## 4. Archivos clave en este proyecto

```
Landing AgenditApp.html      ← HTML root con fonts + tokens CSS
app.jsx                      ← Composición de la página (orden de secciones)
copy.jsx                     ← Strings ES + EN + LINKS reales
tweaks-panel.jsx             ← Solo para preview, NO migrar a producción
parts/
  ├─ nav.jsx
  ├─ hero.jsx
  ├─ proof-bar.jsx
  ├─ problem.jsx
  ├─ how.jsx
  ├─ features.jsx
  ├─ whatsapp.jsx
  ├─ sectors.jsx
  ├─ testimonials.jsx
  ├─ roi.jsx
  ├─ pricing.jsx
  ├─ faq.jsx
  ├─ demo-form.jsx
  ├─ footer-cta.jsx
  └─ _ui.jsx                 ← primitivos compartidos (Button, Eyebrow, etc.)
```

---

## 5. Criterio de aceptación

La unificación está completa cuando:

1. La home de producción tiene las **19 secciones** del orden recomendado
2. **0 enlaces rotos**: todos apuntan a rutas reales (`/funcionalidades`, `/sectores/*`, `/precios`, `/blog`, signup, WhatsApp con texto)
3. **SEO intacto**: meta tags, OG, structured data, sitemap sin cambios negativos
4. Las 3 secciones de prod (Catálogo, Ubicación, Tabla comparativa) siguen presentes con sus screenshots reales
5. El nuevo flujo emocional (Hero → Problema → Cómo → WhatsApp → ROI → Testimonios) funciona como columna vertebral
6. Mobile: hit targets ≥ 44px, sin overflow horizontal
7. Lighthouse Performance/SEO/Accessibility ≥ 90

---

**Cómo usar este handoff en VSCode**:

1. Descarga este proyecto completo desde el menú "Export"
2. Abre la carpeta en VSCode
3. En Claude Code, di: *"Lee `HANDOFF-Claude-Code.md` y comienza la unificación siguiendo el orden recomendado, empezando por la sección A (setup de assets) y luego la conversión de componentes uno por uno."*
