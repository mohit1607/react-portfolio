import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {
  // Form 1 state
  const [form1Name, setForm1Name] = useState('')
  const [form1Email, setForm1Email] = useState('')
  const [form1Message, setForm1Message] = useState('')

  // Form 2 state
  const [form2Email, setForm2Email] = useState('')

  // Validation helpers
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  // Handle submit for form 1
  const handleSubmitForm1 = (e) => {
    e.preventDefault()
    if (!form1Name.trim()) return toast.error('Please enter your name.')
    if (!isValidEmail(form1Email)) return toast.error('Please enter a valid email.')
    if (!form1Message.trim()) return toast.error('Please enter a message.')

    // TODO: Integrate API call here

    toast.success('Form 1 submitted successfully!')

    // Clear inputs
    setForm1Name('')
    setForm1Email('')
    setForm1Message('')
  }

  // Handle submit for form 2
  const handleSubmitForm2 = (e) => {
    e.preventDefault()
    if (!isValidEmail(form2Email)) return toast.error('Please enter a valid email.')

    // TODO: Integrate API call here

    toast.success('Subscribed to newsletter successfully!')

    // Clear input
    setForm2Email('')
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="w-full relative px-[3%] sm:px-[5%] overflow-hidden max-w-[1400px] flex flex-col items-center py-12"
      >
        {/* Flex container */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-stretch gap-10">
          {/* Form 1 */}
          <form
            onSubmit={handleSubmitForm1}
            className="metallic-border p-2 rounded-2xl w-full max-w-[50rem] flex-1"
          >
            <div className="h-[30rem] rounded-xl p-8 shadow-xl w-full flex flex-col gap-3 bg-white">
              <h2 className="text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-Fugaz">
                Discuss your potential idea
              </h2>
              <input
                type="text"
                value={form1Name}
                onChange={(e) => setForm1Name(e.target.value)}
                className="w-full font-poppins rounded-xl px-4 py-2 shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
                placeholder="Your Good Name..."
              />
              <input
                type="text"
                value={form1Email}
                onChange={(e) => setForm1Email(e.target.value)}
                className="w-full font-poppins rounded-xl px-4 py-2 shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
                placeholder="Your Contact email..."
              />
              <textarea
                value={form1Message}
                onChange={(e) => setForm1Message(e.target.value)}
                className="w-full flex-1 resize-none rounded-xl px-4 py-2 font-poppins shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
                placeholder="Type Your Message here..."
              />
              <button
                type="submit"
                className="bg-accent text-white md:text-[1rem] text-[0.8rem] font-bold md:px-10 px-4 md:py-4 py-2 rounded-xl border-2 border-accent"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Form 2 */}
          <form
            onSubmit={handleSubmitForm2}
            className="metallic-border p-2 rounded-2xl self-start w-full max-w-[50rem] flex-1"
          >
            <div className="rounded-xl p-8 shadow-xl w-full flex flex-col gap-3 bg-white h-full">
              <h2 className="text-[1.7rem] sm:text-[2.1rem] text-center font-semibold font-Fugaz">
                Get the latest news on Tech
              </h2>
              <input
                type="text"
                value={form2Email}
                onChange={(e) => setForm2Email(e.target.value)}
                className="w-full font-poppins rounded-xl px-4 py-2 shadow-[inset_4px_-3px_35px_3px_rgba(0,_0,_0,_0.1)] focus:outline-none focus:border-accent"
                placeholder="Enter your email..."
              />
              <button
                type="submit"
                className="bg-accent text-white md:text-[1rem] text-[0.8rem] font-bold md:px-10 px-4 md:py-4 py-2 rounded-xl border-2 border-accent"
              >
                Subscribe to newsletter
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default Form
