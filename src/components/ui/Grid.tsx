import React from 'react';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps {
  children: React.ReactNode;
  columns?: GridColumns;
  columnsSm?: GridColumns;
  columnsMd?: GridColumns;
  columnsLg?: GridColumns;
  columnsXl?: GridColumns;
  gap?: GridGap;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  columnsSm,
  columnsMd,
  columnsLg,
  columnsXl,
  gap = 'md',
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'grid';
  
  // Columns classes
  const getColumnsClass = (cols: GridColumns) => `grid-cols-${cols}`;
  
  const columnsClasses = [
    getColumnsClass(columns),
    columnsSm ? `sm:${getColumnsClass(columnsSm)}` : '',
    columnsMd ? `md:${getColumnsClass(columnsMd)}` : '',
    columnsLg ? `lg:${getColumnsClass(columnsLg)}` : '',
    columnsXl ? `xl:${getColumnsClass(columnsXl)}` : '',
  ].filter(Boolean).join(' ');
  
  // Gap classes
  const gapMap = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };
  
  return (
    <div
      className={`${baseClasses} ${columnsClasses} ${gapMap[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
