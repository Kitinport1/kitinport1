import React, { FC } from 'react';
import Image from 'next/image';
import styles from './MoonSection.module.css'; 
import { IMoonSectionProps } from '../../interfaces/Moon';

const MoonSection: FC<IMoonSectionProps> = ({ 
  id, 
  imageSrc, 
  role, 
  isSpecial 
}) => {
  return (
    <section 
      id={id} 
      className={`${styles.moonSection} ${isSpecial ? styles.specialMoon : ''}`}
    >
      
      <div className={styles.moonImageWrapper}>
        <Image 
          src={imageSrc} 
          alt={`Fase da Lua para ${role}`} 
          fill 
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 90vw, 50vw"
        />
      </div>
      
    </section>
  );
};

export default MoonSection;