import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    font-size: 14px;
    background: ${({ theme }) => theme.bgBody};
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    transition: all 0.1s linear;
    transition-property: height, background, box-shadow, outline, font-weight;
  }

  @media print {
    #root > .cvWrapper {
      height: 100vh;
    }
  }
`;
