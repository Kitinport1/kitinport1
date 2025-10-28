import React, { FC } from 'react';
import styles from './BaseNavMenu.module.css'; 

export interface BaseNavMenuProps {
    links?: string[]; 
}

const DEFAULT_LINKS = ['Home', 'About', 'Portfolio'];

const BaseNavMenu: FC<BaseNavMenuProps> = ({ 
    links = DEFAULT_LINKS
}) => {
    
    const formatLinkToId = (linkName: string) => {
        return linkName.toLowerCase().replace(/\s/g, '-');
    };
    
  return (
    <nav className={styles.navMenu}>
      {links.map(link => {
          const linkId = formatLinkToId(link);
          
          return (
              <a 
                  key={link} 
                  href={`#${linkId}`} 
                  className={styles.navLink}
              >
                  {link}
              </a>
          );
      })}
    </nav>
  );
};

export default BaseNavMenu;