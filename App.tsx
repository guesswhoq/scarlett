
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <main className="transition-transform duration-300 ease-in-out">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
