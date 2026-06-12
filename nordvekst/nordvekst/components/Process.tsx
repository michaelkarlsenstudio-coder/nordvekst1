import Reveal from "./Reveal";

const STEPS = [
  {
    week: "Uke 1",
    title: "Kartlegging og mål",
    body: "Vi regner ut hva en ny kunde faktisk er verdt for deg, setter opp sporing som måler henvendelser — ikke klikk — og blir skriftlig enige om et konkret mål for de neste åtte ukene.",
  },
  {
    week: "Uke 2",
    title: "Lansering",
    body: "Annonser, målretting og landingsside settes opp og lanseres. Du godkjenner alt før det går live. Alt bygges i din annonsekonto, slik at du eier dataene.",
  },
  {
    week: "Uke 3–8",
    title: "Optimalisering og rapport",
    body: "Vi tester, kutter det som ikke virker og skalerer det som gjør det. Hver uke får du en rapport på under fem minutter: hva det kostet, hva det ga, hva vi gjør videre.",
  },
];

export default function Process() {
  return (
    <section id="metode" className="border-t border-mist bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-moss">
            Metoden
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Åtte uker. Tre steg. Ett tall som teller.
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="grid gap-3 border-t border-mist py-8 md:grid-cols-[140px_1fr_2fr] md:gap-8">
                <div className="font-mono text-sm text-rav">{s.week}</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="leading-relaxed text-pine">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
