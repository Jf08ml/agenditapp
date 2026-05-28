# Fase 4 — Addendum: footer links + verificación

---

## Añadir sección "Comparativas" al footer

### `src/app/(landing)/sections/Footer.tsx`

Añadir una nueva columna/sección en el footer:

```tsx
{/* Nueva sección "Comparativas" en el footer */}
<div>
  <h3 className="text-sm font-semibold mb-3">Comparativas</h3>
  <ul className="space-y-2 text-sm text-muted-foreground">
    <li>
      <Link href="/vs/fresha" className="hover:text-foreground transition-colors">
        AgenditApp vs Fresha
      </Link>
    </li>
    <li>
      <Link href="/vs/agendapro" className="hover:text-foreground transition-colors">
        AgenditApp vs AgendaPro
      </Link>
    </li>
    <li>
      <Link href="/vs/booksy" className="hover:text-foreground transition-colors">
        AgenditApp vs Booksy
      </Link>
    </li>
    <li>
      <Link href="/vs/weibook" className="hover:text-foreground transition-colors">
        AgenditApp vs Weibook
      </Link>
    </li>
  </ul>
</div>
```

### `src/app/(landing)/components/ui/PageFooter.tsx`

Mismo bloque, adaptado al estilo del componente secundario.

---

## Añadir link contextual desde páginas de sector

En cada página de sector (barberías, salones, psicología, etc.), añadir al final antes del CTA:

```tsx
{/* Link contextual a comparativas — añadir en cada sector page */}
<div className="mt-8 text-sm text-muted-foreground">
  <p>
    ¿Comparando opciones?{" "}
    <Link href="/vs/fresha" className="text-primary hover:underline">
      AgenditApp vs Fresha
    </Link>
    {" · "}
    <Link href="/vs/agendapro" className="text-primary hover:underline">
      AgenditApp vs AgendaPro
    </Link>
  </p>
</div>
```

---

## Checklist Fase 4

- [ ] Directorio `src/app/vs/[competitor]/` creado
- [ ] Archivo `page.tsx` con el código copiado
- [ ] `npm run build` genera las 4 rutas estáticas: `/vs/fresha`, `/vs/agendapro`, `/vs/booksy`, `/vs/weibook`
- [ ] Footer muestra sección "Comparativas" con los 4 links
- [ ] Cada página renderiza la tabla comparativa correctamente
- [ ] Rich Results Test muestra FAQ schema válido en cada página
- [ ] Schema `WebPage` + `FAQPage` en el JSON-LD de cada ruta

---

# Fase 5 — Expansión páginas de sectores

## Patrón de adición de contenido

Para cada sector (empezar con barberías, salones-belleza, psicología), añadir estos bloques
al archivo `src/app/sectores/[sector]/page.tsx` o al componente `SectorPageContent`:

### Bloque 1: Párrafo narrativo del problema

```tsx
{/* Añadir debajo de la lista de features actuales */}
<section className="my-12" aria-labelledby="problema">
  <h2 id="problema" className="text-2xl font-semibold mb-4">
    El problema real de manejar citas en una barbería [o salón/consultorio]
  </h2>
  <p className="text-muted-foreground leading-relaxed mb-4">
    {/* Contenido específico por sector — ver textos abajo */}
  </p>
  <p className="text-muted-foreground leading-relaxed">
    {/* Párrafo 2 */}
  </p>
</section>
```

### Contenido por sector:

**Barberías:**
```
El dueño de una barbería recibe en promedio 40-80 mensajes de WhatsApp al día relacionados
con citas: confirmaciones, reagendamientos, preguntas de horario, cancelaciones de último
minuto. Eso son entre 2 y 4 horas diarias gestionando chats en lugar de cortando.
El resultado es una agenda que vive en la cabeza del barbero, turnos que se cruzan los
sábados, y clientes que llaman a última hora porque "no sabían que había cupo".
AgenditApp convierte ese caos en un sistema: los clientes ven los turnos disponibles en
tiempo real, eligen su barbero favorito, y reciben confirmación y recordatorio automático
por WhatsApp. Sin que el barbero mueva un dedo.
```

**Salones de belleza:**
```
Coordinar una agenda de 3 o 4 estilistas con servicios de diferente duración —
manicure 45 min, tinte 2 horas, corte 30 min — sin que se crucen los horarios
es un trabajo en sí mismo. Hacerlo por WhatsApp manual garantiza errores.
Un cliente que llega y no encuentra su hora, o dos clientas citadas al mismo tiempo
para la misma silla, son situaciones que cuestan dinero y reputación.
AgenditApp gestiona la disponibilidad real de cada estilista y cada silla, sin
solapamientos, con recordatorios que reducen las inasistencias hasta un 70%.
```

**Psicología:**
```
Para un psicólogo o psicóloga independiente, la gestión de la agenda implica
una capa adicional de sensibilidad: los pacientes necesitan discreción, puntualidad
y una comunicación que inspire confianza desde el primer contacto.
Manejar sesiones de 50 minutos con 10 minutos de margen entre consultas, gestionar
cancelaciones de último minuto y recordar qué pacientes tienen seguro o precio diferencial
—todo eso requiere un sistema, no una libreta ni un chat.
AgenditApp permite configurar duraciones exactas, mensajes personalizados con el tono
de tu práctica, y recordatorios discretos que reducen las ausencias sin sentirse invasivos.
```

### Bloque 2: FAQs visibles (HTML directo, no acordeón)

```tsx
{/* FAQs específicas del sector — HTML visible para Google */}
<section className="my-12" aria-labelledby="faqs-sector">
  <h2 id="faqs-sector" className="text-2xl font-semibold mb-6">
    Preguntas frecuentes — {sectorName}
  </h2>
  <dl className="space-y-6">
    {faqs.map((faq) => (
      <div key={faq.q} className="border-b border-border pb-6 last:border-0">
        <dt className="font-medium mb-2">{faq.q}</dt>
        <dd className="text-sm text-muted-foreground leading-relaxed">{faq.a}</dd>
      </div>
    ))}
  </dl>
</section>
```

### Bloque 3: FAQPage schema específico

Añadir al schema existente de la página o como script adicional:

```tsx
const sectorFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};
```

### Bloque 4: CTA con enlace a signup (no WhatsApp)

```tsx
<section className="my-12 rounded-xl bg-primary/5 border border-primary/20 px-6 py-8">
  <h2 className="text-xl font-semibold mb-2">
    Automatiza tu {sectorNameSingular} — prueba gratis 7 días
  </h2>
  <p className="text-sm text-muted-foreground mb-6">
    Sin tarjeta. Sin permanencia. Configuración incluida.
  </p>
  <Link
    href="https://app.agenditapp.com/signup"
    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
  >
    Crear cuenta gratis
  </Link>
</section>
```

---

## Checklist Fase 5

- [ ] Páginas de barberías, salones y psicología tienen 1.200+ palabras
- [ ] FAQs visibles en HTML (no acordeones colapsados)
- [ ] FAQPage schema en cada sector page
- [ ] CTA de sector va a signup, no a WhatsApp
- [ ] Cada sector page tiene un link a un artículo de blog relacionado
