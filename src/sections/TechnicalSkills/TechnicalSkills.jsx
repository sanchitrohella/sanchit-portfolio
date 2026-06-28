import SkillGroup from '../../components/SkillGroup/SkillGroup'
import Section from '../../components/Section/Section'
import { skills } from '../../data/skills'
import './TechnicalSkills.scss'

function TechnicalSkills() {
  return (
    <Section
      className="technical-skills"
      id="skills"
      ariaLabelledby="technical-skills-heading"
    >
      <div className="technical-skills__intro">
        <p>Technical Skills</p>
        <h2 id="technical-skills-heading">Technical Skills</h2>
        <p>
          A practical skill set focused on building responsive, maintainable,
          API-driven frontend applications.
        </p>
      </div>

      <div className="technical-skills__grid">
        {skills.map((group) => (
          <SkillGroup group={group} key={group.category} />
        ))}
      </div>
    </Section>
  )
}

export default TechnicalSkills
