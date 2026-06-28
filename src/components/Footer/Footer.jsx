import Container from '../Container/Container'
import { navigation } from '../../data/navigation'
import { socialLinks } from '../../data/socialLinks'
import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__brand">
          <a href="#home" aria-label="Sanchit Kumar, home">
            Sanchit Kumar
          </a>
          <p>React Frontend Developer</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2>Quick links</h2>
          <ul>
            {navigation.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__social">
          <h2>Social links</h2>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Sanchit Kumar. All rights reserved.</p>
          <p>Built with React, Vite, and SCSS.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
