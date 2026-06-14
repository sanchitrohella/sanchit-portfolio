import Container from '../Container/Container'
import './Section.scss'

function Section({
  children,
  className = '',
  id,
  ariaLabel,
  ariaLabelledby,
}) {
  const classes = ['section', className].filter(Boolean).join(' ')

  return (
    <section
      className={classes}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <Container>{children}</Container>
    </section>
  )
}

export default Section
