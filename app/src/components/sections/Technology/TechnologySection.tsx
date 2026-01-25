'use client'; 

import React, { FC } from 'react';
import styles from './TechnologySection.module.css';
import Moon3DCanvas from '../../ui/Moon3DCanvas';
import SkillTag from '../../ui/SkillTag/SkillTag';


interface TechnologySectionProps {
    id: string;
    role: string; 
    subRole: string; 
    imageSrc: string; 
    skills: string[];
}

const TechnologySection: FC<TechnologySectionProps> = ({ role, subRole, skills }) => { 
    
  return (
    <section id={'Technology'} className={styles.technologySection}>
      
      <div className={styles.contentWrapper}>
        
        <div className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <Moon3DCanvas 
            modelPath="/models/moon_tech.glb" 
            rotationSpeed={0.005} 
            scale={0.02} 
          />
        </div>
            
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>{role}</h2>
                <h3 className={styles.subTitle}>{subRole}</h3>
            </div>
        </div>

        <div className={styles.skillsGrid}>
            {skills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;