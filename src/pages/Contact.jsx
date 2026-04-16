import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setError(null)

    const form = event.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xrerewnq', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <main className="page">
      <header className="page-header">
        <h1>Contact us</h1>
        <p>Share a brief overview of your matter and we will revert within one business day.</p>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <form className="card form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field-row">
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="03xx-xxxxxxx" />
              </div>
            </div>
            <div className="field-group">
              <label htmlFor="topic">Matter type</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="corporate">Corporate &amp; commercial</option>
                <option value="contracts">Contracts &amp; transactions</option>
                <option value="disputes">Disputes &amp; litigation</option>
                <option value="regulatory">Regulatory &amp; compliance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="field-group">
              <label htmlFor="message">Brief background</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Please do not include confidential details at this stage."
                required
              />
            </div>
            {status === 'success' && (
              <div className="form-success" style={{ color: '#22c55e', marginBottom: '1rem' }}>
                Thank you! Your enquiry has been sent. We will contact you within one business day.
              </div>
            )}
            {status === 'error' && error && (
              <div className="form-error" style={{ color: '#ef4444', marginBottom: '1rem' }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary full-width"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Submit enquiry'}
            </button>
            <p className="form-note">
              Submitting this form does not create a lawyer-client relationship. Please do not share privileged or
              confidential information.
            </p>
          </form>

          <aside className="card sidebar">
            <h2>Office details</h2>
            <p>
              12th Floor, Business Avenue
              <br /> Financial District, Karachi
            </p>
            <p>
              <strong>Email:</strong> contact@aliyasaeedlaw.pk
              <br />
              <strong>Phone:</strong> +92 (21) 1234 5678
            </p>
            <p className="sidebar-note">Meetings are by appointment only.</p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact
