'use client';

import React, { FC, useState, useEffect } from 'react';
import styles from './BaseNavMenu.module.css'; 

export interface BaseNavMenuProps {
    links?: string[]; 
}

const DEFAULT_LINKS = ['Home', 'About', 'Portfolio'];

const MOBILE_MENU_SECTIONS = {
    main: ['Home', 'About', 'Technology', 'Creative Area'],
    extra: ['Let\'s Build'],
};

const BaseNavMenu: FC<BaseNavMenuProps> = ({ 
    links = DEFAULT_LINKS
}) => {
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

    const formatLinkToId = (linkName: string) => {
        return linkName.toLowerCase().replace(/\s/g, '-');
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    if (isMobile) {
        return (
            <>
                {/* Hamburger Button */}
                <button 
                    className={styles.hamburgerButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

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
                        {/* Main Navigation Section */}
                        <div className={styles.menuSection}>
                            <h3 className={styles.sectionTitle}>Navigation</h3>
                            {MOBILE_MENU_SECTIONS.main.map(link => {
                                const linkId = formatLinkToId(link);
                                
                                return (
                                    <a 
                                        key={link} 
                                        href={`#${linkId}`} 
                                        className={styles.mobileNavLink}
                                        onClick={handleLinkClick}
                                    >
                                        {link}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Extra Section */}
                        <div className={styles.menuSection}>
                            <h3 className={styles.sectionTitle}>Call To Action</h3>
                            {MOBILE_MENU_SECTIONS.extra.map(link => {
                                const linkId = formatLinkToId(link);
                                
                                return (
                                    <a 
                                        key={link} 
                                        href={`#${linkId}`} 
                                        className={styles.mobileNavLink}
                                        onClick={handleLinkClick}
                                    >
                                        {link}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Contact Section */}
                        <div className={styles.menuSection}>
                            <h3 className={styles.sectionTitle}>Contact</h3>
                            <a href="mailto:lauane@example.com" className={styles.contactLink}>
                                lauane@example.com
                            </a>
                            <p className={styles.phoneNumber}>+55 (85) 98888-0000</p>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/Kitinport1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                LinkedIn
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                Twitter
                            </a>
                        </div>
                    </div>
                </nav>
            </>
        );
    }

    // Desktop version
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