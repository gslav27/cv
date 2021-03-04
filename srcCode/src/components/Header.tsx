import * as React from 'react';
import styled from 'styled-components/macro';
// constants
import * as CONSTANTS from '../utils/constants';
// styles
import { ThemesType, breakpoints } from '../utils/themes';
// components
import Card, { CardProps } from './UI/Card';
import Text from './UI/Text';
import IconButton from './UI/IconButton';
import { ReactComponent as ModeLightIcon } from '../icons/modeLight.svg';
import { ReactComponent as ModeNightIcon } from '../icons/modeNight.svg';

type HeaderProps = {
  theme: ThemesType;
  onToggleTheme: () => void;
};

const StyledCard = styled(Card)<CardProps>`
  position: relative;

  > * {
    margin-bottom: 0 !important;
  }

  h1 {
    margin-top: 5px;
  }

  ${IconButton} {
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;
  }

  @media (min-width: ${breakpoints.lg}) {
    ${IconButton} {
      position: fixed;
    }
  }

  @media print {
    ${IconButton} {
      display: none;
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => (
  <StyledCard palette="contrast" column>
    <Text element="h1">{CONSTANTS.FULL_NAME}</Text>
    <Text element="h2">{CONSTANTS.ROLE}</Text>
    <IconButton
      onClick={onToggleTheme}
      title={`Turn on ${theme === 'light' ? 'Dark' : 'Light'} theme`}
    >
      {theme === 'light' ? <ModeNightIcon /> : <ModeLightIcon />}
    </IconButton>
  </StyledCard>
);

export default Header;
