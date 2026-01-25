import React, { FC } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';
import ReadMoreButton from '../../ui/ReadMoreButton/ReadMoreButton';

interface AboutSectionProps {
    id: string;
    role: string; 
    span: string;
    description: string; 
    imageSrc: string;
}

const AboutSection: FC<AboutSectionProps> = ({ role, span, description, imageSrc }) => {
  return (
    <section id={'About'} className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.moonAura} />
          <Image
            src={imageSrc}
            alt="Imagem que representa a Lua e a persona."
            fill 
            className={styles.profileImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>{role} <span className={styles.titleSpan}>{span}</span></h2>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.buttonWrapper}>
            <ReadMoreButton href="/about-more">Read More</ReadMoreButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;