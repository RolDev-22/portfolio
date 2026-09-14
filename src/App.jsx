import Header from "@layout/Header/Header";
import Hero from "@sections/Hero/Hero";

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
    </>
  );
}

export default App;
