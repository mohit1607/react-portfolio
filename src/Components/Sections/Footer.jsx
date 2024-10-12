import React from 'react'

const Footer = () => {
  return (
    <footer className='px-[10%] w-full mt-[10rem] mb-[5rem]'>
        <h3 className='font-poppins text-center text-[#888888] font-bold text-[150px] mb-[3rem]'>
            @Mohit Ashliya
        </h3>
        <div className='w-full flex justify-between mb-[15px]'>
            <div className='flex gap-[25px]'>
                <p className='text-[24px] font-poppins font-semibold'>Work</p>
                <p className='text-[24px] font-poppins font-semibold'>About</p>
                <p className='text-[24px] font-poppins font-semibold'>Hire me</p>
                <p className='text-[24px] font-poppins font-semibold'>Insights</p>
                <p className='text-[24px] font-poppins font-semibold'>Resume</p>
            </div>
            <div className='flex gap-[25px]'>
                <p className='text-[24px] font-poppins font-semibold'>Peerlist</p>
                <p className='text-[24px] font-poppins font-semibold'>X (twitter)</p>
                <p className='text-[24px] font-poppins font-semibold'>Linked in</p>
            </div>
        </div>
        <div className='w-full flex justify-between mb-[15px]'>
            <div className='flex gap-[25px]'>
                  <p className='text-[24px] font-poppins font-semibold'>Mohit Ashliya 2024 &#174; (All rights reserved)</p>
            </div>
            <div className='flex gap-[25px]'>
                  <p className='text-[24px] font-poppins font-semibold'>mail me at <span className='text-accent'>mohit.ashliya@gmail.com</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer