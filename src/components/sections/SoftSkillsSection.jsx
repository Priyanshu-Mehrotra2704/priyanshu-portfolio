import React from 'react'
import Section from '../Section'
import { Users, MessageSquare, Brain, Share2 } from 'lucide-react'

const softSkills = [
  {
    icon: Users,
    title: 'LEADERSHIP',
    desc: 'Guided teams through complex technical roadblocks and development cycles.',
  },
  {
    icon: MessageSquare,
    title: 'COMMUNICATION',
    desc: 'Simplifying high-dimensional technical concepts for diverse stakeholders.',
  },
  {
    icon: Brain,
    title: 'PROBLEM-SOLVING',
    desc: 'Deconstructing complex simulations into solvable algorithmic steps.',
  },
  {
    icon: Share2,
    title: 'TEAMWORK',
    desc: 'Collaborative integration of frontend and backend AI modules.',
  },
]

function SoftSkillsSection({ isActive }) {
  return (
    <Section id="sec-7" isActive={isActive}>
      <div className="hud-frame">
        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{ gridColumn: '1/13', gridRow: '1/9' }}
        >
          <div className="tile-header">
            <span>[ NEURAL_SYNERGY ]</span>
          </div>
          <h2>Tactical Soft Skills</h2>
          <div className="skill-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {softSkills.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="skill-box">
                <Icon />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="accent-text mono" style={{ fontSize: '0.8rem' }}>
                    {title}
                  </span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SoftSkillsSection
