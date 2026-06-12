"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "#metode", label: "Metoden" },
  { href: "#betingelsene", label: "Betingelsene" },
  { href: "#hvem", label: "Hvem står bak" },
  { href: "#sporsmal", label: "Spørsmål" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-fog/90 backdrop-blur border-b border-mist"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#topp" className="font-semibold tracking-tight text-lg">
          Nordvekst<span className="text-rav">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-pine transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-fog transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Book en prat
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-ink transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-ink transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-mist bg-fog md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-pine"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center font-medium text-fog"
              >
                Book en prat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
