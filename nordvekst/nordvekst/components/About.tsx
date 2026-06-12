import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="hvem" className="border-t border-mist bg-ink px-5 py-20 text-fog md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fog/50">
            Hvem står bak
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            «Jeg har ingen lang kundeliste å vise til. Derfor tar jeg risikoen
            — ikke du.»
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 leading-relaxed text-fog/80">
            <p>
              Nordvekst drives av {/* TODO: ditt navn */}meg — født og oppvokst
              i Innlandet. Jeg startet ikke byrå for å selge rapporter med
              fine grafer, men fordi jeg så lokale bedrifter med håndverk i
              verdensklasse tape oppdrag til konkurrenter med dårligere arbeid
              og bedre annonser.
            </p>
            <p>
              Founding Partner-programmet er bygget på en enkel logikk: i
              stedet for å påstå at jeg er god, beviser jeg det — på fem
              bedrifter, med skriftlige mål og pengene-tilbake-garanti. Tallene
              fra de første åtte ukene blir min portefølje. Din nedside er
              dekket av §3.
            </p>
            <p className="font-mono text-sm text-fog/60">
              {/* TODO: Bytt ut med bilde av deg + signatur for mer tillit */}
              — Grunnlegger, Nordvekst · Elverum
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
