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
            className="contact-info-grid"
            style={{
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

        </div>
      </div>
    </Section>
  )
}

export default ContactSection
