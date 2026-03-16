import React from 'react'
import Section from '../Section'
import { ShieldCheck } from 'lucide-react'

const certifications = [
  'A GUIDE TO MACHINE LEARNING WITH DATA SCIENCE - CIPHERSCHOOLS',
  'DATA STRUCTURE AND ALGORITHM USING C++ - CIPHERSCHOOLS',
  'LEETCODE 100 DAYS BADGE - PROBLEM SOLVING DEDICATION',
]

function CertsSection({ isActive }) {
  return (
    <Section id="sec-4" isActive={isActive}>
      <div className="hud-frame">
        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{ gridColumn: '1/13', gridRow: '1/9' }}
        >
          <div className="tile-header">
            <span>[ VALIDATIONS ]</span>
          </div>
          <h2>Clearance Levels</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {certifications.map((cert, index) => (
              <div key={index} className="skill-box">
                <ShieldCheck />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CertsSection
