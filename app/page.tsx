"use client";

import "./globals.css";
import { ScrollSection } from "./components/ScrollSection";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <ScrollSection />
    </main>
  );
}
