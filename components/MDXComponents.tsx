import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { LinkAngledIcon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';
import { Text } from './Text';
import Box from './Box';

const OffsetBox = DS.styled('div', {
  variants: {
    size: {
      wide: {
        bp2: {
          mx: '-50px',
        },
      },
      hero: {
        mx: '-35px',
        bp2: {
          mx: '-90px',
        },
        bp3: {
          mx: '-166px',
        },
      },
    },
  },
});

const LinkHeading = (props) => (
  <Text {...props}>
    <Box
      as="a"
      href={`#${props.id}`}
      fontSize="inherit"
      textDecoration="none"
      display="inline-flex"
      alignItems="center"
      color="inherit"
      css={{
        svg: { opacity: 0 },
        ':hover svg': { opacity: 1 },
      }}
    >
      <span>{props.children}</span>
      <Box as="span" ml="$2" color="$gray500">
        <LinkAngledIcon />
      </Box>
    </Box>
  </Text>
);

export const MDXComponents = {
  ...DS,
  h1: (props) => <Text fontSize="$6" {...props} mb="$8" fontWeight="500" as="h1" />,
  h2: (props) => (
    <Text fontSize="$6" {...props} mt="$2" mb="$6" color="$gray600" lineHeight="30px" as="h2" />
  ),
  h3: (props) => (
    <LinkHeading
      size="7"
      {...props}
      css={{ mt: '$7', mb: '$1', lineHeight: '35px', fontWeight: 500, ...props.css }}
      as="h3"
    />
  ),
  h4: (props) => (
    <LinkHeading
      size="6"
      {...props}
      css={{ mt: '$7', mb: '$1', lineHeight: '25px', fontWeight: 500, ...props.css }}
      as="h3"
    />
  ),
  code: (props) => (
    <DS.Box css={{ my: '$5' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  p: (props) => (
    <Text fontSize="$2" {...props} mb="$3" lineHeight="30px" letterSpacing="0" as="p" />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <DS.Link
            {...props}
            css={{
              color: 'inherit',
              fontSize: 'inherit',
              ...props.css,
            }}
          />
        </NextLink>
      );
    }
    return (
      <DS.Link
        variant="blue"
        href={href}
        {...props}
        css={{
          fontSize: 'inherit',
          ...props.css,
        }}
        target="_blank"
        rel="noopener"
      />
    );
  },
  hr: (props) => (
    <DS.Divider size="large" {...props} css={{ my: '$6', mx: 'auto', ...props.css }} />
  ),
  inlineCode: (props) => <DS.Code {...props} />,
  ul: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ul" />
  ),
  ol: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ol" />
  ),
  li: (props) => (
    <li>
      <DS.Text size="4" {...props} css={{ lineHeight: '30px', letterSpacing: 0, ...props.css }} />
    </li>
  ),
  strong: (props) => (
    <DS.Text {...props} css={{ ...props.css, fontSize: 'inherit', fontWeight: 500 }} />
  ),
  img: ({ ...props }) => (
    <DS.Box css={{ my: '$6' }}>
      <DS.Box
        as="img"
        {...props}
        css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
      />
    </DS.Box>
  ),
  Image: ({ children, size, ...props }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <OffsetBox size={size}>
        <DS.Image
          {...props}
          css={{
            maxWidth: '100%',
            verticalAlign: 'middle',
          }}
        />
      </OffsetBox>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '23px',
          color: '$gray600',
          mt: '$2',
        }}
      >
        {children}
      </DS.Text>
    </DS.Box>
  ),
  Video: ({
    small,
    large,
    src,
    children = '',
    muted = true,
    autoPlay = true,
    controls,
    size,
    ...props
  }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <OffsetBox size={size}>
        <video
          src={src}
          autoPlay={autoPlay}
          playsInline
          muted={muted}
          controls={controls}
          loop
          style={{ width: '100%', display: 'block' }}
        ></video>
      </OffsetBox>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '23px',
          color: '$gray600',
          mt: '$2',
        }}
      >
        {children}
      </DS.Text>
    </DS.Box>
  ),
  blockquote: (props) => (
    <DS.Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        borderLeft: `1px solid ${DS.theme.colors.$gray400}`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$gray600',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
};
