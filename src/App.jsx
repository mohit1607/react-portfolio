import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages'

function App() {

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
