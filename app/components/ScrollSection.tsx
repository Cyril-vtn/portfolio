import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TbCircleArrowUpLeft } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

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
          end: "4000 top",
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
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const sidebarRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
      const handleMouseEnter = () => {
        videoRef.current.play();
        setIsHover(true);
      };
      const handleMouseLeave = () => {
        videoRef.current.pause();
        setIsHover(false);
      };

      const videoContainer = videoContainerRef.current;
      videoContainer.addEventListener("mouseenter", handleMouseEnter);
      videoContainer.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        videoContainer.removeEventListener("mouseenter", handleMouseEnter);
        videoContainer.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

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
          ref={contentRef}
          className="flex select-none flex-col items-center w-auto 2xl:h-[70%] xl:h-[60%] md:h-[40%] max-[768px]:h-[20%] min-[0px]:h-[15%] bg-lowContrast rounded-2xl relative aspect-video shadow-soft"
          tabIndex={0}
        >
          <div className="flex justify-center items-center h-full w-full">
            <div
              ref={videoContainerRef}
              className=" overflow-hidden relative w-full h-full flex flex-col justify-center items-center p-2 rounded-2xl"
            >
              <div
                className={`absolute font-marlin-medium text-brandBlue tracking-normal text-sm m-4 top-0 left-0 py-2 px-3 select-none z-50 bg-brandOffwhite rounded-lg transition-all duration-300 ease-in-out shadow-hard`}
              >
                Sawatdee Learn Thaï
              </div>
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
              <button
                className={`absolute flex justify-center text-brandBlue items-center gap-1 font-marlin-medium text-sm m-4 hover:scale-110 left-0 p-2 z-50 bg-brandOffwhite rounded-lg transition-all duration-300 ease-in-out shadow-hard hover:bg-brandBlue hover:text-brandOffwhite ${
                  isHover ? "bottom-0" : "-bottom-20"
                }`}
                onClick={() => setSidebarOpen(true)}
                tabIndex={isHover ? 0 : -1}
              >
                <BiWorld size={18} />
              </button>
              <button
                className={`absolute flex justify-center text-brandBlue items-center gap-1 font-marlin-medium text-sm m-4 hover:scale-110 left-11 p-2 z-50 bg-brandOffwhite rounded-lg transition-all duration-300 ease-in-out shadow-hard hover:bg-brandBlue hover:text-brandOffwhite ${
                  isHover ? "bottom-0" : "-bottom-20"
                }`}
                onClick={() => setSidebarOpen(true)}
                tabIndex={isHover ? 0 : -1}
              >
                <BsGithub size={18} />
              </button>
              {/* SIDEBAR */}
              <div
                id="sidebar"
                ref={sidebarRef}
                className={`absolute z-50 m-4 top-0 flex flex-col max-h-[500px] overflow-auto h-[-webkit-fill-available] w-1/4 gap-4 bg-brandOffwhite bg-noise-bg rounded-lg shadow-hard py-3 px-5 scrollbar-default transition-all duration-300 ease-in-out ${
                  sidebarOpen ? "right-0" : "-right-[60%]"
                }`}
              >
                <div className="flex flex-col rounded-t-lg w-full h-full gap-4">
                  <div className="flex flex-col  items-center gap-2">
                    <div className="flex gap-2 justify-between w-full">
                      <h3 className="font-marlin-medium text-brandBlue tracking-normal text-[clamp(0.5rem,1vw,1rem)]">
                        Fonctionnalités
                      </h3>
                      <FaArrowRight
                        size={25}
                        className="cursor-pointer transition-all duration-200 ease-in-out p-1 hover:bg-brandBlue text-brandBlue hover:text-brandOffwhite rounded-full"
                        onClick={() => setSidebarOpen(false)}
                      />
                    </div>
                    <ul className="text-sm space-y-1 text-lightGray">
                      <li>- Création d’utilisateur</li>
                      <li>
                        - Changement de Photo de profil / nom / mot de passe
                      </li>
                      <li>
                        - Progressions de l’utilisateur via des succès ainsi
                        qu’une barre d’xp
                      </li>
                      <li>
                        - Sauvegarde des données via Firebase (Firestore,
                        Authentication, Storage)
                      </li>
                      <li>
                        - Partage de profil via React Router et ses routes
                        dynamiques
                      </li>
                      <li>- Responsive design (Desktop First & Tablette)</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-marlin-medium text-brandBlue text-md tracking-normal">
                      Languages utilisés
                    </h3>
                    <ul className="text-sm space-y-1 text-lightGray">
                      <li>- React</li>
                      <li>- React Router</li>
                      <li>- Firebase</li>
                      <li>- MUI</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="overlay"
                className={`absolute w-full h-full z-40 p-2 transition-all duration-300 ease-in-out ${
                  sidebarOpen ? "block" : "hidden"
                }`}
              >
                <div className="w-full h-full bg-black rounded-xl opacity-30"></div>
              </div>
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
