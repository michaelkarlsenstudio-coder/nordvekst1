import Reveal from "./Reveal";

const TERMS = [
  {
    nr: "§1",
    title: "Fast pris. Ingen binding.",
    body: "Pilotprogrammet koster 15 000 kr for åtte uker. Ingen månedlig honorar, ingen oppstartskostnad utover dette, ingen kontrakt som binder deg videre. Annonsebudsjettet (minimum 10 000 kr/mnd) betaler du direkte til Meta/Google — det går aldri gjennom oss.",
  },
  {
    nr: "§2",
    title: "Målet settes skriftlig — før vi starter.",
    body: "I uke 1 blir vi enige om et konkret, målbart resultat. For eksempel: «20 kvalifiserte henvendelser innen åtte uker.» Det står svart på hvitt, slik at ingen kan flytte målstolpene etterpå. Heller ikke vi.",
  },
  {
    nr: "§3",
    title: "Bommer vi, betaler du ingenting.",
    body: "Når vi ikke målet, får du hele honoraret tilbake — eller vi jobber gratis til målet er nådd. Du velger. Risikoen ligger hos oss, der den hører hjemme når vi er den uprøvde parten.",
  },
  {
    nr: "§4",
    title: "Du eier alt.",
    body: "Annonsekonto, data, annonsemateriell og landingssider bygges i ditt navn og forblir ditt — uansett om vi fortsetter sammen eller ikke.",
  },
  {
    nr: "§5",
    title: "Vår betaling er beviset.",
    body: "Som founding partner gir du oss til gjengjeld en ærlig attest og tillatelse til å publisere tallene som casestudie — hvis, og bare hvis, du er fornøyd.",
  },
];

export default function Offer() {
  return (
    <section id="betingelsene" className="border-t border-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-moss">
            Founding Partner-programmet · 5 plasser
          </p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Betingelsene
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-pine">
            Vi er et nytt byrå uten lang kundeliste. Det vet du, og det vet vi.
            Derfor er vilkårene skrevet slik at du ikke trenger å tro på oss —
            bare på avtalen.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-mist bg-paper">
            {TERMS.map((t, i) => (
              <div
                key={t.nr}
                className={`grid gap-3 px-6 py-7 md:grid-cols-[80px_1fr_2fr] md:gap-8 md:px-10 ${
                  i > 0 ? "border-t border-mist" : ""
                }`}
              >
                <div className="font-mono text-sm text-rav">{t.nr}</div>
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="leading-relaxed text-pine">{t.body}</p>
              </div>
            ))}
            <div className="border-t border-mist bg-fog px-6 py-6 md:px-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-moss">
                Passer ikke for: bedrifter uten kapasitet til flere oppdrag,
                eller uten rom for 10 000 kr/mnd i annonsebudsjett.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
