import React from 'react'
import { Tilt } from 'react-tilt'

const SkillsCard = ({
    image,
    text
}) => {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 30,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <Tilt
            className='d3d h-32 w-32 flex justify-center items-center rounded-xl flex-col gap-2 bg-[#f4f4f4]'
            options={defaultOptions}>
            <div className='w-12 h-12 aspect-square grid place-items-center rounded-full bg-transparent translate-z-[300px] presZ'>
                <img src={image} alt="" />
            </div>
            <p className='text-lg font-bold'>
                {text}
            </p>
        </Tilt>
    )
}

export default SkillsCard