export default function Footer() {
  return (
    <footer className="border-t border-mist px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-tight">
          Nordvekst<span className="text-rav">.</span>
        </p>
        <p className="font-mono text-xs text-moss">
          © {new Date().getFullYear()} Nordvekst · Elverum, Innlandet ·{" "}
          {/* TODO: org.nr når selskapet er registrert */}
          Org.nr 000 000 000
        </p>
      </div>
    </footer>
  );
}
