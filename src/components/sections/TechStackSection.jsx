import React from 'react'
import Section from '../Section'

const techStack = [
  'GOOGLE COLAB',
  'JUPYTER NOTEBOOK',
  'KAGGLE',
  'REACT / NEXT.JS',
  'FASTAPI',
  'STREAMLIT',
  'MONGODB',
  'TKINTER',
  'TAILWIND CSS',
]

function TechStackSection({ isActive }) {
  return (
    <Section id="sec-6" isActive={isActive}>
      <div className="hud-frame">
        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{ gridColumn: '1/13', gridRow: '1/9' }}
        >
          <div className="tile-header">
            <span>[ ARSENAL_INVENTORY ]</span>
          </div>
          <div className="skill-grid">
            {techStack.map((tech) => (
              <div key={tech} className="skill-box">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default TechStackSection
