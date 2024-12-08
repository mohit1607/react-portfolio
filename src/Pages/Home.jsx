import React from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'
import ProofOfWork from '../Components/Sections/Homepage/ProofOfWork'
import Footer from '../Components/Sections/Footer'
import ArtGallary from '../Components/Sections/Homepage/ArtGallary'
// import BusinessCard from '../Components/Sections/Homepage/BusinessCard'
import logo from '../assets/images/opaquelogo.png'

export const Home = () => {
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
      <ArtGallary />
      <Footer />

      <div className='fixed bottom-14 left-0 w-full flex justify-center items-center'>
        <div className='shadow-2xl p-2 rounded-full flex gap-2 bg-white'>
          <div className='flex-1 rounded-full bg-accent text-white font-semibold flex justify-center items-center px-5 py-2'>
            About
          </div>
          <div className='flex-1 rounded-xl text-black font-semibold flex justify-center items-center px-5 py-2'>
            Work
          </div>
          <div className='flex-1 rounded-xl text-black font-semibold flex justify-center items-center px-5 py-2'>
            Skills
          </div>
          <div className='flex-1 rounded-xl text-black font-semibold flex justify-center items-center px-5 py-2'>
            Contact
          </div>
          <div className='flex-1 rounded-xl text-black font-semibold flex justify-center items-center px-5 py-2'>
            Resume
          </div>
        </div>
      </div>
    </div>
  )
}
