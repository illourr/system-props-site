// @ts-ignore
import { frontMatter } from '../docs/**/*.mdx';
import { FrontMatter } from '../types';

export const allPosts: FrontMatter[] = frontMatter;

export const getPostById = (id) => {
  const [post] = allPosts.filter((post) => post.id === id);

  if (Object.keys(post).length === 0) {
    throw new Error(`Cannot find post by id - ${id}`);
  }

  return post;
};
