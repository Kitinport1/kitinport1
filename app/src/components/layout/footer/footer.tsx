'use client';
import React, { FC } from 'react';
import styles from './footer.module.css';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons'; 

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Marca e Bio */}
        <div className={styles.brandColumn}>
          <h2 className={styles.logo}>LAUANE LIMA<span>.</span></h2>
          <p className={styles.role}>FULL STACK DEVELOPER & PRODUCT OPS</p>
          <p className={styles.bio}>
            Hi, I'm Lauane Lima — a developer passionate about creating 
            seamless digital experiences that connect and convert.
          </p>
          <p className={styles.copyright}>© {currentYear} Copyright</p>
        </div>

        {/* Lado Direito: Navegação Organizada em Colunas */}
        <div className={styles.linksWrapper}>
          
          <div className={styles.column}>
            <h4>MENU</h4>
            <ul>
              <li><a href="#Hero">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Technology">Technology</a></li>
              <li><a href="#Projetos">Creative Area</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>NAVIGATION</h4>
            <ul>
              <li><a href="#Projetos">Projects</a></li>
              <li><a href="mailto:lauanerlima@gmail.com">Contact</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#Contact">Let&apos;s Build</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>SOCIAL</h4>
            <ul className={styles.socialList}>
              <li>
                <a href="https://github.com/Kitinport1" target="_blank" rel="noopener">
                  <Github size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lauanelima" target="_blank" rel="noopener">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lualimadev" target="_blank" rel="noopener">
                  <Instagram size={18} /> Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
