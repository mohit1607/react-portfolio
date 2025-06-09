import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import person from '../../../assets/images/archperson.png';
import chakra from '../../../assets/images/chakra.jpg';
import { xURL, githubURL, linkedinURL } from "../../../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {


  useGSAP(() => {
    gsap.to('.chakra', {
      duration: 20,
      ease: 'linear',
      repeat: -1,
      transformOrigin: 'center center',
      rotation: 360
    });
  }, { dependencies: [], scope: '#main' });



  return (
    <div
      className='w-full py-[10rem] px-[3%] md:px-[10%] flex flex-col items-center max-w-[1400px] overflow-hidden'>

      <div className='w-full flex flex-col lg:flex-row gap-12 lg:gap-12 items-center'>

        {/* Left side - Image */}
        <div className='w-full lg:w-1/2 flex-shrink-0 relative flex justify-center items-center'>
          <div className='overflow-hidden rounded-[20px] w-full h-[25rem] md:h-[35rem] lg:h-[40rem]'>
            <img className='w-full h-full object-cover' src={person} alt="person" />
          </div>
          {/* Chakra image behind the person */}
          <div className="absolute top-1/2 md:left-1/2 md:top-4 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] chakra -z-10 overflow-hidden">
            <img
              src={chakra}
              alt="mandala"
              className="w-full h-full object-cover opacity-60 dark:opacity-100 dark:brightness-150"
            />
          </div>
        </div>

        {/* Right side - Information */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h2 className='sm:text-[3rem] dark:text-white text-[1.5rem] font-bold sm:font-semibold mb-[15px] font-Fugaz'>
            MOHIT ASHLIYA
          </h2>
          <p className='text-[0.8rem] dark:text-white font-semibold leading-relaxed sm:text-[1rem] w-full lg:w-[90%] mb-6'>
            I build reliable, user-friendly apps using React, React Native, and FastAPI. I focus on creating smooth experiences that help businesses grow. Let’s turn your ideas into powerful, easy-to-use solutions.
          </p>
          <div className='flex gap-4 font-nunito'>
            <a href={xURL}><BsTwitter color={'black'} size={32} /></a>
            <a href={linkedinURL}><FaLinkedinIn color={'black'} size={32} /></a>
            <a href={githubURL}><FaGithub color={'black'} size={32} /></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
