import { AiFillMediumSquare } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import AnimatedText from '../../AnimatedText'
import { motion } from "framer-motion";
import blob3 from '../../../assets/images/blobreds.gif'


const Hero = () => {

  const getRandomPosition = (range = 30) => {
    return {
      x: Math.random() * range - range / 2, // Random X between -range/2 and range/2
      y: Math.random() * range - range / 2, // Random Y between -range/2 and range/2
    };
  };

  const icons = [
    { component: <BsTwitter color="#2523F0" size={24} />, initial: getRandomPosition() },
    { component: <AiFillMediumSquare color="#2523F0" size={24} />, initial: getRandomPosition() },
    { component: <FaLinkedinIn color="#2523F0" size={24} />, initial: getRandomPosition() },
    { component: <FaGithub color="#2523F0" size={24} />, initial: getRandomPosition() },
  ];

  return (
    <section className='w-full h-[70vh] sm:h-[90vh] relative px-[3%] sm:px-[10%] overflow-hidden max-w-[1400px] flex justify-center items-center md:mb-[5rem] lg:mb-0 py-24'>

      {/* <AnimatedText /> */}
      <div className='w-full h-full rounded-2xl overflow-hidden relative flex justify-center items-center flex-col gap-4'>

        <h1 className='md:text-[3rem] lg:text-[4rem] sm:text-[2.5rem] text-[1.5rem] text-center w-[70%] sm:w-[60%] font-bold font-nunito select-none'>
          <span className='text-accent'>Your Vision </span>
          My Code Bringing Ideas to life
        </h1>
        <motion.div
          initial={{ y: '40%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center gap-4'>
          <motion.button
            whileHover={{
              x: [0, -10, 10, -10, 10, 0], // Keyframes for shaking
              transition: {
                duration: 0.5,             // Controls how long the shake lasts
                ease: "easeInOut",         // Smoothens the shake animation
              }
            }}

            className='bg-accent text-white text-[1.5rempx] font-bold px-10 py-4 rounded-xl'>Explore Work</motion.button>
          {/* <button className='bg-primary text-white text-[24px] font-bold px-10 py-4 rounded-xl'>Hire me</button> */}
        </motion.div>
        <div className="flex gap-4 mt-4">
          {icons.map((icon, index) => (
            <motion.a
              key={index}
              href=""
              initial={icon.initial}      // Random initial position for each icon
              animate={{ x: 0, y: 0 }}    // Brings icon back to center
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{
                x: Math.random() * 10 - 5,   // Random X movement on hover
                y: Math.random() * 10 - 5,   // Random Y movement on hover
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {icon.component}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero