import NextLink from 'next/link';
import { HeroCodeDemo } from '../components/HeroCodeDemo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  return (
    <div>
      <TitleAndMetaTags title="System Props" />
      <Box as="header" p="$4" mb="$7">
        <NextLink href="/" passHref>
          <Box
            as="a"
            color="$hiContrast"
            display="inline-flex"
            _focus={{ boxShadow: 'none' }}
            textDecoration="none"
            fontSize="33px"
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
              System props homepage
            </span>
            📦
          </Box>
        </NextLink>
      </Box>

      <Box
        position={{ all: 'absolute', bp2: 'fixed' }}
        top={{ all: '30px', bp2: '$3' }}
        right="$3"
        zIndex="$2"
      >
        <ThemeToggle />
      </Box>

      <Box px="$4" maxWidth="$3" m="0 auto $4" textAlign="center">
        <Text
          fontSize={{ all: '$6', bp2: '$8' }}
          fontWeight="600"
          lineHeight={{ all: '35px', bp2: '55px' }}
        >
          Theme-driven style props
        </Text>
      </Box>

      <Box px="$4" maxWidth="$2" mx="auto" textAlign="center">
        <Text
          as="h2"
          fontSize="$4"
          color="$gray500"
          textAlign="center"
          lineHeight={{ _: '25px', bp2: '30px' }}
          fontWeight="normal"
        >
          Quickly build custom UI components with theme-driven style props based
          on scales defined in your theme.
        </Text>
      </Box>

      <Box p="$8 $4" mx="auto" maxWidth="$3">
        <HeroCodeDemo />
      </Box>

      <Box display="flex" justifyContent="center" mb="$9">
        <Box
          border="0"
          m="0"
          height="1px"
          bg="$gray100"
          flexShrink={0}
          width="45px"
        />
      </Box>

      <Box px="$4" maxWidth="$2" mx="auto">
        <Box
          border="1px solid $gray100"
          borderRadius="medium"
          fontFamily="$mono"
          lineHeight="1"
          color="$yellow600"
          p="$3"
          fontSize="$1"
        >
          npm install{' '}
          <Box as="span" color="$hiContrast">
            system-props
          </Box>
        </Box>
      </Box>

      <Box px="$4" display="flex" justifyContent="center" my="$9">
        <Box
          border="0"
          m="0"
          height="1px"
          bg="$gray100"
          flexShrink={0}
          width="45px"
        />
      </Box>

      <Box px="$4" maxWidth="$2" textAlign="center" mx="auto">
        <Text
          as="h2"
          fontSize={{ all: '$5', bp2: '$6' }}
          mb="$4"
          fontWeight="600"
        >
          Features
        </Text>
        <Text
          as="h3"
          fontSize={{ all: '$4', bp2: '$5' }}
          color="$gray400"
          mb="$4"
          fontWeight="normal"
        >
          A fully-featured styling library.
        </Text>
      </Box>

      <Box px="$4" maxWidth={{ all: '$2', bp2: '$3' }} m="$8 auto">
        <Box
          display="grid"
          gap={{ all: '$6', bp2: '$7' }}
          gridTemplateColumns={{ all: '1fr', bp2: '1fr 1fr' }}
        >
          {valueProps.map(({ title, description }) => (
            <div key={title}>
              <Text
                fontSize="$5"
                as="h4"
                lineHeight="1"
                fontWeight="600"
                mb="$2"
              >
                {title}
              </Text>
              <Text as="p" fontSize="$3" lineHeight="30px" color="$gray500">
                {description}
              </Text>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
}

const valueProps = [
  {
    title: 'Theme-driven style props',
    description:
      'Rapidly develop consistent UI components with style props on your components.',
  },
  {
    title: 'Intuitive and efficient theming',
    description:
      'Quickly set font-size, margin, padding, color and more from scales defined in your theme.',
  },
  {
    title: 'Styled System compatible',
    description: 'Similar API to Styled System makes it easy to switch.',
  },
  {
    title: 'Pseudo-selector props',
    description: 'Style your components at common CSS pseudo selectors.',
  },
  {
    title: 'Your CSS-in-JS library',
    description:
      'Compatible with most CSS-in-JS libraries, including Styled Components and Emotion',
  },
  {
    title: 'Perfect for design systems',
    description:
      'Primitive building blocks for component-based design systems.',
  },
  {
    title: 'Developer experience',
    description:
      'Written in TypeScript, token-aware properties, and expandable API',
  },
];
