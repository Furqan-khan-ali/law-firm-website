import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Aliya Saeed Law Associates</div>
          <p className="footer-text">
            A boutique law firm committed to delivering clear, practical legal advice with integrity and discretion.
          </p>
        </div>
        <div>
          <div className="footer-heading">Office</div>
          <p className="footer-text">
            12th Floor, Business Avenue<br />
            Financial District, Karachi<br />
            Pakistan
          </p>
        </div>
        <div>
          <div className="footer-heading">Quick Links</div>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {currentYear} Aliya Saeed Law Associates. All rights reserved.</span>
          <span className="footer-bottom-note">This website is for informational purposes only and does not constitute legal advice.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
