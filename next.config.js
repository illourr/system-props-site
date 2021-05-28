const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  future: {
    webpack5: true,
  },
};

module.exports = withPlugins([withOptimizedImages, withVideos], nextConfig);
