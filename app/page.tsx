'use client'; 

import React, { useState } from 'react';
import { IMoonSectionProps } from './src/interfaces/Moon';
import TheHero from './src/components/sections/TheHero';
import ScrollObserver from './src/components/utils/ScrollObserver';
import AboutSection from './src/components/sections/About/AboutSection';
import TechnologySection from './src/components/sections/Technology/TechnologySection';


const moonSectionsData: IMoonSectionProps[] = [
    { 
        id: 'about', 
        role: 'I am lua', 
        subRole: undefined, 
        imageSrc: '/models/colorful-full.png', 
        isSpecial: true, 
        description: 'Breve historia sobre aa minha trajetória e quem eu sou meus gostao e tudo mais' 
    },

    {
        id: 'technology',
        role: 'Tecnology',
        subRole: 'Hard skills',
        imageSrc: '/images/moon/full-moon.png',
        skills: [
            'TypeScript', 'React', 'Next.js', 'Node.js', 
            'Python', 'AWS', 'Docker', 'Kubernetes',
            'PostgreSQL', 'MongoDB', 'Git', 'Clean Code',
        ]
    },
    
    { id: 'developer', role: 'I am Developer', subRole: 'Full Stack', imageSrc: '/images/moon/crescent-right.png' },
    { id: 'product-analyst', role: 'I am Product', subRole: 'Analyst', imageSrc: '/images/moon/crescent-left.png' },
    { id: 'fraud-analyst', role: 'I am Fraud', subRole: 'Analyst', imageSrc: '/images/moon/half-right-2.png' },
    { id: 'data-analyst', role: 'I am Data', subRole: 'Analyst', imageSrc: '/images/moon/gibosa-crescente.png' },
    { id: 'chargeback-analyst', role: 'I am Chargeback', subRole: 'Analyst', imageSrc: '/images/moon/crescent-left-2.png' },
    { id: 'designer', role: 'I am Designer', subRole: undefined, imageSrc: '/images/moon/crescent-right-2.png' },
    { id: 'woman', role: 'I am Woman', subRole: undefined, imageSrc: '/images/moon/new-moon-circle.png' },
];


export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollSectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    backgroundColor: 'transparent', 
  };
    
  return (
    <main>
      <TheHero activeSectionId={activeSection} />
      
    
      <div style={{ height: '100vh' }} /> 
      
      {moonSectionsData.map((section) => (
        <ScrollObserver 
          key={section.id} 
          sectionId={section.id} 
          onIntersecting={(id) => setActiveSection(id)} 
        >
          
          {section.id === 'about' ? (
              <AboutSection
                  id={section.id}
                  role={section.role}
                  imageSrc={section.imageSrc}
              />
          ) : section.id === 'technology' ? (
              <TechnologySection
                  id={section.id}
                  role={section.role}
                  subRole={section.subRole!} 
                  imageSrc={section.imageSrc}
                  skills={section.skills!} 
              />
          ) : (
              <div 
                  id={section.id} 
                  style={scrollSectionStyle}
              >
              </div>
          )}
        </ScrollObserver>
      ))}
    </main>
  );
}