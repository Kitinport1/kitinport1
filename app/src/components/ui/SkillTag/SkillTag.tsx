import React, { FC } from 'react';
import styles from './SkillTag.module.css';

interface SkillTagProps {
    skill: string;
    onClick?: () => void; // Para futuras interações
}

const SkillTag: FC<SkillTagProps> = ({ skill, onClick }) => {
  return (
    <div 
        className={styles.skillTag} 
        onClick={onClick}
        aria-label={`Habilidade: ${skill}`}
        role="button"
    >
        {/* Usamos dois elementos: um para a borda/fundo (o gradiente) e outro para o texto */}
        <span className={styles.innerContent}>{skill}</span>
        <span className={styles.plusIcon}>+</span>
    </div>
  );
};

export default SkillTag;