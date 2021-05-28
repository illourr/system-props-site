export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/introduction' },
      // { title: 'API', slug: 'docs/api' },
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
  {
    label: 'API',
    pages: [
      { title: 'System', slug: 'docs/api-system' },
      { title: 'CSS', slug: 'docs/api-css' },
      { title: 'Prop Configurations', slug: 'docs/api-prop-configurations' },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
