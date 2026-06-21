import Section from '../../components/Section/Section'
import { fitMitra } from '../../data/fitMitra'
import './FitMitraSpotlight.scss'

function FitMitraSpotlight() {
  return (
    <Section
      className="fitmitra-spotlight"
      ariaLabelledby="fitmitra-title"
    >
      <div className="fitmitra-spotlight__content">
        <div className="fitmitra-spotlight__heading-row">
          <p className="fitmitra-spotlight__eyebrow">Product spotlight</p>
          <span className="fitmitra-spotlight__status">{fitMitra.status}</span>
        </div>

        <h2 id="fitmitra-title">{fitMitra.name}</h2>
        <p className="fitmitra-spotlight__description">
          {fitMitra.description}
        </p>

        <dl className="fitmitra-spotlight__role">
          <dt>My role</dt>
          <dd>{fitMitra.role}</dd>
        </dl>

        <p className="fitmitra-spotlight__value-statement">
          {fitMitra.valueStatement}
        </p>

        <div className="fitmitra-spotlight__scope-note">
          <strong>{fitMitra.capabilityStatus}</strong>
          <p>
            The capabilities below describe the active product scope. They are
            not presented as production-complete features.
          </p>
          <p>{fitMitra.aiNote}</p>
        </div>

        <div className="fitmitra-spotlight__features">
          <h3>Feature areas</h3>
          <ul>
            {fitMitra.featureAreas.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="fitmitra-spotlight__stack">
          <h3>{fitMitra.stackLabel}</h3>
          <ul>
            {fitMitra.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="fitmitra-spotlight__visual">
        <figcaption>Conceptual product interface</figcaption>
        <div className="fitmitra-spotlight__dashboard" aria-hidden="true">
          <div className="fitmitra-spotlight__dashboard-bar">
            <span></span>
            <span></span>
            <span></span>
            <p>FitMitra planning workspace</p>
          </div>

          <div className="fitmitra-spotlight__dashboard-body">
            <aside>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </aside>

            <div className="fitmitra-spotlight__dashboard-content">
              <div className="fitmitra-spotlight__profile-card">
                <div></div>
                <span></span>
                <span></span>
              </div>

              <div className="fitmitra-spotlight__progress-card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="fitmitra-spotlight__plan-card">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="fitmitra-spotlight__nutrition-card">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="fitmitra-spotlight__visual-label">
          <span aria-hidden="true"></span>
          Planning and interface concept
        </div>
      </figure>
    </Section>
  )
}

export default FitMitraSpotlight
