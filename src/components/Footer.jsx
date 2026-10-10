import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-grid">
            {/* Brand */}
            <div className="footer-brand-col">
              <div className="footer-logo-wrap">
                <img src="/images/logo-emblem.png" alt="Royal Express Logo" className="footer-emblem" />
                <div>
                  <div className="footer-brand-name">ROYAL EXPRESS LLC</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-gray-500)' }}>TRANSPORTATION</div>
                </div>
              </div>
              <p className="footer-tagline">
                Reliable refrigerated and general freight transportation nationwide. Modern equipment, professional drivers, 24/7 support.
              </p>
              <ul className="footer-contact-list">
                <li>
                  <svg className="contact-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:6824073621">(682) 407-3621</a>
                </li>
                <li>
                  <svg className="contact-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:team@royalexpressllc.com">team@royalexpressllc.com</a>
                </li>
                <li>
                  <svg className="contact-icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Silver Spring, MD — Nationwide</span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Refrigerated Freight</Link></li>
                <li><Link to="/services">General Freight</Link></li>
                <li><Link to="/services">Dedicated &amp; Expedited</Link></li>
                <li><Link to="/coverage">Coverage Area</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/equipment">Our Equipment</Link></li>
                <li><Link to="/safety">Safety &amp; Compliance</Link></li>
                <li><Link to="/drivers">Driver Opportunities</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-col-title">Get in Touch</h4>
              <ul className="footer-links">
                <li><Link to="/contact">Request a Quote</Link></li>
                <li><a href="tel:6824073621">Call Dispatch</a></li>
                <li><a href="mailto:team@royalexpressllc.com">Email Us</a></li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link to="/contact" className="btn btn-primary btn-sm">Get a Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <span>&copy; {year} Royal Express LLC. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">DOT Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
