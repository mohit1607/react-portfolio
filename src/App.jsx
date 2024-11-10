import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages'
import Lenis from 'lenis'

function App() {


  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])


  return (
    <div className='w-full relative'>
      <Routes>
        {/* this website is future proof I will deploy it on vps */}
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
