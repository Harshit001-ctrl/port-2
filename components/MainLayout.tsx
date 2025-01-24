"use client"

import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import ScrollProgressBar from "./ScrollProgressBar"
import About from "./About"
import Experience from "./Experience"
import Footer from "./Footer"
import Form from "./Form"
import dynamic from 'next/dynamic'
import Hero from "./Hero"
import Skills from "./Skills"
import "../app/globals.css"
// import { Form } from 'react-hook-form'

// Import SplineBackground with no SSR
const SplineBackground = dynamic(() => import('./SplineBackground'), {
  ssr: false
});

export function MainLayout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleLoadComplete = () => {
      setIsVisible(true)
    }

    window.addEventListener("loadingComplete", handleLoadComplete)
    return () => window.removeEventListener("loadingComplete", handleLoadComplete)
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
    <div className={`transition-opacity duration-500 `}>
      <ScrollProgressBar />
      <SplineBackground />
      <Hero />
      <div className="relative z-10">
        <About />
        <Experience />
        <Skills />
        <Form />
        <Footer />
      </div>
    </div>
  )
}


