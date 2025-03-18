import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * Optimized Image component with best practices for web performance and SEO
 * - Always requires alt text for accessibility and SEO
 * - Uses lazy loading by default for images below the fold
 * - Supports width and height attributes to prevent layout shifts
 * - Uses async decoding when possible
 */
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  ...props
}) => {
  // Ensure alt text is provided
  if (!alt && process.env.NODE_ENV === 'development') {
    console.warn('Image component requires an alt attribute for accessibility and SEO');
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={className}
      {...props}
    />
  );
};

export default Image;
