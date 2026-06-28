import PersonalProjectCard from '../../components/PersonalProjectCard/PersonalProjectCard'
import Section from '../../components/Section/Section'
import { personalProjects } from '../../data/personalProjects'
import './PersonalProjects.scss'

function PersonalProjects() {
  return (
    <Section
      className="personal-projects"
      id="personal-projects"
      ariaLabelledby="personal-projects-heading"
    >
      <header className="personal-projects__header">
        <p>Personal Projects</p>
        <h2 id="personal-projects-heading">Personal Projects</h2>
        <p>
          Selected personal projects that demonstrate frontend development,
          responsive UI, full-stack learning, and practical
          application-building.
        </p>
      </header>

      <div className="personal-projects__grid">
        {personalProjects.map((project) => (
          <PersonalProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Section>
  )
}

export default PersonalProjects
