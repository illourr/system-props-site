import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from '../components/MDXComponents';
import { ThemeToggle } from '../components/ThemeToggle';
import { DocsPage } from '../components/DocsPage';
// import { useAnalytics } from '../utils/analytics';
import { ThemeProvider } from 'styled-components';
import { theme as baseTheme } from '../components/theme';
import { GlobalStyles } from '../components/ThemeProvider';
import Box from '../components/Box';

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...baseTheme.colors.modes.dark,
  },
};

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState(baseTheme);

  const darkMode = useDarkMode();

  // useAnalytics();

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (darkMode.value) {
      return setTheme(darkTheme);
    }
    return setTheme(baseTheme);
  }, [darkMode.value]);

  // An ugly, terrible and sad hack to scroll the page to the
  // anchor location when present. The reason this stopped working is
  // due to the dark theme hack. :facepalm:
  useEffect(() => {
    if (mounted) {
      const [_, hashLocation] = router.asPath.split('#');
      if (hashLocation) {
        const anchor = document.querySelector(`#${hashLocation}`);
        if (!anchor) {
          return;
        }
        const scrollMargin = 20;
        const distanceToScroll =
          window.pageYOffset +
          anchor.getBoundingClientRect().top -
          scrollMargin;

        window.scrollTo(0, distanceToScroll);
      }
    }
  }, [mounted]);

  const isDocs = router.pathname.includes('/docs');

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  // if (!mounted) {
  //   return (
  //     <div style={{ visibility: 'hidden' }}>
  //       <Component {...pageProps} />
  //     </div>
  //   );
  // }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MDXProvider components={MDXComponents}>
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Box
          position={{ all: 'absolute', bp2: 'fixed' }}
          top={{ all: '30px', bp2: '$3' }}
          right="$3"
          zIndex="$2"
        >
          <ThemeToggle toggleTheme={() => darkMode.toggle()} />
        </Box>

        {isDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : (
          <Component {...pageProps} />
        )}
      </MDXProvider>
    </ThemeProvider>
  );
}

export default App;
