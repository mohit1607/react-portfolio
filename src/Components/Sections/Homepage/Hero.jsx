import React from 'react'

const Hero = () => {
  return (
    <section className='w-full relative px-[10%] overflow-hidden bg-feathers'>
        <div className='w-full h-[80vh] overflow-hidden relative flex justify-center items-center flex-col gap-4'>
            <h1 className='text-[64px] text-center w-[60%] font-bold font-nunito select-none'>
                <span className='text-accent'>Your Vision </span>
                My Code Bringing Ideas to life
            </h1>
            <div className='flex justify-center gap-4'>
                <button className='bg-accent text-white text-[24px] font-bold px-10 py-4 rounded-xl'>Explore Work</button>
                <button className='bg-primary text-white text-[24px] font-bold px-10 py-4 rounded-xl'>Hire me</button>
            </div>
        </div>
    </section>
  )
}

export default Hero