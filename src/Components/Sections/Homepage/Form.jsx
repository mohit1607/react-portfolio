import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
              className="w-full flex-grow border-2 border-primary resize-none rounded-xl px-4 py-2 font-poppins focus:outline-none focus:border-accent"
              placeholder="Type Your Message here..."
            />
            <button
              onClick={handleSubmitForm}
              className="bg-accent text-white md:text-[1rem] text-[0.8rem] font-bold md:px-10 px-4 md:py-4 py-2 rounded-xl border-2 border-accent"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
