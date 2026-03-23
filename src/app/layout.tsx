import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bluebell Kids | Guardería Infantil Moderna",
  description: "Cuidado infantil profesional, estimulación temprana y educación creativa en un ambiente seguro y amoroso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${poppins.variable} font-nunito antialiased bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
