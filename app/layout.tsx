import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terra Maya | Facility & Property Services · Riviera Maya",
  description:
    "La ingeniería silenciosa detrás de las mejores residencias del Caribe. Preservación arquitectónica integral, gestión técnica de activos de lujo y hotelería en Tulum, Playa del Carmen y Puerto Morelos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full ${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen antialiased selection:bg-brand-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
