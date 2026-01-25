'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const ScrollReveal = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Começa invisível e 50px abaixo
      whileInView={{ opacity: 1, y: 0 }} // Quando aparece, fica visível e sobe
      viewport={{ once: true, amount: 0.2 }} // Anima apenas uma vez quando 20% da seção aparecer
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};