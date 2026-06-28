import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Section from '../../components/Section/Section'
import { services } from '../../data/services'
import './Services.scss'

function Services() {
  return (
    <Section
      className="services"
      id="services"
      ariaLabelledby="services-heading"
    >
      <div className="services__layout">
        <header className="services__intro">
          <p>Services and strengths</p>
          <h2 id="services-heading">How I Can Help</h2>
          <p>
            I focus on building practical, responsive, and maintainable
            frontend experiences for products, dashboards, and business
            applications.
          </p>
        </header>

        <div className="services__note">
          <span aria-hidden="true"></span>
          <p>
            Useful for product teams, job opportunities, and future freelance
            work where clear frontend execution matters.
          </p>
        </div>
      </div>

      <div className="services__grid">
        {services.map((service, index) => (
          <ServiceCard index={index} key={service.id} service={service} />
        ))}
      </div>
    </Section>
  )
}

export default Services
