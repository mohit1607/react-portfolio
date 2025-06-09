import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'
import zenpattern from '../../../assets/images/zenpattern.jpg'

const Form = () => {
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const handleSubmitForm = () => {
    if (!formName.trim()) return toast.error('Please enter your name.', {
      position: "top-center"
    })
    if (!isValidEmail(formEmail)) return toast.error('Please enter a valid email.', {
      position: "top-center"
    })
    if (!formMessage.trim()) return toast.error('Please enter a message.', {
      position: "top-center"
    })

    toast.success('Form submitted successfully!', {
      position: "top-center"
    })

    setFormName('')
    setFormEmail('')
    setFormMessage('')
  }

  const handleWhatsApp = () => {
    const phoneNumber = '+918003321811' // Replace with your WhatsApp number
    const message = 'Hi! I would like to discuss a potential project with you.'
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  const handlePhone = () => {
    const phoneNumber = '+918003321811' // Replace with your phone number
    window.location.href = `tel:${phoneNumber}`
  }

  const handleEmail = () => {
    const email = 'mohit.ashliya@gmail.com' // Replace with your email
    const subject = 'Project Discussion'
    const body = 'Hi Mohit,\n\nI would like to discuss a potential project with you.\n\nBest regards'
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {/* Left Side: Background image only on desktop */}
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center rounded-r-2xl border-2 border-primary"
        style={{ backgroundImage: `url(${zenpattern})` }}
      ></div>

      {/* Form Side with background image on all screens */}
      <div
        className="relative w-full md:w-1/2 h-full flex items-center justify-center px-6 py-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${zenpattern})` }}
      >
        {/* Overlay: slightly transparent on mobile, solid white on desktop */}
        <div className="absolute inset-0 bg-white bg-opacity-70 md:bg-opacity-100 z-0"></div>

        <div className="relative z-10 w-full max-w-[35rem] p-2 metallic-border">
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="min-h-[30rem] rounded-xl p-8 shadow-xl w-full flex flex-col gap-4 bg-white bg-opacity-90">
            <h2 className="text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-Fugaz">
              Discuss your potential idea
            </h2>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="w-full border-primary border-2 font-poppins rounded-xl px-4 py-2 focus:border-accent"
              placeholder="Your Good Name..."
            />
            <input
              type="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className="w-full border-primary border-2 font-poppins rounded-xl px-4 py-2 focus:outline-none focus:border-accent"
              placeholder="Your Contact email..."
            />
            <textarea
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              className="w-full flex-grow h-[6rem] border-2 border-primary resize-none rounded-xl px-4 py-2 font-poppins focus:outline-none focus:border-accent"
              placeholder="Type Your Message here..."
            />
            <button
              onClick={handleSubmitForm}
              className="bg-accent text-white md:text-[1rem] text-[0.8rem] font-bold md:px-10 px-4 md:py-4 py-2 rounded-xl border-2 border-accent"
            >
              Submit
            </button>
            
            {/* Contact Icons Section */}
            <div className="flex justify-center gap-6 pt-4">
              <button
                onClick={handleWhatsApp}
                className="p-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 transform hover:scale-110"
                title="Contact via WhatsApp"
              >
                <FaWhatsapp color="black" size={25} />
              </button>
              <button
                onClick={handlePhone}
                className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
                title="Call directly"
              >
                <FaPhone color="black" size={25} />
              </button>
              <button
                onClick={handleEmail}
                className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-300 transform hover:scale-110"
                title="Send email"
              >
                <FaEnvelope color="black" size={25} />
              </button>
            </div>
            
            <p className="text-center text-sm text-gray-600 font-poppins">
              Or reach out directly using the options above
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form