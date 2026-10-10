import { Link } from 'react-router-dom'

const perks = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Competitive Pay',
    desc: 'We offer competitive mileage pay with consistent, well-paying loads. No surprises — just honest, transparent compensation.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: '24/7 Dispatch Support',
    desc: 'Our dispatch team is available around the clock to handle any issues, keep loads moving, and ensure you\'re never left without support.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    title: 'Consistent Freight',
    desc: 'We work hard to keep our drivers loaded with steady, reliable freight — no sitting around waiting for loads.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Modern, Safe Equipment',
    desc: 'Drive well-maintained, modern Kenworth T680 tractors with the latest safety tech. We keep our fleet road-ready.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Respect & Communication',
    desc: 'We treat every driver as a partner. Clear communication, mutual respect, and a team that actually listens.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Nationwide Lanes',
    desc: 'Access to strong freight lanes across the East Coast, Texas, Midwest, and beyond — keeping you moving where the freight is.',
  },
]

const requirements = [
  'Valid Class A CDL',
  'Minimum 2 years OTR experience',
  'Clean MVR (motor vehicle record)',
  'No DUI/DWI in last 5 years',
  'Must pass DOT physical',
  'Reefer experience preferred',
]

export default function DriversPage() {
  return (
    <>
      <div className="drivers-page-hero">
        <div className="drivers-page-hero-bg">
          <img src="/images/driver-truck.jpg" alt="Royal Express Driver" />
          <div className="drivers-page-hero-overlay" />
        </div>
        <div className="container drivers-page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Drivers</span>
          </div>
          <span className="section-kicker">JOIN OUR TEAM</span>
          <h1 className="section-title">Drive with Royal Express LLC</h1>
          <p className="drivers-page-hero-desc">
            We're looking for experienced, professional drivers who take pride in safety, on-time delivery, and representing Royal Express with excellence.
          </p>
          <a href="#apply" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 28px' }}>
            Apply to Drive <span className="service-link-arrow">→</span>
          </a>
        </div>
      </div>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="section-intro">
            <span className="section-kicker">DRIVER BENEFITS</span>
            <h2 className="section-title">Why Drivers Choose Royal Express</h2>
          </div>
          <div className="perks-grid">
            {perks.map(({ icon, title, desc }) => (
              <div key={title} className="perk-card">
                <div className="perk-icon-wrap">
                  <svg className="perk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {icon.props.children}
                  </svg>
                </div>
                <h3 className="perk-title">{title}</h3>
                <p className="perk-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--gray">
        <div className="container">
          <div className="cards-grid-2">
            <div>
              <span className="section-kicker">REQUIREMENTS</span>
              <h2 className="section-title">What We're Looking For</h2>
              <p className="section-subtitle">We hire experienced professionals who prioritize safety, reliability, and pride in their work.</p>
              <ul className="req-list">
                {requirements.map(r => (
                  <li key={r}>
                    <span className="feature-check" style={{ width: 22, height: 22 }}>
                      <svg viewBox="0 0 24 24" style={{ width: 12, height: 12 }}><polyline points="20 6 9 17 4 12" stroke="#fff" strokeWidth="3" fill="none"/></svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="quick-stats-card">
              <span className="section-kicker">QUICK STATS</span>
              <div className="quick-stats-list">
                {[
                  { label: 'Pay Model', value: 'Per Mile + Bonuses' },
                  { label: 'Home Time', value: 'Flexible scheduling' },
                  { label: 'Load Type', value: 'Reefer & Dry Van' },
                  { label: 'Dispatch', value: '24/7 Support' },
                  { label: 'Equipment', value: 'Kenworth T680' },
                  { label: 'Coverage', value: '48 Contiguous States' },
                ].map(({ label, value }) => (
                  <div key={label} className="quick-stats-row">
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-gray-400)' }}>{label}</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-white)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="apply-cta-section">
        <div className="container">
          <div className="apply-cta-inner">
            <span className="section-kicker">APPLY NOW</span>
            <h2 className="section-title text-white" style={{ marginBottom: 12 }}>Ready to Join the Team?</h2>
            <p className="cta-copy">
              Reach out directly — call or email us with your CDL info and experience, and we'll get back to you quickly.
            </p>
            <div className="cta-actions">
              <a href="tel:6824073621" className="btn btn-primary" style={{ fontSize: '1rem' }}>
                <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.128.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.572 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call (682) 407-3621
              </a>
              <a href="mailto:team@royalexpressllc.com" className="btn btn-outline">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
