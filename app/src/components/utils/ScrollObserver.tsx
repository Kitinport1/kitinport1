'use client';

import React, { useRef, useEffect, memo } from 'react';

interface ScrollObserverProps {
  sectionId: string;
  onIntersecting: (id: string) => void;
  children: React.ReactNode;
}

const ScrollObserver = memo(({ sectionId, onIntersecting, children }: ScrollObserverProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersecting(sectionId);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Reduzido para melhor performance
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [sectionId, onIntersecting]);

  return <div ref={sectionRef}>{children}</div>;
});

ScrollObserver.displayName = 'ScrollObserver';

export default ScrollObserver;