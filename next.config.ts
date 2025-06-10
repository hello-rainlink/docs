import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\RR': '\\mathbb{R}'
      }
    }
  },
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  reactStrictMode: true,
  output: 'export',
  distDir: "build",
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true
  },
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
      // @ts-expect-error -- fixme
      rule => rule.test?.test?.('.svg')
    )
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /svgr/,
          use: ['@svgr/webpack']
        },
        imageLoaderOptions
      ]
    })
    return config
  }
})