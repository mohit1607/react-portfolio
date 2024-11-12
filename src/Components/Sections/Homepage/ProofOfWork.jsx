import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sample1 from '../../../assets/images/sample1.jpg';
import sample2 from '../../../assets/images/sample2.jpg';
import sample3 from '../../../assets/images/sample3.jpeg';
import image from '../../../assets/images/yelan.png';

const ProofOfWork = () => {
    const tabs = {
        frontEnd: 'frontend',
        backend: 'backend',
        design: 'design'
    };

    const [activeTab, setActiveTab] = useState('');

    // Animation variants for the boxes
    const boxVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        }
    };

    // Handle clicking on a text card to set the active tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className='w-full mt-[5rem] mb-[10rem] flex flex-col px-[3%] sm:px-[10%] max-w-[1400px]'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-[5rem]'>Work (antiques)</h2>
            <div className='w-full relative flex gap-[20px]'>

                {/* first column */}
                <div className='flex-1 flex-col gap-[20px] hidden md:flex'>
                    {/* Design Card */}
                    <motion.div
                        onClick={() => handleTabClick(tabs.design)} // Handle click for Design tab
                        className={`${activeTab === tabs.design ? 'bg-accent' : 'bg-[#f5f5f5]'} h-[200px] rounded-[20px] w-full p-[35px] hover:bg-accent group transition-all duration-200 ease-linear cursor-pointer`}
                        variants={boxVariants}
                        custom="top" // Animation from top
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h4 className={`${activeTab === tabs.design ? 'text-white' : 'text-black'} text-[36px] font-nunito font-bold group-hover:text-white`}>Design Portfolio</h4>
                        <p className={`${activeTab === tabs.design ? 'text-white' : 'text-black'} text-[16px] font-nunito group-hover:text-white`}>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </motion.div>

                    {/* Front-end Card */}
                    <motion.div
                        onClick={() => handleTabClick(tabs.frontEnd)} // Handle click for Front-end tab
                        className={`${activeTab === tabs.frontEnd ? 'bg-accent' : 'bg-[#f5f5f5]'} h-[200px] rounded-[20px] w-full p-[35px] hover:bg-accent group transition-all duration-200 ease-linear cursor-pointer`}
                        variants={boxVariants}
                        custom="left" // Animation from left
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h4 className={`${activeTab === tabs.frontEnd ? 'text-white' : 'text-black'} text-[36px] font-nunito font-bold group-hover:text-white`}>Front-end</h4>
                        <p className={`${activeTab === tabs.frontEnd ? 'text-white' : 'text-black'} text-[16px] font-nunito group-hover:text-white`}>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </motion.div>

                    {/* Back-end Card */}
                    <motion.div
                        onClick={() => handleTabClick(tabs.backend)} // Handle click for Back-end tab
                        className={`${activeTab === tabs.backend ? 'bg-accent' : 'bg-[#f5f5f5]'} h-[200px] rounded-[20px] w-full p-[35px] hover:bg-accent group transition-all duration-200 ease-linear cursor-pointer`}
                        variants={boxVariants}
                        custom="bottom" // Animation from bottom
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h4 className={`${activeTab === tabs.backend ? 'text-white' : 'text-black'} text-[36px] font-nunito font-bold group-hover:text-white`}>Back-end</h4>
                        <p className={`${activeTab === tabs.backend ? 'text-white' : 'text-black'} text-[16px] font-nunito group-hover:text-white`}>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </motion.div>
                </div>

                {/* second column */}
                <div className='flex-1 grid grid-cols-2 gap-[20px] grid-rows-3'>
                    <motion.div
                        className='overflow-hidden rounded-[20px] row-span-3'
                        variants={boxVariants}
                        custom="right" // Animation from right
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img className='w-full h-full object-cover' src={sample1} alt="yelan genshin impact" />
                    </motion.div>

                    <motion.div
                        className='overflow-hidden rounded-[20px] row-span-2'
                        variants={boxVariants}
                        custom="left" // Animation from left
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img className='w-full h-full object-cover' src={sample2} alt="yelan genshin impact" />
                    </motion.div>

                    <motion.div
                        className='overflow-hidden rounded-[20px] row-span-3'
                        variants={boxVariants}
                        custom="top" // Animation from top
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img className='w-full h-full object-cover' src={sample3} alt="yelan genshin impact" />
                    </motion.div>

                    <motion.div
                        className='overflow-hidden rounded-[20px] row-span-2'
                        variants={boxVariants}
                        custom="bottom" // Animation from bottom
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img className='w-full h-full object-cover' src={image} alt="yelan genshin impact" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProofOfWork;
