import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Cyril votion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scrollbar-hide">
      <body className="scrollbar-hide">
      <Header />
      <Analytics />
        {children}
        </body>
    </html>
  );
}
