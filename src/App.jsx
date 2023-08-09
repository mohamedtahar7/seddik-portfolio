import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Features from "./components/Features";
function App() {
  return (
    <main className=" bg-[url('/src/assets/bg.jpg')] w-[100%] bg-no-repeat lg:bg-center bg-cover ">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
