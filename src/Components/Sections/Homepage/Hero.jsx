import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { githubURL, linkedinURL, xURL } from "../../../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import resume from "../../../assets/resume.pdf";

const Hero = ({ getStarted = () => { } }) => {
  const [readyAnimate, setReadyAnimate] = useState(false);
  const heroText = useRef(null);

  const getRandomPosition = (range = 30) => ({
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 2,
  });

  useEffect(() => {
    let text = heroText.current.textContent;
    text = text.split("");
    let n = text.length;
    heroText.current.innerHTML = text
      .map((letter, index) => {
        if (letter === " ")
          return `<span class="heroText inline-block">&nbsp;</span>`;
        if (index < n / 2)
          return `<span class="heroText inline-block">${letter}</span>`;
        else return `<span class="heroText2 inline-block">${letter}</span>`;
      })
      .join("");
    setReadyAnimate(true);
  }, []);

  useGSAP(
    () => {
      gsap.from(".heroText", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
      });
      gsap.from(".heroText2", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: -0.1,
      });
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
    <section className="relative w-full bg-white dark:bg-darkprimary h-screen flex justify-center background_pattern_dark items-center">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-fade-bottom dark:dark-bg-fade-bottom" />

      <div className="relative z-10 max-w-[1200px] w-full rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4">
        <h1 className="select-none font-Fugaz font-bold text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-balance leading-tight whitespace-nowrap max-w-[95vw] md:max-w-[80vw] overflow-hidden">
          <span ref={heroText} className="text-accent">Build fast! not sloppy</span>
        </h1>
        <p className="font-Fugaz dark:text-white font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-balance leading-snug max-w-[90vw] md:max-w-[70vw]">
          MVPs delivered in 20 days with clean & maintainable code
        </p>

        <motion.div
          initial={{ y: "40%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 md:gap-8"
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
            className="bg-white dark:bg-darkprimary text-accent dark:text-white font-bold font-poppins text-[0.8rem] md:text-[1rem] px-4 md:px-10 py-2 md:py-4 rounded-xl border-2 border-accent dark:border-white flex gap-1"
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