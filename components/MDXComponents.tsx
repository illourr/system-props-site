import NextLink from 'next/link';
import { CodeBlock } from './CodeBlock';
import { Text } from './Text';
import Box from './Box';

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
      <Box verticalAlign="middle" fontSize="$2" as="span" ml="$2" color="$gray500">
        🔗
      </Box>
    </Box>
  </Text>
);

export const MDXComponents = {
  h1: (props) => <Text fontSize="$6" {...props} mb="$8" fontWeight="500" as="h1" />,
  h2: (props) => (
    <Text fontSize="$6" {...props} mt="$2" mb="$6" color="$gray600" lineHeight="30px" as="h2" />
  ),
  h3: (props) => (
    <LinkHeading
      fontSize="$6"
      {...props}
      mt="$7"
      mb="$1"
      lineHeight="35px"
      fontWeight="500"
      as="h3"
    />
  ),
  h4: (props) => (
    <LinkHeading
      fontSize="$5"
      letterSpacing="-0.025em"
      {...props}
      mt="$7"
      mb="$1"
      lineHeight="25px"
      fontWeight="500"
      as="h3"
    />
  ),
  code: (props) => (
    <Box my="$5">
      <CodeBlock {...props} />
    </Box>
  ),
  p: (props) => (
    <Text fontSize="$3" {...props} mb="$3" lineHeight="30px" letterSpacing="0" as="p" />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <Box as="a" color="$blue600" fontSize="inherit" {...props} />
        </NextLink>
      );
    }
    return (
      <Box
        as="a"
        color="$blue600"
        href={href}
        fontSize="inherit"
        {...props}
        target="_blank"
        rel="noopener"
      />
    );
  },
  hr: (props) => <Box as="hr" height="2px" bg="$gray200" m="$6 auto" />,
  inlineCode: (props) => (
    <Box
      fontFamily="mono"
      bg="$purple50"
      color="$purple600"
      as="code"
      p="0 3px 2px"
      fontSize="$2"
      borderRadius="small"
      {...props}
    />
  ),
  ul: (props) => <Box {...props} color="$hiContrast" mb="$3" as="ul" />,
  ol: (props) => <Box {...props} color="$hiContrast" mb="$3" as="ol" />,
  li: (props) => (
    <li>
      <Text fontSize="$3" {...props} lineHeight="30px" letterSpacing="0" />
    </li>
  ),
  strong: (props) => <Text {...props} as="strong" fontSize="inherit" fontWeight="500" />,
  img: ({ ...props }) => (
    <Box my="$6">
      <Box as="img" {...props} maxWidth="100%" verticalAlign="middle" />
    </Box>
  ),
  blockquote: (props) => (
    <Box
      mt="$6"
      mb="$5"
      pl="$4"
      borderLeft="1px solid $gray400"
      color="$orange400"
      css={{
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
