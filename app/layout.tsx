import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import SmoothScrolling from "./components/SmoothScrolling";

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
        <SmoothScrolling>
          <Header />
          {children}
          <Analytics />
        </SmoothScrolling>
      </body>
    </html>
  );
}
