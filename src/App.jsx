import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
       <HowItWorks/>
        <Portfolio />
         <Pricing />
         <Testimonials />
         <FAQ />
         <CTA />
      <Footer />
    </>
  );
}

export default App;