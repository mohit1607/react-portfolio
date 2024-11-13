import React, { useState } from 'react'
import sample1 from '../../../assets/images/sample1.jpg'
import sample2 from '../../../assets/images/sample2.jpg'
import sample3 from '../../../assets/images/sample3.jpeg'
import image from '../../../assets/images/yelan.png'

const ProofOfWork = () => {

    const tabs = {
        frontEnd: 'frontend',
        backend: 'backend',
        design: 'design'
    }
    const [activeTab, setActiveTab] = useState('')

    return (
        <motion.section className='w-full mt-[5rem] mb-[10rem] flex flex-col px-[3%] sm:px-[10%] max-w-[1400px]'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-[5rem]'>Work (antiques)</h2>
            <div className='w-full relative flex gap-[20px]'>

                {/* first column */}
                <div className='flex-1  flex-col gap-[20px] hidden md:flex'>
                    <div className='h-[200px] rounded-[20px] w-full p-[35px] hover:bg-accent group transition-all duration-200 ease-linear bg-[#f5f5f5]'>
                        <h4 className='text-[36px] font-nunito font-bold group-hover:text-white text-black'>Design Portfolio</h4>
                        <p className='text-[16px] font-nunito text-black group-hover:text-white'>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </div>
                    <div className='h-[200px] rounded-[20px] w-full p-[35px] hover:bg-accent group transition-all duration-200 ease-linear bg-[#f5f5f5]'>
                        <h4 className='text-[36px] font-nunito font-bold group-hover:text-white text-black'>Front-end</h4>
                        <p className='text-[16px] font-nunito text-black group-hover:text-white'>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </div>
                    <div className='h-[200px] rounded-[20px] w-full p-[35px] hover:bg-accent group transition-all duration-200 ease-linear bg-[#f5f5f5]'>
                        <h4 className='text-[36px] font-nunito font-bold group-hover:text-white text-black'>Back-end</h4>
                        <p className='text-[16px] font-nunito text-black group-hover:text-white'>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </div>
                </div>

                {/* second column */}
                <div className='flex-1 grid grid-cols-2 gap-[20px] grid-rows-3'>
                    <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                        <img className='w-full h-full object-cover' src={sample1} alt="yelan genshin impact" />
                    </div>
                    <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                        <img className='w-full h-full object-cover' src={sample2} alt="yelan genshin impact" />
                    </div>
                    <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                        <img className='w-full h-full object-cover' src={sample3} alt="yelan genshin impact" />
                    </div>
                    <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                        <img className='w-full h-full object-cover' src={image} alt="yelan genshin impact" />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default ProofOfWork