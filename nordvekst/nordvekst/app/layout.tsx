import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nordvekst.no"), // TODO: replace with your domain
  title: "Nordvekst — Flere kunder. Målt i kroner, ikke klikk.",
  description:
    "Nordvekst hjelper håndverks- og tjenestebedrifter i Innlandet med å vinne flere oppdrag gjennom betalt annonsering. Fast pris. Skriftlig mål. Pengene tilbake hvis vi bommer.",
  openGraph: {
    title: "Nordvekst — Flere kunder. Målt i kroner, ikke klikk.",
    description:
      "Betalt annonsering for håndverks- og tjenestebedrifter i Innlandet. Fem pilotplasser med resultatgaranti.",
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
