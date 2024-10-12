import React from 'react'
import person from '../../../assets/images/archperson.jpg'

const About = () => {
  return (
    <div className='w-full py-[5rem] px-[10%] flex flex-col items-center'>
        <div className='overflow-hidden rounded-[20px] w-[1080px] h-[550px] mb-[50px]'>
            <img className='w-full h-full object-cover' src={person} alt="person" />
        </div>
        <h2 className='text-[48px] font-semibold text-center font-nunito mb-[15px]'>MOHIT ASHLIYA</h2>
        <p className='text-[16px] text-center w-[70%]'>
            Lorem ipsum dolor sit amet consectetur. Etiam aliquam vel dolor accumsan nisi bibendum turpis habitant vulputate. Eleifend habitant et convallis eget nisi amet enim. Lorem purus mattis egestas pretium magna. Vivamus felis luctus nam adipiscing nascetur volutpat sed etiam mollis.
        </p>
    </div>
  )
}

export default About