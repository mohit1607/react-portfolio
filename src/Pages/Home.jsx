import React from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Marquees from '../Components/Sections/Homepage/Marquees'

export const Home = () => {
  return (
    <div className='w-full relative'>
        <Hero/>
        <Marquees/>
    </div>
  )
}
