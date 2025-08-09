import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeControlPanel from "./components/ThemeControlPanel";
import CursorTrail from "./components/CursorTrail";

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div 
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text
      }}
    >
      <CursorTrail />
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
      <ThemeControlPanel />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
