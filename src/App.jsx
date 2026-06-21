import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import ProfessionalHighlights from "./sections/ProfessionalHighlights/ProfessionalHighlights";
import FeaturedProfessionalWork from "./sections/FeaturedProfessionalWork/FeaturedProfessionalWork";
import FitMitraSpotlight from "./sections/FitMitraSpotlight/FitMitraSpotlight";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProfessionalHighlights />
        <FeaturedProfessionalWork />
        <FitMitraSpotlight />
      </main>
    </>
  );
}

export default App;
