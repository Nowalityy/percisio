'use client';

import { Card } from './card';
import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ 
  children, 
  className = '',
  ...props 
}: AnimatedCardProps) {
  return (
    <Card className={cn(className)} {...props}>
      {children}
    </Card>
  );
}
