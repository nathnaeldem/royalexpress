import { Link } from 'react-router-dom'

const fleet = [
  {
    img: '/images/equip-kenworth.jpg',
    name: 'Kenworth T680',
    category: 'Tractor',
    specs: [
      { label: 'Engine', value: 'PACCAR MX-13 455HP' },
      { label: 'Transmission', value: 'Eaton Endurant 12-Speed Auto' },
      { label: 'Sleeper', value: '76" Mid-Roof Sleeper' },
      { label: 'MPG', value: 'Up to 8.5 MPG (aerodynamic pkg)' },
    ],
    desc: 'Our primary tractor unit — the Kenworth T680 — is known for fuel efficiency, driver comfort, and reliability on long interstate hauls.',
  },
  {
    img: '/images/equip-thermo-king.jpg',
    name: 'Thermo King / Carrier',
    category: 'Refrigeration Unit',
    specs: [
      { label: 'Temp Range', value: '-20°F to +70°F' },
      { label: 'Control', value: 'Digital SmartPower Display' },
      { label: 'Fuel', value: 'Diesel (independent engine)' },
      { label: 'Monitoring', value: 'Remote telematics & alerts' },
    ],
    desc: 'Industry-leading refrigeration units maintain precise temperatures for frozen, fresh, and pharmaceutical cargo throughout the full trip.',
  },
  {
    img: '/images/equip-reefer-trailer.jpg',
    name: "53' Reefer Trailer",
    category: 'Trailer',
    specs: [
      { label: 'Length', value: "53 feet" },
      { label: 'Capacity', value: '45,000 lbs payload' },
      { label: 'Interior', value: 'Food-grade aluminum walls' },
      { label: 'Tracking', value: 'GPS + door sensors' },
    ],
    desc: 'Our 53-foot refrigerated trailers are regularly maintained, clean, and certified for food-grade loads. Equipped with E-track logistics systems.',
  },
]

const maintenanceSteps = [
  { num: '01', title: 'Pre-Trip Inspections', desc: 'Every driver performs a full DOT-compliant pre-trip inspection before every dispatch.' },
  { num: '02', title: 'Preventive Maintenance', desc: 'Scheduled PM intervals at certified facilities — engines, brakes, tires, and reefer units.' },
  { num: '03', title: 'Temperature Calibration', desc: 'Reefer units calibrated before every cold load to ensure accuracy from start to finish.' },
  { num: '04', title: 'Fleet Records', desc: 'Digital maintenance logs maintained for all tractors and trailers — fully auditable.' },
]

export default function EquipmentPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Equipment</span>
          </div>
          <span className="section-kicker">OUR FLEET</span>
          <h1 className="section-title">Modern, Well-Maintained Equipment</h1>
          <p className="section-subtitle">
            We invest in top-tier tractors, trailers, and refrigeration units to ensure your freight arrives safely, on time, and at the right temperature.
          </p>
        </div>
      </div>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="fleet-stack">
            {fleet.map(({ img, name, category, specs, desc }, i) => (
              <div key={name} className={`split-row${i % 2 === 1 ? ' is-reversed' : ''}`}>
                <div className="split-media">
                  <img src={img} alt={name} className="split-media-img split-media-img--sm" />
                </div>
                <div className="split-content">
                  <span className="section-kicker">{category}</span>
                  <h2 className="section-title">{name}</h2>
                  <p className="section-subtitle">{desc}</p>
                  <div className="specs-table">
                    {specs.map(({ label, value }) => (
                      <div key={label} className="specs-row">
                        <span className="specs-label">{label}</span>
                        <span className="specs-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--gray">
        <div className="container">
          <div className="section-intro">
            <span className="section-kicker">MAINTENANCE PROGRAM</span>
            <h2 className="section-title">Keeping Every Unit Road-Ready</h2>
            <p className="section-subtitle">Our disciplined maintenance program keeps downtime near zero and your freight on schedule.</p>
          </div>
          <div className="cards-grid-4">
            {maintenanceSteps.map(({ num, title, desc }) => (
              <div key={num} className="safety-card">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.2, lineHeight: 1, marginBottom: 12 }}>{num}</div>
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
          <h2 className="section-title text-white">Your Cargo Deserves the Best Equipment</h2>
          <p className="cta-copy">
            Request a freight quote and let our modern fleet go to work for you.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Get a Quote →</Link>
            <Link to="/services" className="btn btn-outline">View Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
