import React from 'react'
import TestimonialCard from '../../Cards/TestimonialCard'
import { motion } from 'motion/react'

// Dummy testimonial data (names & roles themed for speed, quality, shipping code)
const testimonials = [
    {
        name: 'Liam Shipton',
        position: 'Product Lead · SprintLabs',
        feedback: 'Features landed early and solid. Reliability was never a question.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Priya Sharma',
        position: 'Founder · TechVeda Solutions',
        feedback: 'Impossibly fast iterations with clean architecture. A joy to scale.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Ethan Codewright',
        position: 'Engineering Manager · SolidBridge',
        feedback: 'Refactors, performance, DX improvements—handled before we asked.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Rajesh Kumar',
        position: 'CEO · InnovateIndia Pvt Ltd',
        feedback: 'Zero drama launches. Observability and rollback strategies on point.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Zara Deploy',
        position: 'Ops Lead · ShipRight',
        feedback: 'Throughput went up, bug count went down. Clear win.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Arjun Patel',
        position: 'CTO · BharatTech Solutions',
        feedback: 'Exceptional work ethic and technical expertise. Highly recommended.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Maya Singh',
        position: 'Product Manager · DigitalIndia Corp',
        feedback: 'Delivered complex features ahead of schedule with zero compromises.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    },
]

const Testimonials = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='w-full mb-[5rem] hidden lg:flex flex-col items-center px-[3%] sm:px-[10%] max-w-[1400px] pt-[5rem]'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-[2rem] lg:mb-10'>What my clients say about me?</h2>

            {/* Continuous marquee slider (CSS-driven, no timers ⇒ no memory leaks) */}
            <div className='testimonial-slider-mask'>
                <div className='testimonial-marquee'>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className='testimonial-card px-2'>
                            <TestimonialCard
                                elevated={false}
                                image={t.image}
                                name={t.name}
                                position={t.position}
                                feedback={t.feedback}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* <p className='text-xs mt-4 opacity-60 font-poppins'>Hover to pause</p> */}
        </motion.section>
    )
}

export default Testimonials