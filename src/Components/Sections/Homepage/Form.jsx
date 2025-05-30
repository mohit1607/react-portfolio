import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import zenpattern from '../../../assets/images/zenpattern.jpg'

const Form = () => {
  // Form state
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  // Validation helpers
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  // Handle submit
  const handleSubmitForm = () => {
    if (!formName.trim()) return toast.error('Please enter your name.')
    if (!isValidEmail(formEmail)) return toast.error('Please enter a valid email.')
    if (!formMessage.trim()) return toast.error('Please enter a message.')

    // TODO: Integrate API call here

    toast.success('Form submitted successfully!')

    // Clear inputs
    setFormName('')
    setFormEmail('')
    setFormMessage('')
  }

  return (
    <div
      style={{
        backgroundImage: `url(${zenpattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className="w-full relative px-[3%] sm:px-[5%] overflow-hidden max-w-[1400px] flex flex-col items-center py-12">
        {/* Form container */}
        <div className="flex justify-center w-full">
          <div className="p-2 rounded-2xl w-full max-w-[50rem]">
            <div className="h-[30rem] rounded-xl p-8 shadow-xl w-full flex flex-col gap-3 bg-white">
              <h2 className="text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-Fugaz">
                Discuss your potential idea
              </h2>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full font-poppins rounded-xl px-4 py-2 shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
                placeholder="Your Good Name..."
              />
              <input
                type="text"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                className="w-full font-poppins rounded-xl px-4 py-2 shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
                placeholder="Your Contact email..."
              />
              <textarea
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full flex-1 resize-none rounded-xl px-4 py-2 font-poppins shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
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
    </div>
  )
}

export default Form