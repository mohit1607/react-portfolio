import React from 'react'
import PropTypes from 'prop-types'

const TestimonialCard = ({
  image,
  name,
  position,
  feedback
}) => {
  return (
    <div className='rounded-[20px] px-[1rem] sm:px-[2rem] py-6 sm:py-8 bg-white w-[16rem] sm:w-[20rem] md:w-[25rem] flex flex-col items-center border border-[#ecbfbf] flex-shrink-0'>
      {/* Image */}
      <div className='rounded-full overflow-hidden w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] mb-4'>
        <img className='w-full h-full object-cover' src={image} alt={name} loading="lazy" />
      </div>
      {/* Feedback */}
      <p className='font-poppins text-[14px] sm:text-[16px] font-light text-center text-[#727070] mb-4'>
        &ldquo;{feedback}&rdquo;
      </p>
      {/* Name and Position */}
      <div className='text-center'>
        <h4 className='font-poppins text-[18px] sm:text-[20px] font-semibold'>{name}</h4>
        <p className='text-xs sm:text-sm font-medium text-gray-600'>{position}</p>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired
}

export default TestimonialCard