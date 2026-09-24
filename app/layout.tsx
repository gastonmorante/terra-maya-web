import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#1A3C34",
};

export const metadata: Metadata = {
  title: "Terra Maya | Facility & Property Services · Riviera Maya",
  description:
    "El cuidado que mantiene tu propiedad extraordinaria. Mantenimiento integral, operación técnica y conservación de propiedades de alto nivel en la Riviera Maya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full ${inter.variable} ${outfit.variable}`}>
      <body className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen w-full overflow-x-hidden antialiased selection:bg-brand-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
