import React, { useState } from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'
import ProofOfWork from '../Components/Sections/Homepage/ProofOfWork'
import Footer from '../Components/Sections/Footer'
// import ArtGallary from '../Components/Sections/Homepage/ArtGallary'
// import BusinessCard from '../Components/Sections/Homepage/BusinessCard'
import logo from '../assets/images/opaquelogo.png'
import Navbar from "../Components/Navbar";
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
      <ProofOfWork />
      <Testimonials />
      <About />
      {/* <ArtGallary /> */}
      <Footer />

      {/* <Navbar active={active} setActive={setActive} /> */}
    </div>
  )
}
