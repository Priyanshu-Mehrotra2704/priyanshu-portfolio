import React from 'react'
import Section from '../Section'

function AchievementsSection({ isActive }) {
  return (
    <Section id="sec-5" isActive={isActive}>
      <div className="hud-frame">
        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{ gridColumn: '1/7', gridRow: '1/9' }}
        >
          <div className="tile-header">
            <span>[ SYSTEM_ACHIEVEMENT_LOG ]</span>
          </div>
          <h2>Algorithm Mastery</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--accent-bright)' }}>
            Earned the 100 Days Badge on LeetCode
          </p>
          <p style={{ marginTop: '15px', opacity: 0.8 }}>
            Demonstrated extreme consistency and daily problem-solving dedication over 100
            consecutive days of technical challenges.
          </p>
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              background: 'rgba(0,212,255,0.05)',
              border: '1px dashed var(--accent)',
            }}
          >
            <span className="mono">STATUS: HIGH_CONSISTENCY_LOCKED</span>
          </div>
        </div>

        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{
            gridColumn: '7/13',
            gridRow: '1/9',
            borderLeft: '5px solid var(--accent)',
            transitionDelay: '0.1s',
          }}
        >
          <div className="tile-header">
            <span>[ RECOGNITION_MODULE ]</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <h3 className="mono accent-text">FIRST RUNNER-UP: GD</h3>
            <p style={{ fontSize: '0.9rem' }}>
              Recognized in LPU event for elite communication, critical thinking, and strong
              presentation skills in competitive environments.
            </p>
            <div className="data-bar" style={{ marginTop: '20px' }}>
              <div className="data-bar-fill" style={{ width: '95%' }} />
            </div>
            <span className="mono" style={{ fontSize: '0.6rem', marginTop: '5px' }}>
              COMM_RATING: 0.95
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AchievementsSection
