// hooks/useIntersectionObserver.ts
'use client';

import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  threshold: number = 0.3
) => {
  const [activeSection, setActiveSection] = useState<string>('hero-anchor');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  const observe = (element: Element) => {
    observerRef.current?.observe(element);
  };

  const unobserve = (element: Element) => {
    observerRef.current?.unobserve(element);
  };

  return { activeSection, observe, unobserve };
};