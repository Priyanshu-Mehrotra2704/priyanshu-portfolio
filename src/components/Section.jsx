import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Section({ id, isActive, children, className = '' }) {
  const sectionRef = useRef(null)
  const tilesAnimated = useRef(false)

  useEffect(() => {
    if (isActive && !tilesAnimated.current) {
      const tiles = sectionRef.current?.querySelectorAll('.tile')
      if (tiles?.length) {
        gsap.fromTo(
          tiles,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          }
        )
        tilesAnimated.current = true
      }
    }
    if (!isActive) {
      tilesAnimated.current = false
    }
  }, [isActive])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section ${isActive ? 'active' : ''} ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
