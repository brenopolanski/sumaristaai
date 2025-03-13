//root file
import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sumarista AI - Resumo Inteligente de PDF com IA",
  description: "Sua IA especialista em resumos. Extraia insights de PDFs, textos e documentos com precisão e rapidez com o Sumaristaai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
