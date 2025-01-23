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
    "GraphQL",
    "AWS",
    "Docker",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-black/80 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="myskills text-4xl md:text-5xl font-bold text-[#d17777] font-quicksand mb-12 text-center opacity-0 transform translate-y-10">
          MY SKILLS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill}
              id={`skill-${index}`}
              className="backdrop-blur-sm bg-black/30 p-3 md:p-4 rounded-xl text-center opacity-0 filter blur-sm"
            >
              <span className="text-white text-lg font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

