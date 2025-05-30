import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { githubURL, linkedinURL, xURL } from "../../../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Hero = ({
  getStarted = () => { },
  exploreWork = () => { },
}) => {

  const [readyAnimate, setReadyAnimate] = useState(false);


  const getRandomPosition = (range = 30) => ({
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 2,
  });

  const heroText = useRef(null)

  useEffect(() => {
    let text = heroText.current.textContent;
    // console.log(text)
    text = text.split("")
    let n = text.length
    heroText.current.innerHTML = text.map((letter, index) => {
      if (letter === " ") return `<span class="heroText inline-block">&nbsp;</span>`;

      if (index < n / 2) return `<span class="heroText inline-block">${letter}</span>`;
      else return `<span class="heroText2 inline-block">${letter}</span>`;
    }).join("")
    setReadyAnimate(true)

  }, [])

  useGSAP(() => {
    gsap.from(".heroText", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1
    })
    gsap.from(".heroText2", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: -0.1
    })
  }, { dependencies: [readyAnimate], scope: '#main' })

  const icons = [
    {
      component: <BsTwitter color="#2523F0" size={24} />,
      initial: getRandomPosition(),
      href: xURL
    },
    // {
    //   component: <AiFillMediumSquare color="#2523F0" size={24} />,
    //   initial: getRandomPosition(),
    //   href: "https://medium.com"
    // },
    {
      component: <FaLinkedinIn color="#2523F0" size={24} />,
      initial: getRandomPosition(),
      href: linkedinURL
    },
    {
      component: <FaGithub color="#2523F0" size={24} />,
      initial: getRandomPosition(),
      href: githubURL
    }
  ];

  return (
    <section
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.2 }}
      // transition={{ duration: 0.5 }}
      className='w-full px-4 pt-24 flex justify-center items-center'
    >
      <div className='max-w-[1200px] w-full   bg-white background_pattern rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-6'>
        <h1 className='select-none font-Fugaz font-bold text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] w-[80%]'>
          <span ref={heroText} className='text-accent'>Your Vision My Code </span>
          Bringing Ideas to Life
        </h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: '40%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center gap-4 md:gap-8'
        >
          <motion.button
            whileHover={{
              x: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            animate={{ x: 0 }}
            onClick={getStarted}
            className='bg-accent text-white font-bold font-poppins text-[0.8rem] md:text-[1rem] px-4 md:px-10 py-2 md:py-4 rounded-xl border-2 border-accent'
          >
            Contact
          </motion.button>

          <motion.button
            whileHover={{
              y: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            onClick={exploreWork}
            animate={{ y: 0 }}
            className='bg-white text-accent font-bold font-poppins text-[0.8rem] md:text-[1rem] px-4 md:px-10 py-2 md:py-4 rounded-xl border-2 border-accent'
          >
            Explore work
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-4">
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
