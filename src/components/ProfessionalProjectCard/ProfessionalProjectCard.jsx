import './ProfessionalProjectCard.scss'

function ProfessionalProjectCard({ project, index }) {
  const {
    businessProblem,
    category,
    contributions,
    id,
    name,
    role,
    technologies,
    visualVariant,
  } = project

  return (
    <article className="professional-project" aria-labelledby={`${id}-title`}>
      <div
        className={`professional-project__visual professional-project__visual--${visualVariant}`}
        aria-hidden="true"
      >
        <div className="professional-project__visual-header">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{category}</span>
        </div>
        <div className="professional-project__visual-canvas">
          {Array.from({ length: 6 }, (_, itemIndex) => (
            <span key={itemIndex}></span>
          ))}
        </div>
      </div>

      <div className="professional-project__content">
        <p className="professional-project__category">{category}</p>
        <h3 id={`${id}-title`}>{name}</h3>

        <dl className="professional-project__overview">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Business problem</dt>
            <dd>{businessProblem}</dd>
          </div>
        </dl>

        <div className="professional-project__details">
          <h4>Key contributions</h4>
          <ul className="professional-project__contributions">
            {contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </div>

        <ul
          className="professional-project__technologies"
          aria-label="Technologies used"
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProfessionalProjectCard
