import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import ProfessionalHighlights from "./sections/ProfessionalHighlights/ProfessionalHighlights";
import FeaturedProfessionalWork from "./sections/FeaturedProfessionalWork/FeaturedProfessionalWork";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProfessionalHighlights />
        <FeaturedProfessionalWork />
      </main>
    </>
  );
}

export default App;
