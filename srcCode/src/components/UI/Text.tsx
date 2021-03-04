import * as React from 'react';
import styled from 'styled-components/macro';

/*
 * TYPES
 */
type hElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type txtElements = 'p' | 'i' | 'b' | 'span' | 'div';
type TextProps = {
  children: React.ReactNode;
  className?: string;
  element?: txtElements | hElements;
  italic?: boolean;
  bold?: boolean;
  lg?: boolean;
};

const hElementsArr: ReadonlyArray<hElements> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

/*
 * STYLES
 */
const DEFAULT_STYLES = {
  fontSize: 'font-size: 1em;',
  fontWeightBold: 'font-weight: 700;',
  fontStyleItalic: 'font-style: italic;',
  noMargin: 'margin: 0;',
};

export const StyledDiv = styled.div<TextProps>`
  font-size: ${({ lg }) => (lg ? 1.2 : 1)}em;
  ${({ bold }) => bold && DEFAULT_STYLES.fontWeightBold}
  ${({ italic }) => italic && DEFAULT_STYLES.fontStyleItalic}
`;

export const StyledI = styled.i<TextProps>`
  ${DEFAULT_STYLES.fontSize}
  ${({ bold }) => bold && DEFAULT_STYLES.fontWeightBold}
`;

export const StyledB = styled.b<TextProps>`
  ${DEFAULT_STYLES.fontSize}
  ${({ italic }) => italic && DEFAULT_STYLES.fontStyleItalic}
`;

export const StyledH1 = styled.h1<TextProps>`
  font-size: 2.5em;
  ${DEFAULT_STYLES.noMargin}
  ${DEFAULT_STYLES.fontWeightBold}
`;

export const StyledH2 = styled.h2<TextProps>`
  ${DEFAULT_STYLES.noMargin}
  ${DEFAULT_STYLES.fontWeightBold}
`;

/*
 * COMPONENT
 */
const Text: React.FC<TextProps> = ({
  children,
  element = undefined,
  italic = false,
  bold = false,
  lg = false,
  ...delegatedProps
}) => {
  switch (true) {
    // TypeScript's Array.includes issue https://github.com/microsoft/TypeScript/issues/26255#issuecomment-712248052
    case hElementsArr.includes(element as any): {  /* eslint-disable-line @typescript-eslint/no-explicit-any, prettier/prettier */
      return element === 'h1' ? (
        <StyledH1>{children}</StyledH1>
      ) : (
        <StyledH2 as={element} {...delegatedProps}>
          {children}
        </StyledH2>
      );
    }
    case element === 'i' || (italic && !element):
      return (
        <StyledI bold={bold} lg={lg} {...delegatedProps}>
          {children}
        </StyledI>
      );
    case element === 'b' || (bold && !element):
      return (
        <StyledB italic={italic} lg={lg} {...delegatedProps}>
          {children}
        </StyledB>
      );
    default:
      return (
        <StyledDiv
          as={element || 'div'}
          italic={italic}
          bold={bold}
          lg={lg}
          {...delegatedProps}
        >
          {children}
        </StyledDiv>
      );
  }
};

export default Text;
