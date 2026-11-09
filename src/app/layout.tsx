import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopoBackground } from "@/components/TopoBackground";
import { site } from "@/data/site";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Clã de Operações Táticas | Arma Reforger`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    "СОБР",
    "SOBR",
    "Arma Reforger",
    "clã MilSim",
    "operações táticas",
    "MilSim",
    "comunidade Arma Reforger",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Clã de Operações Táticas`,
    description: site.shortDescription,
    images: [
      {
        url: "/images/hero-squad.webp",
        width: 1600,
        height: 900,
        alt: "Operadores do СОБР em ambiente operacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Clã de Operações Táticas`,
    description: site.shortDescription,
    images: ["/images/hero-squad.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/logo-sobr-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo-sobr.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/logo-sobr-180.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#070807",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <TopoBackground />
        <div className="grain" aria-hidden="true" />
        <div className="site-shell">
          <div className="site-frame">
            <Header />
            <main id="conteudo">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
