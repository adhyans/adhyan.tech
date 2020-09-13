const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            path
          }
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const posts = result.data.allMdx.nodes;
  posts.forEach(post => {
    createPage({
      path: post.frontmatter.path,
      component: path.resolve(`./src/templates/post.js`),
      context: { id: post.id },
    });
  });
};
