const withImages = require('next-images')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
module.exports = withImages()