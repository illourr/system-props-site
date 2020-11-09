import React from 'react';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import Box from '../components/Box';
import { Text } from '../components/Text';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    return (
      <>
        <TitleAndMetaTags
          title={`${frontMatter.title} — Stitches`}
          poster={frontMatter.poster}
        />

        <Text as="h1" fontSize="$7" mb="$2" lineHeight="40px">
          {frontMatter.title}
        </Text>

        <Text
          as="h2"
          fontSize="$4"
          mt="$2"
          mb="$4"
          color="$gray500"
          fontWeight="normal"
          lineHeight="30px"
        >
          {frontMatter.description}
        </Text>

        <Box>{children}</Box>

        {Boolean(frontMatter.relatedIds) && (
          <>
            <Box as="hr" height="2px" bg="$gray100" m="$8 auto" />
            <Box>
              <Text
                as="h3"
                fontSize="$2"
                mb="$3"
                fontWeight="500"
                textAlign="center"
                textTransform="uppercase"
              >
                Related
              </Text>

              <Box display="flex" my="$4" flexDirection="column" gap="$4">
                {frontMatter.relatedIds.map((relatedPostId) => {
                  const post = getPostById(relatedPostId);
                  return (
                    <Box
                      as="a"
                      key={post.id}
                      href={`/${post.id}`}
                      textDecoration="none"
                      color="inherit"
                    >
                      <Box>
                        <Text as="h6" fontSize="$4" fontWeight="500" mb="$1">
                          {post.title}
                        </Text>
                        <Text as="p" fontSize="$3" color="$hiContrast">
                          {post.description}
                        </Text>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </>
        )}
      </>
    );
  };
};
