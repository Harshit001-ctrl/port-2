"use client"

import { useEffect } from "react"
import { Mail, Linkedin, Github } from "lucide-react"
import { useFooterAnimation } from "../hooks/useFooterAnimation"

export default function Footer() {
  const { initializeFooterAnimation } = useFooterAnimation()

  useEffect(() => {
    initializeFooterAnimation()
  }, [initializeFooterAnimation])

  return (
    <footer className="py-16 sm:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#111] to-[#1a1a1a] min-h-[40vh] border-t border-[#333]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="name-footer font-quicksand text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#d17777] to-[#ff98a2] text-center opacity-0 transform translate-y-10 font-bold">
          Harshit Rao
        </h2>

        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row gap-20 sm:gap-40 md:gap-52 lg:gap-64 text-center items-center justify-center w-full">
          <div className="address opacity-0 transform translate-y-10">
            <h3 className="text-[#d17777] text-2xl sm:text-3xl mb-6 sm:mb-8 font-quicksand font-bold hover:text-[#ff98a2] transition-colors duration-300">
              Where to find me
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-white/90 text-lg sm:text-xl hover:text-white transition-colors duration-300 hover:scale-105 transform">
                Rewari, Haryana IN
              </span>
            </div>
          </div>

          <div className="quicklink opacity-0 transform translate-y-10">
            <h3 className="text-[#d17777] text-2xl sm:text-3xl mb-6 sm:mb-8 font-quicksand font-bold hover:text-[#ff98a2] transition-colors duration-300">
              Contact Me
            </h3>
            <div className="flex justify-center gap-12 sm:gap-16">
              <a
                href="mailto:harshitrao84@gmail.com"
                className="text-white/90 hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                aria-label="Email"
              >
                <Mail size={32} className="sm:w-10 sm:h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-rao27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} className="sm:w-10 sm:h-10" />
              </a>
              <a
                href="https://github.com/Harshit001-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                aria-label="GitHub"
              >
                <Github size={32} className="sm:w-10 sm:h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

