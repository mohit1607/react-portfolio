import React from 'react'
import Marquee from 'react-fast-marquee'

const Marquees = () => {
  return (
    <div className='w-full h-auto'>
          <Marquee className='mb-4' play direction='left' speed={130} loop={0}>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
          </Marquee>
          <Marquee className='mb-4' play direction='left' speed={100} loop={0}>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
              <div className='w-[22rem] h-[15rem] bg-accent mr-4 text-white rounded-xl flex justify-center items-center text-3xl font-bold font-nunito'>
                hello there
              </div>
          </Marquee>
    </div>
  )
}

export default Marquees