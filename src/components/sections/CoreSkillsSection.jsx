import React from 'react'
import Section from '../Section'

const coreSkills = [
  {
    id: '01',
    title: 'MACHINE LEARNING',
    desc: 'Predictive modeling for education systems and real-estate markets using Linear Regression and Neural Networks.',
  },
  {
    id: '02',
    title: 'ALGORITHMIC SIMULATION',
    desc: 'Resource Allocation Graph (RAG) visualization and deadlock detection using Banker\'s Algorithm.',
  },
  {
    id: '03',
    title: 'DATA ENGINEERING',
    desc: 'Cleaning, preprocessing, and EDA to improve model accuracy and identify trends/outliers.',
  },
  {
    id: '04',
    title: 'FULL-STACK AI',
    desc: 'Integrating FastAPI, React, and Streamlit to deploy models as accessible web applications.',
  },
]

function CoreSkillsSection({ isActive }) {
  return (
    <Section id="sec-2" isActive={isActive}>
      <div className="hud-frame">
        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{ gridColumn: '1/13', gridRow: '1/9' }}
        >
          <div className="tile-header">
            <span>[ INTEL_CORE ]</span>
          </div>
          <h2>Intelligence Capability Matrix</h2>
          <div className="skill-grid" style={{ gap: '20px' }}>
            {coreSkills.map((skill) => (
              <div
                key={skill.id}
                className="skill-box"
                style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}
              >
                <span className="accent-text mono" style={{ fontSize: '0.7rem' }}>
                  {skill.id}. {skill.title}
                </span>
                <p style={{ fontSize: '0.85rem' }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CoreSkillsSection
