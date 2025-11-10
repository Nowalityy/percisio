'use client';

import { Button, ButtonProps } from './button';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedButton({ 
  children, 
  className = '',
  ...props 
}: AnimatedButtonProps) {
  return (
    <Button 
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );
}
