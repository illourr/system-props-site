import React from 'react';
import NextLink from 'next/link';
import {Container, Grid, Flex, Divider, Link} from '@modulz/design-system';
import {StitchesLogo} from '../components/StitchesLogo';
import {ExternalIcon} from './ExternalIcon';
import Box from './Box'
import {Text} from './Text'

export const Footer = () => {
  return (
    <Box as="footer" pb="$9">
      <Box display="flex" justifyContent="center" mb="$9" css={{justifyContent: 'center', mb: '$9'}}>
        <Divider size="large" />
      </Box>
      <Box maxWidth="4" mx="auto">
        <Box
          display="grid"
          gridTemplateColumns={{all: 'repeat(1, 1fr)', bp2: 'repeat(4, 1fr)'}}
          gap={{all: '$6', bp2: '$3'}}
          css={{
            '& ul': {listStyle: 'none', margin: '0', padding: '0'},
          }}
        >
          <Box
            display="flex"
            alignItems={{all: 'center', bp2: 'start'}}
            flexDirection={{all: null, bp2: 'column'}}
          >
            <NextLink href="/" passHref>
              <Box
                as="a"
                color="$hiContrast"
                display="inline-flex"
                _focus={{
                  boxShadow: 'none'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                >
                  System Props homepage
                </span>
                📦
              </Box>
            </NextLink>
            <Text
              as="h6"
              fontSize="$2"
              lineHeight="20px"
              color="$gray600"
              pr="$8"
              mt={{all: '0 0 0 $4', bp2: '$5 0 0 0'}}
            >
              Stitches is maintained by <Link href="https://modulz.app">Modulz</Link>.
            </Text>
          </Box>
          <Box>
            <Text as="h6" fontSize="$3" fontWeight="500" lineHeight="20px" >
              Overview
            </Text>
            <ul>
              <li>
                <Text as="p" fontSize="$3" mt="$3" lineHeight="20px" >
                  <NextLink href="/docs/introduction" passHref>
                    <Box as="a" color="$gray200" textDecoration="none">Introduction</Box>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/tutorials" passHref>
                    <Box as="a" color="$gray200" textDecoration="none">Tutorial</Box>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/api" passHref>
                    <Link variant="subtle">API</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/frequently-asked-questions" passHref>
                    <Link variant="subtle">FAQ</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="3" css={{fontWeight: 500, lineHeight: '20px'}}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/installation" passHref>
                    <Link variant="subtle">Installation</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/styling" passHref>
                    <Link variant="subtle">Styling</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/variants" passHref>
                    <Link variant="subtle">Variants</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/docs/tokens" passHref>
                    <Link variant="subtle">Configuration</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="3" css={{fontWeight: 500, lineHeight: '20px'}}>
              Community
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <NextLink href="/blog" passHref>
                    <Link variant="subtle">Blog</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <Link
                    variant="subtle"
                    href="https://github.com/modulz/stitches"
                    css={{display: 'inline-flex', alignItems: 'center'}}
                  >
                    Github
                    <Flex as="span" css={{ml: '$1', color: '$gray500'}}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <Link
                    variant="subtle"
                    href="https://twitter.com/stitchesjs"
                    css={{display: 'inline-flex', alignItems: 'center'}}
                  >
                    Twitter
                    <Flex as="span" css={{ml: '$1', color: '$gray500'}}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <Link
                    variant="subtle"
                    href="https://discord.com/invite/H4eG3Mk"
                    css={{display: 'inline-flex', alignItems: 'center'}}
                  >
                    Discord
                    <Flex as="span" css={{ml: '$1', color: '$gray500'}}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
