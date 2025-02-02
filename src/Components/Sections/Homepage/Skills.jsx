import React from 'react'
import SkillsCard from '../../Cards/SkillsCard'
import { motion } from 'motion/react'
import blender from '../../../assets/images/skills/blender.png'
import fastapi from '../../../assets/images/skills/fastapi.png'
import figma from '../../../assets/images/skills/figma.png'
import reactlogo from '../../../assets/images/skills/reactlogo.png'
import python from '../../../assets/images/skills/python.png'
import chatgpt from '../../../assets/images/skills/chatgpt.png'
import js from '../../../assets/images/skills/js.png'
import reactnative from '../../../assets/images/skills/reactnative.png'
import nextjs from '../../../assets/images/skills/nextjs.png'
import tailwind from '../../../assets/images/skills/tailwind.png'
import ts from '../../../assets/images/skills/ts.png'
import sanity from '../../../assets/images/skills/sanity.png'

const Skills = () => {

    const skillsData = [
        { id: 5, src: reactlogo, alt: 'React' },
        { id: 4, src: figma, alt: 'Figma' },
        { id: 2, src: chatgpt, alt: 'AI Powered' },
        { id: 1, src: blender, alt: 'Blender' },
        { id: 8, src: reactnative, alt: 'React Native' },
        { id: 6, src: python, alt: 'Python' },
        { id: 3, src: fastapi, alt: 'FastAPI' },
        { id: 7, src: js, alt: 'Java Script' },
        { id: 8, src: nextjs, alt: 'Next js' },
        { id: 9, src: tailwind, alt: 'Tailwind Css' },
        { id: 10, src: ts, alt: 'Type Script' },
        { id: 11, src: sanity, alt: 'Sanity CMS' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible, only once
            transition={{ duration: 0.5 }}
            className='w-full relative px-[3%] sm:px-[10%] overflow-hidden max-w-[1400px] flex flex-col justify-start items-center py-12 gap-8'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito'>Skills</h2>
            <div className='w-full flex flex-wrap justify-center md:justify-start items-center gap-10'>
                {
                    skillsData.map(curr => (
                        <SkillsCard
                            key={curr.id}
                            image={curr.src}
                            text={curr.alt}
                        />
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Skills