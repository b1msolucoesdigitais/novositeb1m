import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
// Removido HeroUIProvider temporariamente devido a erro de plugin
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "B1M Soluções Digitais - Soluções Inteligentes para Empresas",
  description: "Transformamos empresas através de soluções digitais inteligentes, automação e inovação. Especialistas em atendimento inteligente, automação digital e IA.",
  keywords: "automação, atendimento inteligente, inteligência artificial, soluções digitais, transformação digital",
  authors: [{ name: "B1M Soluções Digitais" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-primary text-white">
        {children}
      </body>
    </html>
  );
}
