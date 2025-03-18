import React from 'react';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption' | 'subtitle';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
  align?: TextAlign;
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'success' | 'error' | 'warning';
  className?: string;
  as?: React.ElementType;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  weight = 'normal',
  align = 'left',
  color = 'primary',
  className = '',
  as,
  ...props
}) => {
  // Size and element mapping
  const variantMap: Record<TextVariant, { element: React.ElementType; className: string }> = {
    h1: { element: 'h1', className: 'text-4xl font-semibold leading-tight' },
    h2: { element: 'h2', className: 'text-3xl font-semibold leading-tight' },
    h3: { element: 'h3', className: 'text-2xl font-semibold leading-tight' },
    h4: { element: 'h4', className: 'text-xl font-semibold leading-tight' },
    h5: { element: 'h5', className: 'text-lg font-semibold leading-tight' },
    h6: { element: 'h6', className: 'text-md font-semibold leading-tight' },
    body: { element: 'p', className: 'text-md leading-normal' },
    'body-sm': { element: 'p', className: 'text-sm leading-normal' },
    caption: { element: 'span', className: 'text-xs leading-normal' },
    subtitle: { element: 'p', className: 'text-lg leading-normal' },
  };
  
  // Weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // Color classes
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    tertiary: 'text-gray-500',
    accent: 'text-accent',
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600',
  };
  
  const { element, className: variantClassName } = variantMap[variant];
  const Component = as || element;
  
  return (
    <Component
      className={`${variantClassName} ${weightClasses[weight]} ${alignClasses[align]} ${colorClasses[color]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
