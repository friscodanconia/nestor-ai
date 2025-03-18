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
  container?: boolean;
  item?: boolean;
  spacing?: number;
  xs?: number;
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
  container = false,
  item = false,
  spacing = 0,
  xs,
  ...rest
}) => {
  const gapClasses = {
    none: '',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const columnsClasses = `grid-cols-${columns}`;
  const columnsSmClasses = columnsSm ? `sm:grid-cols-${columnsSm}` : '';
  const columnsMdClasses = columnsMd ? `md:grid-cols-${columnsMd}` : '';
  const columnsLgClasses = columnsLg ? `lg:grid-cols-${columnsLg}` : '';
  const columnsXlClasses = columnsXl ? `xl:grid-cols-${columnsXl}` : '';

  // Handle container and item props
  let additionalClasses = '';
  if (container) {
    additionalClasses += ` grid ${gapClasses[gap]} ${spacing ? `gap-${spacing}` : ''}`;
  }
  if (item) {
    additionalClasses += ` ${xs ? `col-span-${xs}` : ''}`;
  }

  const classes = `${container ? additionalClasses : `grid ${gapClasses[gap]} ${columnsClasses} ${columnsSmClasses} ${columnsMdClasses} ${columnsLgClasses} ${columnsXlClasses}`} ${className}`;

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
