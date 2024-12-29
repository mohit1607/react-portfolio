import { AiOutlineArrowDown } from "react-icons/ai";
import React, { useState } from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'
import ProofOfWork from '../Components/Sections/Homepage/ProofOfWork'
import Footer from '../Components/Sections/Footer'
import ArtGallary from '../Components/Sections/Homepage/ArtGallary'
// import BusinessCard from '../Components/Sections/Homepage/BusinessCard'
import logo from '../assets/images/opaquelogo.png'
// import BlobCursor from '../Components/BlobCursor'

export const Home = () => {
  const [active, setActive] = useState('About')
  return (
    <div className='w-full relative flex flex-col items-center'>
      <div className='fixed w-12 h-12 top-8 left-8'>
        <img src={logo} alt="" />
      </div>
      <Hero />
      {/* <BusinessCard/>  */}
      <Testimonials />
      <About />
      <ProofOfWork />
      {/* <ArtGallary /> */}
      <Footer />
      <div className='hidden fixed bottom-14 left-0 w-full sm:flex justify-center items-center'>
        <div className='shadow-2xl p-2 rounded-full flex gap-2 bg-white'>
          {
            ['About', 'Work', 'Skills', 'Contact', 'Resume'].map((curr) => {
              if (active === curr) {
                return (
                  <div key={curr} className='flex-1 rounded-full bg-accent text-white font-semibold flex justify-center items-center px-5 py-2'>
                    {curr === 'Resume' && <AiOutlineArrowDown size={18} color="white" />}
                    {curr}
                  </div>
                )
              }
              else {
                return (
                  <div onClick={() => setActive(curr)} key={curr} className='flex-1 rounded-xl text-black font-semibold flex justify-center items-center px-5 py-2 cursor-pointer'>
                    {curr === 'Resume' && <AiOutlineArrowDown className="font-bold" size={18} color="white" />}
                    {curr}
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}
