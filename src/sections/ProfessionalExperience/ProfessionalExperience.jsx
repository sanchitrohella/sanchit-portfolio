import ExperienceTimelineItem from '../../components/ExperienceTimelineItem/ExperienceTimelineItem'
import Section from '../../components/Section/Section'
import { experience } from '../../data/experience'
import './ProfessionalExperience.scss'

function ProfessionalExperience() {
  const { earlierCareer, softwareRoles } = experience

  return (
    <Section
      className="professional-experience"
      id="experience"
      ariaLabelledby="professional-experience-title"
    >
      <div className="professional-experience__panel">
        <header className="professional-experience__intro">
          <p>Career journey</p>
          <h2 id="professional-experience-title">Professional Experience</h2>
          <p>
            My experience spans enterprise frontend development, independent
            UI ownership, client communication, production support, and an
            earlier career before transitioning into software development.
          </p>
        </header>

        <ol className="professional-experience__timeline">
          {softwareRoles.map((experienceItem) => (
            <ExperienceTimelineItem
              key={`${experienceItem.company}-${experienceItem.period}`}
              experienceItem={experienceItem}
            />
          ))}
        </ol>

        <article
          className="professional-experience__earlier-career"
          aria-labelledby="earlier-career-title"
        >
          <div className="professional-experience__transition-label">
            Earlier professional career
          </div>
          <div>
            <p>{earlierCareer.organization}</p>
            <h3 id="earlier-career-title">{earlierCareer.role}</h3>
            <span>{earlierCareer.period}</span>
          </div>
          <p>{earlierCareer.description}</p>
        </article>
      </div>
    </Section>
  )
}

export default ProfessionalExperience
