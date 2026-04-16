import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <span className="brand-mark">AS</span>
          <div className="brand-text">
            <span className="brand-name">Aliya Saeed Law Associates</span>
            <span className="brand-tagline">Advocates &amp; Legal Consultants</span>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/practice-areas" className="nav-link">
            Practice Areas
          </NavLink>
          <NavLink to="/team" className="nav-link">
            Team
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
