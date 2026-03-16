import React from 'react'
import Section from '../Section'

function ProjectsSection({ isActive }) {
  return (
    <Section id="sec-3" isActive={isActive}>
      <div className="hud-frame">
        <div className={`tile tile-project-1 ${isActive ? 'visible' : ''}`}>
          <div className="tile-header">
            <span>[ LOG_01 ]</span>
          </div>
          <h3>EduLens</h3>
          <a href='https://edu-lens-eta.vercel.app/login'>Link to Project</a>
          <p>
            AI-powered student performance predictor. Developed models to detect weak areas using
            attendance, past scores, and topic-wise progress. Features real-time dashboards and
            personalized learning recommendations.
          </p>
          <div className="mono accent-text" style={{ fontSize: '0.7rem', marginTop: '10px' }}>
            STACK: Python, FastAPI, React, MongoDB
          </div>
        </div>

        <div className={`tile tile-project-2 ${isActive ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="tile-header">
            <span>[ LOG_02 ]</span>
          </div>
          <h3>Simulator Resource Allocator</h3>
          <a href="https://github.com/LusmicSam/-Simulator_Resource_Allocation">Link to Project</a>

          <p>
            Interactive RAG Simulator with real-time process visualization. Implemented Banker's
            Algorithm for deadlock detection and added ML-based prediction modules.
          </p>
          <div className="mono accent-text" style={{ fontSize: '0.7rem', marginTop: '10px' }}>
            STACK: NumPy, Tkinter, Next.js, FastAPI
          </div>
        </div>

        <div className={`tile tile-project-summary ${isActive ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="tile-header">
            <span>[ GITHUB_UPLINK ]</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              height: '100%',
            }}
          >
            <div className="mono">REPOS: active_status</div>
            <div className="mono">CONTRIBUTIONS: high_frequency</div>
            <div className="mono">ID: Priyanshu-Mehrotra2704</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ProjectsSection
