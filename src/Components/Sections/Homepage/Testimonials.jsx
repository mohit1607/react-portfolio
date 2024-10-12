import React from 'react'
import TestimonialCard from '../../Cards/TestimonialCard'

const Testimonials = () => {
    return (
        <section className='w-full h-[80vh] mt-[10rem] mb-[15rem] flex flex-col px-[10%]'>
            <h2 className='text-[36px] text-center font-semibold font-nunito mb-[150px]'>Testimonials</h2>
            <div className='flex-1 flex justify-between items-center relative'>
                <TestimonialCard />
                <TestimonialCard elevated/>
                <TestimonialCard />
            </div>
        </section>
    )
}

export default Testimonials