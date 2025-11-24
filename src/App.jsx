import { useEffect, Suspense, lazy } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

// Lazy load pages
const Home = lazy(() => import('./Pages'))
const ProjectPage = lazy(() => import('./Pages/ProjectPage'))
const Playground = lazy(() => import('./Pages/Playground'))
const Error404 = lazy(() => import('./404Error'))

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
    <div id='main' className='w-full relative'>
      <Suspense fallback={
        <div className='w-full h-screen flex items-center justify-center bg-white dark:bg-darkprimary'>
          <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent'></div>
        </div>
      }>
        <Routes>
          {/* this website is future proof I will deploy it on vps */}
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
