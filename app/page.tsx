'use client'; 

import React, { useState, useCallback } from 'react';
import Navbar from './src/components/layout/navbar/Navbar';
import ScrollObserver from './src/components/utils/ScrollObserver';
import { ScrollReveal } from './src/components/utils/ScrollReveal';
import TheHero from './src/components/sections/Hero/TheHero';
import AboutSection from './src/components/sections/About/AboutSection';
import TechnologySection from './src/components/sections/Technology/TechnologySection';
import ContactSection from './src/components/sections/Contact/ContactSection';
import CreativeAreaSection from './src/components/sections/Projetos/CreativeArea';
import Footer from './src/components/layout/footer/Footer';

const navSectionIds = ['hero', 'about', 'technology', 'creative-area', 'contact'];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string | null>('hero'); 

  const handleIntersection = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar activeSectionId={activeSection} navItems={navSectionIds} /> 

      {/* 1. HERO */}
      <ScrollObserver sectionId="hero" onIntersecting={handleIntersection}>
        <div id="hero"><TheHero /></div>
      </ScrollObserver>

      {/* 2. ABOUT (Sincronizado com AboutMore internamente) */}
      <ScrollReveal>
        <ScrollObserver sectionId="about" onIntersecting={handleIntersection}>
          {/* Este ID é o que o Navbar procura */}
          <div id="about">
            <AboutSection 
              id="about-content"
              role="I'm" 
              span="Lua."
              description="I’ve never managed to fit into a single box.
                          And, honestly, I’m glad I didn’t.
                          My name is Lauane Ramos de Lima. Curiosity, sensitivity, and a genuine desire to understand how things truly work have always guided my choices — both personal and professional.
                          Here, you’ll find my journey, my projects, and how I turn curiosity into product, process, and real impact."
              imageSrc="/models/perfil0.png"
            />
          </div>
        </ScrollObserver>
      </ScrollReveal>

      {/* 3. TECHNOLOGY (Erro subRole Corrigido) */}
      <ScrollReveal>
        <ScrollObserver sectionId="technology" onIntersecting={handleIntersection}>
          <div id="technology">
            <TechnologySection 
              id="technology"
              role="TECHNOLOGY"
              subRole="HARD SKILLS" 
              imageSrc="/images/moon/full-moon.png"
              skills={[
                'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML5', 'CSS3',
                'Python', 'AWS', 'Docker', 'Kubernetes','JavaScript','REST APIs','Data visualisation',
                'SQL','Automation scripts','PostgreSQL', 'MongoDB', 'Git & GitHub','Jira','Notion','VS code','Agile( Scrum, Kanban)','Discovery & Delivery','Requirements documentation','Process mapping','LLM','Prompt','Machine Learning','Neo4jei','Clean Code',
              ]}
            />
          </div>
        </ScrollObserver>
      </ScrollReveal>

      {/* 4. CREATIVE AREA */}
      <ScrollReveal>
        <ScrollObserver sectionId="creative-area" onIntersecting={handleIntersection}>
          <div id="creative-area">
            <CreativeAreaSection 
               id="creative-area" 
               role="Creative Area" 
               subRole="Explorations" 
            />
          </div>
        </ScrollObserver>
      </ScrollReveal>

      {/* 5. CONTACT (Erro subRole Corrigido) */}
      <ScrollReveal>
        <ScrollObserver sectionId="contact" onIntersecting={handleIntersection}>
          <div id="contact">
            <ContactSection 
              id="contact"
              role="Let's build something"
              subRole="Bright together!" 
              imageSrc="/images/moon/gibosa-crescente.png"
            />
          </div>
        </ScrollObserver>
      </ScrollReveal>

      <Footer />
    </main>
  );
}