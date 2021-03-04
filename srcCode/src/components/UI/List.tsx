import * as React from 'react';
import styled from 'styled-components/macro';
// components
import Text, { StyledDiv } from './Text';
import ListItem from './ListItem';

type ListProps = {
  children: React.ReactNode;
  className?: string;
  subheader?: string;
  noListStyle?: boolean;
  noBoldSubheader?: boolean;
};

const StyledList = styled.ul<ListProps>`
  list-style: ${({ noListStyle }) => (noListStyle ? 'none' : 'disc')};
  padding: 0;
  margin: 0;
  width: 100%;

  ${ListItem} {
    margin-left: ${({ noListStyle }) => (noListStyle ? '0' : '15')}px;
  }
`;

const StyledSubHeader = styled(StyledDiv)`
  margin-bottom: 5px;
`;

const List: React.FC<ListProps> = ({
  children,
  className,
  subheader,
  noListStyle,
  noBoldSubheader,
}) => (
  <StyledList className={className} noListStyle={noListStyle}>
    {subheader && (
      <StyledSubHeader>
        <Text bold={!noBoldSubheader}>{subheader}:</Text>
      </StyledSubHeader>
    )}
    {children}
  </StyledList>
);

export default List;
