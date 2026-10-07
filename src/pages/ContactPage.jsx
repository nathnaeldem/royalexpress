import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Contact</span>
          </div>
          <span className="section-kicker">GET IN TOUCH</span>
          <h1 className="section-title">Request a Freight Quote</h1>
          <p className="section-subtitle">
            Fill out the form and our dispatch team will respond with a competitive rate — usually within 1 business hour.
          </p>
        </div>
      </div>

      <section style={{ padding: '72px 0', background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'flex-start' }}>
            {/* Contact Info Column */}
            <div>
              <span className="section-kicker">CONTACT INFO</span>
              <h2 className="section-title">Talk to Our Team</h2>
              <p className="section-subtitle">
                Whether you're a shipper looking for capacity or a driver interested in joining our team — we'd love to hear from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  {
                    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.128.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.572 2.81.7A2 2 0 0 1 22 16.92z"/>,
                    label: 'Phone / Dispatch',
                    value: '(682) 407-3621',
                    href: 'tel:6824073621',
                  },
                  {
                    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                    label: 'Email',
                    value: 'royalexpressllc@mail.com',
                    href: 'mailto:royalexpressllc@mail.com',
                  },
                  {
                    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
                    label: 'Headquarters',
                    value: 'Silver Spring, MD — Serving All 48 States',
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: 'rgba(229,27,36,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" style={{ width: 20, height: 20 }}>{icon}</svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gray-500)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                      {href
                        ? <a href={href} style={{ fontWeight: 700, color: 'var(--color-navy-950)', fontSize: '0.95rem', transition: 'color 0.15s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'var(--color-navy-950)'}>{value}</a>
                        : <span style={{ fontWeight: 600, color: 'var(--color-navy-950)', fontSize: '0.9rem' }}>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div style={{ marginTop: 36, background: 'var(--color-gray-50)', borderRadius: 'var(--radius-md)', padding: 24, border: '1px solid var(--color-gray-200)' }}>
                <div style={{ fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: 12, fontSize: '0.9rem' }}>Dispatch Hours</div>
                {[
                  ['Monday – Friday', '6:00 AM – 9:00 PM'],
                  ['Saturday', '7:00 AM – 5:00 PM'],
                  ['Sunday / Holidays', 'On-call for active loads'],
                ].map(([day, hours]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-gray-200)', fontSize: '0.83rem' }}>
                    <span style={{ color: 'var(--color-gray-600)' }}>{day}</span>
                    <span style={{ fontWeight: 700, color: 'var(--color-navy-950)' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <div className="quote-card">
                <div className="quote-header">
                  <h2 className="quote-title">Get a Freight Quote</h2>
                  <p className="quote-subtitle">We'll respond with a rate within 1 business hour.</p>
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
