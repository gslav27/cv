import * as React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../../utils/themes';
// components
import Text from './Text';

type palette = 'primary' | 'secondary' | 'contrast';

export type CardProps = {
  palette?: palette;
  className?: string;
  column?: boolean;
  title?: string;
};

const StyledCardTitle = styled(Text)`
  border-bottom: 1px solid #bbb;
  width: 100%;
  font-size: 1.75em;
`;

const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ column }) => (column ? 'flex-start' : 'center')};
  align-items: flex-start;
  padding: 20px;
  height: 100%;
  width: 100%;
  color: ${({ theme, palette }) =>
    palette === 'contrast' ? theme.colorContrast : theme.colorPrimary};
  background: ${({ theme, palette }) =>
    palette === 'primary' /* eslint-disable-line no-nested-ternary */
      ? theme.bgPrimary
      : palette === 'secondary'
      ? theme.bgSecondary
      : theme.bgContrast};

  > *:not(:last-child) {
    margin-bottom: ${({ column }) => (column ? 15 : 0)}px;
  }

  @media (min-width: ${breakpoints.sm}) {
    ${StyledCardTitle} {
      margin-top: -20px;
    }
  }
`;

const Card: React.FC<CardProps> = ({
  className,
  column,
  palette = 'primary',
  title = undefined,
  children,
}) => (
  <StyledCard className={className} column={column} palette={palette}>
    {title && <StyledCardTitle element="h2">{title}</StyledCardTitle>}
    {children}
  </StyledCard>
);

export default Card;
