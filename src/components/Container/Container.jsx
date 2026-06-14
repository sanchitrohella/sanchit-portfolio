import './Container.scss'

function Container({ as: Element = 'div', children, className = '' }) {
  const classes = ['container', className].filter(Boolean).join(' ')

  return <Element className={classes}>{children}</Element>
}

export default Container
