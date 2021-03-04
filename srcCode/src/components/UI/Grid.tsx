import * as React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../../utils/themes';

/**
 * варианты параметра, который отвечает за ширину блока
 */
enum BlockSizes {
  AUTO = 'auto',
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TWELVE = 12,
}

/**
 * пропсы компонента Grid
 */
type GridProps = {
  className?: string;
  container?: boolean;
  xs?: BlockSizes;
  sm?: BlockSizes;
  md?: BlockSizes;
  lg?: BlockSizes;
  xl?: BlockSizes;
};

/**
 * % ширины в зависимости от параметра размеров блока
 */
const blockSizePercents: Readonly<{ [blockSize in BlockSizes]?: number }> = {
  3: 25,
  4: (4 / 12) * 100,
  5: (5 / 12) * 100,
  6: 50,
  7: (7 / 12) * 100,
  8: (8 / 12) * 100,
  9: 75,
  12: 100,
};

/**
 * хелпер, который возвращает css стили в соответствии с параметром размера блока
 */
const getGridWidth = (size?: BlockSizes): string => {
  const v = size ? `${blockSizePercents[size]}%` : 'auto';
  return `
    max-width: ${v};
    flex-basis: ${v};`;
};

/*
 * стили компонента Grid
 */
const StyledGrid = styled.div<GridProps>`
  width: 100%;
  margin: 0 auto;
  max-width: 850px;

  ${({ container }) =>
    container
      ? `display: flex;
        flex-wrap: wrap;
        box-shadow: 0 5px 10px #ccc;`
      : `display: inline-flex;
        flex-grow: 0;`}};

  ${({ xs }) => getGridWidth(xs)};
  ${({ sm }) =>
    sm && `@media (min-width: ${breakpoints.sm}) {${getGridWidth(sm)}}`};
  ${({ md }) =>
    md && `@media (min-width: ${breakpoints.md}) {${getGridWidth(md)}}`};
  ${({ lg }) =>
    lg && `@media (min-width: ${breakpoints.lg}) {${getGridWidth(lg)}}`};
  ${({ xl }) =>
    xl && `@media (min-width: ${breakpoints.xl}) {${getGridWidth(xl)}}`};
`;

const Grid: React.FC<GridProps> = ({
  className,
  container,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => (
  <StyledGrid
    className={className}
    container={container}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
  >
    {children}
  </StyledGrid>
);

export default Grid;
