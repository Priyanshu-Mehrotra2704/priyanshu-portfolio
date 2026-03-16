import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Navbar from './components/Navbar'
import HUDOverlay from './components/HUDOverlay'
import ThreeCanvas from './components/ThreeCanvas'
import HeroSection from './components/sections/HeroSection'
import BioSection from './components/sections/BioSection'
import CoreSkillsSection from './components/sections/CoreSkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CertsSection from './components/sections/CertsSection'
import AchievementsSection from './components/sections/AchievementsSection'
import TechStackSection from './components/sections/TechStackSection'
import SoftSkillsSection from './components/sections/SoftSkillsSection'
import ContactSection from './components/sections/ContactSection'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const navItems = [
  { label: '00.DOCK', index: 0 },
  { label: '01.BIO', index: 1 },
  { label: '02.CORE', index: 2 },
  { label: '03.OPS', index: 3 },
  { label: '04.RANK', index: 4 },
  { label: '05.XP', index: 5 },
  { label: '06.TOOL', index: 6 },
  { label: '07.SOFT', index: 7 },
  { label: '08.LINK', index: 8 },
]

const stopsZ = [0, 250, 500, 800, 1100, 1500, 1900, 2300, 2700]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [coords, setCoords] = useState({ x: 0, z: 120 })
  const cameraRef = useRef({ x: 0, y: 0, z: 120 })
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSections = 9
      
      ScrollTrigger.create({
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const activeIdx = Math.round(progress * (totalSections - 1))
          setActiveIndex(activeIdx)

          // Calculate camera position
          const currentStop = Math.floor(progress * (totalSections - 1))
          const nextStop = Math.min(currentStop + 1, totalSections - 1)
          const localProgress = (progress * (totalSections - 1)) % 1

          const z = gsap.utils.interpolate(
            -stopsZ[currentStop] + 80,
            -stopsZ[nextStop] + 80,
            localProgress
          )
          
          const x = activeIdx === 0 ? 0 : (activeIdx % 2 === 0 ? -30 : 30)
          const y = activeIdx === 0 ? 0 : (activeIdx % 2 === 0 ? 15 : -15)

          cameraRef.current = { x, y, z }
          setCoords({ x: x.toFixed(2), z: z.toFixed(2) })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const handleNavClick = (index) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPos = (index / 8) * scrollHeight
    gsap.to(window, { scrollTo: scrollPos, duration: 0.8, ease: 'expo.out' })
  }

  return (
    <>
      <HUDOverlay />
      <Navbar
        items={navItems}
        activeIndex={activeIndex}
        onNavClick={handleNavClick}
      />
      <ThreeCanvas cameraRef={cameraRef} />
      
      <div className="hud-coords mono">
        LOC_X: <span>{coords.x}</span>
        <br />
        LOC_Z: <span>{coords.z}</span>
        <br />
        SYSTEM_STABILITY: 100.0%
      </div>

      <div className="scroll-callout mono">▼ INITIATE ORBITAL DESCENT</div>

      <div className="scroll-container" ref={scrollContainerRef}>
        <HeroSection isActive={activeIndex === 0} />
        <BioSection isActive={activeIndex === 1} />
        <CoreSkillsSection isActive={activeIndex === 2} />
        <ProjectsSection isActive={activeIndex === 3} />
        <CertsSection isActive={activeIndex === 4} />
        <AchievementsSection isActive={activeIndex === 5} />
        <TechStackSection isActive={activeIndex === 6} />
        <SoftSkillsSection isActive={activeIndex === 7} />
        <ContactSection isActive={activeIndex === 8} />
      </div>
    </>
  )
}

export default App
