import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lolla Drenagem & Estética Corporal | Conecta Leste SP",
  description: "Especialista em Drenagem e Tratamento de Lipedema em Cidade Tiradentes, SP. Descubra a harmonia do seu corpo com tratamentos personalizados.",
  keywords: ["drenagem linfática", "lipedema", "estética corporal", "facial", "cidade tiradentes", "lolla estética"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
