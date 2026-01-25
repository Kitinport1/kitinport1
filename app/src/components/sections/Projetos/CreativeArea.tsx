'use client';

import React, { FC, useState } from 'react';
import styles from './CreativeArea.module.css';
import ReadMoreButton from '../../ui/ReadMoreButton/ReadMoreButton';

interface Project {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    technologies: string[];
    description: string;
    projectUrl: string;
}

const creativeProjects: Project[] = [
    {
        id: 'podcast-ai',
        imageSrc: '/Projets/console-gay.png',
        title: 'Podcast de AI - Console.gay',
        subtitle: 'Prompt Engineering',
        technologies: ['Claude', 'Gemini', 'ChatGPT', 'Leonardo IA', 'Eleven Labs'],
        description: 'Console.GAY: Patterns, Performance, and your Code\'s Glow Up. A disruptive initiative blending technical authority with representation. Through a cyber-queer narrative, this project demystifies software development for the LGBTQIA+ community, proving that systems architecture can—and should—be vibrant, inclusive, and high-fashion',
        projectUrl: 'https://github.com/Kitinport1/prompts-for-podcast-generate-by-ia'
    },
    {
        id: 'readfy-app',
        imageSrc: '/Projets/Readfyimagem.png',
        title: 'Readfy App',
        subtitle: 'React Web App',
        technologies: ['React', 'TypeScript', 'CSS Module', 'Firebase'],
        description: 'A modern reading application built with React that helps users discover and manage their book collection. Features include book recommendations, reading progress tracking, and social sharing capabilities.',
        projectUrl: 'https://readfy-app.vercel.app/'
    },
    {
        id: 'bat-signal-app',
        imageSrc: '/Projets/app-liga.png',
        title: 'Bat Signal App',
        subtitle: 'Mobile App',
        technologies: ['React Native', 'JavaScript', 'Firebase', 'Notification API'],
        description: 'A mobile application inspired by Batman\'s signal system. Enables real-time notifications and emergency alerts for team coordination and communication.',
        projectUrl: 'https://github.com/Kitinport1/bat-signal-lj-app'
    },
    {
        id: 'hulk-pass-app',
        imageSrc: '/Projets/hulk-pass.png',
        title: 'Hulk Pass App',
        subtitle: 'Security App',
        technologies: ['React', 'Node.js', 'Encryption', 'Database'],
        description: 'A secure password manager application with encrypted storage. Features password generation, multi-device sync, and advanced security protocols for protecting sensitive data.',
        projectUrl: 'https://github.com/Kitinport1/hulk-pass-app'
    },
    {
        id: 'newspaper-moonlight',
        imageSrc: '/Projets/Moonlightpost.png',
        title: 'Moonlight Post',
        subtitle: 'Web Design',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        description: 'An elegant newspaper-style web design project showcasing modern web design principles. Features a clean layout, typography excellence, and responsive design for all devices.',
        projectUrl: 'https://kitinport1.github.io/NNewpaperTheMoonlightPost/'
    },
    {
        id: 'lamborghini-app',
        imageSrc: '/Projets/lamborghiniapp.png',
        title: 'Lamborghini App',
        subtitle: 'React Native, Api',
        technologies: ['React Native', 'REST API', 'TypeScript', 'Navigation'],
        description: 'A mobile application featuring Lamborghini vehicle data integration. Displays car specifications, performance metrics, and dealership information through a comprehensive API integration.',
        projectUrl: 'https://github.com/Kitinport1/lamborghini-app-react-native-api'
    },
    {
        id: 'designer-flytex',
        imageSrc: '/Projets/web-designer.png',
        title: 'Designer Site',
        subtitle: 'Web Design',
        technologies: ['figma'],
        description: 'A modern web design project for a fictional company. Features a clean layout, typography excellence, and responsive design for all devices.',
        projectUrl: 'https://github.com/Kitinport1/web-designer-flytex'
    },
    {
        id: 'drag-race-api',
        imageSrc: '/Projets/Dragapi.png',
        title: 'Drag Race API',
        subtitle: 'Backend',
        technologies: ['Node.js', 'Express', 'MongoDB', 'REST API'],
        description: 'A backend API for managing drag race events and results. Handles race scheduling, participant management, scoring system, and real-time leaderboard updates.',
        projectUrl: 'https://www.figma.com/community/file/1597052484571332737'
    }
];

const CreativeAreaSection: FC<CreativeAreaSectionProps> = ({ role, subRole }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = creativeProjects[currentProjectIndex];

    const handleNextProject = () => {
        setCurrentProjectIndex((prev) => (prev + 1) % creativeProjects.length);
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prev) => (prev - 1 + creativeProjects.length) % creativeProjects.length);
    };

    return (
        <section id={'Projetos'} className={styles.creativeAreaSection}>
            <div className={styles.contentWrapper}>
                <header className={styles.headerContainer}>
                    <div className={styles.titleGroup}>
                        <h2 className={styles.title}>{role}</h2>
                        <h3 className={styles.subTitle}>{subRole}</h3>
                    </div>
                </header>

                <div className={styles.projectCardWrapper}>
                    <div className={styles.projectCard}>
                        <div className={styles.imageContainer}>
                            <img 
                                src={currentProject.imageSrc} 
                                alt={currentProject.title}
                                className={styles.projectImage}
                            />
                        </div>

                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{currentProject.title}</h3>
                            <p className={styles.projectSubtitle}>{currentProject.subtitle}</p>
                            
                            <div className={styles.technologiesContainer}>
                                <h4 className={styles.technologiesLabel}>Technologies</h4>
                                <div className={styles.technologiesList}>
                                    {currentProject.technologies.map((tech) => (
                                        <span key={tech} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className={styles.projectDescription}>
                                {currentProject.description}
                            </p>

                            <a 
                                href={currentProject.projectUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.navigationContainer}>
                    <button 
                        className={styles.navButton}
                        onClick={handlePrevProject}
                        aria-label="Previous project"
                    >
                        ← 
                    </button>
                    
                    <span className={styles.projectCounter}>
                        {currentProjectIndex + 1} / {creativeProjects.length}
                    </span>

                    <button 
                        className={styles.navButton}
                        onClick={handleNextProject}
                        aria-label="Next project"
                    >
                         →
                    </button>
                </div>

                <div className={styles.actionContainer}>
                    <ReadMoreButton 
                        onClick={() => window.open('https://github.com/Kitinport1', '_blank')}
                    >
                        My Github
                    </ReadMoreButton>
                </div>
            </div>
        </section>
    );
};

interface CreativeAreaSectionProps {
    id: string;
    role: string;
    subRole: string;
}

export default CreativeAreaSection;