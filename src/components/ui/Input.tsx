import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  // Generate a unique ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  // Base classes
  const baseClasses = 'block w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors';
  
  // Error classes
  const errorClasses = error ? 'border-red-500' : 'border-gray-300';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Icon padding classes
  const leftPaddingClass = leftIcon ? 'pl-10' : '';
  const rightPaddingClass = rightIcon ? 'pr-10' : '';
  
  // Create the input element with appropriate ARIA attributes
  let inputElement;
  if (error) {
    inputElement = (
      <input
        id={inputId}
        className={`${baseClasses} ${errorClasses} ${leftPaddingClass} ${rightPaddingClass}`}
        aria-invalid="true"
        aria-describedby={`${inputId}-error`}
        {...props}
      />
    );
  } else if (helperText) {
    inputElement = (
      <input
        id={inputId}
        className={`${baseClasses} ${errorClasses} ${leftPaddingClass} ${rightPaddingClass}`}
        aria-invalid="false"
        aria-describedby={`${inputId}-helper`}
        {...props}
      />
    );
  } else {
    inputElement = (
      <input
        id={inputId}
        className={`${baseClasses} ${errorClasses} ${leftPaddingClass} ${rightPaddingClass}`}
        aria-invalid="false"
        {...props}
      />
    );
  }
  
  return (
    <div className={`${widthClasses} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}
        
        {inputElement}
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
      
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
      
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
