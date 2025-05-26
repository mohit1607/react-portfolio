import React from 'react';
import { motion } from 'motion/react';
import { xURL, githubURL, linkedinURL } from '../../../constants';

const Footer = () => {
  const textVariants = {
    hidden: { x: '-50vw', opacity: 0 },
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
    <footer className='px-[3%] sm:px-[10%] background_pattern w-full mt-[5rem] mb-[5rem] max-w-[1400px]'>
      <motion.h3
        className='font-poppins text-center text-[#888888] font-bold text-[5rem] sm:text-[8rem] mb-[3rem]'
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        @Mohit Ashliya
      </motion.h3>

      <div className='w-full flex flex-col md:flex-row flex-wrap justify-center lg:justify-between mb-[15px]'>
        <div className='flex gap-[25px] flex-wrap'>
          <a href={githubURL} className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>Hire me</a>
          <a href="" className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>Insights</a>
          <a href="public/resume.pdf" target='_blank' className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>Resume</a>
        </div>
        <div className='flex gap-[25px] flex-wrap'>
          <a href={xURL} className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>X (twitter)</a>
          <a href={linkedinURL} className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>Linked in</a>
        </div>
      </div>

      <div className='w-full flex flex-col sm:flex-row justify-center lg:justify-between mb-[15px] flex-wrap'>
        <div className='flex gap-[25px] flex-wrap'>
          <a href="mailto:mohit.ashliya@gmail.com" className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>
            mail me at <span className='text-accent'>mohit.ashliya@gmail.com</span>
          </a>
          <a
            href="https://wa.me/918003321811"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'
          >
            WhatsApp: <span className='text-accent'>+91 8003321811</span>
          </a>
        </div>
        <div className='flex gap-[25px]'>
          <a href="" className='text-[24px] font-poppins font-semibold cursor-pointer hover:underline'>
            Mohit Ashliya 2024 &#174; (All rights reserved)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
