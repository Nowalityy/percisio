'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  hoverContent?: ReactNode;
  className?: string;
  delay?: number;
}

export function HoverCard({ 
  children, 
  hoverContent, 
  className = '',
  delay = 0 
}: HoverCardProps) {
  return (
    <motion.div
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {children}
      
      {hoverContent && (
        <motion.div
          className="absolute -top-2 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-full transform rounded-lg bg-popover p-3 shadow-lg group-hover:block"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileHover={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-sm">
            {hoverContent}
          </div>
          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-popover"></div>
        </motion.div>
      )}
    </motion.div>
  );
}
