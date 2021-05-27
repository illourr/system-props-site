import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkGfm from 'remark-gfm';
import { FrontMatter } from '../types';

const docsDirectory = path.join(process.cwd(), 'docs');

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = () => {
  const paths = fs.readdirSync(docsDirectory);

  return paths.map((filePath) => {
    const source = fs.readFileSync(path.join(docsDirectory, filePath), 'utf8');
    const { data } = matter(source);

    return {
      ...(data as FrontMatter),
      slug: path.basename(filePath).replace('.mdx', ''), // file name without extension
    } as FrontMatter;
  });
};

export const getMdxBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(docsDirectory, `${slug}.mdx`),
    'utf8'
  );
  const { frontmatter, code } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkAutolinkHeadings,
        remarkSlug,
        remarkGfm,
      ];

      return options;
    },
    esbuildOptions(options) {
      options.platform = 'node';

      return options;
    },
  });

  return {
    frontmatter: {
      ...(frontmatter as FrontMatter),
      slug,
    } as FrontMatter,
    code,
  };
};
