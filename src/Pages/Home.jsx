import React from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Marquees from '../Components/Sections/Homepage/Marquees'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'

export const Home = () => {
  return (
    <div className='w-full relative'>
        <Hero/>
        <Marquees/>
        <Testimonials/>
        <About/>
    </div>
  )
}
