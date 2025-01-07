import React from 'react'
import yelan from '../../assets/images/yelan.png'

const TestimonialCard = ({
  elevated = false,
  image = yelan,
  name = 'Yelan',
  position = 'Character at Genshin Impact',
  feedback = 'Mohit is just godly gifted, the way he approaches each and every problem is phenomenal as I am going to hire him for my all biggest possible projects now'
}) => {
  return (
    <div className={`rounded-[20px] px-[2rem] gap-8 justify-start py-8 bg-white max-w-[25rem]  flex flex-col items-center scale-95 shadow-[0px_0px_26px_-3px_rgba(0,_0,_0,_0.2)] ${elevated && '-translate-y-[70px]'}`}>
      <div className='bg-[#f4f4f4] flex w-full gap-4 p-4 rounded-xl'>
        <div className='rounded-full overflow-hidden w-[5rem] h-[5rem]'>
          <img className='w-full h-full object-cover' src={image} alt="yelan genshin impact" />
        </div>
        <div className='flex-1'>
          <h4 className='font-poppins text-[24px] self-start font-semibold'>{name}</h4>
          <p className='self-start text-sm font-medium line-clamp-2'>{position}</p>
        </div>
      </div>

      {/* text  */}
      <p className='font-poppins text-[16px] font-light mb-[30px] text-[#727070]'>
        {feedback}
      </p>
    </div>
  )
}

export default TestimonialCard