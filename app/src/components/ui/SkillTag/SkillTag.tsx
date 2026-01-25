import React, { FC } from 'react';
import styles from './SkillTag.module.css';

interface SkillTagProps {
    skill: string;
    onClick?: () => void; 
}

const SkillTag: FC<SkillTagProps> = ({ skill, onClick }) => {
  return (
    <div 
        className={styles.skillTag} 
        onClick={onClick}
        aria-label={`Habilidade: ${skill}`}
        role="button"
    >
        <span className={styles.innerContent}>{skill}</span>
    </div>
  );
};

export default SkillTag;