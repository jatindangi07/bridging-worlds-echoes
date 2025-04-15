
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-hero-gradient"></div>
      )}
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-bold animate-fade-in text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center animate-fade-in animate-delay-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
