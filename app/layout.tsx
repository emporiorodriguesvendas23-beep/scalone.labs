import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scalone Labs | Criação de Sites e Experiências Digitais",
  description:
    "A Scalone Labs cria sites modernos e experiências digitais para marcas que querem fortalecer sua presença online, gerar oportunidades e crescer.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Scalone Labs | Criação de Sites e Experiências Digitais",
    description:
      "Sites modernos e experiências digitais para marcas que querem fortalecer sua presença online, gerar oportunidades e crescer.",
    type: "website",
    locale: "pt_BR",
    siteName: "Scalone Labs",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}