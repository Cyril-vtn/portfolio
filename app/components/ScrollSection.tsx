import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const ScrollSection = () => {
  const sectionref = useRef(null);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

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
          end: "6000 top",
          scrub: 1.5,
          pin: true,
        },
      }
    );

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
            <div
              className="w-screen flex justify-center items-center mt-[100px]"
              key={index}
            >
              <div
                ref={contentRef}
                className="flex flex-col items-center w-auto h-3/4 bg-lowContrast rounded-3xl relative aspect-video shadow-soft"
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                  {/* Votre contenu ici */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
