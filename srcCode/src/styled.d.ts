import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorPrimary: string;
    colorContrast: string;
    bgPrimary: string;
    bgSecondary: string;
    bgBody: string;
    bgContrast: string;
  }
}
