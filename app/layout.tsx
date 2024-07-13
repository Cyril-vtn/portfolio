import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import { LoadingScreen } from "./components/LoadingScreen";

export const metadata: Metadata = {
  title: "Cyril votion",
  description: "Cyril votion's personal website",
  authors: [{ name: "Cyril Votion", url: "" }],
  keywords: [
    "Cyril Votion",
    "portfolio",
    "web developer",
    "software engineer",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "nestjs",
    "tailwindcss",
    "mongodb",
    "postgresql",
    "figma",
    "framer",
  ],
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
          <Header />
          {children}
          <Analytics />
        </LoadingScreen>
      </body>
    </html>
  );
}
