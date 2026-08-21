import React from "react";
import Navbar from "./Navbar";
import Marquee from "./Marquee";
import HeroSection from "./Herosection";
import About from "./About";
import Skill from "./Skill";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Allfolder = () => {
  return (
    <>
      <Navbar />
      <Marquee />
      <HeroSection />
      <About />
      <Skill />
      <Services/>
      <Projects/>
      <Contact /> 
      <Footer/>
    </>
  );
};

export default Allfolder;
