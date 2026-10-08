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

      <section className="page-section page-section--white">
        <div className="container">
          {services.map(({ img, title, desc, features }, i) => (
            <div key={title} className={`split-row${i % 2 === 1 ? ' is-reversed' : ''}`}>
              <div className="split-media">
                <img src={img} alt={title} className="split-media-img" />
              </div>
              <div className="split-content">
                <span className="section-kicker">SERVICE {String(i + 1).padStart(2, '0')}</span>
                <h2 className="section-title">{title}</h2>
                <p className="section-subtitle">{desc}</p>
                <ul className="feature-list">
                  {features.map(f => (
                    <li key={f}>
                      <span className="feature-check">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="#fff" strokeWidth="3" fill="none"/></svg>
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

      <section className="page-section page-section--gray">
        <div className="container">
          <div className="section-intro">
            <span className="section-kicker">WHY ROYAL EXPRESS</span>
            <h2 className="section-title">The Royal Express Difference</h2>
          </div>
          <div className="cards-grid-4">
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

      <section className="page-section page-section--navy">
        <div className="container">
          <span className="section-kicker">READY TO SHIP?</span>
          <h2 className="section-title text-white">Let's Move Your Freight</h2>
          <p className="cta-copy">
            Contact our dispatch team for a fast, accurate freight quote.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Get a Quote →</Link>
            <a href="tel:6824073621" className="btn btn-outline">Call (682) 407-3621</a>
          </div>
        </div>
      </section>
    </>
  )
}
