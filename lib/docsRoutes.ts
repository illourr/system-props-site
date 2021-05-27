export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/introduction' },
      { title: 'API', slug: 'docs/api' },
      {
        title: 'Compared to Styled System',
        slug: 'docs/compared-to-styled-system',
      },
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      { title: 'Installation', slug: 'docs/installation' },
      { title: 'Responsive Styles', slug: 'docs/responsive-styles' },
      { title: 'Theming', slug: 'docs/theming' },
      { title: 'TypeScript', slug: 'docs/typescript' },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
