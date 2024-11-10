import React from 'react'

const BusinessCard = () => {
  return (
    <div className='text-center h-[40rem] grid place-items-center pt-[5rem]'>
        <div className='w-2/3 h-[90%] bg-white shadow-2xl Helvetica relative flex overflow-hidden'>
           <div className='absolute left-8 top-6 blob scale-125 bg-accent '></div>
           <div className='absolute -top-[18rem] left-5 text-[46rem] font-poppins font-extrabold text-primary opacity-20'>M</div>
        </div>
    </div>
  )
}

export default BusinessCard