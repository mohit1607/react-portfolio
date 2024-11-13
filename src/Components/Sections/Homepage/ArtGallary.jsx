import React, { useState } from 'react'
import sample1 from '../../../assets/images/sample1.jpg'
import sample2 from '../../../assets/images/sample2.jpg'
import sample3 from '../../../assets/images/sample3.jpeg'
import sample4 from '../../../assets/images/sample4.jpg'
import yelan from '../../../assets/images/yelan.png'
import { motion } from 'framer-motion'

const ArtGallary = () => {
    const [state, setState] = useState({
        1: false,
        2: false,
        3: false,
        4: true,
        5: false,
        6: false,
        7: false,
    })

    const handleClick = (number) => {
        let newState = { ...state }
        for (let i = 0; i < 8; i++) {
            if (i === number) {
                newState[i] = true;
            } else {
                newState[i] = false;
            }
        }
        setState(newState)
    }

    return (
        <motion.div
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
                duration: 0.5,
                stiffness: 50,
            }}
            className='w-full max-w-[1400px] px-[3%] sm:px-[10%] relative flex justify-center items-center flex-col gap-[20px]'>
            <h2 className='text-[36px] text-center font-semibold font-nunito mb-[50px]'>Art Gallary</h2>
            <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row justify-center gap-3'>
                <div onClick={() => handleClick(1)} className={`${state[1] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={sample1} className='w-full h-full object-cover' alt='Nani' /></div>
                <div onClick={() => handleClick(2)} className={`${state[2] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={sample2} className='w-full h-full object-cover' alt='Nani' /></div>
                <div onClick={() => handleClick(3)} className={`${state[3] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={sample3} className='w-full h-full object-cover' alt='Nani' /></div>
                <div onClick={() => handleClick(4)} className={`${state[4] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={sample4} className='w-full h-full object-cover' alt='Nani' /></div>
                <div onClick={() => handleClick(5)} className={`${state[5] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={yelan} className='w-full h-full object-cover' alt='Nani' /></div>
                <div onClick={() => handleClick(6)} className={`${state[6] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={yelan} className='w-full h-full object-cover' alt='Nani' /></div>
                <div onClick={() => handleClick(7)} className={`${state[7] ? 'flex-[40%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={yelan} className='w-full h-full object-cover' alt='Nani' /></div>
            </div>
        </motion.div>
    )
}

export default ArtGallary