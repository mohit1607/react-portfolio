import { AiFillMediumSquare } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import person from '../../../assets/images/archperson.jpg'

const About = () => {
  return (
    <div className='w-full py-[5rem] px-[3%] md:px-[10%] flex flex-col items-center max-w-[1400px]'>
      <div className='overflow-hidden rounded-[20px] w-full h-[25rem] md:h-[35rem] mb-[50px]'>
        <img className='w-full h-full object-cover' src={person} alt="person" />
      </div>
      <h2 className='sm:text-[3rem] text-[1.5rem] font-bold sm:font-semibold text-center font-nunito mb-[15px]'>MOHIT ASHLIYA</h2>
      <p className='text-[0.8rem] leading-relaxed sm:text-[1rem] text-center w-[70%]'>
        Lorem ipsum dolor sit amet consectetur. Etiam aliquam vel dolor accumsan nisi bibendum turpis habitant vulputate. Eleifend habitant et convallis eget nisi amet enim. Lorem purus mattis egestas pretium magna. Vivamus felis luctus nam adipiscing nascetur volutpat sed etiam mollis.
      </p>
      <div className='flex gap-4 mt-4 font-nunito'>
        <a href="">
          <BsTwitter color="black" size={32} />
        </a>
        <a href="">
          <AiFillMediumSquare color="black" size={32} />
        </a>
        <a href="">
          <FaLinkedinIn color="black" size={32} />
        </a>
        <a href="">
          <FaGithub color="black" size={32} />
        </a>
      </div>
    </div>
  )
}

export default About