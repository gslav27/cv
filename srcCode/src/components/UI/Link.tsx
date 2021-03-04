import styled from 'styled-components/macro';

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover,
  :focus {
    text-decoration-line: underline;
  }
`;

export default StyledLink;
