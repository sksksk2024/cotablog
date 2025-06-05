// next.config.js
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx$/,
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
