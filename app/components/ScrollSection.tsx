import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CardComponent from "./Card";
import { Card } from "../api.type";
import { Button } from "./Button";
import { FaGithub } from "react-icons/fa";

export const ScrollSection = () => {
  const sectionref = useRef(null);
  const triggerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [cardsData, setCardsData] = useState<Card[]>([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    fetch("/data/index.json")
      .then((response) => response.json())
      .then((data) => setCardsData(data.cards))
      .catch((error) =>
        console.error("Erreur lors du chargement des données:", error)
      );
  }, []);

  const updateProgressBar = useCallback(() => {
    if (!sectionref.current) return;
    const scrollWidth =
      sectionref.current.scrollWidth - document.documentElement.clientWidth;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollWidth) * 100;
    gsap.to(progressBarRef.current, {
      width: `${progress}%`,
      duration: 0.75,
      ease: "sine.out",
    });
  }, []);

  useEffect(() => {
    let scrollWidth = 0;
    if (sectionref.current) {
      scrollWidth =
        sectionref.current.scrollWidth - document.documentElement.clientWidth;
    }
    const pin = gsap.fromTo(
      sectionref.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${cardsData.length * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${scrollWidth} top`,
          scrub: 1,
          pin: true,
          onUpdate: updateProgressBar,
        },
      }
    );

    updateProgressBar();
    return () => {
      if (pin.scrollTrigger) {
        pin.scrollTrigger.kill();
      }
      pin.kill();
    };
  }, [updateProgressBar, cardsData]);

  useEffect(() => {
    // show message after 2 seconds il user hasn't scrolled
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    // hide message when user scrolls
    const handleScroll = () => {
      setShowMessage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          className="flex flex-row relative h-screen overflow-auto"
          style={{ width: "500vw" }}
          ref={sectionref}
        >
          {cardsData.map((card, index) => (
            <CardComponent key={index} card={card} />
          ))}
          <div>
            <div className="flex flex-col items-center justify-center h-screen w-screen gap-8">
              <h1 className=" text-3xl text-center font-marlin-bold text-brandOffwhite xl:text-8xl h-auto select-none">
                Voir d&apos;avantage <br /> de projets
              </h1>
              <a
                href="https://github.com/Cyril-vtn"
                target="_blank"
              >
                <Button text="Github" icon={<FaGithub size={18} />} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={progressBarRef}
        id="progress-bar"
        className="fixed bottom-0 left-0 h-1 bg-brandOffwhite"
      />
      <div
        className={`fixed bottom-16 left-0 w-full h-12 flex justify-center items-center text-brandOffwhite font-marlin-medium text-lg animate-pulse-custom ${
          showMessage ? "opacity-70" : "opacity-0"
        } select-none transition-opacity duration-300 ease-in-out`}
      >
        Commencer à naviguer
      </div>
    </section>
  );
};
