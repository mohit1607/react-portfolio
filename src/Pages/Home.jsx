import React from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Marquees from '../Components/Sections/Homepage/Marquees'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'
import ProofOfWork from '../Components/Sections/Homepage/ProofOfWork'
import Footer from '../Components/Sections/Footer'
import ArtGallary from '../Components/Sections/Homepage/ArtGallary'

export const Home = () => {
  return (
    <div className='w-full relative'>
        <Hero/>
        <Marquees/>
        <Testimonials/>
        <About/>
        <ProofOfWork/>
        <ArtGallary/>
        <Footer/>
    </div>
  )
}
