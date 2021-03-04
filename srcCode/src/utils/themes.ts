import {
  DefaultTheme,
  // FlattenSimpleInterpolation,
  // css,
} from 'styled-components';

/*
 * TYPES
 */
export type ThemesType = 'light' | 'dark';
type BreakpointsTypes = 'sm' | 'md' | 'lg' | 'xl';
// type MediaScreenWidthType = {
//   [brType in BreakpointsTypes]: (
//     literals: TemplateStringsArray,
//     ...placeholders: any[] /* eslint-disable-line @typescript-eslint/no-explicit-any */
//   ) => FlattenSimpleInterpolation;
// };

/*
 * CSS VARIABLES
 */
export const breakpoints: Readonly<{ [brType in BreakpointsTypes]: string }> = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const COLORS = {
  black: '#000',
  white: '#fff',
  lightGrey1: '#eee',
  lightGrey2: '#f5f5f5',
  lightBlack1: '#0a0a0a',
  gh: '#24292e', // from github header background
  ghDark: '#34393e',
  ghLight: '#14191e',
};

// /*
//  * MIXINS
//  */
// export const mediaScreenWidth: MediaScreenWidthType = Object.entries(
//   breakpoints,
// ).reduce((acc, [brKey, brValue]) => {
//   acc[brKey as BreakpointsTypes] = (
//     literals: TemplateStringsArray,
//     ...placeholders: any[] /* eslint-disable-line @typescript-eslint/no-explicit-any */
//   ) => css`
//     @media (min-width: ${brValue}) {
//       ${css(literals, ...placeholders)};
//     }
//   `;
//   return acc;
// }, {} as MediaScreenWidthType);

/*
 * THEMES
 */
export const themes: Readonly<{ [theme in ThemesType]: DefaultTheme }> = {
  light: {
    colorPrimary: COLORS.black,
    colorContrast: COLORS.white,
    bgPrimary: COLORS.white,
    bgSecondary: COLORS.lightGrey1,
    bgContrast: COLORS.lightBlack1,
    bgBody: COLORS.lightGrey2,
  },
  dark: {
    colorPrimary: COLORS.lightGrey2,
    colorContrast: COLORS.white,
    bgPrimary: COLORS.ghDark,
    bgSecondary: COLORS.gh,
    bgContrast: COLORS.ghLight,
    bgBody: COLORS.ghLight,
  },
};
