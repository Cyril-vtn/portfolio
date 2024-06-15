"use client";

import "./globals.css";

import { Header } from "./components/Header";
import { ScrollSection } from "./components/ScrollSection";

export default function Home() {


  return (
    <main className="overflow-hidden">
      <div className="bg-brandBlue bg-noise-bg fixed top-0 left-0 w-full h-full"></div>
      <Header />
      <ScrollSection />
      {/* <div className="h-full flex justify-center items-center" style={{ minHeight: "calc(100vh - 192px)" }}>
        <h1 style={{ fontSize: "clamp(2rem, 11vw, 20rem)" }} className="font-marlin-bold text-brandOffwhite text-center">
          Cyril Votion
        </h1>
      </div> */}
    </main>
  );
}
