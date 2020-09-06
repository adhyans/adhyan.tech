const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'adhyan.tech',
    description: 'tech bytes with adhyan',
    author: '@tech_adhyan',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ],
}
