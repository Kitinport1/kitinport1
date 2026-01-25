'use client';

import React, { FC, useCallback } from 'react';
import styles from './Navbar.module.css';

const navLabelMap: { [key: string]: string } = {
    'hero': 'Home', 
    'about': 'About',
    'technology': 'Technology',
    'creative-area': 'Creative Area',
    'contact': "Let's Build",
};

interface NavbarCustomProps {
    activeSectionId: string | null;
    navItems: string[];
    onNavClick: (id: string) => void;
}

const NavbarCustom: FC<NavbarCustomProps> = ({ activeSectionId, navItems, onNavClick }) => {
    
    const handleClick = useCallback((id: string) => {
        onNavClick(id);
    }, [onNavClick]);

    return (
        <header className={styles.navbar}>
            <nav className={styles.navContainer}>
                <ul className={styles.navList}>
                    {navItems.map((id) => (
                        <li key={id} className={styles.navItem}>
                            <button
                                type="button"
                                onClick={() => handleClick(id)}
                                className={`${styles.navLink} ${activeSectionId === id ? styles.active : ''}`}
                            >
                                {navLabelMap[id] || id}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default NavbarCustom;
