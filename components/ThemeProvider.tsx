import React from 'react';
import {
  ThemeProvider as SCThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  html: {
    fontSize: theme.fontSizes.rootFontSize,
  },
  body: {
    margin: 0,
    backgroundColor: theme.colors.loContrast,
  },
  'body, button': {
    fontFamily: theme.fonts.base,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  svg: {
    display: 'block',
  },
  pre: {
    margin: 0,
    fontFamily: theme.fonts.mono,
  },
  '::selection': {
    backgroundColor: theme.colors.blue400,
    color: 'white',
  },
}));

export function ThemeProvider({ children }) {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </SCThemeProvider>
  );
}
