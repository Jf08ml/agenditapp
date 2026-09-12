import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Protección de Datos de tus Clientes - AgenditApp",
  description:
    "Qué datos de tus clientes recopila AgenditApp, quién puede verlos, cómo se protegen, qué terceros los procesan y qué te corresponde a ti como responsable del tratamiento.",
  alternates: { canonical: "https://agenditapp.com/seguridad" },
  robots: { index: true, follow: true },
};

const GLANCE = [
  { k: "Aislamiento", v: "Tu lista de clientes, invisible para otros negocios" },
  { k: "En tránsito", v: "HTTPS/TLS siempre, sin excepción" },
  { k: "En reposo", v: "Infraestructura cifrada, no por campo", warn: true },
  { k: "Terceros", v: "Solo si activas WhatsApp o IA" },
];

const TOC = [
  { n: "1", title: "Resumen ejecutivo", id: "resumen" },
  { n: "2", title: "Qué datos de tus clientes se recopilan", id: "datos" },
  { n: "3", title: "Quién los puede ver en tu cuenta", id: "acceso" },
  { n: "4", title: "Aislamiento frente a otros negocios", id: "aislamiento" },
  { n: "5", title: "Cómo viajan y se almacenan", id: "almacenamiento" },
  { n: "6", title: "Terceros que los procesan", id: "terceros" },
  { n: "7", title: "Datos sensibles y notas de sesión", id: "sensibles" },
  { n: "8", title: "Tu rol como responsable", id: "responsable" },
  { n: "9", title: "Retención y eliminación", id: "retencion" },
  { n: "10", title: "Derechos de tus clientes", id: "derechos" },
  { n: "11", title: "Qué podemos formalizar", id: "formalizar" },
];

const TERCEROS = [
  { trigger: "WhatsApp automático", provider: "Meta (WhatsApp Cloud API) o el proveedor conectado", data: "Nombre y teléfono, dentro del mensaje de confirmación/recordatorio" },
  { trigger: "Asistente de reservas por IA", provider: "Anthropic (modelos Claude)", data: "Nombre, teléfono, correo, documento, fecha de nacimiento y el texto de la conversación" },
  { trigger: "Validador de comprobantes con IA", provider: "Anthropic (modelos Claude, visión)", data: "La imagen del comprobante — puede incluir el nombre de quien envía el dinero" },
  { trigger: "Cobro por transferencia", provider: "ImageKit", data: "La imagen del comprobante queda almacenada (no el documento de identidad)" },
];

function SectionCard({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="bg-bg-card border border-brand/10 rounded-[20px] p-6 sm:p-8 scroll-mt-28"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-brand"
          style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
        >
          {n}
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-heading pt-0.5">{title}</h2>
      </div>
      <div className="text-sm sm:text-[15px] text-body leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-brand/50 [&_strong]:text-heading [&_strong]:font-semibold [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-brand/8 [&_code]:text-brand [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_h3]:text-heading [&_h3]:font-semibold [&_h3]:text-[15px] [&_h3]:mt-2">
        {children}
      </div>
    </section>
  );
}

function Callout({ tone, label, children }: { tone: "affirm" | "caution"; label: string; children: React.ReactNode }) {
  const styles =
    tone === "affirm"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
      : "bg-amber-50 border-amber-200 text-amber-800";
  return (
    <div className={`rounded-[12px] border p-4 text-sm leading-relaxed ${styles}`}>
      <p className="text-[10.5px] font-bold uppercase tracking-wider mb-1.5 opacity-80">{label}</p>
      {children}
    </div>
  );
}

function Clause({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-[3px] border-brand bg-brand/6 rounded-r-[10px] px-4 py-3 text-[14px] italic text-heading">
      {children}
    </blockquote>
  );
}

export default function SeguridadPage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
              Seguridad y datos
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-heading mb-3 text-balance">
              Cómo protegemos los datos personales de los clientes de tu negocio
            </h1>
            <p className="text-body leading-relaxed">
              Qué información se recopila de las personas que agendan contigo, quién puede verla
              dentro de tu cuenta, qué tan protegida está técnicamente, quién más la toca fuera de
              la plataforma, y qué te corresponde a ti como responsable del tratamiento frente a
              tus propios clientes.
            </p>
          </div>

          {/* Honesty lede */}
          <div
            className="bg-bg-card border border-brand/10 rounded-[16px] p-5 sm:p-6 mb-8 text-sm sm:text-[15px] text-body leading-relaxed"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            Preferimos ser precisos antes que optimistas: esta página describe{" "}
            <strong className="text-heading font-semibold">cómo está construida la plataforma</strong>{" "}
            respecto a los datos de las personas que reservan contigo — tus clientes o pacientes —,
            verificable en su arquitectura, no una certificación emitida por un tercero
            independiente. Donde no tenemos ese respaldo formal, o algo depende de una
            configuración tuya, lo decimos explícitamente en vez de darlo por sentado.
          </div>

          {/* At a glance */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand/10 border border-brand/10 rounded-[16px] overflow-hidden mb-10">
            {GLANCE.map((g) => (
              <div key={g.k} className="bg-bg-card p-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-1.5">{g.k}</p>
                <p className={`text-[13.5px] font-semibold leading-snug ${g.warn ? "text-amber-600" : "text-heading"}`}>
                  {g.v}
                </p>
              </div>
            ))}
          </div>

          {/* TOC */}
          <nav className="mb-10">
            <p className="text-[11px] font-mono uppercase tracking-wider text-brand mb-3">Contenido</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="flex items-center gap-2 text-sm text-body hover:text-brand transition-colors">
                    <span className="font-mono text-muted text-xs">{t.n}</span>
                    {t.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            <SectionCard id="resumen" n="1" title="Resumen ejecutivo">
              <p>
                Si solo vas a leer una sección, que sea esta. El resto de la página desarrolla cada
                punto con detalle técnico, centrado en la información de las personas que agendan
                contigo — no en la tuya como negocio.
              </p>
              <ul>
                <li>
                  <strong>Solo se recopila lo necesario para agendar:</strong> nombre, teléfono,
                  correo, documento de identidad, fecha de nacimiento y el historial de citas de
                  cada cliente. No se piden ni almacenan datos de tarjeta.
                </li>
                <li>
                  <strong>Nadie de otro negocio puede ver tu lista de clientes</strong>, así use
                  AgenditApp para su propio negocio: cada organización está aislada a nivel de
                  arquitectura.
                </li>
                <li>
                  <strong>Dentro de tu cuenta, tú decides qué empleado ve qué</strong>, aunque esa
                  restricción hoy opera principalmente a nivel de interfaz, no como un candado duro
                  entre tus propios empleados (sección 3).
                </li>
                <li>
                  <strong>La información viaja siempre cifrada</strong> (HTTPS/TLS) y se aloja en
                  infraestructura (MongoDB Atlas) que cifra el almacenamiento a nivel de plataforma.
                </li>
                <li>
                  <strong>Nombre, teléfono, documento y notas se guardan como texto plano</strong>{" "}
                  en la base de datos — protegidos por control de acceso y aislamiento, no por
                  cifrado adicional a nivel de campo.
                </li>
                <li>
                  <strong>Si activas WhatsApp o los asistentes de IA</strong>, esos datos —y, para
                  comprobantes, la imagen del pago— se procesan por Meta o Anthropic según el caso.
                </li>
                <li>
                  <strong>El campo de notas de sesión es de texto libre</strong> y puede llegar a
                  contener información delicada — hoy no tiene clasificación ni protección especial.
                </li>
                <li>
                  <strong>Frente a tus propios clientes, tú eres el responsable del tratamiento</strong>{" "}
                  de sus datos; AgenditApp actúa como encargado (sección 8).
                </li>
              </ul>
            </SectionCard>

            <SectionCard id="datos" n="2" title="Qué datos de tus clientes se recopilan">
              <p>
                Cuando alguien agenda contigo —por tu página pública de reservas, por WhatsApp o
                porque tu equipo lo registra manualmente— AgenditApp guarda una ficha de cliente con
                estos campos:
              </p>
              <ul>
                <li>
                  <strong>Identificación:</strong> nombre, teléfono (normalizado a formato
                  internacional), correo, documento de identidad y fecha de nacimiento — estos tres
                  últimos son opcionales, según lo que tu formulario les pida.
                </li>
                <li>
                  <strong>Historial operativo:</strong> las citas y servicios tomados, para dar
                  continuidad y seguimiento.
                </li>
                <li>
                  <strong>Notas internas:</strong> un campo de texto libre por cliente, y otro por
                  cada cita (&quot;notas de sesión&quot;), que tu equipo llena a discreción — ver
                  sección 7.
                </li>
                <li>
                  <strong>Fidelización:</strong> contadores de servicios y referidos, e historial de
                  recompensas, si tienes ese programa activo.
                </li>
              </ul>
              <p>
                No se recopila ni almacena información de tarjetas en la ficha del cliente. El
                comprobante de pago por transferencia, cuando aplica, se maneja aparte como una
                imagen, no como un dato de la ficha.
              </p>
            </SectionCard>

            <SectionCard id="acceso" n="3" title="Quién los puede ver en tu cuenta">
              <p>
                El acceso al módulo de clientes se puede activar o restringir por rol: tú decides si
                un profesional ve solo su propia agenda o también el listado completo de clientes,
                su historial y sus notas.
              </p>
              <Callout tone="caution" label="Alcance actual">
                Esa restricción por rol es, hoy, principalmente una{" "}
                <strong className="font-semibold">capa de visibilidad en el panel</strong>. La
                barrera dura que sí se aplica del lado del servidor es que ningún dato cruce entre
                negocios distintos (sección 4) — no la de qué empleado dentro de tu misma cuenta
                puede leer qué. En la práctica, cualquier persona con sesión activa en tu cuenta
                tiene, técnicamente, alcance a la información de tus clientes más allá de lo que su
                rol le muestre. Por eso conviene tratar el acceso a la cuenta con el mismo cuidado
                que el de tus propios sistemas: cuentas personales, sin compartir credenciales, y
                dar de baja a quien deja el equipo.
              </Callout>
              <p>
                El inicio de sesión usa tokens JWT y contraseñas con hash (<code>bcrypt</code>), y el
                acceso es personal e intransferible según nuestros{" "}
                <Link href="/terminos" className="text-brand underline decoration-brand/30 hover:decoration-brand">
                  Términos y Condiciones
                </Link>
                .
              </p>
            </SectionCard>

            <SectionCard id="aislamiento" n="4" title="Aislamiento frente a otros negocios">
              <p>
                AgenditApp es una plataforma <strong>multi-tenant</strong>: miles de negocios
                distintos —incluida, quizás, la competencia de tu cliente— usan la misma
                infraestructura. Esto importa porque la información de tus clientes convive, en la
                misma base de datos física, con la de personas que agendaron con otros negocios. La
                pregunta relevante no es &quot;¿comparten infraestructura?&quot; sino &quot;¿pueden
                cruzarse los datos?&quot; — y la respuesta es no, por diseño.
              </p>
              <p>
                El dominio o subdominio por el que entra cada negocio (
                <code>tunegocio.agenditapp.com</code> o su dominio propio) determina, antes de tocar
                cualquier dato, a qué organización pertenece la solicitud. Cada ficha de cliente
                lleva una referencia explícita a su organización, y cada consulta se filtra
                automáticamente por esa referencia: un empleado de &quot;Salón A&quot; no puede leer
                clientes de &quot;Barbería B&quot;, incluso conociendo el identificador exacto de un
                registro — el backend valida en cada endpoint que el recurso pertenezca a la
                organización autenticada.
              </p>
            </SectionCard>

            <SectionCard id="almacenamiento" n="5" title="Cómo viajan y se almacenan">
              <p>
                Todo el tráfico hacia la plataforma —tu panel, tu página pública de reservas, el
                envío del formulario de un cliente— viaja cifrado por <code>HTTPS/TLS</code>. No
                existe una versión sin cifrar de la aplicación expuesta públicamente.
              </p>
              <p>
                La base de datos se aloja en <strong>MongoDB Atlas</strong>, cuya infraestructura
                cifra por defecto los volúmenes de almacenamiento a nivel de plataforma. Esa es una
                garantía del proveedor de infraestructura, documentada públicamente por MongoDB —
                no una certificación que AgenditApp emita por su cuenta.
              </p>
              <Callout tone="caution" label="Lo que no afirmamos">
                El nombre, teléfono, correo, documento y notas de un cliente se guardan como{" "}
                <strong className="font-semibold">campos de texto plano</strong> en la base de
                datos — sin cifrado adicional propio, a diferencia de las credenciales de Mercado
                Pago de tu cuenta (cifradas con AES-256-GCM) o las contraseñas de usuario (con hash
                bcrypt). Su protección hoy viene del control de acceso, el aislamiento entre
                organizaciones y el cifrado de infraestructura de Atlas — no de un cifrado por
                campo. Si tu empresa necesita ese nivel adicional para ciertos campos, es algo que
                podemos evaluar puntualmente (sección 11).
              </Callout>
            </SectionCard>

            <SectionCard id="terceros" n="6" title="Terceros que procesan datos de tus clientes">
              <p>
                Estos envíos <strong>solo ocurren si activas la función correspondiente</strong> —
                si no usas WhatsApp automático ni los asistentes de IA, los datos de tus clientes no
                salen de la infraestructura base (Vercel + MongoDB Atlas):
              </p>
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-sm min-w-[560px]">
                  <thead>
                    <tr className="text-left border-b border-brand/10">
                      <th className="pb-2 pr-4 font-semibold text-heading">Si activas…</th>
                      <th className="pb-2 pr-4 font-semibold text-heading">Proveedor</th>
                      <th className="pb-2 font-semibold text-heading">Qué dato del cliente le llega</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TERCEROS.map((t) => (
                      <tr key={t.trigger} className="border-b border-brand/10 last:border-0 align-top">
                        <td className="py-2.5 pr-4 font-medium text-heading whitespace-nowrap">{t.trigger}</td>
                        <td className="py-2.5 pr-4 text-body">{t.provider}</td>
                        <td className="py-2.5 text-body">{t.data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                El cobro con tarjeta ocurre directamente dentro de Mercado Pago o PayPal — ni el
                número de tarjeta ni los datos de esa transacción pasan por AgenditApp.
              </p>
            </SectionCard>

            <SectionCard id="sensibles" n="7" title="Datos sensibles y notas de sesión">
              <p>
                Algunos negocios —consultorios, psicología, odontología, estética avanzada— usan el
                campo de &quot;notas de sesión&quot; para dejar constancia de lo tratado en cada
                cita. Ese campo está diseñado como un cuadro de texto libre, pensado para servir
                tanto de nota de servicio genérica como, según el rubro, de historia clínica básica.
              </p>
              <Callout tone="caution" label="Alcance actual">
                No existe hoy una clasificación especial ni un cifrado adicional para ese campo por
                el hecho de contener información de salud: se guarda y se protege igual que
                cualquier otra nota, y tampoco hay un filtro que limite qué puede escribirse ahí. Si
                tu negocio maneja datos de salud u otra categoría de <strong className="font-semibold">dato sensible</strong>{" "}
                bajo la Ley 1581 de 2012, te recomendamos mantener esas notas lo más generales
                posible, o conversar con nosotros sobre un tratamiento diferenciado.
              </Callout>
              <p>
                Ese mismo campo es legible por el asistente de IA interno que usa tu equipo para
                gestionar la agenda, como cualquier otro dato operativo de tu cuenta — no se
                comparte con otros negocios ni sale de tu organización.
              </p>
            </SectionCard>

            <SectionCard id="responsable" n="8" title="Tu rol como responsable del tratamiento">
              <p>
                Bajo la Ley 1581 de 2012, frente a los datos de las personas que agendan contigo,{" "}
                <strong>tu negocio es el &quot;responsable del tratamiento&quot;</strong> y
                AgenditApp actúa como <strong>&quot;encargado del tratamiento&quot;</strong>:
                procesamos esos datos siguiendo tu instrucción, para prestarte el servicio que
                contrataste.
              </p>
              <p>
                Eso significa que obtener la autorización de tus propios clientes para recolectar y
                usar sus datos —incluyendo enviarles WhatsApp o, si aplica, procesarlos con IA— es
                una responsabilidad tuya frente a ellos, no algo que la plataforma resuelva por
                defecto.
              </p>
              <Callout tone="affirm" label="Recomendación">
                <p className="mb-2">
                  Puedes activar, en tu formulario público de reservas, un texto de términos con
                  casilla de aceptación — pero ese texto lo escribes y lo activas tú; no viene una
                  cláusula de tratamiento de datos por defecto. Un punto de partida razonable, para
                  adaptar con tu asesor legal:
                </p>
                <Clause>
                  &quot;Autorizo a [Tu Negocio] el tratamiento de mis datos personales conforme a su
                  Política de Tratamiento de Datos, con el fin de gestionar mi reserva, enviarme
                  confirmaciones y recordatorios por WhatsApp, y ser atendido por su asistente de
                  reservas con inteligencia artificial.&quot;
                </Clause>
                <p className="mt-2">
                  Si quieres ayuda para redactarlo o activarlo, escríbenos a{" "}
                  <a href="mailto:hola@agenditapp.com" className="underline decoration-emerald-400/50 hover:decoration-emerald-600 font-medium">
                    hola@agenditapp.com
                  </a>
                  .
                </p>
              </Callout>
            </SectionCard>

            <SectionCard id="retencion" n="9" title="Retención y eliminación">
              <p>
                La ficha de un cliente se conserva mientras tu cuenta esté activa y mientras tú no
                la elimines — eliminar un cliente es una acción que solo puede iniciar tu equipo
                desde el panel, con sesión autenticada. Algunos datos derivados expiran
                automáticamente:
              </p>
              <ul>
                <li>
                  Las conversaciones del asistente de reservas por IA se eliminan a los{" "}
                  <strong>90 días</strong>, salvo que estén marcadas para revisión de calidad.
                </li>
                <li>
                  Las sesiones del bot de WhatsApp expiran a las <strong>24 horas</strong> de
                  inactividad.
                </li>
                <li>
                  Los enlaces de confirmación/cancelación de citas dejan de ser válidos{" "}
                  <strong>30 días</strong> después de la cita.
                </li>
              </ul>
            </SectionCard>

            <SectionCard id="derechos" n="10" title="Derechos de tus clientes">
              <p>
                Conforme a la Ley 1581 de 2012, cualquier cliente tuyo puede pedir{" "}
                <strong>acceder, rectificar o eliminar</strong> sus datos personales. Como tu
                negocio es el responsable del tratamiento frente a ellos (sección 8), lo natural es
                que ese canal sea el tuyo: hoy no existe un formulario público donde un cliente le
                pida directamente a AgenditApp que borre su información, sin pasar por tu negocio.
              </p>
              <ul>
                <li>
                  Un cliente puede corregir sus propios datos (nombre, correo, teléfono, fecha de
                  nacimiento) la próxima vez que reserve por tu página pública.
                </li>
                <li>Una solicitud fuera de ese flujo la resuelves tú desde el panel de clientes.</li>
                <li>
                  Si necesitas nuestra ayuda para una solicitud puntual, escríbenos a{" "}
                  <a href="mailto:hola@agenditapp.com" className="text-brand underline decoration-brand/30 hover:decoration-brand">
                    hola@agenditapp.com
                  </a>
                  .
                </li>
              </ul>
              <p>
                Esto es consistente con nuestra{" "}
                <Link href="/privacidad" className="text-brand underline decoration-brand/30 hover:decoration-brand">
                  Política de Privacidad
                </Link>
                , que canaliza estas solicitudes por el mismo correo.
              </p>
            </SectionCard>

            <SectionCard id="formalizar" n="11" title="Qué podemos formalizar para tu empresa">
              <p>
                Esta página es informativa. Si tu empresa —o la de tu propio cliente— necesita algo
                con más peso contractual sobre el tratamiento de datos de los clientes finales,
                estas son las opciones reales que podemos ofrecer hoy:
              </p>
              <ul>
                <li>
                  <strong>Un acuerdo de encargo de tratamiento de datos firmado</strong>, como anexo
                  al contrato de servicio, formalizando por escrito la relación
                  responsable/encargado de la sección 8.
                </li>
                <li>
                  <strong>Responder un cuestionario de seguridad propio</strong> de tu empresa,
                  punto por punto, si ya tienen uno estandarizado.
                </li>
                <li>
                  <strong>Evaluar un tratamiento diferenciado</strong> para campos específicos (por
                  ejemplo, notas de sesión en negocios de salud) si tu caso de uso lo requiere.
                </li>
              </ul>
              <p>
                Lo que no podemos hacer es afirmar una certificación externa (ISO 27001, SOC 2,
                PCI-DSS) que no tenemos — si en algún momento la obtenemos, esta página se
                actualizará para reflejarlo.
              </p>
            </SectionCard>
          </div>

          <p className="mt-8 text-xs text-muted">
            Última actualización: {new Date().toLocaleDateString("es-CO")} · Esta página amplía
            nuestra{" "}
            <Link href="/privacidad" className="text-brand underline decoration-brand/30 hover:decoration-brand">
              Política de Privacidad
            </Link>{" "}
            y{" "}
            <Link href="/terminos" className="text-brand underline decoration-brand/30 hover:decoration-brand">
              Términos y Condiciones
            </Link>
            , pero no los reemplaza.
          </p>
        </div>
      </main>
      <PageFooter />
    </>
  );
}

// Sin versión en inglés todavía: se genera solo para el locale por defecto
// y cualquier /en/* de esta ruta debe devolver 404 en vez de renderizar en español.
export function generateStaticParams() {
  return [{ locale: routing.defaultLocale }];
}

export const dynamicParams = false;
