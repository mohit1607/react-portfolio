import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variant for the text animation
  const textVariants = {
    hidden: { x: '-50vw', opacity: 0 }, // Changed from -100vw to -50vw for a less extreme starting point
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        duration: 0.8,
        delay: 0.2,
        bounce: 0.5,
      },
    },
  };

  return (
    <footer className='px-[3%] sm:px-[10%] w-full mt-[10rem] mb-[5rem] max-w-[1400px]'>
      {/* Animated @Mohit Ashliya Text with Viewport Trigger */}
      <motion.h3
        className='font-poppins text-center text-[#888888] font-bold text-[5rem] sm:text-[8rem] mb-[3rem]'
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when it enters the viewport
      >
        @Mohit Ashliya
      </motion.h3>

      <div className='w-full flex flex-col md:flex-row flex-wrap justify-center lg:justify-between mb-[15px]'>
        <div className='flex gap-[25px] flex-wrap'>
          <p className='text-[24px] font-poppins font-semibold'>Work</p>
          <p className='text-[24px] font-poppins font-semibold'>About</p>
          <p className='text-[24px] font-poppins font-semibold'>Hire me</p>
          <p className='text-[24px] font-poppins font-semibold'>Insights</p>
          <p className='text-[24px] font-poppins font-semibold'>Resume</p>
        </div>
        <div className='flex gap-[25px] flex-wrap'>
          <p className='text-[24px] font-poppins font-semibold'>Peerlist</p>
          <p className='text-[24px] font-poppins font-semibold'>X (twitter)</p>
          <p className='text-[24px] font-poppins font-semibold'>Linked in</p>
        </div>
      </div>

      <div className='w-full flex flex-col sm:flex-row justify-center lg:justify-between mb-[15px] flex-wrap'>
        <div className='flex gap-[25px]'>
          <p className='text-[24px] font-poppins font-semibold'>Mohit Ashliya 2024 &#174; (All rights reserved)</p>
        </div>
        <div className='flex gap-[25px]'>
          <p className='text-[24px] font-poppins font-semibold'>
            mail me at <span className='text-accent'>mohit.ashliya@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
