import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  // Base classes
  const baseClasses = 'rounded-lg transition-all';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-surface',
    outlined: 'bg-surface border border-gray-200',
    elevated: 'bg-surface shadow-md',
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  // Interactive classes
  const interactiveClasses = onClick ? 'cursor-pointer hover:shadow-lg' : '';
  
  // If the card is clickable, render as a button, otherwise as a div
  const Element = onClick ? 'button' : 'div';
  
  return (
    <Element
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${interactiveClasses} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Element>
  );
};

export default Card;
