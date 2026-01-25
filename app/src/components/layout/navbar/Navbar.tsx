'use client';

import React, { FC, useCallback, useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLabelMap: { [key: string]: string } = {
    'hero': 'Home', 
    'about': 'About',
    'technology': 'Technology',
    'creative-area': 'Creative Area',
    'contact': "Let's Build",
};

interface NavbarProps {
    activeSectionId: string | null;
    navItems: string[];
}

const Navbar: FC<NavbarProps> = ({ activeSectionId, navItems }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const scrollToSection = useCallback((id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    }, []);

    if (isMobile) {
        return (
            <>
                {/* Hamburger Button */}
                <header className={styles.navbar}>
                    <button 
                        className={styles.hamburgerButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>
                </header>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)} />
                )}

                {/* Mobile Menu */}
                <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <div className={styles.menuHeader}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    <div className={styles.mobileMenuAccent}></div>

                    <div className={styles.mobileMenuContent}>
                        {navItems.map((id) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`${styles.mobileNavLink} ${activeSectionId === id ? styles.active : ''}`}
                            >
                                {navLabelMap[id] || id}
                            </button>
                        ))}
                    </div>
                </nav>
            </>
        );
    }

    // Desktop version
    return (
        <header className={styles.navbar}>
            <nav className={styles.navContainer}>
                <ul className={styles.navList}>
                    {navItems.map((id) => (
                        <li key={id} className={styles.navItem}>
                            <button
                                type="button"
                                onClick={() => scrollToSection(id)}
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

export default Navbar;