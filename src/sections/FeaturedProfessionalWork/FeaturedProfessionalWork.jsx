import ProfessionalProjectCard from '../../components/ProfessionalProjectCard/ProfessionalProjectCard'
import Section from '../../components/Section/Section'
import { projects } from '../../data/projects'
import './FeaturedProfessionalWork.scss'

function FeaturedProfessionalWork() {
  return (
    <Section
      className="featured-work"
      id="projects"
      ariaLabelledby="featured-work-title"
    >
      <header className="featured-work__header">
        <div className="featured-work__intro-copy">
          <p>Selected case studies</p>
          <h2 id="featured-work-title">Featured Professional Work</h2>
          <p>
            Selected enterprise applications where I contributed to frontend
            development, API integration, user experience, and client-facing
            delivery.
          </p>
        </div>

        <ul className="featured-work__summary" aria-label="Work summary">
          <li>Enterprise applications</li>
          <li>Frontend and API delivery</li>
          <li>Client-facing collaboration</li>
        </ul>
      </header>

      <div className="featured-work__projects">
        {projects.map((project, index) => (
          <ProfessionalProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}

export default FeaturedProfessionalWork
