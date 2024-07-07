import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { InfiniteMovingIcons } from "../components/infinite-moving-icons";
import { DiJavascript } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { PiFramerLogo } from "react-icons/pi";

export default function About() {
  return (
    <main className="overflow-hidden w-full h-full">
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
    </main>
  );
}
