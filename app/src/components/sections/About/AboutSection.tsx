import React, { FC } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';
import ReadMoreButton from '../../ui/ReadMoreButton';

interface AboutSectionProps {
    id: string;
    role: string; 
    description: string; 
    imageSrc: string;
}

const AboutSection: FC<AboutSectionProps> = ({ id, role, description, imageSrc }) => {
  return (
    <section id={id} className={styles.aboutSection}>
      
      <div className={styles.contentWrapper}>
        
        <div className={styles.imageContainer}>
          <div className={styles.moonAura} />
          <Image
            src={imageSrc}
            alt="Imagem que representa a Lua e a persona."
            fill 
            className={styles.profileImage}
          />
        </div>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>{role}</h2>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.buttonWrapper}> 
            <ReadMoreButton href="/about-details">Saiba Mais</ReadMoreButton> 
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;