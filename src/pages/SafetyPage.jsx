import { Link } from 'react-router-dom'

const safetyCards = [
  {
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>,
    title: 'DOT Compliance',
    desc: 'We maintain full compliance with Federal Motor Carrier Safety Administration (FMCSA) regulations and undergo regular DOT audits.',
  },
  {
    icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    title: 'Pre-Trip Inspections',
    desc: 'Every driver completes a thorough DVIR (Driver Vehicle Inspection Report) before every dispatch — no exceptions.',
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    title: 'Hours of Service (HOS)',
    desc: 'All drivers operate within strict HOS regulations with ELD (Electronic Logging Device) compliance on every trip.',
  },
  {
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    title: 'Driver Qualification',
    desc: 'Background checks, MVR reviews, drug & alcohol testing, and medical certifications for all drivers before hire.',
  },
  {
    icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    title: 'GPS & Telematics',
    desc: 'All units are tracked with real-time GPS. Reefer units transmit temperature logs continuously throughout the trip.',
  },
  {
    icon: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></>,
    title: 'Cargo Securement',
    desc: 'Loads are secured per FMCSA cargo securement rules. We use load bars, e-track systems, and team load verification.',
  },
]

const programs = [
  { title: 'Drug & Alcohol Program', desc: 'Enrollment in a DOT-compliant drug and alcohol consortium. Random, pre-employment, and post-accident testing.' },
  { title: 'Annual Training', desc: 'Annual safety training for all drivers covering HOS, accident prevention, load securement, and hazmat awareness.' },
  { title: 'Incident Review', desc: 'Any incident is reviewed by management with corrective action plans and follow-up to prevent recurrence.' },
  { title: 'Maintenance Logs', desc: 'Digital maintenance records for all tractors and trailers — PM schedules, tire checks, brake inspections, and reefer calibrations.' },
]

export default function SafetyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Safety & Compliance</span>
          </div>
          <span className="section-kicker">SAFETY & COMPLIANCE</span>
          <h1 className="section-title">Safety is Our Foundation</h1>
          <p className="section-subtitle">
            At Royal Express LLC, safety is not a checkbox — it's built into every decision, every dispatch, and every mile we run.
          </p>
        </div>
      </div>

      <section className="safety-badge-bar">
        <div className="container">
          <div className="safety-badge-row">
            {['FMCSA Compliant', 'ELD Equipped', 'DOT Certified', 'Insured & Bonded'].map(badge => (
              <div key={badge} className="safety-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="safety-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-kicker">OUR SAFETY PILLARS</span>
            <h2 className="section-title">How We Keep Every Load Safe</h2>
          </div>
          <div className="safety-grid">
            {safetyCards.map(({ icon, title, desc }) => (
              <div key={title} className="safety-card">
                <div className="safety-icon-wrap">
                  <svg className="safety-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{icon}</svg>
                </div>
                <h3 className="safety-card-title">{title}</h3>
                <p className="safety-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--white" style={{ borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="cards-grid-2">
            <div>
              <span className="section-kicker">SAFETY PROGRAMS</span>
              <h2 className="section-title">Structured Programs for Consistent Safety</h2>
              <p className="section-subtitle">We don't leave safety to chance. Our structured programs ensure every driver, load, and trip meets the highest standards.</p>
              <div className="program-list">
                {programs.map(({ title, desc }) => (
                  <div key={title} className="program-item">
                    <div style={{ width: 36, height: 36, background: 'rgba(229,27,36,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'var(--color-primary)', fill: 'none', strokeWidth: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: 4 }}>{title}</div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--color-gray-600)', lineHeight: 1.55 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="commitment-card">
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🛡️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>Our Safety Commitment</h3>
              <p style={{ color: 'var(--color-gray-300)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 20 }}>
                "At Royal Express LLC, we believe every driver deserves to return home safely, and every shipper deserves cargo that arrives without incident. Safety is our most non-negotiable value."
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
                — Royal Express LLC Management
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--gray" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-kicker">SHIP WITH CONFIDENCE</span>
          <h2 className="section-title">Your Freight is in Safe Hands</h2>
          <p style={{ color: 'var(--color-gray-600)', maxWidth: 480, margin: '0 auto 32px' }}>
            Work with a carrier that takes compliance and safety as seriously as you do.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Get a Quote →</Link>
            <Link to="/equipment" className="btn btn-dark">View Our Fleet</Link>
          </div>
        </div>
      </section>
    </>
  )
}
