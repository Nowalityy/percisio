'use client';

import { motion } from 'framer-motion';
import { Card } from './card';
import { ReactNode, HTMLAttributes } from 'react';

interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  hoverScale?: number;
  hoverRotate?: number;
  className?: string;
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  hoverScale = 1.02, 
  hoverRotate = 0,
  className = '',
  ...props 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      <Card 
        className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 hover:border-primary/30"
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
}
