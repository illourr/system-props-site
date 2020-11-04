import React from 'react';
import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  html: {
    fontSize: theme.fontSizes.rootFontSize,
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
