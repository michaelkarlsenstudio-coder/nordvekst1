"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const FAQ = [
  {
    q: "Hvorfor er det så billig? Hva er haken?",
    a: "Haken er ærlig: vi trenger dokumenterte resultater mer enn vi trenger margin akkurat nå. Fem bedrifter får derfor vilkår som ikke kommer tilbake. Etter pilotperioden prises samarbeid som normal månedlig rådgivning — men da har du sett tallene først og kan takke nei uten kostnad.",
  },
  {
    q: "Vi har prøvd Facebook-annonser før. Det funket ikke.",
    a: "Det er det vanligste vi hører, og som regel skyldes det én av tre ting: annonsene ble «fremhevet» uten reell målretting, ingenting ble sporet, eller henvendelsene ble ikke fulgt opp raskt nok. I uke 1 går vi gjennom hva som faktisk skjedde sist — da ser du selv om diagnosen holder vann.",
  },
  {
    q: "Hva må jeg bidra med?",
    a: "Tre ting: annonsebudsjettet (minimum 10 000 kr/mnd, betales direkte til Meta/Google), et 15-minutters møte i uka, og at noen hos deg svarer raskt på henvendelsene som kommer inn. Annonser kan skaffe oppdrag — men ingen kan svare på telefonen for deg.",
  },
  {
    q: "Hvor raskt ser vi resultater?",
    a: "De første henvendelsene kommer normalt i løpet av de to første ukene etter lansering. Men målet vurderes etter åtte uker, ikke åtte dager — det tar tid å teste seg frem til hva som gir lavest pris per henvendelse i akkurat ditt marked.",
  },
  {
    q: "Hva skjer etter de åtte ukene?",
    a: "Tre utfall. Nådde vi målet og du vil fortsette: vi avtaler et månedlig samarbeid til founding partner-pris. Nådde vi målet, men du vil stoppe: helt greit, du beholder alt. Nådde vi ikke målet: du får pengene tilbake, eller vi jobber gratis videre — du velger.",
  },
  {
    q: "Hvem passer dette ikke for?",
    a: "Bedrifter som er fulle av oppdrag og ikke kan ta flere, bedrifter uten rom for annonsebudsjettet, og bedrifter som vil ha «synlighet» fremfor henvendelser. Da kaster vi bort tiden din — og vår.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-mist">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-semibold">{q}</span>
        <span
          aria-hidden
          className={`shrink-0 font-mono text-xl text-rav transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 leading-relaxed text-pine">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="sporsmal" className="border-t border-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-moss">
          Spørsmål
        </p>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Det du lurer på — og det du burde lure på
        </h2>
        <div className="mt-12">
          {FAQ.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
