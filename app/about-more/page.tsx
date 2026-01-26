'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AboutMore.module.css';
import Footer from '../src/components/layout/footer/footer';
import NavbarCustom from '../src/components/layout/navbar/NavbarCustom';


const SOFT_SKILLS = [
  "Assertive Communication", 
  "Organisation with flexibility", 
  "Leadership", 
  "Analytical Mindset", 
  "Adaptability",
  "Curiosity that drives learning",
  "Clear and honest communication",
  "Collaboration and teamwork",
  "Empathy and user-centric thinking",
  "Creativity in problem-solving",
  "Cultural awareness from travel experiences",
  "Active listening",
  "Attention to detail",
];

const navSectionIds = ['hero', 'about', 'technology', 'creative-area', 'contact'];

export default function AboutMorePage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>('about');

  const handleNavClick = useCallback((sectionId: string) => {
    if (sectionId === 'about') {
      setActiveSection('about');
    } else {
      router.push(`/#${sectionId}`);
    }
  }, [router]);

  return (
    <main className={styles.pageContainer}>
      {/* Navbar fixa para navegação entre páginas */}
      <NavbarCustom activeSectionId={activeSection} navItems={navSectionIds} onNavClick={handleNavClick} />

      <div className={styles.contentWrapper}>
        
        {/* Grid Section: Imagem e Texto Lado a Lado */}
        <section className={styles.gridSection}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow} />
              <img 
                src="/models/perfi2.png" 
                alt="Lauane Lima" 
                className={styles.profileImg} 
              />
            </div>
          </div>

          <div className={styles.textColumn}>
            <h1 className={styles.nameTitle}>I&apos;m <span className={styles.rainbowText}>Lua.</span></h1>
            <div className={styles.bioContent}>
              <p>
                  My name is Lauane Ramos de Lima, and my career has always been driven by curiosity, sensitivity, and a genuine desire to understand how things really work — not just in theory, but in practice.
                </p>
                <p>
                 My journey didn&apos;t start with code, but with people and consequences. From the front lines of fraud prevention and chargebacks, I learned to spot patterns in chaos and find calm in high-stakes complexity. This operational grit led me to a realization: I didn&apos;t just want to solve problems after they happened—I wanted to build systems that prevent them.

Today, I work at the intersection of Product, Operations, and Engineering. Whether I&apos;m refining an API, automating a pipeline, or crafting a mobile interface, I bring a &quot;Product-First&quot; mindset to every line of code. I don&apos;t just build features; I build intentional solutions that bridge the gap between business strategy and technical reality.

What I value: Systems beyond the interface, collaboration over ego, and the art of asking better questions. Beyond the screen: Fueled by R&B, pop culture, and the perspectives gained from traveling the world
              </p>  
            </div>
          </div>
        </section>

        {/* Soft Skills Section: Usando as SkillTags Coloridas */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <div className={styles.skillsGrid}>
            {SOFT_SKILLS.map(skill => (
              <div key={skill} className={styles.skillTag}>
                <span className={styles.innerContent}>{skill}</span>
              </div>
            ))}
          </div>
        </section>

    
        <section className={styles.pageFooter}>
           <h2 className={styles.footerTitle}>
             Beyond the <span className={styles.rainbowText}>Code</span>
           </h2>
           <p>
            Beyond the code, I’m deeply curious about people, culture and how experiences are shaped — often in the smallest details.
            I value clear communication, active listening and collaboration. I work best in environments where ideas are shared openly, feedback is honest and learning is part of the process. I’m organised, adaptable and comfortable navigating ambiguity — especially when things don’t come with a clear manual.
            Creativity plays a big role in how I think and work. Pop culture, music and storytelling constantly influence the way I approach problems. Long R&B playlists help me focus, and Drag Race reminds me that confidence, authenticity and perspective matter just as much as technical skills.
            Travelling has taught me how to observe, adapt and respect different contexts. Experiencing new places and cultures sharpened my empathy and my ability to design solutions that consider diverse users and realities.
            I care about building things that make sense — for users, teams and businesses. I enjoy connecting dots, asking thoughtful questions and turning complex ideas into something clear and actionable.
            At the end of the day, what drives me is simple: doing meaningful work, with people who value curiosity, respect and human connection.
           </p>
        </section>
        <Footer/>
      </div>
    </main>
  );
}