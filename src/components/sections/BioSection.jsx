import React from 'react'
import Section from '../Section'
import { Code2, BrainCircuit, Database, GitMerge, Cpu, Binary, Terminal, Users } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Python / C++' },
  { icon: BrainCircuit, label: 'TensorFlow / PyTorch' },
  { icon: Database, label: 'Pandas / NumPy' },
  { icon: GitMerge, label: 'Git Control System' },
  { icon: Cpu, label: 'ML Algorithms' },
  { icon: Binary, label: 'Data Structures' },
  { icon: Terminal, label: 'Scikit-Learn' },
  { icon: Users, label: 'Team Leadership' },
]

function BioSection({ isActive }) {
  return (
    <Section id="sec-1" isActive={isActive}>
      <div className="hud-frame">
        <div className={`tile tile-bio ${isActive ? 'visible' : ''}`}>
          <div className="tile-header">
            <span>[ BIO_EXTRACTION ]</span>
            <span>VER_2.6.0</span>
          </div>
          <h2>The Engineer</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Building high-performance <span className="accent-text">AI systems</span> with a strong
            focus on student analytics and resource management. Specialized in{' '}
            <span className="accent-text">deadlock prediction</span> architectures and real-time
            educational metrics.
          </p>
          <p style={{ marginTop: '15px', opacity: 0.7 }}>
            Dedicated to solving complex problems through rigorous algorithmic research and
            high-consistency problem solving as evidenced by global ranking validations.
          </p>
          <div className="data-bar">
            <div className="data-bar-fill" />
          </div>
        </div>

        <div className={`tile tile-stat ${isActive ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="tile-header">
            <span>[ LEVEL ]</span>
          </div>
          <div className="data-point">100+</div>
          <div className="data-label">LeetCode Consecutive</div>
        </div>

        <div className={`tile tile-stat-2 ${isActive ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="tile-header">
            <span>[ STATUS ]</span>
          </div>
          <div className="data-point">98.4%</div>
          <div className="data-label">Model Accuracy Avg</div>
        </div>

        <div className={`tile tile-skills ${isActive ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <div className="tile-header">
            <span>[ CORE_COMPETENCIES ]</span>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, label }) => (
              <div key={label} className="skill-box">
                <Icon />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default BioSection
