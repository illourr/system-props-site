import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as SP from 'system-props';
import styled from 'styled-components';
import Box from './Box';
import { theme } from './CodeBlock';

const demoCode = `// Edit the code!
const Button = (props) => {
  return (
    <Box
      backgroundColor="$blue400"
      borderRadius="pill"
      color="white"
      fontSize="$body"
      fontWeight="500"
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
    <Button backgroundColor="transparent" color="$gray400" as="a" href="https://github.com/roginfarrer/system-props">GitHub</Button>
  </Box>
);`;

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 'var(--fontSizes-2)',
  fontFamily: 'var(--fonts-mono)',
  fontWeight: 400,
  lineHeight: 1.5,
  backgroundColor: 'transparent',
};

const StyledLivePreview = (props) => (
  <Box pb="$9">
    <LivePreview {...props} />
  </Box>
);

export function HeroCodeDemo() {
  const liveProviderProps = {
    theme: theme as any,
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
        borderRadius="$2"
        boxShadow="0 0 0 1px $gray100"
        css={{
          textarea: { outline: '0' },
          ':focus-within': {
            boxShadow: '0 0 0 3px $blue500',
          },
          'textarea::selection': {
            backgroundColor: 'hsla(208, 10%, 65%,1)',
          },
        }}
      >
        <LiveEditor style={liveEditorStyle} />
        <LiveError
          style={{
            fontFamily: 'var(--fonts-normal)',
            fontSize: 'var(--fontSizes-3)',
            padding: 'var(--space-2)',
            overflowX: 'auto',
            color: 'white',
            backgroundColor: 'var(--colors-$red600)',
          }}
        />
      </Box>
    </LiveProvider>
  );
}
