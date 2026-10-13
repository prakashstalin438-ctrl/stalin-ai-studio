import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';

export const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalInitialTab, setModalInitialTab] = useState('overview');
  const [contactServiceTopic, setContactServiceTopic] = useState('AI Application Development');

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectProject = (project) => {
    setModalInitialTab('overview');
    setSelectedProject(project);
  };

  const handleOpenGallery = (project) => {
    setModalInitialTab('gallery');
    setSelectedProject(project);
  };

  const handleSelectService = (topic) => {
    setContactServiceTopic(topic);
    handleNavigate('contact');
  };

  const handleProjectInquire = (projectTitle) => {
    setContactServiceTopic(`Inquiry regarding ${projectTitle}`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <ServicesSection onSelectService={handleSelectService} />
        <ProjectsSection
          onSelectProject={handleSelectProject}
          onOpenGallery={handleOpenGallery}
        />
        <AboutSection onNavigate={handleNavigate} />
        <ContactSection defaultServiceTopic={contactServiceTopic} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Project Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialTab={modalInitialTab}
          onClose={() => setSelectedProject(null)}
          onInquire={handleProjectInquire}
        />
      )}
    </div>
  );
};

export default App;
