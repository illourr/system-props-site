import { getDocById } from './docsPosts';

export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      getDocById('docs/introduction'),
      getDocById('docs/api'),
      getDocById('docs/compared-to-styled-system'),
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      getDocById('docs/installation'),
      getDocById('docs/responsive-styles'),
      getDocById('docs/theming'),
      getDocById('docs/typescript'),
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
