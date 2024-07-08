// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "../utils/cn";
import useWindowSize from "../hooks/useWindowSize";

export const FollowerPointerCard = ({
  children,
  className,
  title,
  style = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  style?: "white" | "blue";
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, [width]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} style={style} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  style,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
  style?: "white" | "blue";
}) => {
  const colors = [style === "blue" ? "brandBlue" : "brandOffwhite"];
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-brandBlue transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      {title && (
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          className={`px-3 py-2 ${
            style === "blue" ? "text-white" : "text-brandBlue"
          }   whitespace-nowrap min-w-max text-md rounded-full bg-${
            colors[Math.floor(Math.random() * colors.length)]
          }`}
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  );
};
