import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as SP from 'system-props';
import styled from 'styled-components';
import { Box } from './Box';
import { useCodeBlockTheme, liveEditorStyle } from './CodeBlock';
import { theme } from './theme';

const demoCode = `// Edit the code!
const Button = (props) => {
  return (
    <Box
      backgroundColor="$blue400"
      borderRadius="$pill"
      color="white"
      fontSize="$body"
      fontWeight="600"
      p="$2 $3"
      textDecoration="none"
      transition="all 200ms ease"
      margin="0 $2"
      _hover={{
        boxShadow: '0 5px 15px rgba(0, 0, 0, .12)',
        transform: 'translateY(-2px)',
      }}
      {...props}
    />
  )
};

render(
  <Box display="flex" justifyContent="center">
    <Button as="a" href="/docs/installation">Documentation</Button>
    <Button backgroundColor="transparent" color="$gray400" as="a" href="https://github.com/system-props/system-props">GitHub</Button>
  </Box>
);`;

const StyledLivePreview = (props) => (
  <Box pb="$9">
    <LivePreview {...props} />
  </Box>
);

export function HeroCodeDemo() {
  const codeblockTheme = useCodeBlockTheme();
  const liveProviderProps = {
    theme: codeblockTheme as any,
    code: demoCode,
    scope: {
      styled,
      Box: Box,
      ...SP,
    },
    noInline: true,
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <StyledLivePreview />
      <Box
        p="$1"
        boxShadow="0 0 0 1px $gray100"
        sx={{
          textarea: { outline: '0' },
          ':focus-within': {
            boxShadow: '0 0 0 1px $blue500',
          },
          'textarea::selection': {
            backgroundColor: 'hsla(208, 10%, 65%,1)',
          },
        }}
      >
        <LiveEditor style={liveEditorStyle} />
        <LiveError
          style={{
            fontFamily: theme.fonts.base,
            fontSize: theme.fontSizes[3],
            padding: theme.space[2],
            overflowX: 'auto',
            color: 'white',
            backgroundColor: theme.colors.red600,
          }}
        />
      </Box>
    </LiveProvider>
  );
}
