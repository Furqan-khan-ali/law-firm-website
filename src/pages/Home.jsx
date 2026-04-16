import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-kicker">Boutique law firm • Karachi</p>
            <h1>Clarity, precision &amp; trusted legal counsel.</h1>
            <p className="hero-text">
              We help businesses and individuals navigate complex legal challenges with clear, commercially-focused advice.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a consultation
              </Link>
              <Link to="/practice-areas" className="btn btn-ghost">
                View practice areas
              </Link>
            </div>
            <div className="hero-meta">
              <span>15+ years of combined experience</span>
              <span>Corporate • Litigation • Advisory</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">Need urgent legal help?</div>
            <p className="hero-card-text">
              Share your matter and our team will get back to you within one business day.
            </p>
            <ul className="hero-list">
              <li>Contract review &amp; drafting</li>
              <li>Business &amp; startup advisory</li>
              <li>Disputes, notices &amp; litigation strategy</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">
              Submit a matter
            </Link>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container section-header">
          <h2>Key practice areas</h2>
          <p>
            A focused set of services designed to support entrepreneurs, growing businesses and high-net-worth individuals.
          </p>
        </div>
        <div className="container cards-grid">
          <div className="card">
            <h3>Corporate &amp; Commercial</h3>
            <p>
              Company structuring, shareholder agreements, joint ventures, M&amp;A support and day-to-day corporate governance.
            </p>
          </div>
          <div className="card">
            <h3>Contracts &amp; Transactions</h3>
            <p>
              Drafting and negotiation of commercial contracts, SaaS agreements, SLAs, NDAs and vendor / supplier contracts.
            </p>
          </div>
          <div className="card">
            <h3>Disputes &amp; Litigation Strategy</h3>
            <p>
              Pre-litigation advice, notices, settlement negotiations and coordination with counsel across forums.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-header">
          <h2>Why clients work with us</h2>
        </div>
        <div className="container cards-grid three">
          <div className="card small">
            <h3>Commercially-minded</h3>
            <p>We focus on practical outcomes, not just legal theory.</p>
          </div>
          <div className="card small">
            <h3>Clear communication</h3>
            <p>Concise, actionable advice that your team can actually use.</p>
          </div>
          <div className="card small">
            <h3>Partner-led matters</h3>
            <p>Every mandate is supervised by a senior lawyer.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
