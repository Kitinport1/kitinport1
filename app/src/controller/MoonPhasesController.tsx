'use client';

import React, { useState, useEffect } from 'react';
import styles from './MoonPhasesController.module.css';

interface MoonPhasesControllerProps {
  onPhaseChange: (phaseIndex: number) => void;
}

const MOON_PHASES = [
  { name: 'New Moon', opacity: 0.95 },
  { name: 'Waxing Crescent', opacity: 0.7 },
  { name: 'First Quarter', opacity: 0.5 },
  { name: 'Waxing Gibbous', opacity: 0.3 },
  { name: 'Full Moon', opacity: 0 },
  { name: 'Waning Gibbous', opacity: 0.3 },
  { name: 'Last Quarter', opacity: 0.5 },
  { name: 'Waning Crescent', opacity: 0.7 },
];

const MoonPhasesController: React.FC<MoonPhasesControllerProps> = ({ 
  onPhaseChange 
}) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-anchor');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula o progresso baseado na visibilidade da Hero
      const progress = Math.max(0, Math.min(1, -heroRect.top / windowHeight));
      
      setScrollProgress(progress);
      
      // Calcular fase baseada no scroll apenas na Hero
      const phaseIndex = Math.floor(progress * MOON_PHASES.length);
      const newPhase = Math.min(phaseIndex, MOON_PHASES.length - 1);
      
      if (newPhase !== currentPhase) {
        setCurrentPhase(newPhase);
        onPhaseChange(newPhase);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPhase, onPhaseChange]);

  const currentPhaseData = MOON_PHASES[currentPhase];

  return (
    <div className={styles.phasesContainer}>
      {/* Círculo preto que revela as fases da lua */}
      <div 
        className={styles.moonMask}
        style={{
          opacity: currentPhaseData.opacity,
          transform: `rotate(${scrollProgress * 360}deg)`
        }}
      />
      
      {/* Indicador de progresso - só aparece durante o scroll da Hero */}
      {scrollProgress > 0 && scrollProgress < 1 && (
        <div className={styles.progressIndicator}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${scrollProgress * 100}%` }}
          />
          <span className={styles.phaseName}>{currentPhaseData.name}</span>
        </div>
      )}
    </div>
  );
};

export default MoonPhasesController;