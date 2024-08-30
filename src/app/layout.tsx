import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Guarini",
  description: "Portifólio de Gabriel Guarini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body id="INICIO" className={`!scroll-smooth ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}