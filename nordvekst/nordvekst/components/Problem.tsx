import Reveal from "./Reveal";

const PROBLEMS = [
  {
    title: "Annonser uten regnskap",
    body: "De fleste byråer rapporterer klikk og visninger. Du driver ikke bedrift for å samle klikk — du trenger å vite hva én ny kunde koster, og hva den er verdt.",
  },
  {
    title: "Trykk-og-håp-knappen",
    body: "«Fremhev innlegg» på Facebook er der annonsebudsjetter drar for å dø. Uten riktig målretting, sporing og oppfølging betaler du for å bli sett av feil folk.",
  },
  {
    title: "Lange kontrakter, lite ansvar",
    body: "Tolv måneders binding før byrået har bevist noe som helst, flytter all risiko over på deg. Vi mener det skal være motsatt.",
  },
];

export default function Problem() {
  return (
    <section className="border-t border-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-moss">
            Problemet
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Hvorfor annonsering føles som å brenne penger
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="border-t-2 border-ink pt-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-pine">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
