'use client'; 

import React, { FC } from 'react';
import Image from 'next/image';
import styles from './TechnologySection.module.css';
import Moon3DCanvas from '../../ui/Moon3DCanvas';
import SkillTag from '../../ui/SkillTag';


interface TechnologySectionProps {
    id: string;
    role: string; 
    subRole: string; 
    imageSrc: string; 
    skills: string[];
}

const TechnologySection: FC<TechnologySectionProps> = ({ id, role, subRole, imageSrc, skills }) => {
  const rotationSpeed = 0.0005; 
    
  return (
    <section id={id} className={styles.technologySection}>
      
      <div className={styles.contentWrapper}>
        
        <div className={styles.headerContainer}>
            <div className={styles.imageContainer}>
                
                <Moon3DCanvas rotationSpeed={rotationSpeed} />

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