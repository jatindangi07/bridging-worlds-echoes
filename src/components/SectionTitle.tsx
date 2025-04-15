
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  return (
    <div 
      className={cn(
        "mb-10",
        {
          'text-left': align === 'left',
          'text-center': align === 'center',
          'text-right': align === 'right',
        },
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-mahmudabad-blue">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-mahmudabad-gold mt-4",
        {
          'ml-0 mr-auto': align === 'left',
          'mx-auto': align === 'center',
          'ml-auto mr-0': align === 'right',
        }
      )} />
    </div>
  );
};

export default SectionTitle;
