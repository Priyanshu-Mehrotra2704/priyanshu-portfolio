import React from 'react'

function Navbar({ items, activeIndex, onNavClick }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {items.map((item) => (
          <button
            key={item.index}
            className={`nav-link ${activeIndex === item.index ? 'active' : ''}`}
            onClick={() => onNavClick(item.index)}
          >
            {item.label}
          </button>
        ))}
        <a href="https://drive.google.com/file/d/1Rnugw0wUqh-sXCtfEUwBAqgraN9_5EJl/view?usp=sharing">My Resume</a>
      </div>
    </nav>
  )
}

export default Navbar
