'use client';

import { motion } from 'framer-motion';
import { Button, ButtonProps } from './button';
import { ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  delay?: number;
  hoverScale?: number;
  tapScale?: number;
  className?: string;
}

export function AnimatedButton({ 
  children, 
  delay = 0,
  hoverScale = 1.05,
  tapScale = 0.95,
  className = '',
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ 
          scale: hoverScale,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: tapScale,
          transition: { duration: 0.1 }
        }}
      >
        <Button 
          className={`transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 ${className}`}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    </motion.div>
  );
}
