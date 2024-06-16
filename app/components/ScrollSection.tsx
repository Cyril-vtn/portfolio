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

  const Card = ({ title, description }) => {
    const videoRef = useRef(null); // Ref pour l'élément vidéo
    const videoContainerRef = useRef(null); // Ref pour le container de la vidéo

    useEffect(() => {
      // Quand je met ma souris sur le container, je veux que la vidéo joue
      videoContainerRef.current.addEventListener("mouseenter", () => {
        videoRef.current.play();
      });
      videoContainerRef.current.addEventListener("mouseleave", () => {
        videoRef.current.pause();
      });
    }, []);
    return (
      <div className="w-screen flex justify-center items-center mt-[100px]">
        <div
          ref={contentRef}
          className="flex flex-col items-center w-auto h-3/4 bg-lowContrast rounded-2xl relative aspect-video shadow-soft"
        >
          <div className="relative flex justify-center items-center h-full w-full">
            <div ref={videoContainerRef} className="w-full h-full flex flex-col justify-center items-center p-2 rounded-2xl">
              <video
                ref={videoRef}
                loop
                muted
                poster="/sawatdee_thai_poster.png"
                className="w-full h-full object-cover relative rounded-xl"
              >
                <source src="/video/sawatdee_thai_demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          className="flex flex-row relative h-screen overflow-auto"
          style={{ width: "500vw" }}
          ref={sectionref}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Card
              key={index}
              title="Card Title"
              description="Card Description"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
