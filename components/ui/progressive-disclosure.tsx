'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProgressiveDisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  showCount?: boolean;
  maxItems?: number;
  className?: string;
}

export function ProgressiveDisclosure({ 
  title, 
  children, 
  defaultOpen = false,
  maxItems = 3,
  className = ''
}: ProgressiveDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showAll, setShowAll] = useState(false);
  
  const childrenArray = Array.isArray(children) ? children : [children];
  const visibleItems = showAll ? childrenArray : childrenArray.slice(0, maxItems);
  const hasMore = childrenArray.length > maxItems;

  return (
    <div className={`space-y-4 ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg bg-muted/30 p-4 text-left transition-all duration-200 hover:bg-muted/50"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pl-4">
              {visibleItems.map((child, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {child}
                </motion.div>
              ))}
              
              {hasMore && !showAll && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => setShowAll(true)}
                    className="mt-2 text-primary hover:text-primary/80"
                  >
                    Show {childrenArray.length - maxItems} more
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
              
              {hasMore && showAll && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => setShowAll(false)}
                    className="mt-2 text-muted-foreground hover:text-foreground"
                  >
                    Show less
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
