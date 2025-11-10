'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return <div className={cn('relative', className)}>{children}</div>;
}
