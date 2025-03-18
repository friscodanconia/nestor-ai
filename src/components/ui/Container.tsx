import React from 'react';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
  padding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  padding = true,
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };
  
  // Padding classes
  const paddingClasses = padding ? 'px-4 sm:px-6 md:px-8' : '';
  
  return (
    <div
      className={`mx-auto ${sizeClasses[size]} ${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
