import './SkillGroup.scss'

function SkillGroup({ group }) {
  const { category, skills } = group

  return (
    <article className="skill-group">
      <header className="skill-group__header">
        <span className="skill-group__marker" aria-hidden="true"></span>
        <h3>{category}</h3>
      </header>

      <ul className="skill-group__list" aria-label={`${category} skills`}>
        {skills.map((skill) => (
          <li
            className={skill.featured ? 'skill-group__pill is-featured' : 'skill-group__pill'}
            key={skill.name}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillGroup
