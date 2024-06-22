import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CardComponent from "./Card";

export const ScrollSection = () => {
  const sectionref = useRef(null);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const progressBarRef = useRef(null);

  const updateProgressBar = () => {
    // Calculez la largeur du conteneur et la position de défilement actuelle
    const scrollWidth =
      sectionref.current.scrollWidth - document.documentElement.clientWidth;
    const scrollPosition = window.scrollY;
    // Calculez la progression en pourcentage
    const progress = (scrollPosition / scrollWidth) * 100;
    // Mettez à jour la largeur de la barre de progression
    progressBarRef.current.style.width = `${progress}%`;
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionref.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "7200 top",
          scrub: 1.5,
          pin: true,
          onUpdate: (self) => {
            updateProgressBar();
          },
        },
      }
    );

    updateProgressBar();
    return () => {
      pin.kill();
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
          {Array.from({ length: 5 }, (_, index) => (
            <CardComponent
              key={index}
              title="Card Title"
              description="Card Description"
              ref={contentRef}
            />
          ))}
        </div>
      </div>
      <div
        ref={progressBarRef}
        id="progress-bar"
        className="fixed bottom-0 left-0 h-1 bg-brandOffwhite"
      />
    </section>
  );
};
