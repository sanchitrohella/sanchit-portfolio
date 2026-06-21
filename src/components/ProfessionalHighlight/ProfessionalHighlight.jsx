import "./ProfessionalHighlight.scss";

function ProfessionalHighlight({ description, index, title }) {
  return (
    <article className="professional-highlight">
      <div className="professional-highlight__indicator" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ProfessionalHighlight;
