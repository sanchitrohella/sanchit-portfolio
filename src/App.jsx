import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import ProfessionalHighlights from "./sections/ProfessionalHighlights/ProfessionalHighlights";
import FeaturedProfessionalWork from "./sections/FeaturedProfessionalWork/FeaturedProfessionalWork";
import FitMitraSpotlight from "./sections/FitMitraSpotlight/FitMitraSpotlight";
import ProfessionalExperience from "./sections/ProfessionalExperience/ProfessionalExperience";
import TechnicalSkills from "./sections/TechnicalSkills/TechnicalSkills";
import PersonalProjects from "./sections/PersonalProjects/PersonalProjects";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProfessionalHighlights />
        <FeaturedProfessionalWork />
        <FitMitraSpotlight />
        <ProfessionalExperience />
        <TechnicalSkills />
        <PersonalProjects />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
