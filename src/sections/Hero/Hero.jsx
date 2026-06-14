import Section from '../../components/Section/Section'
import { socialLinks } from '../../data/socialLinks'
import './Hero.scss'

const resumeUrl = '/documents/Sanchit_Kumar_ATS_Resume_Updated.pdf'

function Hero() {
  return (
    <Section className="hero-section" id="home" ariaLabelledby="hero-title">
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">
          <span aria-hidden="true"></span>
          React Frontend Developer
        </p>

        <h1 id="hero-title">
          Building polished, responsive, and{' '}
          <span>business-focused web experiences.</span>
        </h1>

        <p className="hero-section__summary">
          I am a React Frontend Developer with 3 years and 9 months of
          experience building responsive web applications, integrating APIs,
          independently owning frontend development, and communicating directly
          with clients.
        </p>

        <p className="hero-section__availability">
          <span aria-hidden="true"></span>
          Open to frontend opportunities in Hyderabad and remote roles.
        </p>

        <div className="hero-section__actions">
          <a className="hero-section__button hero-section__button--primary" href="#projects">
            View My Work
          </a>
          <a className="hero-section__button" href={resumeUrl} download>
            Download Resume
          </a>
        </div>

        <ul className="hero-section__socials" aria-label="Social profiles">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-section__visual" aria-hidden="true">
        <div className="hero-section__window">
          <div className="hero-section__window-bar">
            <span></span>
            <span></span>
            <span></span>
            <p>portfolio.jsx</p>
          </div>

          <div className="hero-section__interface">
            <div className="hero-section__sidebar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-section__canvas">
              <div className="hero-section__code">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="hero-section__preview">
                <div></div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section__status-card">
          <span></span>
          <div>
            <p>Available for work</p>
            <small>Hyderabad · Remote</small>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
