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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play(); // Joue la vidéo quand elle est visible
          } else {
            videoRef.current.pause(); // Met la vidéo en pause quand elle n'est plus visible
          }
        });
      },
      { threshold: 0.5 } // Se déclenche quand 50% de l'élément est visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
    return (
      <div className="w-screen flex justify-center items-center mt-[100px]">
        <div
          ref={contentRef}
          className="flex flex-col items-center w-auto h-3/4 bg-lowContrast rounded-2xl relative aspect-video shadow-soft"
        >
          <div className="flex justify-center items-center h-full w-full">
            <div className="w-full h-full flex flex-col justify-center items-center p-2 rounded-2xl">
              <video
                ref={videoRef}
                autoPlay
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
