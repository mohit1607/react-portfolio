import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { githubURL, linkedinURL, xURL } from "../../../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import resume from "../../../assets/resume.pdf";
import nextjsIcon from "../../../assets/images/skills/nextjs.png";
import expoIcon from "../../../assets/images/skills/expo.png";
import reactIcon from "../../../assets/images/skills/reactlogo.png";
import tailwindIcon from "../../../assets/images/skills/tailwind.png";
import tsIcon from "../../../assets/images/skills/ts.png";
import jsIcon from "../../../assets/images/skills/js.png";
import pythonIcon from "../../../assets/images/skills/python.png";
import figmaIcon from "../../../assets/images/skills/figma.png";
import reactNativeIcon from "../../../assets/images/skills/reactnative.png";

const Hero = ({ getStarted = () => { } }) => {
  const [readyAnimate, setReadyAnimate] = useState(false);
  const heroText = useRef(null);
  const skillImagesRef = useRef(null);

  const skillLogos = [
    { src: nextjsIcon, name: "Next.js" },
    { src: expoIcon, name: "Expo" },
    { src: reactIcon, name: "React" },
    { src: tailwindIcon, name: "Tailwind" },
    { src: tsIcon, name: "TypeScript" },
    { src: jsIcon, name: "JavaScript" },
    { src: pythonIcon, name: "Python" },
    { src: figmaIcon, name: "Figma" },
    { src: reactNativeIcon, name: "React Native" },
  ];

  const getRandomPosition = (range = 30) => ({
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 2,
  });

  useEffect(() => {
    let text = heroText.current.textContent;
    text = text.split("");
    heroText.current.innerHTML = text
      .map((letter) => {
        if (letter === " ")
          return `<span class="heroText inline-block">&nbsp;</span>`;
        return `<span class="heroText inline-block">${letter}</span>`;
      })
      .join("");
    setReadyAnimate(true);
  }, []);

  useGSAP(
    () => {
      gsap.from(".heroText", {
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.9,
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.9,
        opacity: 0,
        rotation: () => Math.random() * 360,
        scale: () => Math.random() * 2 + 0.5,
        duration: 1.5,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
          from: "random"
        }
      });

      // Skill images shattering animation - emerges from center and scatters outward
      gsap.fromTo(".skillImage",
        {
          x: 0,
          y: 0,
          opacity: 0,
          rotation: 0,
          scale: 0.3,
        },
        {
          x: (index) => {
            const angle = (index / 9) * Math.PI * 2 + Math.random() * 0.4;
            const maxDistance = Math.min(window.innerWidth * 0.4, 600);
            const distance = maxDistance * 0.8 + Math.random() * maxDistance * 0.3;
            return Math.cos(angle) * distance;
          },
          y: (index) => {
            const angle = (index / 9) * Math.PI * 2 + Math.random() * 0.4;
            const maxDistance = Math.min(window.innerHeight * 0.35, 400);
            const distance = maxDistance * 0.8 + Math.random() * maxDistance * 0.2;
            return Math.sin(angle) * distance;
          },
          opacity: 0.5,
          rotation: () => Math.random() * 100,
          scale: 1,
          delay: 0.2,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.08
        }
      );
    },
    { dependencies: [readyAnimate], scope: "#main" }
  );

  const icons = [
    {
      component: <BsTwitter color="#2523F0" size={24} />,
      initial: getRandomPosition(),
      href: xURL,
    },
    {
      component: <FaLinkedinIn color="#2523F0" size={24} />,
      initial: getRandomPosition(),
      href: linkedinURL,
    },
    {
      component: <FaGithub color="#2523F0" size={24} />,
      initial: getRandomPosition(),
      href: githubURL,
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-darkprimary h-screen flex justify-center background_pattern_dark items-center overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-fade-bottom dark:dark-bg-fade-bottom" />
      <div className="absolute inset-0 pointer-events-none bg-fade-top dark:dark-bg-fade-top" />
      <div className="absolute inset-0 pointer-events-none bg-fade-left dark:dark-bg-fade-left" />
      <div className="absolute inset-0 pointer-events-none bg-fade-right dark:dark-bg-fade-right" />

      <div className="relative z-10 max-w-[1200px] w-full rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4">
        {/* Skill Images for Shattering Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {skillLogos.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.name}
              className="skillImage absolute w-16 h-16 md:w-20 md:h-20 object-contain"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        <h1 className="select-none z-10 font-Fugaz font-bold text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-balance leading-tight whitespace-nowrap max-w-[95vw] md:max-w-[80vw] ">
          <span ref={heroText} className="text-accent">I Build fast! not sloppy</span>
        </h1>
        <p className="font-Fugaz z-10 dark:text-white font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-balance leading-snug max-w-[90vw] md:max-w-[70vw]">
          Customized battle-tested code shipped on time
        </p>

        <motion.div
          initial={{ y: "40%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 md:gap-8 z-10"
        >
          <motion.button
            whileHover={{
              y: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            animate={{ x: 0 }}
            onClick={getStarted}
            className="bg-accent text-white font-bold font-poppins text-[0.8rem] md:text-[1rem] px-4 md:px-10 py-2 md:py-4 rounded-xl border-2 border-accent"
          >
            Contact
          </motion.button>

          <motion.a
            href={resume}
            whileHover={{
              y: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            animate={{ y: 0 }}
            className="bg-white dark:bg-darkprimary z-10 text-accent dark:text-white font-bold font-poppins text-[0.8rem] md:text-[1rem] px-4 md:px-10 py-2 md:py-4 rounded-xl border-2 border-accent dark:border-white flex gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Resume
          </motion.a>
        </motion.div>

        <div className="flex gap-4 mt-4">
          {icons.map((icon, index) => (
            <motion.a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={icon.initial}
              animate={{ x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{
                x: Math.random() * 10 - 5,
                y: Math.random() * 10 - 5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="transition-transform duration-300"
            >
              {icon.component}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;