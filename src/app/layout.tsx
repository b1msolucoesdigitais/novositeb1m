import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B1M Soluções Digitais - Soluções Inteligentes para Empresas",
  description: "A B1M entrega automações, atendimentos inteligentes e sistemas sob medida para escalar os resultados da sua empresa.",
  keywords: "automação, atendimento inteligente, sistemas, inteligência artificial, omnichannel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
