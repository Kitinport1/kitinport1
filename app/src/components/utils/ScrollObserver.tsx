'use client';

import React, { useRef, useEffect, FC, ReactNode } from 'react';

interface ScrollObserverProps {
  sectionId: string;
  onIntersecting: (id: string) => void;
  children: ReactNode;
}

const ScrollObserver: FC<ScrollObserverProps> = ({ sectionId, onIntersecting, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { 
          onIntersecting(sectionId);
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionId, onIntersecting]);

  return <div ref={sectionRef}>{children}</div>;
};

export default ScrollObserver;