import React, { useState, useContext } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { useClipboard } from '../utils/useClipboard';
import { theme as appTheme } from './theme';
import Box from './Box';
import { Text } from './Text';
import { ThemeContext } from 'styled-components';

export const useCodeBlockTheme = () => {
  const { colors } = useContext(ThemeContext);
  return {
    plain: {
      color: colors.hiContrast,
      backgroundColor: colors.loContrast,
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          color: colors.gray500,
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
          color: colors.purple600,
        },
      },
      {
        types: ['punctuation', 'operator'],
        style: {
          color: colors.gray500,
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
          color: colors.yellow700,
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
};

export const liveEditorStyle: React.CSSProperties = {
  fontSize: appTheme.fontSizes[1],
  fontFamily: appTheme.fonts.mono,
  fontWeight: 400,
  lineHeight: 1.5,
};

const StyledLivePreview = ({ live, ...props }: { live?: boolean }) => (
  <Box
    p="$3"
    boxShadow="0 0 0 1px $gray100"
    borderTopLeftRadius="large"
    borderTopRightRadius="large"
    borderBottomLeftRadius={live ? '0' : 'large'}
    borderBottomRightRadius={live ? '0' : 'large'}
    fontFamily="$base"
  >
    <LivePreview {...props} />
  </Box>
);

const CodeContainer = ({
  live,
  children,
}: {
  live?: boolean;
  children: React.ReactNode;
}) => (
  <Box
    p="$1"
    borderTopLeftRadius={live ? '0' : 'large'}
    borderTopRightRadius={live ? '0' : 'large'}
    borderBottomLeftRadius="large"
    borderBottomRightRadius="large"
    marginTop="1px"
    boxShadow="0 0 0 1px $gray100"
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
  <Box
    appearance="none"
    border="0"
    bg="transparent"
    as="button"
    type="button"
    fontSize="$1"
    p="3px 5px"
    fontFamily="$untitled"
    position="absolute"
    top="$1"
    zIndex="$1"
    right="$1"
    _hover={{
      bg: '$gray50',
    }}
    color="$hiContrast"
    transition="background-color .15s linear"
    {...props}
  />
);

export function CodeBlock({
  className,
  live,
  manual,
  render,
  children,
  ...props
}) {
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);
  const codeblockTheme = useCodeBlockTheme();
  const theme = useContext(ThemeContext);

  const liveProviderProps = {
    theme: codeblockTheme,
    language,
    code: editorCode,
    scope: {
      Box,
    },
    noInline: manual,
    ...props,
  };

  const onChange = (newCode) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview live={live} />
        <Box position="relative" zIndex="1">
          <CodeContainer live={live}>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
          <CopyButton onClick={onCopy}>
            {hasCopied ? 'Copied' : 'Copy'}
          </CopyButton>
          <Text
            as="span"
            fontSize="$1"
            fontFamily="$untitled"
            textTransform="uppercase"
            position="absolute"
            width="100%"
            top="$2"
            zIndex={0}
            textAlign="center"
            pointerEvents="none"
            color="$gray600"
            letterSpacing=".1em"
            fontSize="11px"
          >
            Live example
          </Text>
        </Box>
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
    <Box position="relative" zIndex="1">
      <LiveProvider disabled {...liveProviderProps}>
        <CodeContainer live={live}>
          <LiveEditor style={liveEditorStyle} />
        </CodeContainer>
        <CopyButton onClick={onCopy}>
          {hasCopied ? 'Copied' : 'Copy'}
        </CopyButton>
      </LiveProvider>
    </Box>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};
