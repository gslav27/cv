import styled from 'styled-components/macro';
import { breakpoints } from '../../utils/themes';

const StyledIconButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0px;
  color: ${({ theme }) => theme.colorPrimary};
  opacity: 0.5;
  background: ${({ theme }) => theme.bgPrimary};
  border-radius: 25px;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;

  :hover,
  :focus {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.lg}) {
    background: none;
  }
`;

export default StyledIconButton;
