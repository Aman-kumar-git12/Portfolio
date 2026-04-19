import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Showcase from './components/Sections/Showcase';
import SkillsShowcase from './components/Sections/SkillsShowcase';
import Projects from './components/Sections/Projects';
import ProjectPipeline from './components/Sections/ProjectPipeline';
import MiniProjects from './components/Sections/MiniProjects';
import Achievements from './components/Sections/Achievements';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollWrapper from './components/ScrollWrapper';
import GlobalModal from './components/ui/GlobalModal';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    data: null,
    type: null,
  });

  const openModal = (data, type) => {
    setModalConfig({
      isOpen: true,
      data,
      type,
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <ScrollWrapper>
      <div className="bg-background text-foreground selection:bg-accent/30 selection:text-accent">
        <CustomCursor />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Education onOpenModal={openModal} />
          <Showcase onOpenModal={openModal} />
          <ProjectPipeline onOpenModal={openModal} />
          <SkillsShowcase onOpenModal={openModal} />
          <Achievements onOpenModal={openModal} />
          <MiniProjects onOpenModal={openModal} />
          <Contact />
        </main>

        <Footer />

        <GlobalModal 
          isOpen={modalConfig.isOpen}
          onClose={closeModal}
          data={modalConfig.data}
          type={modalConfig.type}
          onOpenModal={openModal}
        />
      </div>
    </ScrollWrapper>
  );
}

export default App;
