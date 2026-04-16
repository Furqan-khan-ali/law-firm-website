function About() {
  return (
    <main className="page narrow">
      <header className="page-header">
        <h1>About the firm</h1>
        <p>
          Aliya Saeed Law Associates is a boutique law practice built around long-term relationships, responsive service and clear, practical
          advice.
        </p>
      </header>
      <section className="page-section">
        <h2>Our philosophy</h2>
        <p>
          We believe great legal advice should reduce complexity, not add to it. Our team combines top-tier experience with a
          pragmatic, business-first mindset.
        </p>
        <p>
          From early-stage startups to established corporates, we work closely with decision-makers to understand commercial
          objectives and design solutions that balance risk, cost and speed.
        </p>
      </section>
      <section className="page-section two-column">
        <div>
          <h2>How we work</h2>
          <ul className="list">
            <li>Direct access to senior lawyers</li>
            <li>Transparent, upfront fee structures</li>
            <li>Structured updates and clear timelines</li>
            <li>Focus on long-term partnership, not one-off files</li>
          </ul>
        </div>
        <div>
          <h2>Sectors</h2>
          <ul className="list">
            <li>Technology &amp; startups</li>
            <li>Financial services &amp; fintech</li>
            <li>Family-owned businesses</li>
            <li>Professional services</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About
