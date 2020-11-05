import NextLink from 'next/link';
import { Box, Flex, Container, Divider, Grid, Text, Code } from '@modulz/design-system';
import { HeroCodeDemo } from '../components/HeroCodeDemo';
import { StitchesLogo } from '../components/StitchesLogo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import MyBox from '../components/Box';
import { Text as MyText } from '../components/Text';
import { ThemeProvider } from '../components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <Box>
        <TitleAndMetaTags title="Stitches" />
        <MyBox as="header" p="$4" mb="$7">
          <NextLink href="/" passHref>
            <MyBox as="a" color="$hiContrast" display="inline-flex" _focus={{ boxShadow: 'none' }}>
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
                System props homepage
              </span>
              📦
            </MyBox>
          </NextLink>
        </MyBox>

        <MyBox maxWidth="$3" m="0 auto $4" textAlign="center">
          <MyText
            fontSize={{ all: '$6', bp2: '$8' }}
            fontWeight="500"
            lineHeight={{ all: '35px', bp2: '55px' }}
            letterSpacing={{ all: null, bp2: '-.055em' }}
          >
            The modern styling library
          </MyText>
        </MyBox>

        <MyBox maxWidth="$2" mx="auto" textAlign="center">
          <MyText
            as="h2"
            fontSize="$3"
            color="$gray500"
            textAlign="center"
            lineHeight={{ _: '25px', bp2: '30px' }}
            fontWeight="normal"
          >
            Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
            developer experience.
          </MyText>
        </MyBox>

        <MyBox py="$8">
          <MyBox mx="auto" maxWidth="3">
            <HeroCodeDemo />
          </MyBox>
        </MyBox>

        <Flex css={{ justifyContent: 'center', mb: '$9' }}>
          <Divider size="large" css={{ flexShrink: 0, width: '45px' }} />
        </Flex>

        <Container size="2">
          <MyBox
            border="1px solid $gray100"
            borderRadius="medium"
            fontFamily="mono"
            lineHeight="1"
            color="$yellow600"
            p="$3"
            fontSize="$1"
          >
            npm install{' '}
            <MyBox as="span" color="$hiContrast">
              system-props
            </MyBox>
          </MyBox>
        </Container>

        <Flex css={{ justifyContent: 'center', my: '$9' }}>
          <Divider size="large" css={{ flexShrink: 0, width: '45px' }} />
        </Flex>

        <Container size="2" css={{ textAlign: 'center' }}>
          <Text as="h2" size={{ initial: '6', bp2: '7' }} css={{ mb: '$4', fontWeight: 500 }}>
            Features
          </Text>
          <Text as="h3" size={{ initial: '5', bp2: '6' }} css={{ color: '$gray600', mb: '$4' }}>
            A fully-featured styling library.
          </Text>
        </Container>

        <Container size={{ initial: '2', bp2: '3' }} css={{ my: '$8' }}>
          <Grid
            css={{
              gap: '$6',
              gridTemplateColumns: '1fr',
              bp2: {
                gap: '$7',
                gridTemplateColumns: '1fr 1fr',
              },
            }}
          >
            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Performant
              </Text>
              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Lightweight
              </Text>
              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Both <Code>@stitches/core</Code> and <Code>@stitches/react</Code> libraries combined
                weigh in at ~8.0kb gzipped.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Server-Side Rendering
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Stitches supports cross-browser server-side rendering, even for responsive styles
                and variants.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Variants
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Variants are a first-class citizen of Stitches, so you can design composable
                component APIs which are typed automatically.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Theming
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Developer experience
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                With a fully-typed API, token-aware properties, and custom utils, Stitches provides
                a fun and intuitive DX.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Critical Path CSS
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Stitches only injects the styles which are actually used, so your users don't
                download unnecessary CSS.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Specificity
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                No more specificity issues due to the atomic output. Even extended components (via
                the <Code>as</Code> prop) won't contain duplicate CSS properties.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Polymorphic <Code>as</Code> prop
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Included in Components returned from the styled function
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Easy overrides
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '30px', color: '$gray600' }}
              >
                Stitches provides a <Code>css</Code> prop, which allows style overrides to be
                applied in the consumption layer.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
