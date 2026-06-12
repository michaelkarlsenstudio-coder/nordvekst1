"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const item = (i: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.21, 0.65, 0.36, 1] as const },
  });

  return (
    <section id="topp" className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
      {/* vertical measurement rule — the page's quiet signature */}
      <div aria-hidden className="rule-tick absolute left-5 top-0 hidden h-full w-px md:left-8 md:block" />

      <div className="mx-auto max-w-6xl">
        <motion.p
          {...item(0)}
          className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-moss"
        >
          Betalt annonsering for håndverks- og tjenestebedrifter · Innlandet
        </motion.p>

        <motion.h1
          {...item(1)}
          className="max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-tight md:text-7xl"
        >
          Flere kunder.
          <br />
          Målt i kroner, <em className="font-normal italic text-pine">ikke klikk.</em>
        </motion.h1>

        <motion.p {...item(2)} className="mt-7 max-w-xl text-lg leading-relaxed text-pine">
          Nordvekst skaffer lokale bedrifter flere oppdrag gjennom annonsering
          på Meta og Google. Vi setter et konkret mål sammen før vi starter —
          og når vi det ikke, får du pengene tilbake.
        </motion.p>

        <motion.div {...item(3)} className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#kontakt"
            className="rounded-full bg-ink px-7 py-3.5 font-medium text-fog transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Book en 20-minutters prat
          </a>
          <a href="#betingelsene" className="px-2 py-3 text-pine underline-offset-4 hover:underline">
            Les betingelsene først
          </a>
        </motion.div>

        <motion.div
          {...item(4)}
          className="mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-mist bg-mist sm:grid-cols-3"
        >
          {[
            ["5", "pilotplasser, høsten 2026"],
            ["8 uker", "fra oppstart til fasit"],
            ["100 %", "pengene tilbake om vi bommer"],
          ].map(([n, label]) => (
            <div key={label} className="bg-paper px-5 py-4">
              <div className="font-mono text-xl font-medium">{n}</div>
              <div className="mt-1 text-sm text-moss">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
