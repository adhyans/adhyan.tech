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
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['GA-G-13MG03ZRD8'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
