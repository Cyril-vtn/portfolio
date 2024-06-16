import type { Metadata } from "next";
import "./globals.css";


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
      <body className="scrollbar-hide">{children}</body>
    </html>
  );
}
