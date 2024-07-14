import { forwardRef, useEffect, useRef, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TbCircleArrowUpLeft } from "react-icons/tb";
import useWindowSize from "../hooks/useWindowSize";
import { Sidebar } from "./Sidebar";
import { Overlay } from "./Overlay";
import { IconType } from "react-icons";
import { Card } from "../api.type";
import Image from "next/image";

interface CardComponentProps {
  card: Card;
}

const CardComponent = forwardRef<HTMLDivElement, CardComponentProps>(
  ({ card }, ref) => {
    const imageRef = useRef(null);
    const imageContainerRef = useRef(null);
    const sidebarRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
      const handleMouseEnter = () => {
        setIsHover(true);
      };
      const handleMouseLeave = () => {
        setIsHover(false);
      };

      const imageContainer = imageContainerRef.current;
      imageContainer.addEventListener("mouseenter", handleMouseEnter);
      imageContainer.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        imageContainer.removeEventListener("mouseenter", handleMouseEnter);
        imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
    `
    `;
    const buttonIcon = (icon: IconType, style: string) => {
      return (
        <button
          className={`absolute flex justify-center text-brandBlue items-center gap-1 font-marlin-medium text-sm m-4 hover:scale-110 p-2 z-50 bg-brandOffwhite rounded-lg transition-all duration-300 ease-in-out shadow-hard hover:bg-brandBlue hover:text-brandOffwhite ${
            isHover ? "bottom-0" : "-bottom-20"
          } ${style}`}
          tabIndex={isHover ? 0 : -1}
        >
          {icon({ size: 18 })}
        </button>
      );
    };
    // handle sidebar events by closing it when clicking outside ou scrolling
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
          setSidebarOpen(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [sidebarOpen]);

    return (
      <div className="w-screen flex justify-center items-center">
        <div
          ref={ref}
          className="flex select-none flex-col items-center w-auto 2xl:h-[70%] xl:h-[60%] md:h-[35%] max-[900px]:h-[20%] min-[0px]:h-[19%] bg-lowContrast rounded-2xl relative aspect-video shadow-soft"
          tabIndex={0}
        >
          <div className="flex justify-center items-center h-full w-full">
            <div
              ref={imageContainerRef}
              className="overflow-hidden relative w-full h-full flex flex-col justify-center items-center p-1 rounded-2xl"
            >
              {/* Titre */}
              <div className="hidden md:block absolute font-marlin-medium text-brandBlue tracking-normal text-sm m-4 top-0 left-0 py-2 px-3 select-none z-50 bg-brandOffwhite rounded-lg transition-all duration-300 ease-in-out shadow-hard">
                {card.title}
              </div>
              {/* Boutons */}
              {width > 900 && (
                <button
                  className={`absolute flex justify-center text-brandBlue items-center gap-1 font-marlin-medium text-sm m-4 hover:scale-105 right-0 p-2 z-50 bg-brandOffwhite rounded-lg transition-all duration-300 ease-in-out shadow-hard ${
                    isHover && !sidebarOpen ? "top-0" : "-top-20"
                  }`}
                  onClick={() => setSidebarOpen(true)}
                  tabIndex={isHover ? 0 : -1}
                >
                  <TbCircleArrowUpLeft size={18} /> Plus d&apos;infos
                </button>
              )}
              <a href={card.live_link} target="_blank" rel="noreferrer">
                {buttonIcon(BiWorld, "left-0")}
              </a>
              <a href={card.github_link} target="_blank" rel="noreferrer">
                {buttonIcon(BsGithub, "left-11")}
              </a>
              {/* Sidebar et Overlay */}
              <Sidebar
                sidebarRef={sidebarRef}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                features={card.features}
                languages={card.languages}
              />
              <Overlay sidebarOpen={sidebarOpen} />
              <Image
                ref={imageRef}
                src={card.poster_link}
                alt={card.title}
                fill
                className="object-cover relative rounded-[18px] p-1"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CardComponent.displayName = "CardComponent";

export default CardComponent;
