import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-100">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio/>
      <About/>
      <Reviews/>
      <ContactUS/>
      <Footer/>
    </main>
  );
};

export default App;
