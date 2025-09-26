import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: {
    mobile?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ResponsiveGrid = ({
  children,
  columns = {
    mobile: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3
  },
  gap = 'md',
  className = ''
}: ResponsiveGridProps) => {
  const gapClasses = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6 lg:gap-8',
    lg: 'gap-6 sm:gap-8 lg:gap-10'
  };

  const gridClasses = cn(
    'grid',
    gapClasses[gap],
    {
      // Mobile
      'grid-cols-1': columns.mobile === 1,
      'grid-cols-2': columns.mobile === 2,
      // Small screens
      'sm:grid-cols-1': columns.sm === 1,
      'sm:grid-cols-2': columns.sm === 2,
      // Medium screens
      'md:grid-cols-1': columns.md === 1,
      'md:grid-cols-2': columns.md === 2,
      'md:grid-cols-3': columns.md === 3,
      // Large screens
      'lg:grid-cols-1': columns.lg === 1,
      'lg:grid-cols-2': columns.lg === 2,
      'lg:grid-cols-3': columns.lg === 3,
      'lg:grid-cols-4': columns.lg === 4,
      // Extra large screens
      'xl:grid-cols-1': columns.xl === 1,
      'xl:grid-cols-2': columns.xl === 2,
      'xl:grid-cols-3': columns.xl === 3,
      'xl:grid-cols-4': columns.xl === 4,
    },
    className
  );

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;