const withImages = require('next-images');
const withMDX = require('@next/mdx')();
module.exports = withImages();
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})