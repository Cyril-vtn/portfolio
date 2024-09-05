"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

export default function Resume() {
  return (
    <main className="overflow-hidden w-full h-full relative">
      <section className="h-full w-full flex flex-col gap-8 py-28 justify-center items-center px-11">
        <Image
          src="/CYRIL_VOTION_RESUME_FR.svg"
          className="rounded-lg"
          alt="Cyril Votion resume"
          width={595}
          height={842}
        />
        <Button
          text="Télécharger le CV"
          icon={<FiMail size={18} />}
          onClick={() => window.open("/CYRIL_VOTION_RESUME_FR.pdf")}
        />
      </section>
    </main>
  );
}
