import { AiFillMediumSquare } from "react-icons/ai"; 
import { BsTwitter } from "react-icons/bs"; 
import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <section className='w-full h-[70vh] sm:h-[80vh] relative px-[3%] sm:px-[10%] overflow-hidden max-w-[1400px] flex justify-center items-center md:mb-[5rem] lg:mb-0'>
        <div className='w-full h-auto md:h-[80vh] overflow-hidden relative flex justify-center items-center flex-col gap-4'>
            <h1 className='md:text-[4rem] sm:text-[2.5rem] text-[1.5rem] text-center w-[100%] sm:w-[60%] font-bold font-nunito select-none'>
                <span className='text-accent'>Your Vision </span>
                My Code Bringing Ideas to life
            </h1>
            <div className='flex justify-center gap-4'>
                <button className='bg-accent text-white text-[1.5rempx] font-bold px-10 py-4 rounded-xl'>Explore Work</button>
                {/* <button className='bg-primary text-white text-[24px] font-bold px-10 py-4 rounded-xl'>Hire me</button> */}
            </div>
            <div className='flex gap-4 mt-4'>
               <a href="">
               <BsTwitter color="#2523F0" size={24} />
               </a>
               <a href="">
               <AiFillMediumSquare color="#2523F0" size={24} />
               </a>
               <a href="">
               <FaLinkedinIn color="#2523F0" size={24} />
               </a>
               <a href="">
               <FaGithub color="#2523F0" size={24} />
               </a>
            </div>
        </div>
    </section>
  )
}

export default Hero