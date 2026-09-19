import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import Hero from "@sections/Hero/Hero";
import About from "@sections/About/About";
import Competence from "@sections/Competence/Competence";
import Work from "@sections/Work/Work";
import Contact from "@sections/Contact/Contact";

function App() {
  return (
    <>
      <div className="stars-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Header />
      <Hero />
      <About />
      <Competence />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
