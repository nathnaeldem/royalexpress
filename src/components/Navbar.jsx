import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/equipment', label: 'Equipment' },
    { to: '/coverage', label: 'Coverage' },
    { to: '/safety', label: 'Safety' },
    { to: '/drivers', label: 'Drivers' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand-link">
          <img src="/images/logo-emblem.png" alt="Royal Express Logo" className="brand-emblem" />
          <div className="brand-text-block">
            <div className="brand-title">ROYAL EXPRESS <span className="brand-llc">LLC</span></div>
            <div className="brand-subtitle">TRANSPORTATION</div>
          </div>
        </Link>

        <nav className={`main-nav${mobileOpen ? ' mobile-active' : ''}`} aria-label="Main Navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-primary btn-sm header-cta-btn">
          <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
          Request a Quote
        </Link>

        <button
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
