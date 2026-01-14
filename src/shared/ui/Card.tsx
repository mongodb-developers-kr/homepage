import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@shared/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-bg-tertiary border border-border rounded-xl p-6 transition-all hover:border-border-hover',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
