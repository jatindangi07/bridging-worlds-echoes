
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  content: string;
  image?: string;
  className?: string;
  imagePosition?: 'top' | 'left';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  className,
  imagePosition = 'top',
  onClick,
}) => {
  const cardClass = cn(
    "overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
    {
      'flex flex-col': imagePosition === 'top',
      'flex flex-col md:flex-row': imagePosition === 'left',
    },
    className
  );

  const imageClass = cn(
    "bg-gray-200",
    {
      'h-48 w-full': imagePosition === 'top',
      'h-full w-full md:w-1/3 object-cover': imagePosition === 'left',
    }
  );

  const contentClass = cn(
    "p-5",
    {
      'w-full': imagePosition === 'top',
      'w-full md:w-2/3': imagePosition === 'left',
    }
  );

  return (
    <div className={cardClass} onClick={onClick} role={onClick ? 'button' : undefined}>
      {image && (
        <div className={imageClass}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={contentClass}>
        <h3 className="text-xl font-playfair font-semibold mb-2 text-mahmudabad-blue">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
};

export default Card;
