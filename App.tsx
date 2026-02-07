import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-chassis text-text-primary font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;