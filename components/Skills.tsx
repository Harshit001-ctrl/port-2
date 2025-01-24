"use client"

import { useEffect } from "react"
import { useSkillsAnimation } from "../hooks/useSkillsAnimation"

export default function Skills() {
  const { initializeAnimations } = useSkillsAnimation()

  useEffect(() => {
    initializeAnimations()
  }, [initializeAnimations])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "RESTful APIs",

  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black/95 via-black/80 to-black/95 py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#d17777]/10 to-transparent rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#ff98a2]/10 to-transparent rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#d17777]/5 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <h2 className="myskills text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d17777] via-[#ff98a2] to-[#d17777] animate-gradient-x bg-[200%_auto] font-quicksand mb-16 text-center opacity-0 transform translate-y-10">
          MY SKILLS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto relative">
          {skills.map((skill, index) => (
            <div
              key={skill}
              id={`skill-${index}`}
              className="group backdrop-blur-md bg-gradient-to-br from-black/60 via-black/50 to-[#d17777]/5 p-5 md:p-6 rounded-xl 
                border border-[#d17777]/10 hover:border-[#d17777]/40 
                shadow-lg shadow-black/10 hover:shadow-[#d17777]/30
                transition-all duration-500 ease-out
                opacity-0 filter blur-sm
                hover:scale-110 hover:-translate-y-2
                hover:bg-gradient-to-br hover:from-black/70 hover:via-[#d17777]/10 hover:to-[#ff98a2]/10
                flex items-center justify-center min-h-[100px]
                relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              
              <div className="flex flex-col items-center relative z-10">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-semibold text-center whitespace-nowrap
                  group-hover:text-[#ff98a2] transition-all duration-300
                  group-hover:drop-shadow-[0_0_8px_rgba(255,152,162,0.5)]">
                  {skill}
                </span>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#d17777]/40 to-transparent 
                  mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
              
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d17777]/0 to-[#ff98a2]/0 
                group-hover:from-[#d17777]/10 group-hover:to-[#ff98a2]/10 
                transition-all duration-500 ease-out blur-xl -z-10
                group-hover:animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

