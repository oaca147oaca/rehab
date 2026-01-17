// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


// app/page.tsx
"use client";
import Image from "next/image";


const categories = [
  {

    title: "Mano y agarre",
    tag: "Mano",
    desc: "Adaptaciones para mejorar pinza, agarre y estabilidad (artritis, artrosis, debilidad).",
    items: ["Engrosadores de utensilios", "Ayudas para escritura", "Agarres personalizados"],
  },
  {
    title: "Muñeca y antebrazo",
    desc: "Soporte y alineación para disminuir dolor y aumentar funcionalidad.",
    items: ["Férulas livianas", "Soportes para actividad", "Ajuste por evaluación"],
  },
  {
    title: "Brazo y codo",
    desc: "Soluciones para asistencia de movimiento y posicionamiento.",
    items: ["Soportes", "Adaptaciones para alcance", "Piezas a medida"],
  },
  {
    title: "Pierna y marcha",
    desc: "Accesorios y adaptaciones funcionales para movilidad y actividades diarias.",
    items: ["Ayudas para calzado", "Soportes específicos", "Accesorios personalizados"],
  },
];

const steps = [
  {
    n: "01",
    title: "Evaluación",
    desc: "Trabajamos con fisioterapia y terapia ocupacional para entender tu necesidad real.",
  },
  {
    n: "02",
    title: "Diseño a medida",
    desc: "Modelamos la solución según tu mano/brazo/pierna, uso y comodidad.",
  },
  {
    n: "03",
    title: "Prototipo y prueba",
    desc: "Imprimimos, probamos, ajustamos. Iteraciones rápidas hasta que funcione bien.",
  },
  {
    n: "04",
    title: "Entrega y seguimiento",
    desc: "Te llevás la adaptación lista y hacemos control por comodidad y durabilidad.",
  },
];

const cases = [
  {
    slug: "engrosador-cubiertos",
    title: "Ayuda de agarre para cubiertos",
    tag: "Mano",
    desc: "Engrosador personalizado para mejorar agarre y reducir dolor al comer.",
    image: "/casos/engrosadorCubiertos.webp",
  },
  {
    slug: "ferula-muneca",
    title: "Férula liviana de muñeca",
    tag: "Muñeca",
    desc: "Soporte para actividades, ajustado con evaluación clínica.",
  },
  {
    slug: "adaptacion-lapicera",
    title: "Adaptación para lapicera",
    tag: "Agarre",
    desc: "Mejor control y menos fatiga al escribir.",
  },
];

const faqs = [
  {
    q: "¿Esto reemplaza un tratamiento médico?",
    a: "No. Son adaptaciones funcionales. Siempre trabajamos coordinados con profesionales (fisioterapia/TO) y según indicación.",
  },
  {
    q: "¿Hacen todo a medida?",
    a: "Sí. Podemos partir de un diseño base, pero lo ajustamos a tu necesidad, tamaño y uso real.",
  },
  {
    q: "¿Qué materiales usan?",
    a: "Depende del caso: buscamos comodidad, resistencia y limpieza. Se define según el uso y la evaluación.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-160px] h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-rem.png"
                  alt="Rehab logo"
                  // className="h-33 md:h-18 invert opacity-90"
                  className="h-33 invert opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"

                />
                <span className="text-base font-semibold">Rehab</span>
              </div>
            </div>
              {/* <div className="leading-tight">
                <div className="text-base font-semibold">Rehab</div>
                <div className="text-xs text-white/60">
                  Adaptaciones 3D • Rehabilitación
                </div>
              </div> */}

            <div className="leading-tight">
              {/* <div className="text-base font-semibold">Rehab</div> */}
              <div className="text-xs text-white/60">
                Adaptaciones 3D • Funcionalidad • Bienestar
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#soluciones">Soluciones</a>
            <a className="hover:text-white" href="#proceso">Proceso</a>
            <a className="hover:text-white" href="#casos">Casos</a>
            <a className="hover:text-white" href="#equipo">Equipo</a>
            <a className="hover:text-white" href="#contacto">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Consultar
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Soluciones funcionales personalizadas, con soporte profesional
            </div>
            
         {/* <div className="mb-8 flex justify-center md:justify-start">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
            <img
              src="/logo-rem.png"
              alt="Rehab logo"
              className="h-10 w-auto invert opacity-90"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Rehab</div>
              <div className="text-xs text-white/60">Rehabilitación + Impresión 3D</div>
            </div>
          </div>
        </div>  */}

          {/* <div className="mb-10 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl" />
              <img
                src="/logo-rem.png"
                alt="Rehab logo"
                className="relative h-16 md:h-20 w-auto invert opacity-95"
              />
            </div>
          </div> */}
{/* 
          <div className="mb-8 max-w-xl">
            <div className="flex justify-center md:justify-start">
              <img
                src="/logo-rem.png"
                alt="Rehab logo"
                className="h-12 w-auto invert opacity-90"
              />
            </div>
          </div> */}



            {/* <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Adaptaciones 3D para{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                manos, brazos y piernas
              </span>
            </h1> */}
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Soluciones 
               <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                {" "} funcionales
              </span>
              {" "}
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                personalizadas
              </span>
                , con soporte
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                 {" "} profesional
              </span>
              
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Adaptaciones impresas en 3D para manos, brazos y piernas, diseñadas junto a
            fisioterapia, terapia ocupacional e ingeniería.
          </p>

{/* 
            <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
              Diseñamos e imprimimos férulas y ayudas funcionales para artrosis,
              artritis y necesidades de movilidad. Trabajo coordinado con{" "}
              <span className="text-white">fisioterapia</span> y{" "}
              <span className="text-white">terapia ocupacional</span>.
            </p> */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Pedir evaluación
              </a>
              <a
                href="#casos"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver casos
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <Stat label="Diseño a medida" value="100%" />
              <Stat label="Iteraciones" value="Rápidas" />
              <Stat label="En equipo" value="Fisio + TO" />
            </div>

            <p className="mt-6 text-xs text-white/50">
              *No reemplaza indicación médica. Se trabaja con profesionales y según evaluación.
            </p>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Rehab Lab</div>
                <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/60">
                  prototipado • ajuste • entrega
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                <Feature
                  title="Escaneo / medidas"
                  desc="Tomamos medidas y definimos puntos de apoyo y confort."
                />
                <Feature
                  title="Modelado 3D"
                  desc="Diseño paramétrico y personalizado para cada caso."
                />
                <Feature
                  title="Impresión + ajuste"
                  desc="Probamos, corregimos y dejamos listo para uso real."
                />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs text-white/60">Sugerencia</div>
                <div className="mt-1 text-sm text-white/80">
                  Armá una carpeta con fotos o videos cortos de cada caso para llenar la sección
                  “Casos” (antes/después, objetivo, resultado).
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <SmallCard title="Materiales" text="Se eligen según resistencia, confort y uso." />
              <SmallCard title="Higiene" text="Diseños pensados para limpieza y durabilidad." />
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section id="soluciones" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Soluciones</h2>
            <p className="max-w-2xl text-white/70">
              Adaptaciones pensadas para mejorar autonomía en actividades diarias. Cada pieza se
              ajusta al caso real.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{c.title}</div>
                    <div className="mt-1 text-sm text-white/70">{c.desc}</div>
                  </div>
                  <div className="rounded-2xl bg-black/30 px-3 py-2 text-xs text-white/60 ring-1 ring-white/10">
                    3D custom
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300/80" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Proceso</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Un flujo simple y eficiente para lograr una solución funcional y cómoda.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/90">{s.title}</div>
                  <div className="text-sm font-semibold text-white/40">{s.n}</div>
                </div>
                <div className="mt-2 text-sm text-white/70">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Casos</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Ejemplos (placeholder). Después los cambiamos por tus trabajos con fotos.
              </p>
            </div>
            <div className="hidden text-sm text-white/60 md:block">
              Tip: guardá fotos en <span className="text-white">/public/casos</span>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {cases.map((c) => (
              <div
                key={c.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    {c.tag}
                  </span>
                  <span className="text-xs text-white/40 group-hover:text-white/60">
                   <a
                    href={`/casos/${c.slug}`}
                    className="text-xs text-white/40 group-hover:text-white/60"
                  >
                    ver más →
                  </a>


                  </span>
                </div>
                <div className="mt-4 text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-white/70">{c.desc}</div>

                {/* Placeholder image block */}
                <div className="mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-black/10">
                  <div className="grid h-full place-items-center text-xs text-white/40">
                    <div className="mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Equipo</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Proyecto interdisciplinario: diseño + impresión 3D + evaluación funcional.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PersonCard
              role="Diseño e impresión 3D"
              name="Rehab"
              desc="Modelado, prototipado e iteración rápida. Enfoque: funcionalidad y confort."
            />
            <PersonCard
              role="Fisioterapia"
              name="Profesional"
              desc="Evaluación de movilidad, dolor y objetivos funcionales."
            />
            <PersonCard
              role="Terapia Ocupacional"
              name="Profesional"
              desc="Análisis de actividades diarias y adaptaciones para autonomía."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Preguntas frecuentes</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-white/70">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 ring-1 ring-white/10 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Contacto</h2>
                <p className="mt-2 text-white/70">
                  Contame qué necesitás (zona, dolor/limitación, actividad diaria) y coordinamos una
                  evaluación con el equipo.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {/* Reemplazá el número por el tuyo con código país: 598... */}
                  <a
                    href="https://wa.me/59898274967?text=Hola%20Rehab!%20Quiero%20consultar%20por%20una%20adaptaci%C3%B3n%203D."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:contacto@rehab.com"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Email
                  </a>
                </div>

                <p className="mt-4 text-xs text-white/50">
                  Tip: más adelante podemos agregar un formulario real (con Resend/Formspree) sin backend.
                </p>
              </div>

              {/* Simple form UI (no backend yet) */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <div className="text-sm font-semibold">Consulta rápida</div>
                <div className="mt-4 grid gap-3">
                  <input
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/60"
                    placeholder="Nombre"
                  />
                  <input
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/60"
                    placeholder="Teléfono / WhatsApp"
                  />
                  <textarea
                    className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/60"
                    placeholder="¿Qué necesitás? (mano, muñeca, pierna... y actividad: comer, escribir, vestirse, etc.)"
                  />
                  <button
                    type="button"
                    className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
                    onClick={() => alert("Formulario demo (sin envío). Usá WhatsApp por ahora 🙂")}
                  >
                    Enviar (demo)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <div>© {new Date().getFullYear()} Rehab • Impresión 3D aplicada a rehabilitación</div>
            <div className="text-white/40">Montevideo, Uruguay</div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-lg font-semibold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 ring-1 ring-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function SmallCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{text}</div>
    </div>
  );
}

function PersonCard({ role, name, desc }: { role: string; name: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-xs text-white/60">{role}</div>
      <div className="mt-2 text-lg font-semibold">{name}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
      <div className="mt-5 flex gap-2">
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/60">
          3D
        </span>
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/60">
          Rehab
        </span>
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/60">
          Equipo
        </span>
      </div>
    </div>
  );
}

