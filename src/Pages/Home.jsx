import { useState, useRef, lazy, Suspense } from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import logo from '../assets/images/opaquelogo.png'
import resume from '../assets/resume.pdf'

// Lazy load sections
const Testimonials = lazy(() => import('../Components/Sections/Homepage/Testimonials'))
const About = lazy(() => import('../Components/Sections/Homepage/About'))
const Footer = lazy(() => import('../Components/Sections/Footer'))
const Skills = lazy(() => import('../Components/Sections/Homepage/Skills'))
const Form = lazy(() => import('../Components/Sections/Homepage/Form'))
const ProjectCards = lazy(() => import('../Components/Sections/Homepage/ProjectCards'))

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Refs for each section
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const proofRef = useRef(null)
  // const testimonialsRef = useRef(null)
  const aboutRef = useRef(null)
  const formRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <div className='w-full relative flex flex-col items-center dark:bg-darkprimary'>

      {/* Logo */}
      <div className='fixed w-12 h-12 top-8 left-8 z-50'>
        <img src={logo} alt="Logo" />
      </div>

      <div className='fixed top-11 right-8 z-50 flex items-center justify-center gap-4'>
        {/* Burger Icon */}
        <div
          className='cursor-pointer flex items-center justify-center'
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className='relative w-8 h-6'>
            <span className={`absolute h-1 w-8 bg-black rounded transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-2.5' : 'top-0'}`} />
            <span className={`absolute h-1 w-8 bg-black rounded transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-2.5'}`} />
            <span className={`absolute h-1 w-8 bg-black rounded transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-2.5' : 'top-5'}`} />
          </div>
        </div>
        {/* <ThemeToggle /> */}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        onClick={() => {
          menuOpen && setMenuOpen(false)
        }}
      >
        <ul className="flex flex-col gap-6 mt-24 ml-8 text-lg font-medium">
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection(heroRef)}>Home</li>
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection(proofRef)}>Proof of Work</li>
          {/* <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection(testimonialsRef)}>Testimonials</li> */}
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection(aboutRef)}>About</li>
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection(formRef)}>Contact</li>

          <li>
            <a
              href={resume}
              download
              className="inline-flex text-sm items-center mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-gray-800 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Sections with refs */}
      <section className='w-full' ref={heroRef}>
        <Hero
          getStarted={() => scrollToSection(formRef)}
        />
      </section>
      <Suspense fallback={<div className='w-full h-32 flex items-center justify-center'><div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent'></div></div>}>
        <section ref={proofRef}><ProjectCards /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ><Testimonials /></section>
        <section ref={aboutRef}><About /></section>
        <Footer />
      </Suspense>
    </div>
  )
}
