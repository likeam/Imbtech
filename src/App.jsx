import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    Object.values(sections.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sections.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const setSectionRef = (section) => (element) => {
    sections.current[section] = element;
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div ref={setSectionRef("home")}>
        <Hero setActiveSection={setActiveSection} />
      </div>

      <div ref={setSectionRef("about")}>
        <AboutUs setActiveSection={setActiveSection} />
      </div>

      <div ref={setSectionRef("services")}>
        <Services setActiveSection={setActiveSection} />
      </div>

      <div ref={setSectionRef("portfolio")}>
        <Portfolio setActiveSection={setActiveSection} />
      </div>

      <div ref={setSectionRef("blog")}>
        <Blog setActiveSection={setActiveSection} />
      </div>

      <div ref={setSectionRef("contact")}>
        <Contact setActiveSection={setActiveSection} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
