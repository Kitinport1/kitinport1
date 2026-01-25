'use client';
import React, { useState } from 'react';
import styles from './CreativeSlider.module.css';

interface CreativeSliderProps {
    items: Array<{
        id: string;
        title: string;
        category: string;
        imageSrc: string;
        projectUrl?: string;
    }>;
}

const CreativeSlider: React.FC<CreativeSliderProps> = ({ items = [] }) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    if (!items || items.length === 0) return null;

    const nextSlide = () => setStartIndex((prev) => (prev + 1) % items.length);
    const prevSlide = () => setStartIndex((prev) => (prev - 1 + items.length) % items.length);

    const getVisibleItems = () => {
        const visibleItems = [];
        for (let i = 0; i < visibleCount; i++) {
            visibleItems.push(items[(startIndex + i) % items.length]);
        }
        return visibleItems;
    };

    return (
        <div className={styles.container}>
            <button onClick={prevSlide} className={styles.navBtn}>❮</button>

            <div className={styles.cardWrapper}>
                {getVisibleItems().map((item, index) => (
                    <div 
                        key={`${item.id}-${index}`} 
                        className={styles.card}
                        onClick={() => item.projectUrl && window.open(item.projectUrl, '_blank')}
                    >
                        {/* ESTE TEXTO APARECE NA FRENTE ANTES DO HOVER */}
                        <h2 className={styles.cardCategoryFront}>{item.category}</h2>
                        
                        {/* ESTE BLOCO APARECE SOMENTE NO HOVER */}
                        <div className={styles.projectInfo}>
                            <div className={styles.imageClip}>
                                <img src={item.imageSrc} alt={item.title} />
                            </div>
                            <h3 className={styles.projectTitle}>{item.title}</h3>
                            <span className={styles.techTag}>{item.category}</span>
                            <p className={styles.viewText}>Click to View</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={nextSlide} className={styles.navBtn}>❯</button>
        </div>
    );
};

export default CreativeSlider;