import Section from "../../components/Section/Section";
import "./About.scss";

const credibilityChips = ["React UI", "API-driven apps", "Hyderabad / Remote"];

const aboutInsights = [
  {
    title: "Frontend Ownership",
    description:
      "Building responsive React interfaces, reusable components, UI flows, and API-connected screens.",
  },
  {
    title: "Client-Facing Delivery",
    description:
      "Handling requirement discussions, issue updates, stakeholder coordination, and support communication.",
  },
  {
    title: "Full-Stack Understanding",
    description:
      "Practical Node.js and Express knowledge with an understanding of backend APIs, authentication flow, and product data flow.",
  },
];

function About() {
  return (
    <Section className="about" id="about" ariaLabelledby="about-title">
      <div className="about__layout">
        <div className="about__content">
          <p className="about__eyebrow">About</p>
          <h2 id="about-title">About Me</h2>
          <p>
            I am a React Frontend Developer with 4 years of experience building
            responsive, API-driven web applications. I focus on clean UI
            development, reusable components, practical frontend architecture,
            and reliable user experiences.
          </p>
          <p className="about__focus">
            Currently focused on React frontend roles in Hyderabad and remote
            opportunities, while building FitMitra AI as a full-stack product.
          </p>

          <ul className="about__chips" aria-label="Professional focus">
            {credibilityChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        <div className="about__insights" aria-label="About insights">
          {aboutInsights.map((insight, index) => (
            <article className="about__insight" key={insight.title}>
              <span className="about__insight-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
