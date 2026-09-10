/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireMeModal from './components/HireMeModal';
import ResumeModal from './components/ResumeModal';
import ProjectDemoModal from './components/ProjectDemoModal';
import { ThemeMode, Project } from './types';

export default function App() {
  // Default to the warm theme requested by the user:
  // "Use a warm orange/brown textured background with a large centered layout.
  // Inside, use rounded white/light-gray cards with soft shadows, generous spacing, and subtle glassmorphism."
  const [theme, setTheme] = useState<ThemeMode>('warm');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isHireMeOpen, setIsHireMeOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'warm' ? 'cyber' : 'warm'));
  };

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
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

  const isWarm = theme === 'warm';

  return (
    <div 
      className={`min-h-screen transition-colors duration-500 selection:bg-orange-500 selection:text-white ${
        isWarm 
          ? 'bg-warm-canvas text-slate-900 bg-dot-pattern-warm' 
          : 'bg-cyber-canvas text-white bg-dot-pattern'
      }`}
    >
      {/* Centered Master Container */}
      <div className="relative min-h-screen flex flex-col">
        
        {/* Floating Responsive Navbar */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero
            theme={theme}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* About Me Section */}
          <About
            theme={theme}
            onOpenHireMe={() => setIsHireMeOpen(true)}
          />

          {/* Skills Section */}
          <Skills
            theme={theme}
          />

          {/* Projects Section */}
          <Projects
            theme={theme}
            onSelectProjectForDemo={(project) => setSelectedDemoProject(project)}
          />

          {/* Contact Section */}
          <Contact
            theme={theme}
          />
        </main>

        {/* Footer Section */}
        <Footer
          theme={theme}
        />

        {/* Interactive Modals */}
        <HireMeModal
          isOpen={isHireMeOpen}
          onClose={() => setIsHireMeOpen(false)}
          theme={theme}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          theme={theme}
        />

        <ProjectDemoModal
          project={selectedDemoProject}
          onClose={() => setSelectedDemoProject(null)}
          theme={theme}
        />

      </div>
    </div>
  );
}
