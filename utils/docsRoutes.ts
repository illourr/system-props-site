import { getDocById } from './docsPosts';

export const docsRoutes = [
  {
    label: 'Overview',
    pages: [getDocById('docs/introduction'), getDocById('docs/api')],
  },

  {
    label: 'Getting Started',
    pages: [
      getDocById('docs/installation'),
      getDocById('docs/responsive-styles'),
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
