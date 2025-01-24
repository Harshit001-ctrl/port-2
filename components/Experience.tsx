"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  useEffect(() => {
    gsap.to(".experience-container", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".experience-container",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    })
  }, [])

  return (
    <section className="experience-container opacity-0 transform translate-y-10 min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-8 lg:px-16 bg-black/80 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#d17777] font-quicksand mb-8 md:mb-12 text-center">
          EXPERIENCE & ACHIEVEMENTS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="backdrop-blur-sm bg-black/30 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl">
            <h3 className="text-xl sm:text-xl font-semibold text-[#ff98a2] mb-3 md:mb-4">Work Experience</h3>
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-br from-black/50 to-black/30 p-4 sm:p-6 rounded-xl border border-[#d17777]/20 shadow-lg shadow-[#d17777]/10">
                <h4 className="text-xl sm:text-xl md:text-2xl text-white font-semibold">Full Stack Developer</h4>
                <p className="text-[#d17777] text-sm sm:text-lg mt-2">Zillion Softech | 05/2023 – 06/2024</p>
                <ul className="list-disc list-inside text-white mt-4 space-y-2 sm:space-y-3 text-base sm:text-base">
                  <li>Managed various project tasks including team coordination and deadline tracking</li>
                  <li>Developed and maintained user-centric web applications</li>
                  <li>Successfully deployed five key projects within deadlines</li>
                </ul>
              </div>

              <div className="bg-gradient-to-tr from-black/60 to-[#d17777]/10 p-4 sm:p-6 rounded-xl border border-[#ff98a2]/20 backdrop-blur-sm shadow-lg shadow-black/20">
                <h4 className="text-xl sm:text-xl md:text-2xl text-white font-semibold">Full Stack Developer</h4>
                <p className="text-[#d17777] text-sm sm:text-lg mt-2">Mindful Juguns | 19/2025 – Present</p>
                <ul className="list-disc list-inside text-white mt-4 space-y-2 sm:space-y-3 text-base sm:text-base">
                  <li>Spearheaded the development of multiple full-stack applications, optimizing functionality across frontend and backend</li>
                  <li>Collaborated with cross-functional teams to ensure timely project delivery and alignment with business goals.</li>
                  <li>Utilized project management tools to track progress, manage documentation, and enhance communication across teams.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-black/30 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl">
            <h3 className="text-xl sm:text-xl font-semibold text-[#ff98a2] mb-3 md:mb-4">Achievements</h3>
            <ul className="list-disc list-inside text-white space-y-3 md:space-y-4 text-sm sm:text-sm">
              <li>Knight Badge on LeetCode - solved 1000+ coding problems</li>
              <li>Contest rating of 1120 (top 9% coders)</li>
              <li>Secured contest rank of 570 on LeetCode weekly contest 380</li>
            </ul>

            <h3 className="text-xl sm:text-xl font-semibold text-[#ff98a2] mt-6 sm:mt-8 mb-3 md:mb-4">Education</h3>
            <div className="text-white text-sm sm:text-base">
              <h4 className="font-semibold">B. Tech (CSE) - 6.7 GPA</h4>
              <p>Maharshi Dayanand University</p>
              <p className="text-[#d17777]">06/2020 – 07/2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

