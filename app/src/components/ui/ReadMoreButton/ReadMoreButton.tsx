import React, { FC } from 'react';
import styles from './ReadMoreButton.module.css';

interface ReadMoreButtonProps {
  children?: React.ReactNode; // Permite texto personalizado, mas o "+" é fixo
  onClick?: () => void;
  href?: string; // Se for um link de navegação
  className?: string; // Para estilos adicionais externos
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ 
  children = "Saiba Mais", // Texto padrão
  onClick, 
  href, 
  className 
}) => {
  const buttonContent = (
    <>
      <span className={styles.buttonText}>{children}</span>
      <span className={styles.plusIcon}>+</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${styles.readMoreButton} ${className}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${styles.readMoreButton} ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default ReadMoreButton;