import { Box, Button, Text, darkThemeClass } from '@modulz/design-system';
import React, { useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { useClipboard } from '../utils/useClipboard';
import { styled, css } from '@modulz/design-system';
import { theme as appTheme } from './theme';
import MyBox from './Box';

const { colors } = appTheme;

export const theme: any = {
  plain: {
    color: 'var(--colors-hiContrast)',
    backgroundColor: 'var(--colors-loContrast)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.gray300,
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
        color: colors.purple400,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray300,
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
        color: colors.red600,
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: colors.blue500,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: colors.yellow600,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: colors.green600,
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blue500,
      },
    },
  ],
};

export const liveEditorStyle: React.CSSProperties = {
  fontSize: appTheme.fontSizes[1],
  fontFamily: appTheme.fonts.mono,
  fontWeight: 400,
  lineHeight: 1.5,
};

const StyledLivePreview = ({ live, ...props }: { live?: boolean }) => (
  <MyBox
    p="$3"
    boxShadow="0 0 0 1px $gray50"
    borderTopLeftRadius="$2"
    borderTopRightRadius="$2"
    borderBottomLeftRadius={live ? '0' : '$2'}
    borderBottomRightRadius={live ? '0' : $2}
  >
    <LivePreview {...props} />
  </MyBox>
);

const CodeContainer = ({ live, children }: { live?: boolean; children: React.ReactNode }) => (
  <MyBox
    p="$1"
    borderTopLeftRadius={live ? '0' : '$2'}
    borderTopRightRadius={live ? '0' : '$2'}
    borderBottomLeftRadius="$2"
    borderBottomRightRadius="$2"
    marginTop="1px"
    boxShadow="0 0 0 1px $gray50"
    css={{
      textarea: { outline: 0 },
      'textarea::selection': {
        backgroundColor: 'hsla(208, 10%, 65%,1)',
      },
    }}
    children={children}
  />
);

const CopyButton = (props: any) => (
  <Button
    variant="ghost"
    css={{
      fontFamily: '$untitled',
      position: 'absolute',
      top: '$1',
      zIndex: '$1',
      right: '$1',
    }}
    {...props}
  />
);

export function CodeBlock({ className, live, manual, render, children, ...props }) {
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    scope: {
      styled,
      css,
      darkTheme: darkThemeClass,
    },
    noInline: manual,
    ...props,
  };

  const onChange = (newCode) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview live={live} />
        <Box
          css={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <CodeContainer live={live}>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
          <CopyButton onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</CopyButton>
          <Text
            as="span"
            size="1"
            css={{
              fontFamily: '$untitled',
              textTransform: 'uppercase',
              position: 'absolute',
              width: '100%',
              top: '$2',
              zIndex: 0,
              textAlign: 'center',
              pointerEvents: 'none',
              color: '$gray600',
              letterSpacing: '.1em',
              fontSize: '11px',
            }}
          >
            Live example
          </Text>
        </Box>
        <LiveError
          style={{
            fontFamily: appTheme.fonts.base,
            fontSize: appTheme.fontSizes[3],
            padding: appTheme.space[2],
            overflowX: 'auto',
            color: 'white',
            backgroundColor: colors.red600,
          }}
        />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview />
      </LiveProvider>
    );
  }

  return (
    <Box
      css={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <LiveProvider disabled {...liveProviderProps}>
        <CodeContainer live={live}>
          <LiveEditor style={liveEditorStyle} />
        </CodeContainer>
        <CopyButton onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</CopyButton>
      </LiveProvider>
    </Box>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};
