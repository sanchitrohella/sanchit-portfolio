import "./ExperienceTimelineItem.scss";

function ExperienceTimelineItem({ experienceItem }) {
  const { company, employmentType, highlights, isCurrent, period, role } =
    experienceItem;

  return (
    <li className="experience-item">
      <span className="experience-item__marker" aria-hidden="true"></span>
      <article className="experience-item__card">
        <header className="experience-item__header">
          <div>
            <p className="experience-item__company">{company}</p>
            <h3>{role}</h3>
          </div>
          {isCurrent && (
            <span className="experience-item__current">Current</span>
          )}
        </header>

        <dl className="experience-item__meta">
          <div>
            <dt>Period</dt>
            <dd>{period}</dd>
          </div>
          <div>
            <dt>Employment</dt>
            <dd>{employmentType}</dd>
          </div>
        </dl>

        <h4>Responsibilities</h4>
        <ul className="experience-item__highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default ExperienceTimelineItem;
