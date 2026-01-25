'use client';

import React, { useState, useEffect } from 'react';
import styles from './TheHero.module.css';
import MoonHeroCanvas from '../../ui/MoonHeroCanvas';

const PROFESSIONS = [
  'Developer Full Stack', 'Product Analyst', 'Developer Mobile', 'DevOps', 'Data Analyst','Fraud Analyst', 'Chargeback Analyst', 'Designer', 'Woman'
];

const PROFESSIONS_MOBILE = [
  'Full Stack Developer', 'Product Analyst', 'Mobile Dev', 'DevOps', 'Data Analyst', 'Fraud Analyst', 'Chargeback', 'Designer', 'Woman'
];

const TheHero: React.FC = () => {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [moonRotation, setMoonRotation] = useState(0);
  const [isFirstView, setIsFirstView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [moonScale, setMoonScale] = useState(0.033);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      
      // Ajusta escala da moon de acordo com o dispositivo
      if (width <= 480) {
        setMoonScale(0.02);
      } else if (width <= 768) {
        setMoonScale(0.025);
      } else if (width <= 1024) {
        setMoonScale(0.027);
      } else {
        setMoonScale(0.033);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const professionInterval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % PROFESSIONS.length);
    }, 3000); 

    return () => clearInterval(professionInterval);
  }, []);

  useEffect(() => {
    let frameId: number;
    
    const animate = () => {
      setMoonRotation((prev) => prev + 0.002); 
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setIsFirstView(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroSection}>
        
        <div className={styles.moonAura} />

        <div className={styles.moon3DContainer}>
          <MoonHeroCanvas 
            modelPath="/models/moon_hero.glb" 
            progress={moonRotation} 
            scale={moonScale} 
          />
        </div>

        <div className={styles.heroContent}>
          <div className={`${styles.leftTextWrapper} ${isFirstView ? styles.hiddenAlign : styles.leftAlign}`}>
            <h1 className={`${styles.heroTitle} ${isMobile ? styles.heroTitleMobile : ''}`}>
              {isMobile ? PROFESSIONS_MOBILE[currentProfession] : PROFESSIONS[currentProfession]}
            </h1>
          </div>
          <div className={styles.rightTextWrapper}>
            <h1 className={`${styles.heroTitle} ${styles.bold} ${isMobile ? styles.heroTitleMobile : ''}`}>
              {isFirstView ? (isMobile ? 'Talking to' : 'Talking to the') : 'I am'}
            </h1> 
          </div>
        </div>

        {/* Scroll Indicator opcional, já que agora é automático */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollBar}>
            <div 
              className={styles.scrollProgressFill} 
              style={{ height: `${(currentProfession / (PROFESSIONS.length - 1)) * 100}%` }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHero;