import { Link } from 'react-router-dom'

const lanes = [
  { region: 'East Coast Corridor', states: 'MD · VA · NC · SC · GA · FL', desc: 'Our home base is Silver Spring, MD. We run heavy volume up and down the I-95 corridor, covering all major East Coast markets from Maine to Miami.', color: '#E51B24' },
  { region: 'Texas & Gulf Coast', states: 'TX · LA · MS · AL', desc: 'Strong produce and refrigerated freight lanes between Texas and the Southeast. Dallas, Houston, and San Antonio are key anchor points for our Texas operations.', color: '#1a56db' },
  { region: 'Midwest & Great Lakes', states: 'OH · IN · IL · MI · WI · MN', desc: 'Regular freight lanes serving Chicago, Detroit, and Cleveland distribution hubs. Ideal for both reefer and dry freight from the East Coast.', color: '#0e9f6e' },
  { region: 'Southeast Markets', states: 'TN · KY · AR · MO', desc: 'Connecting the Southeast to the national distribution network with reliable transit times and direct routing through Nashville and Memphis.', color: '#f59e0b' },
  { region: 'Mid-Atlantic & Northeast', states: 'PA · NJ · NY · CT · MA', desc: 'Dense metro freight lanes covering Philadelphia, New York, and Boston — critical markets with high-frequency load opportunities.', color: '#8b5cf6' },
  { region: 'Nationwide OTR', states: 'All 48 Contiguous States', desc: 'Beyond our core lanes, we accept nationwide loads and work with brokers and shippers across all 48 states for one-way and round-trip capacity.', color: '#E51B24' },
]

const stats = [
  { num: '48', label: 'States Covered' },
  { num: '6', label: 'Primary Freight Lanes' },
  { num: '24/7', label: 'Dispatch Support' },
  { num: '53\'', label: 'Reefer Trailers' },
]

export default function CoveragePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Coverage</span>
          </div>
          <span className="section-kicker">SERVICE AREA</span>
          <h1 className="section-title">Interstate Service Across the U.S.</h1>
          <p className="section-subtitle">
            Royal Express operates strong freight lanes coast to coast with a focus on East Coast, Texas, and key Midwest markets.
          </p>
        </div>
      </div>

      <section className="coverage-stats-bar">
        <div className="container">
          <div className="coverage-stats-grid">
            {stats.map(({ num, label }) => (
              <div key={label} className="coverage-stat">
                <div className="coverage-stat-num">{num}</div>
                <div className="coverage-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-full-map">
        <div className="container">
          <div className="section-intro--sm">
            <span className="section-kicker">INTERACTIVE COVERAGE MAP</span>
            <h2 className="section-title">Our Nationwide Network</h2>
            <p className="section-subtitle">Our Silver Spring, MD headquarters anchors routes across the entire continental U.S.</p>
          </div>
          <div className="map-panel">
            <img src="/images/royal-coverage-map.svg" alt="Royal Express Nationwide Coverage Map" className="map-panel-img" />
            <div className="map-panel-legend">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 12, height: 12, background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 6px rgba(229,27,36,0.8)', display: 'inline-block' }} />
                <span>Headquarters — Silver Spring, MD</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 20, height: 3, background: 'var(--color-primary)', borderRadius: 2, display: 'inline-block' }} />
                <span>Primary High-Volume Freight Lanes</span>
              </div>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>● Active Interstate Network</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="section-intro--sm">
            <span className="section-kicker">FREIGHT LANES</span>
            <h2 className="section-title">Our Core Service Regions</h2>
          </div>
          <div className="lanes-grid">
            {lanes.map(({ region, states, desc, color }, index) => (
              <div key={region} className="lane-card">
                <div className="lane-num" style={{ color }}>{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <div className="lane-title">{region}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: 6, letterSpacing: '0.05em' }}>{states}</div>
                  <p className="lane-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--navy">
        <div className="container">
          <span className="section-kicker">SHIP WITH US</span>
          <h2 className="section-title text-white">Need Freight Moved in These Lanes?</h2>
          <p className="cta-copy">
            Get a fast quote from our dispatch team — we cover your region.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Request a Quote →</Link>
            <a href="tel:6824073621" className="btn btn-outline">Call (682) 407-3621</a>
          </div>
        </div>
      </section>
    </>
  )
}
