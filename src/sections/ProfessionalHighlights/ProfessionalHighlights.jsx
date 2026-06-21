import ProfessionalHighlight from '../../components/ProfessionalHighlight/ProfessionalHighlight'
import Section from '../../components/Section/Section'
import { professionalHighlights } from '../../data/professionalHighlights'
import './ProfessionalHighlights.scss'

function ProfessionalHighlights() {
  return (
    <Section
      className="professional-highlights"
      ariaLabelledby="professional-highlights-title"
    >
      <div className="professional-highlights__panel">
        <header className="professional-highlights__header">
          <p>At a glance</p>
          <h2 id="professional-highlights-title">Professional Highlights</h2>
        </header>

        <div className="professional-highlights__grid">
          {professionalHighlights.map((highlight, index) => (
            <ProfessionalHighlight
              key={highlight.title}
              {...highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProfessionalHighlights
