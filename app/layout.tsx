import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import SmoothScrolling from "./components/SmoothScrolling";
import { LoadingScreen } from "./components/LoadingScreen";

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
        <div className="bg-brandBlue bg-noise-bg fixed top-0 left-0 w-full h-full"></div>
        <LoadingScreen>
          <SmoothScrolling>
            <Header />
            {children}
            <Analytics />
          </SmoothScrolling>
        </LoadingScreen>
      </body>
    </html>
  );
}
