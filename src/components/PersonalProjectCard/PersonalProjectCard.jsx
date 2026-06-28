import "./PersonalProjectCard.scss";

function PersonalProjectCard({ project }) {
  const {
    description,
    features,
    id,
    links = [],
    name,
    role,
    screenshot,
    technologies,
    type,
  } = project;

  return (
    <article
      className={`personal-project-card personal-project-card--${id}`}
      aria-labelledby={`${id}-title`}
    >
      <figure className="personal-project-card__media">
        <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
      </figure>

      <div className="personal-project-card__content">
        <p className="personal-project-card__type">{type}</p>
        <h3 id={`${id}-title`}>{name}</h3>
        <p className="personal-project-card__description">{description}</p>

        <dl className="personal-project-card__role">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
        </dl>

        <div className="personal-project-card__features">
          <h4>Key features</h4>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <ul
          className="personal-project-card__technologies"
          aria-label={`${name} technologies`}
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="personal-project-card__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default PersonalProjectCard;
