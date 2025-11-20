import React from 'react'
import yelan from '../../assets/images/yelan.png'

const TestimonialCard = ({
  image = yelan,
  name = 'Yelan',
  position = 'Character at Genshin Impact',
  feedback = 'Mohit is just godly gifted, the way he approaches each and every problem is phenomenal as I am going to hire him for my all biggest possible projects now'
}) => {
  return (
    <div className='rounded-[20px] px-[2rem] gap-6 justify-start py-8 bg-white max-w-[25rem] flex flex-col items-center scale-95 shadow-[0px_4px_20px_-2px_rgba(0,_0,_0,_0.1)]'>
      {/* Profile section with larger image */}
      <div className='flex flex-col items-center gap-4 w-full'>
        <div className='rounded-full overflow-hidden w-[7rem] h-[7rem] border-4 border-white shadow-lg'>
          <img className='w-full h-full object-cover' src={image} alt={`${name} profile`} />
        </div>
        <div className='text-center'>
          <h4 className='font-poppins text-[20px] font-semibold text-gray-800'>{name}</h4>
          <p className='text-sm font-medium text-gray-600 mt-1'>{position}</p>
        </div>
      </div>

      {/* Feedback text */}
      <p className='font-poppins text-[16px] font-light text-center text-gray-700 leading-relaxed'>
        &ldquo;{feedback}&rdquo;
      </p>
    </div>
  )
}

export default TestimonialCard