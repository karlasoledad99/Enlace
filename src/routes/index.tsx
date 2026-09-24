import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";

const WHATSAPP_NUMBER = "526569874123";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Enlace Empresarial — Consejo estratégico premium",
      },
      {
        name: "description",
        content:
          "Impulsamos el crecimiento de su empresa con asesoría financiera, optimización operativa y transformación digital. Contáctenos por WhatsApp al 656 987 4123.",
      },
      {
        property: "og:title",
        content: "Enlace Empresarial — Consejo estratégico premium",
      },
      {
        property: "og:description",
        content:
          "Transformamos la complejidad empresarial en resultados medibles. Finanzas, operaciones y tecnología bajo una misma visión.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.379-5.03c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="blob absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-bright/25 blur-3xl" />
        <div
          className="blob absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-green-bright/20 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="blob absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-blue/20 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue to-green-bright text-white shadow-lg shadow-blue/20">
              <span className="font-display text-lg font-extrabold">EE</span>
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg font-bold text-blue-deep">
                Enlace Empresarial
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue/60">
                Solutions Group
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#servicios"
              className="text-sm font-semibold text-blue-deep/80 hover:text-blue-bright"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-sm font-semibold text-blue-deep/80 hover:text-blue-bright"
            >
              Sobre nosotros
            </a>
            <a
              href="#contacto"
              className="text-sm font-semibold text-blue-deep/80 hover:text-blue-bright"
            >
              Contacto
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-semibold text-blue-deep shadow-sm ring-1 ring-blue/10 backdrop-blur-xl transition hover:bg-white"
          >
            Hablemos
          </a>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pt-14">
          {/* Hero */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/10 bg-white/60 px-4 py-1.5 backdrop-blur-xl">
                <span className="size-2 rounded-full bg-green-bright" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue/70">
                  Consejo estratégico premium
                </span>
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-deep md:text-6xl">
                Impulsemos el{" "}
                <span className="text-blue-bright">crecimiento</span> de su
                empresa
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue/70">
                Transformamos la complejidad empresarial en resultados
                medibles. Finanzas, operaciones y tecnología, todo bajo una
                misma visión.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-bright px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-bright/30 transition hover:brightness-105"
                >
                  Contactar por WhatsApp
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white/50 px-7 py-3.5 text-sm font-bold text-blue-deep backdrop-blur-xl transition hover:bg-white"
                >
                  Ver servicios
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                <div>
                  <dt className="font-display text-3xl font-extrabold text-blue">
                    +240
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-blue/60">
                    Empresas atendidas
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-3xl font-extrabold text-blue">
                    98%
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-blue/60">
                    Clientes satisfechos
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-3xl font-extrabold text-blue">
                    15
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-blue/60">
                    Años de experiencia
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue/10 via-cream/40 to-green-bright/10 outline outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={heroImg}
                  alt="Equipo profesional de Enlace Empresarial colaborando en una oficina moderna"
                  width={1080}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-xl shadow-blue/10 backdrop-blur-xl">
                <p className="font-display text-2xl font-extrabold text-blue-bright">
                  +32%
                </p>
                <p className="mt-1 text-sm font-medium text-blue/70">
                  Crecimiento promedio anual de nuestros clientes
                </p>
              </div>
              <div className="absolute -right-4 top-8 flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-2 shadow-lg shadow-green-bright/10 backdrop-blur-xl">
                <span className="size-2 rounded-full bg-green-bright" />
                <span className="text-xs font-semibold text-blue-deep">
                  Disponible hoy
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <section id="servicios" className="mt-24">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-bright">
                  Lo que hacemos
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-blue-deep md:text-4xl">
                  Servicios diseñados para su éxito
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-blue/60">
                Soluciones integrales que acompañan cada etapa del desarrollo
                de su negocio.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="group rounded-3xl border border-white/50 bg-white/60 p-7 shadow-lg shadow-blue/5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue/10">
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-blue/10 text-2xl">
                  📊
                </div>
                <h3 className="font-display text-xl font-bold text-blue-deep">
                  Asesoría Financiera
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blue/70">
                  Estructuración de capital, proyecciones y planeación fiscal
                  estratégica para maximizar su flujo.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-bright"
                >
                  Conversemos <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="group rounded-3xl border border-white/50 bg-white/60 p-7 shadow-lg shadow-blue/5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue/10">
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-green/10 text-2xl">
                  ⚙️
                </div>
                <h3 className="font-display text-xl font-bold text-blue-deep">
                  Optimización Operativa
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blue/70">
                  Rediseño de procesos y cadenas de suministro para reducir
                  costos y elevar la eficiencia.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-bright"
                >
                  Conversemos <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="group rounded-3xl border border-white/50 bg-white/60 p-7 shadow-lg shadow-blue/5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue/10">
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-blue-bright/10 text-2xl">
                  🚀
                </div>
                <h3 className="font-display text-xl font-bold text-blue-deep">
                  Transformación Digital
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blue/70">
                  Implementación de tecnología y datos que impulsan la toma de
                  decisiones en tiempo real.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-bright"
                >
                  Conversemos <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* About / Value */}
          <section
            id="nosotros"
            className="mt-24 rounded-[2rem] border border-white/50 bg-white/50 p-8 backdrop-blur-xl md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-bright">
                  Por qué elegirnos
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-blue-deep md:text-4xl">
                  Conexión estratégica, resultados tangibles
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue/70">
                  En Enlace Empresarial creemos que el crecimiento sostenible
                  nace de una visión clara y una ejecución disciplinada.
                  Acompañamos a líderes y organizaciones a tomar decisiones con
                  confianza, traduciendo objetivos ambiciosos en planes
                  concretos.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-6 shadow-sm">
                  <p className="font-display text-3xl font-extrabold text-blue-bright">
                    Enfoque integral
                  </p>
                  <p className="mt-2 text-sm text-blue/70">
                    Unimos finanzas, operaciones y tecnología en una sola
                    estrategia coherente.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-6 shadow-sm">
                  <p className="font-display text-3xl font-extrabold text-blue-bright">
                    Equipo senior
                  </p>
                  <p className="mt-2 text-sm text-blue/70">
                    Consultores con experiencia real en la dirección de
                    empresas de diversos sectores.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-6 shadow-sm">
                  <p className="font-display text-3xl font-extrabold text-blue-bright">
                    Resultados medibles
                  </p>
                  <p className="mt-2 text-sm text-blue/70">
                    Definimos KPIs claros y reportamos avances de forma
                    transparente.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-6 shadow-sm">
                  <p className="font-display text-3xl font-extrabold text-blue-bright">
                    Acompañamiento continuo
                  </p>
                  <p className="mt-2 text-sm text-blue/70">
                    Estamos presentes en la implementación, no solo en el
                    diagnóstico.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          id="contacto"
          className="border-t border-white/40 bg-white/50 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-blue to-green-bright text-white">
                <span className="font-display text-base font-extrabold">
                  EE
                </span>
              </div>
              <p className="font-display text-sm font-bold text-blue-deep">
                © 2025 Enlace Empresarial
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-bright px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-bright/30 transition hover:brightness-105"
            >
              Escríbanos: 656 987 4123 <span aria-hidden="true">→</span>
            </a>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="wa-pulse fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-green-bright text-white shadow-lg shadow-green-bright/30 transition hover:brightness-105"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
