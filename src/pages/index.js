import React from 'react';
import { Link, graphql } from 'gatsby';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <div>
      <h1>Awesome MDX Blog</h1>
      <ul>
        {posts &&
          posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
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
