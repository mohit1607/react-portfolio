import React, { useState } from 'react'
import sample1 from '../../../assets/images/sample1.jpg'
import sample2 from '../../../assets/images/sample2.jpg'
import sample3 from '../../../assets/images/sample3.jpeg'
import image from '../../../assets/images/yelan.png'
import { motion, AnimatePresence } from 'framer-motion'

const ProofOfWork = () => {
    const tabs = {
        frontEnd: 'frontend',
        backend: 'backend',
        design: 'design'
    }
    const [activeTab, setActiveTab] = useState(tabs.design)

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 20% is visible, only once
            transition={{ duration: 0.3 }}
            className='w-full mt-[5rem] mb-[5rem] flex flex-col px-[3%] sm:px-[10%] max-w-[1400px]'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-12'>Work (antiques)</h2>

            {/* Button Group for Mobile */}
            <div className='w-full flex lg:hidden  justify-center items-center mb-8 gap-4'>
                <button
                    onClick={() => handleTabClick(tabs.frontEnd)}
                    className={`w-[8rem] px-4 py-2 font-semibold rounded-full shadow-xl ${activeTab === tabs.frontEnd ? 'bg-accent text-white' : 'bg-[#f4f4f4]'
                        }`}
                >
                    Frontend
                </button>
                <button
                    onClick={() => handleTabClick(tabs.design)}
                    className={`w-[8rem] px-4 py-2 font-semibold rounded-full shadow-xl ${activeTab === tabs.design ? 'bg-accent text-white' : 'bg-[#f4f4f4]'
                        }`}
                >
                    Design
                </button>
                <button
                    onClick={() => handleTabClick(tabs.backend)}
                    className={`w-[8rem] px-4 py-2 font-semibold rounded-full shadow-xl ${activeTab === tabs.backend ? 'bg-accent text-white' : 'bg-[#f4f4f4]'
                        }`}
                >
                    Backend
                </button>
            </div>

            <div className='w-full relative flex gap-[20px]'>

                {/* Text Cards for Desktop */}
                <div className='flex-1 flex-col gap-[20px] hidden lg:flex'>
                    <div
                        onClick={() => handleTabClick(tabs.design)}
                        className={`h-[200px] rounded-[20px] w-full p-[35px] overflow-hidden cursor-pointer transition-all duration-200 ease-linear ${activeTab === tabs.design ? 'bg-accent text-white' : 'bg-[#f5f5f5] text-black'
                            }`}
                    >
                        <h4 className={`text-[36px] font-nunito font-bold ${activeTab === tabs.design ? 'text-white' : 'text-black'}`}>
                            Design Portfolio
                        </h4>
                        <p className={`text-[16px] font-nunito ${activeTab === tabs.design ? 'text-white' : 'text-black'}`}>
                            Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.
                        </p>
                    </div>
                    <div
                        onClick={() => handleTabClick(tabs.frontEnd)}
                        className={`h-[200px] rounded-[20px] w-full p-[35px] overflow-hidden cursor-pointer transition-all duration-200 ease-linear ${activeTab === tabs.frontEnd ? 'bg-accent text-white' : 'bg-[#f5f5f5] text-black'
                            }`}
                    >
                        <h4 className={`text-[36px] font-nunito font-bold ${activeTab === tabs.frontEnd ? 'text-white' : 'text-black'}`}>
                            Front-end
                        </h4>
                        <p className={`text-[16px] font-nunito ${activeTab === tabs.frontEnd ? 'text-white' : 'text-black'}`}>
                            Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.
                        </p>
                    </div>
                    <div
                        onClick={() => handleTabClick(tabs.backend)}
                        className={`h-[200px] rounded-[20px] w-full p-[35px] overflow-hidden cursor-pointer transition-all duration-200 ease-linear ${activeTab === tabs.backend ? 'bg-accent text-white' : 'bg-[#f5f5f5] text-black'
                            }`}
                    >
                        <h4 className={`text-[36px] font-nunito font-bold ${activeTab === tabs.backend ? 'text-white' : 'text-black'}`}>
                            Back-end
                        </h4>
                        <p className={`text-[16px] font-nunito ${activeTab === tabs.backend ? 'text-white' : 'text-black'}`}>
                            Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.
                        </p>
                    </div>
                </div>

                {/* Image Grid */}
                <AnimatePresence mode='wait'>
                    {activeTab === 'frontend' &&
                        <motion.div
                            key='frontend'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className='flex-1 grid grid-cols-2 gap-[20px] grid-rows-3'>
                            <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample1} alt="Sample 1" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample2} alt="Sample 2" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample3} alt="Sample 3" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={image} alt="Sample 4" />
                            </div>
                        </motion.div>
                    }
                    {activeTab === 'backend' &&
                        <motion.div
                            key='design'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className='flex-1 grid grid-cols-2 gap-[20px] grid-rows-3'>
                            <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample2} alt="Sample 1" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample2} alt="Sample 2" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample1} alt="Sample 3" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={image} alt="Sample 4" />
                            </div>
                        </motion.div>
                    }
                    {activeTab === 'design' &&
                        <motion.div
                            key='design'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className='flex-1 grid grid-cols-2 gap-[20px] grid-rows-3'>
                            <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample3} alt="Sample 1" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={image} alt="Sample 2" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-3 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample1} alt="Sample 3" />
                            </div>
                            <div className='overflow-hidden rounded-[20px] row-span-2 cursor-pointer'>
                                <img className='w-full h-full object-cover' src={sample2} alt="Sample 4" />
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.section >
    )
}

export default ProofOfWork
