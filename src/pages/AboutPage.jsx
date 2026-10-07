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

      {/* Mission Statement */}
      <section style={{ padding: '72px 0', background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <img src="/images/hero-truck.jpg" alt="Royal Express Fleet" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <span className="section-kicker">WHO WE ARE</span>
              <h2 className="section-title">A Carrier You Can Count On</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: 20 }}>
                Royal Express LLC was founded with a clear purpose: to provide shippers with a dependable, professional freight partner — and to give drivers a company worth driving for.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: 28 }}>
                We operate 53' refrigerated trailers out of our Silver Spring, MD headquarters, with strong freight lanes across the East Coast, Texas, and the Midwest. Our team is small by design — which means every customer and every driver gets real attention, not just a ticket number.
              </p>
              <div style={{ display: 'flex', gap: 32 }}>
                {[{ num: '48+', label: 'States Served' }, { num: '5+', label: 'Years Operating' }, { num: '24/7', label: 'Dispatch' }].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--color-primary)' }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gray-500)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '72px 0', background: 'var(--color-gray-50)', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 40px' }}>
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

      {/* Timeline */}
      <section style={{ padding: '72px 0', background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 48px' }}>
            <span className="section-kicker">OUR JOURNEY</span>
            <h2 className="section-title">How We Got Here</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map(({ year, event }, i) => (
              <div key={year} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-navy-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.8rem', border: '2px solid var(--color-primary)', flexShrink: 0 }}>{year}</div>
                  {i < milestones.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--color-gray-200)', minHeight: 36, margin: '4px 0' }} />}
                </div>
                <div style={{ paddingBottom: 32, paddingTop: 12 }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: 1.6 }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--color-navy-950)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-kicker">WORK WITH US</span>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Let's Move Freight Together</h2>
          <p style={{ color: 'var(--color-gray-400)', maxWidth: 480, margin: '0 auto 32px' }}>
            Whether you need a carrier or want to join our team — we'd love to connect.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Request a Quote →</Link>
            <Link to="/drivers" className="btn btn-outline">Driver Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
