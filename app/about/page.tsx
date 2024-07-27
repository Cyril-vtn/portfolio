"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { InfiniteMovingIcons } from "../components/infinite-moving-icons";
import { DiJavascript, DiMongodb, DiPostgresql } from "react-icons/di";
import { FiFigma, FiMail } from "react-icons/fi";
import { PiFramerLogo } from "react-icons/pi";
import { FollowerPointerCard } from "../components/following-pointer";
import { Button } from "../components/Button";
import { BsLinkedin } from "react-icons/bs";

export default function About() {
  const [imageWidth, setImageWidth] = useState(200);
  const [imageHeight, setImageHeight] = useState(200);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 768) {
      setImageWidth(300);
      setImageHeight(300);
    } else if (width > 500) {
      setImageWidth(200);
      setImageHeight(200);
    } else {
      setImageWidth(100);
      setImageHeight(100);
    }
  }, [width]);

  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <section className="h-full w-full mt-[150px] mb-6 flex flex-col gap-16 items-center font-marlin text-brandOffwhite relative leading-none tracking-wide">
        <div className="relative z-10 w-full h-[100px] sm:h-[200px] md:h-[300px] flex justify-center items-center">
          <InfiniteMovingIcons
            speed="normal"
            icons={[
              <FaReact key="react" />,
              <FaCss3Alt key="css" />,
              <RiTailwindCssLine key="tailwind" />,
              <SiTypescript key="typescript" />,
              <SiNestjs key="nestjs" />,
              <RiNextjsFill key="nextjs" />,
              <DiJavascript key="javascript" />,
              <FiFigma key="figma" />,
              <PiFramerLogo key="framer" />,
              <DiMongodb key="mongodb" />,
              <DiPostgresql key="postgresql" />,
            ]}
          />
          <div className="absolute z-20 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]">
            <FollowerPointerCard title="Eh oui, c'est moi ! 😎">
              <Image
                src="/portrait.jpg"
                alt="Portrait of the author"
                className="rounded-full object-cover absolute z-20 border-4 md:border-8 border-brandOffwhite"
                width={imageWidth}
                height={imageHeight}
                role="img"
              />
            </FollowerPointerCard>
          </div>
        </div>
        <p className="text-center text-xl text-brandOffwhite xl:text-3xl z-10 max-w-7xl px-9 tracking-wider">
          Développeur Full Stack (orienté Front-End) passionné par les nouvelles
          technologies et les défis techniques. J&apos;aime apprendre et
          partager mes connaissances. Toujours des idées plein la tête, je suis
          un créatif curieux et enthousiaste. Toujours à la recherche de
          nouveaux projets intéressants et de nouvelles opportunités.
          N&apos;hésitez pas à me contacter si vous avez un projet ou une idée à
          partager. Je serais ravi de vous aider à les concrétiser !
        </p>
        <div className="flex gap-4 z-10">
          <a
            href="mailto:votion.cyril@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Email" icon={<FiMail size={18} />} />
          </a>
          <a
            href="https://www.linkedin.com/in/cyrilvotion/"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Linkedin" icon={<BsLinkedin size={18} />} />
          </a>
        </div>
      </section>
    </main>
  );
}
