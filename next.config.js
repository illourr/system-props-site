const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withPlugins([withOptimizedImages, withVideos], nextConfig);

/**
 *
 * @param {string} resourcePath
 *
 * Make an ID from a path
 *
 * Currently, `resourcePath` is formatted like this:
 * 	- "blog/name-of-file.mdx"
 * 	- "blog/name-of-folder/index.mdx"
 *
 * This function will make the following IDs:
 * 	- "name-of-file"
 * 	- "name-of-folder"
 *
 */
function makeIdFromPath(resourcePath) {
  const parts = resourcePath.split('/');
  const articleType = parts[0];
  let lastPart = parts[parts.length - 1];

  if (lastPart.includes('index')) {
    lastPart = parts[parts.length - 2];
  }

  return `${articleType}/${lastPart.replace('.mdx', '')}`;
}
