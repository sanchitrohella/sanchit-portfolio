import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import ProfessionalHighlights from "./sections/ProfessionalHighlights/ProfessionalHighlights";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProfessionalHighlights />
      </main>
    </>
  );
}

export default App;
