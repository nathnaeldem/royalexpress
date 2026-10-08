import { Link } from 'react-router-dom'

const values = [
  { num: '01', title: 'Reliability', desc: 'We show up. Every load, every lane, every time. Our reputation is built on doing what we say we will do.' },
  { num: '02', title: 'Integrity', desc: 'Honest rates, transparent communication, and no surprises. We treat every shipper and driver with respect.' },
  { num: '03', title: 'Safety', desc: 'Safety is never compromised. Every truck, every driver, and every load operates within the highest safety standards.' },
  { num: '04', title: 'Excellence', desc: 'We don\'t settle for good enough. From equipment maintenance to customer communication — we hold ourselves to a higher standard.' },
]

const milestones = [
  { year: '2020', event: 'Royal Express LLC founded in Silver Spring, MD with a single truck and a vision.' },
  { year: '2021', event: 'Expanded fleet to 3 units — adding refrigerated reefer trailers and growing our East Coast lane presence.' },
  { year: '2022', event: 'Entered Texas and Gulf Coast freight markets. Began partnerships with regional produce shippers.' },
  { year: '2023', event: 'Expanded dispatch operations to 24/7 coverage. Added Midwest and Great Lakes freight lanes.' },
  { year: '2024', event: 'Fleet modernization with new Kenworth T680 tractors and upgraded Thermo King refrigeration units.' },
  { year: '2025', event: 'Now operating across all 48 contiguous states with a growing, professional team of drivers.' },
]

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>About</span>
          </div>
          <span className="section-kicker">OUR STORY</span>
          <h1 className="section-title">Built on Trust. Driven by Excellence.</h1>
          <p className="section-subtitle">
            Royal Express LLC is a freight carrier built from the ground up — with an unwavering commitment to reliability, safety, and treating every load as if it were our own.
          </p>
        </div>
      </div>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="split-row">
            <div className="split-media">
              <img src="/images/hero-truck.jpg" alt="Royal Express Fleet" className="split-media-img split-media-img--tall" />
            </div>
            <div className="split-content">
              <span className="section-kicker">WHO WE ARE</span>
              <h2 className="section-title">A Carrier You Can Count On</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: 20 }}>
                Royal Express LLC was founded with a clear purpose: to provide shippers with a dependable, professional freight partner — and to give drivers a company worth driving for.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: 28 }}>
                We operate 53' refrigerated trailers out of our Silver Spring, MD headquarters, with strong freight lanes across the East Coast, Texas, and the Midwest. Our team is small by design — which means every customer and every driver gets real attention, not just a ticket number.
              </p>
              <div className="about-stats">
                {[{ num: '48+', label: 'States Served' }, { num: '5+', label: 'Years Operating' }, { num: '24/7', label: 'Dispatch' }].map(({ num, label }) => (
                  <div key={label}>
                    <div className="about-stat-num">{num}</div>
                    <div className="about-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--gray">
        <div className="container">
          <div className="section-intro--sm">
            <span className="section-kicker">CORE VALUES</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="values-grid">
            {values.map(({ num, title, desc }) => (
              <div key={num} className="value-card">
                <div className="value-num">{num}</div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="section-intro">
            <span className="section-kicker">OUR JOURNEY</span>
            <h2 className="section-title">How We Got Here</h2>
          </div>
          <div className="timeline">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-year">{year}</div>
                  {i < milestones.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-body">
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: 1.6 }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--navy">
        <div className="container">
          <span className="section-kicker">WORK WITH US</span>
          <h2 className="section-title text-white">Let's Move Freight Together</h2>
          <p className="cta-copy">
            Whether you need a carrier or want to join our team — we'd love to connect.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Request a Quote →</Link>
            <Link to="/drivers" className="btn btn-outline">Driver Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
