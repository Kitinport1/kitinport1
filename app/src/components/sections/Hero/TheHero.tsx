'use client'; 

import React, { FC } from 'react';
import styles from './TheHero.module.css';
import Moon3DCanvas from '../ui/Moon3DCanvas';
import BaseNavMenu from '../base/BaseNavMenu';

interface HeroProps {
  activeSectionId: string | null;
}

const FIXED_NAV_LINKS: BaseNavMenuProps['links'] = ['Home', 'About', 'Portfolio', 'Contact']; 

const heroContentMap: Record<string, { title: string; navLinks: BaseNavMenuProps['links'] }> = {
  
  
  'null': { title: 'Talking to the', navLinks: FIXED_NAV_LINKS }, 
  
  'developer': { title: 'I am Developer Full Stack', navLinks: ['Developer', 'Projects', 'Contact'] },
  'product-analyst': { title: 'I am Product Analyst', navLinks: ['Product', 'Metrics', 'Roadmap'] },
  'fraud-analyst': { title: 'I am Fraud Analyst', navLinks: ['Fraud', 'Reports', 'Contact'] },
  'data-analyst': { title: 'I am Data Analyst', navLinks: ['Data', 'Reports', 'Analysis'] },
  'chargeback-analyst': { title: 'I am Chargeback Analyst', navLinks: ['Chargeback', 'Prevention', 'Policies'] },
  'designer': { title: 'I am Designer', navLinks: ['Design', 'UX/UI', 'Portfolio'] },
  'woman': { title: 'I am Woman', navLinks: ['Woman', 'About', 'Contact'] },
};

const TheHero: FC<HeroProps> = ({ activeSectionId }) => {
  
  const lookupKey = activeSectionId || 'null';
  const content = heroContentMap[lookupKey];
  const activeContent = content || heroContentMap['null'];

  const titleWords = activeContent.title.split(' ');
  

  const getTitleParts = (words: string[]) => {
      if (words[0].toLowerCase() === 'talking') {
          return {
              part1: words.slice(0, 3).join(' '),
              part2: null
          };
      }
      if (words[0].toLowerCase() === 'i' && words[1].toLowerCase() === 'am') {
          return {
              part1: words.slice(0, 2).join(' '),
              part2: words.slice(2).join(' ')
          };
      }
      return { part1: activeContent.title, part2: null };
  };

  const { part1, part2 } = getTitleParts(titleWords);
  const isHeroMode = activeSectionId === null || activeSectionId === 'null';
    
  return (
    <section className={styles.heroSection}>
      
      <div className={styles.moonAura} /> 

      <div className={styles.moon3DContainer}>
        <Moon3DCanvas rotationSpeed={0.003} />
      </div>

      <div className={styles.heroContent}>
          
          <div className={`${styles.leftTextWrapper} ${isHeroMode ? styles.hiddenAlign : styles.leftAlign}`}>
              
              {part2 && 
                <h1 className={`${styles.heroTitle} ${styles.light}`}>{part2}</h1>
              }
              
          </div>

          <div className={`${styles.rightTextWrapper}`}>
              <h1 className={`${styles.heroTitle} ${styles.bold}`}>{part1}</h1> 
          </div>

          <div className={styles.headerWrapper}>
              <BaseNavMenu links={FIXED_NAV_LINKS} /> 
          </div>

          
      </div>
      
    </section>
  );
};

export default TheHero;