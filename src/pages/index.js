import React from 'react';
import { Link, graphql } from 'gatsby';

const BlogIndex = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  console.log(posts);
  return (
    <div>
      <ul>
        {posts &&
          posts.map(post => (
            <li key={post.id}>
              <Link to={post.frontmatter.path}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      nodes {
        excerpt
        frontmatter {
          title
          path
        }
        id
      }
    }
  }
`;

export default BlogIndex;
