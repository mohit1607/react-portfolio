import React from 'react'
import { motion } from 'motion/react'

const Form = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible, only once
            transition={{ duration: 0.5 }}
            className='w-full relative px-[3%] sm:px-[10%] overflow-hidden max-w-[1400px] flex flex-col justify-start items-center py-12 gap-8'
        >
            <div className='w-full h-[30rem] flex gap-4'>
                <div className='h-full rounded-xl p-8 shadow-xl w-[25rem] flex flex-col gap-3'>
                    <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito'>Discuss your potential idea</h2>
                    <input type="text" className='w-full border-2 border-black rounded-xl px-4 py-2 border-opacity-30' placeholder='Your Good Name...' />
                    <textarea type="text" className='w-full flex-1 resize-none border-2 border-black rounded-xl px-4 py-2 border-opacity-30' placeholder='Your Good Name...' />
                    <button className='bg-accent text-white md:text-[1rem] text-[0.8rem] font-bold md:px-10 px-4  md:py-4 py-2 rounded-xl border-2 border-accent'>
                        Submit
                    </button>
                </div>
                <div className='flex-1 shadow-xl rounded-xl'>
                    here will be something that triggers customer's emotion to contact me
                </div>
            </div>
        </motion.div>
    )
}

export default Form