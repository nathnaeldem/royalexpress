import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" id="home">
        <div className="hero-background-wrapper">
          <img src="/images/hero-truck.jpg" alt="Royal Express Refrigerated Truck on Interstate" className="hero-bg-img" />
          <div className="hero-gradient-overlay" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Royal Express LLC — Established 2022</span>
            <h1 className="hero-title">
              Refrigerated<br />
              Freight.<br />
              <span className="text-red">Nationwide.</span>
            </h1>
            <p className="hero-description">
              Royal Express LLC provides reliable 53' reefer transportation for temperature-sensitive
              and general freight with responsive dispatch, real-time updates, and on-time delivery.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Request a Quote
              </Link>
              <a href="tel:6824073621" className="btn btn-dark">
                <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Contact Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES RIBBON ── */}
      <section className="stats-ribbon" aria-label="Key Service Highlights">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg className="stat-icon" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>
              </div>
              <div className="stat-text">
                <span className="stat-title">53' REEFER</span>
                <span className="stat-title">EQUIPMENT</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <img src="/images/us-icon.svg" alt="USA Map Icon" className="stat-icon" />
              </div>
              <div className="stat-text">
                <span className="stat-title">NATIONWIDE</span>
                <span className="stat-title">INTERSTATE SERVICE</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg className="stat-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="stat-text">
                <span className="stat-title">24/7</span>
                <span className="stat-title">DISPATCH SUPPORT</span>
                <span className="stat-subtitle">(Active Loads)</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg className="stat-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <div className="stat-text">
                <span className="stat-title">SAFETY-FOCUSED</span>
                <span className="stat-title">OPERATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header-row">
            <div>
              <span className="section-kicker">OUR SERVICES</span>
              <h2 className="section-title">What We Haul</h2>
              <p className="section-subtitle">Reliable transportation for temperature-sensitive and general freight.</p>
            </div>
            <Link to="/services" className="btn btn-primary">View All Services <span className="service-link-arrow">→</span></Link>
          </div>
          <div className="services-grid">
            {[
              { img: '/images/service-reefer.jpg', alt: '53ft Refrigerated Trailer', title: 'Refrigerated Freight', desc: 'Temperature-controlled transportation for frozen, chilled, and temperature-sensitive products.' },
              { img: '/images/service-general.jpg', alt: 'General Freight Warehouse', title: 'General Freight', desc: 'Reliable over-the-road hauling for compatible dry freight and nationwide lanes.' },
              { img: '/images/service-dedicated.jpg', alt: 'Dedicated Expedited Freight', title: 'Dedicated & Expedited', desc: 'Flexible capacity for dedicated lanes and time-critical shipments.' },
            ].map(({ img, alt, title, desc }) => (
              <article className="service-card" key={title}>
                <div className="service-image-container">
                  <img src={img} alt={alt} className="service-img" loading="lazy" />
                </div>
                <div className="service-body">
                  <h3 className="service-title">{title}</h3>
                  <p className="service-desc">{desc}</p>
                  <Link to="/contact" className="service-link">Get a Quote <span className="service-link-arrow">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT ── */}
      <section className="equipment-section" id="equipment">
        <div className="container">
          <div className="equipment-layout">
            <div className="equipment-text-content">
              <span className="section-kicker">OUR EQUIPMENT</span>
              <h2 className="section-title">Modern, Well-Maintained Equipment</h2>
              <p className="section-subtitle">
                We operate 53' refrigerated trailers with reliable tractors to keep your freight safe and on schedule.
              </p>
              <Link to="/equipment" className="btn btn-primary">View Our Equipment <span className="service-link-arrow">→</span></Link>
            </div>
            <div className="equipment-grid">
              {[
                { img: '/images/equip-kenworth.jpg', name: 'Kenworth T680', sub: 'Reliable & efficient' },
                { img: '/images/equip-thermo-king.jpg', name: 'Thermo King / Carrier', sub: 'Temperature control' },
                { img: '/images/equip-reefer-trailer.jpg', name: "53' Reefer Trailer", sub: 'Clean, well-maintained' },
              ].map(({ img, name, sub }) => (
                <div className="equipment-card" key={name}>
                  <div className="equipment-img-container">
                    <img src={img} alt={name} className="equipment-img" loading="lazy" />
                  </div>
                  <div className="equipment-caption">
                    <h3 className="equipment-name">{name}</h3>
                    <p className="equipment-sub">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE + DRIVER + QUOTE ── */}
      <section className="coverage-quote-section" id="coverage">
        <div className="container">
          <div className="coverage-quote-grid">
            <div className="coverage-column">
              <div className="coverage-top-row">
                <div className="coverage-header">
                  <span className="section-kicker">COVERAGE AREA</span>
                  <h2 className="section-title">Interstate Service Across the U.S.</h2>
                  <p className="coverage-description">
                    We provide refrigerated and general freight transportation throughout the United States
                    with strong lanes on the East Coast, Texas and key regional markets.
                  </p>
                  <Link to="/coverage" className="btn btn-primary" style={{ marginTop: 16 }}>View Coverage Map <span className="service-link-arrow">→</span></Link>
                </div>
                <div className="map-card">
                  <img src="/images/royal-coverage-map.svg" alt="Royal Express Nationwide Coverage Map" className="map-svg-element" loading="lazy" />
                  <div className="map-card-footer">
                    <div className="map-legend">
                      <div className="legend-item"><span className="legend-star" /><span>HQ — Silver Spring, MD</span></div>
                      <div className="legend-item"><span className="legend-route" /><span>Primary Lanes</span></div>
                    </div>
                    <span className="stat-live-indicator">● Active Network</span>
                  </div>
                </div>
              </div>

              <div className="driver-card" id="driver-opportunities">
                <div className="driver-content">
                  <span className="section-kicker text-red">DRIVER OPPORTUNITIES</span>
                  <h3 className="driver-title">Drive with Royal Express LLC</h3>
                  <p className="driver-desc">We work with experienced, professional drivers who take pride in safety and on-time delivery.</p>
                  <div className="driver-benefits-grid">
                    {['Competitive pay', '24/7 support', 'Consistent freight', 'Clear communication'].map(b => (
                      <div className="driver-benefit-item" key={b}>
                        <span className="benefit-icon"><svg className="benefit-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="#fff" strokeWidth="3" fill="none"/></svg></span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/drivers" className="btn btn-primary" style={{ marginTop: 4 }}>Apply to Drive <span className="service-link-arrow">→</span></Link>
                </div>
                <div className="driver-img-wrapper">
                  <img src="/images/driver-truck.jpg" alt="Royal Express Truck" className="driver-truck-img" loading="lazy" />
                  <div className="driver-img-overlay" />
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div id="quote-form-section">
              <div className="quote-card">
                <div className="quote-header">
                  <h2 className="quote-title">Get a Freight Quote</h2>
                  <p className="quote-subtitle">Send us your load details and we'll get back to you quickly.</p>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
