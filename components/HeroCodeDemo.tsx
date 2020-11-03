import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Box, theme as DStheme } from '@modulz/design-system';
import * as SP from 'system-props';
import styled from 'styled-components';
import SPBox from './Box';

const { colors } = DStheme;

const { ...systemProps } = SP;

const theme: any = {
  plain: {
    color: 'var(--colors-hiContrast)',
    backgroundColor: 'var(--colors-loContrast)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.$gray500,
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: colors.$purple600,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.$gray600,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: colors.$red600,
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: colors.$blue600,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: colors.$yellow600,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: colors.$green600,
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.$blue600,
      },
    },
  ],
};

const demoCode = `// Edit the code!
const Button = (props) => {
  return (
    <Box
      backgroundColor="$primary"
      borderRadius="round"
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
  <Box css={{ pb: '$9' }}>
    <LivePreview {...props} />
  </Box>
);

export function HeroCodeDemo() {
  const liveProviderProps = {
    theme: theme as any,
    code: demoCode,
    scope: {
      styled,
      Box: SPBox,
      ...systemProps,
    },
    noInline: true,
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <StyledLivePreview />
      <Box
        css={{
          p: '$1',
          borderRadius: '$2',
          // bc: '$gray100',
          boxShadow: '0 0 0 1px $gray300',
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
