import { useState, useRef } from 'react'
import Hero from '../Components/Sections/Homepage/Hero'
import Testimonials from '../Components/Sections/Homepage/Testimonials'
import About from '../Components/Sections/Homepage/About'
// import ProofOfWork from '../Components/Sections/Homepage/ProofOfWork'
import Footer from '../Components/Sections/Footer'
import Skills from '../Components/Sections/Homepage/Skills'
import Form from '../Components/Sections/Homepage/Form'
import logo from '../assets/images/opaquelogo.png'
import ProjectCards from '../Components/Sections/Homepage/ProjectCards'
// import PatternStripe from '../Components/PatternStripe'
import resume from '../assets/resume.pdf'

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Refs for each section
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const proofRef = useRef(null)
  const testimonialsRef = useRef(null)
  const aboutRef = useRef(null)
  const formRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <div className='w-full relative flex flex-col items-center'>

      {/* Logo */}
      <div className='fixed w-12 h-12 top-8 left-8 z-50'>
        <img src={logo} alt="Logo" />
      </div>

      {/* Burger Icon */}
      <div
        className='fixed w-12 h-12 top-8 right-8 z-50 cursor-pointer flex items-center justify-center'
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div className='relative w-8 h-6'>
          <span className={`absolute h-1 w-8 bg-black rounded transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-2.5' : 'top-0'}`} />
          <span className={`absolute h-1 w-8 bg-black rounded transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-2.5'}`} />
          <span className={`absolute h-1 w-8 bg-black rounded transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-2.5' : 'top-5'}`} />
        </div>
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
      <section ref={aboutRef}><About /></section>
      <section ref={proofRef}><ProjectCards /></section>
      {/* <section ref={testimonialsRef}><Testimonials /></section> */}
      {/* <section ref={proofRef}><ProofOfWork /></section> */}
      <section ref={skillsRef}><Skills /></section>
      <section className='w-full' ref={formRef}><Form /></section>
      <Footer />
    </div>
  )
}
