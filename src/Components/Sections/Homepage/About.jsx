import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import person from '../../../assets/images/archperson.jpg'
import { xURL, githubURL, linkedinURL } from "../../../../constants";

const About = () => {


  return (
    <div
      className='w-full py-[5rem] px-[3%] md:px-[10%] flex flex-col items-center max-w-[1400px]'>

      <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-12'>About Me</h2>

      {/* Main content container - side by side layout */}
      <div className='w-full flex flex-col lg:flex-row gap-12 lg:gap-12 items-center'>

        {/* Left side - Image */}
        <div className='w-full lg:w-1/2 flex-shrink-0'>
          <div className='overflow-hidden rounded-[20px] w-full h-[25rem] md:h-[35rem] lg:h-[40rem]'>
            <img className='w-full h-full object-cover' src={person} alt="person" />
          </div>
        </div>

        {/* Right side - Information */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h2 className='sm:text-[3rem] text-[1.5rem] font-bold sm:font-semibold mb-[15px] font-Fugaz'>
            MOHIT ASHLIYA
          </h2>
          <p className='text-[0.8rem] leading-relaxed sm:text-[1rem] w-full lg:w-[90%] mb-6'>
            Lorem ipsum dolor sit amet consectetur. Etiam aliquam vel dolor accumsan nisi bibendum turpis habitant vulputate. Eleifend habitant et convallis eget nisi amet enim. Lorem purus mattis egestas pretium magna. Vivamus felis luctus nam adipiscing nascetur volutpat sed etiam mollis.
          </p>
          <div className='flex gap-4 font-nunito'>
            <a href={xURL}>
              <BsTwitter color="black" size={32} />
            </a>
            {/* <a href="">
              <AiFillMediumSquare color="black" size={32} />
            </a> */}
            <a href={linkedinURL}>
              <FaLinkedinIn color="black" size={32} />
            </a>
            <a href={githubURL}>
              <FaGithub color="black" size={32} />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About