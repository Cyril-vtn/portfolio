"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { InfiniteMovingIcons } from "../components/infinite-moving-icons";
import { DiJavascript } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { PiFramerLogo } from "react-icons/pi";
import {
  FollowerPointerCard,
  FollowPointer,
} from "../components/following-pointer";

export default function About() {
  // ajuster la width et la height de l'image en fonction de la taille de l'écran
  const [imageWidth, setImageWidth] = useState(200);
  const [imageHeight, setImageHeight] = useState(200);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
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
    <main className="overflow-hidden w-full h-full">
      <section className="h-screen w-full flex flex-col gap-16 justify-center items-center font-marlin pb-[10%]  text-brandOffwhite pt-[100px] relative leading-none tracking-wide">
        <div className="relative z-10 w-full h-[100px] sm:h-[200px] md:h-[300px] flex justify-center items-center">
          <InfiniteMovingIcons
            speed="fast"
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
        </div>{" "}
        <p className="text-center text-xl text-brandOffwhite xl:text-3xl z-10 max-w-7xl px-9 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, nulla nec vehicula ultricies, urna ex dictum lacus, in
          vestibulum felis nunc et justo. Nam sed tincidunt neque. Integer vitae
          justo nec sapien vehicula dictum. Nullam nec odio et nisl sollicitudin
          ultricies. Nulla facilisi. Suspendisse potenti. Donec et nunc nec nunc
          tincidunt fermentum. Nullam nec odio et nisl sollicitudin ultricies.
          Nulla facilisi. Suspendisse potenti. Donec et nunc nec nunc tincidunt
          fermentum.
        </p>
      </section>
    </main>
  );
}
