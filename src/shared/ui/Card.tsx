import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-[#061e2b] border border-white/5 rounded-xl p-6 transition-all hover:border-[#00ed64]/30',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
