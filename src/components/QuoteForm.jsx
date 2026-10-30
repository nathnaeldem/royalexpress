import { useState } from 'react'

const INITIAL_FORM = {
  companyName: '',
  contactName: '',
  phone: '',
  email: '',
  pickup: '',
  delivery: '',
  commodity: '',
  temperature: '',
  weight: '',
  serviceType: '',
  notes: '',
}

export default function QuoteForm({ source = 'Website Quote Form' }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/quote.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      setForm(INITIAL_FORM)
    } catch (err) {
      setError(err.message || 'Unable to send your request. Please call (682) 407-3621.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{ padding: '40px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy-950)', marginBottom: 8 }}>Quote Request Sent!</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', marginBottom: 20 }}>
          We'll review your load details and reach out shortly.
        </p>
        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    )
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">Company Name <span className="req">*</span></label>
          <input type="text" id="companyName" name="companyName" className="form-input" placeholder="Your company name" required value={form.companyName} onChange={handleChange} disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="contactName" className="form-label">Contact Name <span className="req">*</span></label>
          <input type="text" id="contactName" name="contactName" className="form-input" placeholder="Your name" required value={form.contactName} onChange={handleChange} disabled={loading} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number <span className="req">*</span></label>
          <input type="tel" id="phone" name="phone" className="form-input" placeholder="(123) 456-7890" required value={form.phone} onChange={handleChange} disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email <span className="req">*</span></label>
          <input type="email" id="email" name="email" className="form-input" placeholder="you@company.com" required value={form.email} onChange={handleChange} disabled={loading} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="pickup" className="form-label">Pickup City, State <span className="req">*</span></label>
          <input type="text" id="pickup" name="pickup" className="form-input" placeholder="e.g. Dallas, TX" required value={form.pickup} onChange={handleChange} disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="delivery" className="form-label">Delivery City, State <span className="req">*</span></label>
          <input type="text" id="delivery" name="delivery" className="form-input" placeholder="e.g. New York, NY" required value={form.delivery} onChange={handleChange} disabled={loading} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="commodity" className="form-label">Commodity <span className="req">*</span></label>
          <input type="text" id="commodity" name="commodity" className="form-input" placeholder="e.g. Food, Produce" required value={form.commodity} onChange={handleChange} disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="temperature" className="form-label">Temperature (°F)</label>
          <input type="text" id="temperature" name="temperature" className="form-input" placeholder="e.g. 34°F or Dry" value={form.temperature} onChange={handleChange} disabled={loading} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="weight" className="form-label">Est. Weight (lbs)</label>
          <input type="number" id="weight" name="weight" className="form-input" placeholder="e.g. 42000" value={form.weight} onChange={handleChange} disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="serviceType" className="form-label">Service Type</label>
          <select id="serviceType" name="serviceType" className="form-select" value={form.serviceType} onChange={handleChange} disabled={loading}>
            <option value="">— Select —</option>
            <option>Refrigerated Freight</option>
            <option>General Freight</option>
            <option>Dedicated & Expedited</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes" className="form-label">Additional Notes</label>
        <textarea id="notes" name="notes" className="form-textarea" placeholder="Pickup date, special requirements..." value={form.notes} onChange={handleChange} disabled={loading} />
      </div>

      {error && (
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
        <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        {loading ? 'Sending…' : 'Submit Quote Request'}
      </button>
    </form>
  )
}
