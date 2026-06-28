import './ServiceCard.scss'

function ServiceCard({ index, service }) {
  const { description, id, strengths, title } = service

  return (
    <article className="service-card" aria-labelledby={`${id}-title`}>
      <div className="service-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="service-card__content">
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="service-card__strengths">
        <h4>Strengths</h4>
        <ul>
          {strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ServiceCard
