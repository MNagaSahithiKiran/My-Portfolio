import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Learning from './components/Learning';
import MongoDbJourney from './components/MongoDbJourney';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle dark mode class toggle on root html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Section observer for updating active nav links on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={`min-h-screen relative font-sans ${isDark ? 'dark bg-gray-950 text-gray-100' : 'bg-white text-gray-800'}`}>
      
      {/* Background Interactive Pink Particle Canvas */}
      <ParticleCanvas isDark={isDark} />

      {/* Sticky Glass Navbar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Learning />
        <MongoDbJourney />
        <Certifications />
        <Projects />
        <TechStack />
        <Services />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />

    </div>
  );
}

export default App;
