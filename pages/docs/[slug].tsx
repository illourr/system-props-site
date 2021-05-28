import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllFrontmatter, getMdxBySlug } from '@lib/docs';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Box } from '@components/Box';
import { Text } from '@components/Text';
import { MDXComponents } from '@components/MDXComponents';
import { FrontMatter } from '../../types';
import { QuickNav } from '@components/QuickNav';

type Layout = {
  frontmatter: FrontMatter;
  code: any;
};

export default function Layout({ frontmatter, code }: Layout) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.title} — System Props`}
        poster={frontmatter.poster}
      />

      <header>
        <Text as="h1" fontSize="$7" mb="$2" lineHeight="40px">
          {frontmatter.title}
        </Text>

        <Text
          as="p"
          fontSize="$4"
          mt="$2"
          mb="$4"
          color="$gray500"
          fontWeight="normal"
          lineHeight="30px"
        >
          {frontmatter.description}
        </Text>
      </header>

      <Component components={MDXComponents} />
      <Box
        as="aside"
        display={{ all: 'none', bp3: 'block' }}
        position="fixed"
        top="0"
        right="0"
        width="250px"
        pt="$8"
      >
        <QuickNav key={frontmatter.slug} />
      </Box>
    </>
  );
}

export const getStaticPaths = () => {
  const frontmatters = getAllFrontmatter();

  return {
    paths: frontmatters.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { frontmatter, code } = await getMdxBySlug(context.params.slug);

  return {
    props: {
      frontmatter,
      code,
    },
  };
};
