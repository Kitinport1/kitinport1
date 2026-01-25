'use client';

import React, { useEffect } from 'react';

interface HeroScrollControllerProps {
  onScroll: (progress: number) => void;
}

const HeroScrollController: React.FC<HeroScrollControllerProps> = ({ 
  onScroll 
}) => {
  useEffect(() => {
    let scrollProgress = 0;
    let isScrolling = false;

    const handleWheel = (event: WheelEvent) => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      
      // Só processa se estiver na Hero (primeira tela)
      if (heroRect.top >= 0 && heroRect.bottom <= window.innerHeight) {
        event.preventDefault();
        
        if (!isScrolling) {
          isScrolling = true;
          
          const scrollDelta = event.deltaY;
          const scrollSpeed = 0.005;
          
          scrollProgress += scrollDelta * scrollSpeed;
          scrollProgress = Math.max(0, Math.min(1, scrollProgress));
          
          onScroll(scrollProgress);
          
          setTimeout(() => {
            isScrolling = false;
          }, 50);
        }
      }
    };

    // Para scroll suave com touch
    let touchStartY = 0;
    let touchScrollProgress = 0;

    const handleTouchStart = (event: TouchEvent) => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.top >= 0 && heroRect.bottom <= window.innerHeight) {
        touchStartY = event.touches[0].clientY;
        touchScrollProgress = scrollProgress;
      }
    };
    
    const handleTouchMove = (event: TouchEvent) => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.top >= 0 && heroRect.bottom <= window.innerHeight) {
        event.preventDefault();
        
        const touchDelta = touchStartY - event.touches[0].clientY;
        const scrollSpeed = 0.01;
        
        touchScrollProgress += touchDelta * scrollSpeed;
        touchScrollProgress = Math.max(0, Math.min(1, touchScrollProgress));
        
        scrollProgress = touchScrollProgress;
        onScroll(scrollProgress);
        
        touchStartY = event.touches[0].clientY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onScroll]);

  return null;
};

export default HeroScrollController;