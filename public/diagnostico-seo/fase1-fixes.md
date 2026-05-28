# Fase 1 — Correcciones críticas de código

---

## 1.1 — Eliminar "Software por zybizobazar.com"

### `src/app/(landing)/sections/Footer.tsx`

Busca y elimina el bloque completo. Suele verse así:

```tsx
// ELIMINAR este bloque completo (aprox. líneas 222-231):
<p className="text-xs text-muted-foreground mt-2">
  Software por{" "}
  <a
    href="https://zybizobazar.com"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-foreground"
  >
    zybizobazar.com
  </a>
</p>
```

No reemplazar con nada. Simplemente eliminar el bloque.

---

### `src/app/(landing)/components/ui/PageFooter.tsx`

Mismo patrón (aprox. líneas 123-129). Buscar `zybizobazar` y eliminar todo el nodo que lo contiene.

---

## 1.2 — Corregir título duplicado del blog

### `src/app/blog/page.tsx`

```tsx
// ANTES (línea ~8):
export const metadata: Metadata = {
  title: "Blog | Recursos para negocios de citas y agendamiento | AgenditApp",
  // ...
};

// DESPUÉS:
export const metadata: Metadata = {
  title: "Blog | Recursos para negocios de citas y agendamiento",
  // ...
};
```

### Verificar otros archivos con el mismo patrón

Busca en todo el proyecto: `grep -r "AgenditApp\"" src/app --include="*.tsx" -l`

Cualquier archivo donde el `title` termine en `| AgenditApp` dentro de `metadata` necesita quitar esa parte — el template del layout ya lo añade.

Archivos típicos a revisar:
- `src/app/precios/page.tsx`
- `src/app/funcionalidades/page.tsx`
- `src/app/sectores/*/page.tsx`
- `src/app/privacidad/page.tsx`
- `src/app/terminos/page.tsx`

Patrón de búsqueda para corregir en todos:
```
// Si el title termina en "| AgenditApp", eliminar esa parte:
title: "Nombre de la página | AgenditApp",
// →
title: "Nombre de la página",
```

---

## 1.3 — CTAs de planes de pago → signup directo

### `src/app/(landing)/sections/Precio.tsx`

Reemplaza los `DemoCtaButton` de los planes de pago (Básico, Esencial, Marca Propia) por un `<a>` directo. El plan Gratuito puede mantener su lógica actual o también ir a signup.

```tsx
// ANTES — botón de plan de pago (ejemplo para Básico):
<DemoCtaButton className="w-full" variant="outline">
  Empezar con el Básico
</DemoCtaButton>

// DESPUÉS:
<a
  href="https://app.agenditapp.com/signup?plan=basico"
  className="inline-flex items-center justify-center w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
  Empezar con el Básico
</a>
```

Aplica el mismo patrón para Esencial y Marca Propia con los parámetros correspondientes:
- Básico → `?plan=basico`
- Esencial → `?plan=esencial`
- Marca Propia → `?plan=marca-propia`

> Si tienes un componente `<Button asChild>` de shadcn/ui, el patrón más limpio es:
> ```tsx
> <Button asChild variant="outline" className="w-full">
>   <a href="https://app.agenditapp.com/signup?plan=basico">
>     Empezar con el Básico
>   </a>
> </Button>
> ```

---

### `src/app/precios/page.tsx`

Aplica exactamente el mismo cambio si esta página tiene sus propios botones de plan (no reutiliza el componente de la landing).

---

## 1.4 — Hero: "Ver cómo funciona" → signup

### `src/app/(landing)/sections/Hero.tsx`

```tsx
// ANTES (aprox. línea 226) — botón secundario:
<a
  href={WHATSAPP_HREF}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Ver cómo funciona
</a>

// DESPUÉS:
<a
  href="https://app.agenditapp.com/signup"
  className="..."
>
  Empezar gratis
</a>
```

> Nota: Si el botón usa el componente `<Button asChild>` con `<Link>` interno de Next.js,
> puedes usar `<Link href="https://app.agenditapp.com/signup">` directamente.
> Quita `target="_blank"` y `rel="noopener noreferrer"` — es una URL externa pero de tu propio app,
> no necesitas abrir en nueva pestaña.

---

## 1.5 — Selector de país: default neutro

### `src/app/(landing)/sections/DemoLead.tsx`

```tsx
// ANTES (aprox. línea 31):
const [pais, setPais] = useState("CO");

// DESPUÉS:
const [pais, setPais] = useState("");
```

---

### `src/app/(landing)/components/ui/SelectorPais.tsx`

Asegúrate de que el `<select>` muestre un placeholder cuando el valor es `""`:

```tsx
// ANTES — probablemente empieza directamente con opciones:
<select value={value} onChange={...} className="...">
  <option value="CO">🇨🇴 Colombia (+57)</option>
  <option value="MX">🇲🇽 México (+52)</option>
  {/* ... */}
</select>

// DESPUÉS — añadir opción placeholder al inicio:
<select value={value} onChange={...} className="...">
  <option value="" disabled>
    🌎 Selecciona tu país
  </option>
  <option value="CO">🇨🇴 Colombia (+57)</option>
  <option value="MX">🇲🇽 México (+52)</option>
  <option value="CL">🇨🇱 Chile (+56)</option>
  <option value="AR">🇦🇷 Argentina (+54)</option>
  <option value="CR">🇨🇷 Costa Rica (+506)</option>
  <option value="PE">🇵🇪 Perú (+51)</option>
  <option value="EC">🇪🇨 Ecuador (+593)</option>
  <option value="VE">🇻🇪 Venezuela (+58)</option>
  <option value="OTHER">Otro país</option>
</select>
```

Si el select usa una librería de UI (shadcn `<Select>`), el patrón es:

```tsx
<Select value={value} onValueChange={onChange}>
  <SelectTrigger>
    <SelectValue placeholder="🌎 Selecciona tu país" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="CO">🇨🇴 Colombia (+57)</SelectItem>
    <SelectItem value="MX">🇲🇽 México (+52)</SelectItem>
    <SelectItem value="CL">🇨🇱 Chile (+56)</SelectItem>
    <SelectItem value="AR">🇦🇷 Argentina (+54)</SelectItem>
    <SelectItem value="CR">🇨🇷 Costa Rica (+506)</SelectItem>
    <SelectItem value="PE">🇵🇪 Perú (+51)</SelectItem>
    <SelectItem value="EC">🇪🇨 Ecuador (+593)</SelectItem>
    <SelectItem value="OTHER">Otro país</SelectItem>
  </SelectContent>
</Select>
```

---

## Checklist Fase 1

- [ ] `grep -r "zybizobazar" src/` devuelve 0 resultados
- [ ] `<title>` del blog en HTML source: sin "AgenditApp" duplicado
- [ ] Botones Básico/Esencial/Marca Propia van a `https://app.agenditapp.com/signup?plan=...`
- [ ] Botón Hero secundario va a `https://app.agenditapp.com/signup`
- [ ] Selector de país no tiene CO pre-seleccionado (muestra placeholder)
- [ ] `npm run build` sin errores TypeScript
- [ ] `npm run lint` sin warnings nuevos
