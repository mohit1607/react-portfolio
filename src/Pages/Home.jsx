import React from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'
import ProofOfWork from '../Components/Sections/Homepage/ProofOfWork'
import Footer from '../Components/Sections/Footer'
import ArtGallary from '../Components/Sections/Homepage/ArtGallary'
import BusinessCard from '../Components/Sections/Homepage/BusinessCard'

export const Home = () => {
  return (
    <div className='w-full relative flex flex-col items-center'>
      <Hero />
      {/* <BusinessCard/>  */}
      <Testimonials />
      <About />
      <ProofOfWork />
      <ArtGallary />
      <Footer />
    </div>
  )
}
