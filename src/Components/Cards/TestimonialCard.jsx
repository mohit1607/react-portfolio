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
      <div className={`rounded-[20px] px-[37px] py-[60px] bg-white w-[380px] h-[490px] flex flex-col items-center scale-95 shadow-[0px_0px_26px_-3px_rgba(0,_0,_0,_0.2)] ${elevated && '-translate-y-[70px]'}`}>
        <div className='rounded-full h-[125px] w-[125px] overflow-hidden mb-[30px]'>
            <img className='w-full h-full object-cover' src={image} alt="yelan genshin impact" />
        </div>
        <p className='font-poppins text-[16px] font-light mb-[30px] text-[#727070]'>
            {feedback}
        </p>
        <h4 className='font-poppins text-[24px] self-start font-semibold'>{name}</h4>
        <p className='self-start text-[16px] font-normal'>{position}</p>
    </div>
  )
}

export default TestimonialCard