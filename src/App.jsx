import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import FloatingParticles from './components/FloatingParticles';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white relative">
      {/* Layered background effects */}
      <div className="aurora-bg" />
      <div className="grid-overlay" />
      <div className="scanlines" />
      <InteractiveBackground />
      <FloatingParticles />
      <CursorGlow />
      <ScrollProgress />

      {/* Floating neon orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />

      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <div className="section-divider my-4" />
        <Skills />
        <div className="section-divider my-4" />
        <Projects />
        <div className="section-divider my-4" />
        <Experience />
        <div className="section-divider my-4" />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-transparent">
          <p className="font-mono text-xs tracking-wider">
            <span className="text-primary/60">&lt;</span>
            © {new Date().getFullYear()} Garv Pratap Singh
            <span className="text-primary/60"> /&gt;</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
