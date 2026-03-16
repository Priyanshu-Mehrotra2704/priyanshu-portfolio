import React, { useState } from 'react'
import Section from '../Section'

function ContactSection({ isActive }) {
  const [formData, setFormData] = useState({ name: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <Section id="sec-8" isActive={isActive}>
      <div className="hud-frame">
        <div
          className={`tile ${isActive ? 'visible' : ''}`}
          style={{ gridColumn: '1/13', gridRow: '1/9' }}
        >
          <div className="tile-header">
            <span>[ ESTABLISH_UPLINK ]</span>
          </div>
          <h2>Signal Path</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              marginBottom: '20px',
            }}
          >
            <div className="mono" style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
              EMAIL: <span className="accent-text">priyanshu43879@gmail.com</span>
              <br />
              MOB: <span className="accent-text">+91-6390989509</span>
              <br />
              LOC: Akbarpur, UP / Punjab
            </div>
            <div className="mono" style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
              GITHUB: <span className="accent-text">github.com/Priyanshu-Mehrotra2704</span>
              <br />
              LINKEDIN: <span className="accent-text">linkedin.com/in/priyanshu-mehrotra/</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ENTITY_IDENTIFIER"
              className="terminal-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
              placeholder="TRANSMISSION_DATA"
              rows={3}
              className="terminal-input"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit" className="terminal-btn">
              INITIATE CONNECTION
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
