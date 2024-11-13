import React from 'react'
import TestimonialCard from '../../Cards/TestimonialCard'

const Testimonials = () => {
    return (
        <section className='w-full mb-[5rem] flex flex-col items-center px-[3%] sm:px-[10%] max-w-[1400px]'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-[3rem] lg:mb-[10rem]'>What my clients say about me ?</h2>
            <div className='flex-1 sm:hidden grid grid-cols-1 lg:grid-cols-3 gap-[1rem]'>
                <TestimonialCard />
                <TestimonialCard  />
                <TestimonialCard />
            </div>
            <div className='flex-1 hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-[1rem]'>
                <TestimonialCard />
                <TestimonialCard  elevated/>
                <TestimonialCard />
            </div>
        </section>
    )
}

export default Testimonials