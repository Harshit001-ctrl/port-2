'use client'

import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import ScrollProgressBar from './ScrollProgressBar'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'
import Form from './Form'
import SplineBackground from './SplineBackground'
import Hero from './Hero'
import Skills from './Skills'
import '../app/globals.css'

export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleLoadComplete = () => {
      setIsVisible(true)
    }

    window.addEventListener('loadingComplete', handleLoadComplete)
    return () => window.removeEventListener('loadingComplete', handleLoadComplete)
  }, [])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Fixed positioning for SplineBackground */}
      <div className="relative w-full h-full overflow-x-hidden">
        <SplineBackground />
      </div>
      <ScrollProgressBar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Form />
        <Footer />
      </div>
    </div>
  )
}
