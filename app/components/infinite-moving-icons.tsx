"use client";

import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";
import { FollowerPointerCard } from "./following-pointer";

export const InfiniteMovingIcons = ({
  icons,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  icons: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    };

    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20  bg-brandOffwhite", className)}
    >
      <div
        className="absolute -top-[40px] md:-top-[55px] z-50 left-0 w-full h-full bg-noise-bg rotate-180"
        style={{
          backgroundImage: `url('/header-pattern.svg')`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          content: '""',
        }}
      ></div>

      <div
        className="absolute -bottom-[40px] md:-bottom-[55px] z-40 left-0 w-full h-full bg-noise-bg"
        style={{
          backgroundImage: `url('/header-pattern.svg')`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          content: '""',
        }}
      ></div>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-1 md:py-2 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {icons.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 z-50">
            <li
              className="relative flex-shrink-0 px-8 py-1 text-brandBlue text-2xl md:text-4xl font-marlin-bold"
              key={idx}
            >
              {item}
            </li>
            <li
              className="
              text-brandBlue text-1xl md:text-2xl font-marlin-bold"
            >
              {" "}
              -{" "}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
