import * as React from 'react';
import styled from 'styled-components/macro';
// constants
import { CONTACTS } from '../utils/constants';
// styles
import { breakpoints } from '../utils/themes';
// components
import Card from './UI/Card';
import IconButton from './UI/IconButton';
import { ReactComponent as CodeIcon } from '../icons/code.svg';

const StyledCard = styled(Card)`
  align-items: center;
  text-align: center;
  padding: 5px;

  ${IconButton} {
    color: ${({ theme }) => theme.colorContrast};
    background: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    align-items: flex-end;
    text-align: right;
  }

  @media (min-width: ${breakpoints.lg}) {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: none;
    width: auto;
    height: auto;
    padding: 0;

    ${IconButton} {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }

  @media print {
    display: none;
  }
`;

const SourceCode: React.FC = () => (
  <StyledCard palette="contrast" column>
    <IconButton
      as="a"
      href={`https://${CONTACTS.GH}/cv/tree/master/src`}
      target="_blank"
      title="source code"
    >
      <CodeIcon />
    </IconButton>
  </StyledCard>
);

export default SourceCode;
