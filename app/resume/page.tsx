"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Resume() {
  return (
    <main className="overflow-hidden w-full h-full relative">
      <section className="h-screen w-full flex flex-col gap-8 py-12 justify-center items-center">
        {/* <iframe src="/resume.pdf" className="w-full h-full" /> */}
        <Button text="Télécharger le CV" icon={<FiMail size={18} />} />
      </section>
    </main>
  );
}
