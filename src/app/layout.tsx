import type { Metadata } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Letreros Corpóreos RD | Transformando tu visión en realidad",
    template: "%s | Letreros Corpóreos RD",
  },
  description:
    "Fabricación de letreros corpóreos, iluminados, fachadas y señalización en Santo Domingo, República Dominicana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${oswald.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
