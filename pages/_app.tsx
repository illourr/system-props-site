import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { DocsPage } from '@components/DocsPage';
import { ThemeProvider } from 'styled-components';
import { theme as baseTheme } from '@components/theme';
import { GlobalStyles } from '@components/ThemeProvider';

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...baseTheme.colors.modes.dark,
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState(baseTheme);

  const darkMode = useDarkMode();

  const [mounted, setMounted] = useState(false);

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
  // useEffect(() => {
  //   if (mounted) {
  //     const [, hashLocation] = router.asPath.split('#');
  //     if (hashLocation) {
  //       const anchor = document.querySelector(`#${hashLocation}`);
  //       if (!anchor) {
  //         return;
  //       }
  //       const scrollMargin = 20;
  //       const distanceToScroll =
  //         window.pageYOffset +
  //         anchor.getBoundingClientRect().top -
  //         scrollMargin;

  //       window.scrollTo(0, distanceToScroll);
  //     }
  //   }
  // }, [mounted]);

  const isDocs = router.pathname.includes('/docs');

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ visibility: 'hidden' }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {isDocs ? (
        <DocsPage>
          <Component {...pageProps} />
        </DocsPage>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}
