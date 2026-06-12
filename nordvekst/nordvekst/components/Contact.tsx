"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT; // e.g. Formspree
const EMAIL = "post@nordvekst.no"; // TODO: replace with your e-mail

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-mist bg-paper px-4 py-3 text-ink placeholder:text-moss focus:border-pine focus:outline-none";

  return (
    <section id="kontakt" className="border-t border-mist bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-moss">
            Neste steg
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            En 20-minutters prat. Ingen forpliktelser.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-pine">
            Vi går gjennom hva en ny kunde er verdt for din bedrift og hva et
            realistisk mål ville vært. Konkluderer vi med at dette ikke passer,
            sier vi det rett ut — fem plasser betyr at vi må velge riktig.
          </p>
          <p className="mt-8 font-mono text-sm text-moss">
            Foretrekker du telefon?{" "}
            {/* TODO: sett inn ditt nummer */}
            <a href="tel:+4700000000" className="text-ink underline underline-offset-4">
              +47 00 00 00 00
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "sent" ? (
            <div className="rounded-2xl border border-mist bg-fog p-8">
              <h3 className="text-xl font-semibold">Meldingen er sendt.</h3>
              <p className="mt-3 leading-relaxed text-pine">
                Du hører fra oss innen én virkedag. Vil du fremskynde det, ring
                direkte — nummeret står til venstre.
              </p>
            </div>
          ) : ENDPOINT ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Navn</span>
                  <input name="navn" required autoComplete="name" className={inputCls} placeholder="Ola Nordmann" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Bedrift</span>
                  <input name="bedrift" required autoComplete="organization" className={inputCls} placeholder="Nordmann Bygg AS" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Telefon</span>
                  <input name="telefon" type="tel" required autoComplete="tel" className={inputCls} placeholder="+47 …" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">E-post</span>
                  <input name="epost" type="email" required autoComplete="email" className={inputCls} placeholder="ola@bedrift.no" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">
                  Hva driver dere med? <span className="font-normal text-moss">(valgfritt)</span>
                </span>
                <textarea name="melding" rows={4} className={inputCls} placeholder="Kort om bedriften og hva slags oppdrag dere vil ha flere av." />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-ink px-7 py-4 font-medium text-fog transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sender …" : "Book en prat"}
              </button>
              {status === "error" && (
                <p className="text-sm text-rav">
                  Noe gikk galt under sendingen. Prøv igjen, eller send en
                  e-post til{" "}
                  <a className="underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          ) : (
            <div className="rounded-2xl border border-mist bg-fog p-8">
              <h3 className="text-xl font-semibold">Send en e-post</h3>
              <p className="mt-3 leading-relaxed text-pine">
                Skriv tre linjer: hvem dere er, hva dere driver med, og hva
                slags oppdrag dere vil ha flere av. Du får svar innen én
                virkedag.
              </p>
              <a
                href={`mailto:${EMAIL}?subject=Founding%20Partner-programmet`}
                className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 font-medium text-fog transition-transform hover:scale-[1.03]"
              >
                {EMAIL}
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
