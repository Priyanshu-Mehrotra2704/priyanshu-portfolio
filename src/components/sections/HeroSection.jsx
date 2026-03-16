import React from 'react'
import Section from '../Section'

function HeroSection({ isActive }) {
  return (
    <Section id="sec-0" isActive={isActive}>
      <div className="tile-hero tile visible">
        <div>
          <div className="mono accent-text" style={{ fontSize: '0.8rem', letterSpacing: '10px' }}>
            ID: PRIYANSHU_M
          </div>
          <h1 className="hero-title">
            PRIYANSHU
            <br />
            MEHROTRA
          </h1>
          <div className="hero-sub">AI & MACHINE LEARNING ENGINEER</div>
        </div>
      </div>
    </Section>
  )
}

export default HeroSection
