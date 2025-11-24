import React from 'react'
import TestimonialCard from '../../Cards/TestimonialCard'
import { motion } from 'motion/react'
import { useScreenDetector } from '../../../Utils/useResponsive'

const testimonials = [
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name: 'Rajesh Kumar',
        position: 'CEO at FinTech Solutions',
        feedback: 'Mohit delivered exceptional work on our project. His attention to detail and innovative solutions exceeded our expectations. Highly recommend!'
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
        name: 'Priya Sharma',
        position: 'Product Manager at EduLearn',
        feedback: 'Working with Mohit was a pleasure. He understood our requirements perfectly and delivered a polished product ahead of schedule.'
    },
    {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        name: 'Arun Patel',
        position: 'Founder at HealthTech India',
        feedback: 'Mohit\'s expertise in React and modern web technologies helped us launch our MVP successfully. Professional and reliable.'
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        name: 'Anjali Gupta',
        position: 'UX Designer at AgriConnect',
        feedback: 'The collaboration was fantastic. Mohit brought my designs to life with clean, efficient code. A true professional.'
    },
    // Duplicate for seamless marquee
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name: 'Rajesh Kumar',
        position: 'CEO at FinTech Solutions',
        feedback: 'Mohit delivered exceptional work on our project. His attention to detail and innovative solutions exceeded our expectations. Highly recommend!'
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
        name: 'Priya Sharma',
        position: 'Product Manager at EduLearn',
        feedback: 'Working with Mohit was a pleasure. He understood our requirements perfectly and delivered a polished product ahead of schedule.'
    },
    {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        name: 'Arun Patel',
        position: 'Founder at HealthTech India',
        feedback: 'Mohit\'s expertise in React and modern web technologies helped us launch our MVP successfully. Professional and reliable.'
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        name: 'Anjali Gupta',
        position: 'UX Designer at AgriConnect',
        feedback: 'The collaboration was fantastic. Mohit brought my designs to life with clean, efficient code. A true professional.'
    }
]

const Testimonials = () => {
    const { isMobile, isTablet } = useScreenDetector();

    const staticTestimonials = testimonials.slice(0, 3); // First 3 for static display

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='w-full mb-[5rem] flex flex-col items-center px-[3%] sm:px-[10%] max-w-[1400px] pt-[5rem]'>
            <h2 className='text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-nunito mb-[2rem] lg:mb-24'>What my clients say about me ?</h2>
            {(isMobile || isTablet) ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl place-items-center'>
                    {staticTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            image={testimonial.image}
                            name={testimonial.name}
                            position={testimonial.position}
                            feedback={testimonial.feedback}
                        />
                    ))}
                </div>
            ) : (
                <div className='relative w-full overflow-hidden'>
                    <div className='marquee-container flex gap-4'>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                image={testimonial.image}
                                name={testimonial.name}
                                position={testimonial.position}
                                feedback={testimonial.feedback}
                            />
                        ))}
                    </div>
                    {/* Fading gradients */}
                    <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10'></div>
                    <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10'></div>
                </div>
            )}
        </motion.section>
    )
}

export default Testimonials