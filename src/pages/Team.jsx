function Team() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Our team</h1>
        <p>Experienced, responsive and committed to delivering clear, practical advice.</p>
      </header>

      <section className="section">
        <div className="container cards-grid three">
          <article className="profile-card">
            <div className="avatar">AF</div>
            <h2>Ahmed Farooq</h2>
            <p className="profile-title">Partner</p>
            <p className="profile-text">
              Focuses on corporate advisory, complex contracts and cross-border transactions, with experience acting for
              regional and international clients.
            </p>
          </article>
          <article className="profile-card">
            <div className="avatar">SZ</div>
            <h2>Sarah Zahid</h2>
            <p className="profile-title">Partner</p>
            <p className="profile-text">
              Advises on commercial disputes, regulatory matters and investigations, with a strong background in litigation
              strategy.
            </p>
          </article>
          <article className="profile-card">
            <div className="avatar">HM</div>
            <h2>Hassan Malik</h2>
            <p className="profile-title">Senior Associate</p>
            <p className="profile-text">
              Works with founders and growth-stage companies on contract negotiation, employment matters and day-to-day
              corporate issues.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Team
