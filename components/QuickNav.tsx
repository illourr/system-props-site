import React from 'react';
import { Box } from './Box';

// Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
const getLevel = (nodeName: string) => {
  return Number(nodeName.replace('H', ''));
};

export function QuickNav() {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    );

    setHeadings(headingElements);
  }, []);

  return (
    <Box as="nav">
      <Box as="p" textTransform="uppercase" color="$gray500">
        Quick Nav
      </Box>
      {headings.map(({ id, nodeName, innerText }) => {
        const level = getLevel(nodeName);
        return (
          <Box
            key={id}
            as="li"
            sx={{
              listStyleType: 'none',
              mb: '$2',
              fontSize: '$2',
              ml: level === 4 && '$2',
            }}
          >
            <Box
              as="a"
              href={`#${id}`}
              color="$gray400"
              textDecoration="none"
              _hoverAndFocus={{
                textDecoration: 'underline',
                color: '$gray500',
              }}
            >
              {innerText}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
