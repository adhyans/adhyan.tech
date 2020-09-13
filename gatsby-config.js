const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'adhyan.tech',
    description: 'Deep dive into what and how of things',
    author: '@tech_adhyan',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
