type Case = {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  longDescription: string;
  uses: string[];
  opinions: { name: string; text: string }[];
};

const CASES: Case[] = [
  {
    slug: "engrosador-cubiertos",
    title: "Ayuda de agarre para cubiertos",
    tag: "Mano",
    desc: "Engrosador personalizado para mejorar agarre y reducir dolor al comer.",
    image: "/casos/engrosadorCubiertos.webp",
    longDescription:
      "Este engrosador mejora la estabilidad y reduce el esfuerzo al sostener cubiertos. Se ajusta al diámetro ideal para cada persona, buscando confort, higiene y un agarre seguro.",
    uses: [
      "Comer con menos dolor y más control",
      "Mejorar la pinza y el agarre en artritis/artrosis",
      "Reducir fatiga en actividades repetitivas",
    ],
    opinions: [
      { name: "Paciente A", text: "Pude volver a comer sin que se me caiga el cubierto." },
      { name: "TO", text: "Mejoró el desempeño funcional en AVD con un ajuste simple." },
    ],
  },
  // Agregá más casos acá...
];

function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);

  if (!c) {
    return (
      <main className="min-h-screen bg-[#070A10] text-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-3xl font-semibold">Caso no encontrado</h1>
          <p className="mt-2 text-white/70">
            Revisá el link o volvé a la página principal.
          </p>
          <a
            href="/#casos"
            className="mt-6 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            Volver a Casos
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <a href="/#casos" className="text-sm text-white/60 hover:text-white">
          ← Volver
        </a>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 ring-1 ring-white/10">
            <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
          </div>

          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
              {c.tag}
            </div>

            <h1 className="mt-4 text-3xl font-semibold md:text-4xl">{c.title}</h1>
            <p className="mt-3 text-white/70">{c.longDescription}</p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Uso / Beneficios</div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {c.uses.map((u) => (
                  <li key={u} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300/80" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/59800000000?text=Hola%20Rehab!%20Quiero%20consultar%20por%20este%20caso."
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Consultar por WhatsApp
              </a>
              <p className="mt-2 text-xs text-white/50">
                *No reemplaza indicación médica. Se trabaja con profesionales y según evaluación.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold">Opiniones</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {c.opinions.map((o, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <div className="text-sm font-semibold">{o.name}</div>
                <div className="mt-2 text-sm text-white/70">{o.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
