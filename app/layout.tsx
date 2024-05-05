import type { Metadata } from "next";
import { Inter, Open_Sans, Pacifico } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzeria",
  description:
    "Une petite oasis italienne au cœur de la ville de Pont-Remy. Savourez nos délicieuses pizzas, dans une ambiance conviviale et authentique",
  creator: "Brian Fontaine",
  publisher: "Brian Fontaine",
  keywords: ["pizza", "pizzeria", "pont-remy"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pizzeria.com",
    siteName: "Pizzeria",
    title: "Pizzeria",
    description:
      "Une petite oasis italienne au cœur de la ville de Pont-Remy. Savourez nos délicieuses pizzas, dans une ambiance conviviale et authentique",
  },
};

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-pacifico",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={` ${OpenSans.variable} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}
