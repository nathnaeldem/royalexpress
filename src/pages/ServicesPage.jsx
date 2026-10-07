import { Link } from 'react-router-dom'

const services = [
  {
    img: '/images/service-reefer.jpg',
    title: 'Refrigerated Freight',
    desc: 'Our temperature-controlled reefer fleet keeps your perishable cargo safe from dock to destination. We handle frozen foods, fresh produce, dairy, pharmaceuticals, and any commodity requiring precise temperature management.',
    features: ['Precise temperature monitoring', 'Frozen & fresh cargo capability', 'Food-grade trailers', 'Pre-cooled trailers available'],
  },
  {
    img: '/images/service-general.jpg',
    title: 'General Freight',
    desc: 'From palletized dry goods to industrial products, our experienced drivers handle general freight with the same care and professionalism as our reefer loads. Nationwide lanes with consistent on-time performance.',
    features: ['Palletized & floor-loaded', 'Nationwide OTR lanes', 'Blanket-wrap available', 'Real-time load tracking'],
  },
  {
    img: '/images/service-dedicated.jpg',
    title: 'Dedicated & Expedited',
    desc: 'When timing is everything, count on Royal Express for dedicated lane commitments and expedited services. We work directly with shippers to guarantee capacity on time-critical freight.',
    features: ['Guaranteed capacity', 'Priority dispatch', 'Direct point-to-point routing', '24/7 communication'],
  },
]

const whyUs = [
  { icon: '🏆', title: 'Proven Track Record', desc: 'Years of reliable service with consistent on-time delivery across all major interstate lanes.' },
  { icon: '📡', title: 'Real-Time Communication', desc: '24/7 dispatch support keeps you informed at every stage of your shipment.' },
  { icon: '🔒', title: 'Cargo Security', desc: 'Modern sealing, load locks, and GPS tracking ensure your freight arrives intact.' },
  { icon: '♻️', title: 'Flexible Capacity', desc: 'We scale with your needs — whether a single load or a recurring dedicated lane.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span>
          </div>
          <span className="section-kicker">WHAT WE OFFER</span>
          <h1 className="section-title">Freight Services Built for Reliability</h1>
          <p className="section-subtitle">
            From frozen produce to dry goods, Royal Express delivers with modern equipment and a professional team committed to on-time performance.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <section style={{ padding: '72px 0', background: 'var(--color-white)' }}>
        <div className="container">
          {services.map(({ img, title, desc, features }, i) => (
            <div key={title} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 56,
              alignItems: 'center',
              marginBottom: i < services.length - 1 ? 80 : 0,
            }}>
              <div style={{ order: i % 2 === 1 ? 2 : 0 }}>
                <img src={img} alt={title} style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
              </div>
              <div style={{ order: i % 2 === 1 ? 1 : 0 }}>
                <span className="section-kicker">SERVICE {String(i + 1).padStart(2, '0')}</span>
                <h2 className="section-title">{title}</h2>
                <p className="section-subtitle">{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: 'var(--color-gray-700)' }}>
                      <span style={{ width: 20, height: 20, background: 'var(--color-primary)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" style={{ width: 10, height: 10 }}><polyline points="20 6 9 17 4 12" stroke="#fff" strokeWidth="3" fill="none"/></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">Request a Quote <span className="service-link-arrow">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '72px 0', background: 'var(--color-gray-50)', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
            <span className="section-kicker">WHY ROYAL EXPRESS</span>
            <h2 className="section-title">The Royal Express Difference</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="safety-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{icon}</div>
                <h3 className="safety-card-title">{title}</h3>
                <p className="safety-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--color-navy-950)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-kicker">READY TO SHIP?</span>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Let's Move Your Freight</h2>
          <p style={{ color: 'var(--color-gray-400)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
            Contact our dispatch team for a fast, accurate freight quote.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get a Quote →</Link>
            <a href="tel:6824073621" className="btn btn-outline">Call (682) 407-3621</a>
          </div>
        </div>
      </section>
    </>
  )
}
