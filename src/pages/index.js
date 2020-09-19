import React from 'react';
import { graphql } from 'gatsby';
import { GlobalStyle, Layout } from '../components/common/styles';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import useSiteMetaData from '../hooks/use-sitemetadata';
import HomeHeader from '../components/HomeHeader';
import HomePageCard from '../components/HomePageCard';

const PostsWrapper = styled.div`
  margin-top: 7rem;

  @media (max-width: 60rem) {
    margin-top: 4rem;
  }
`;

const BlogIndex = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  const { title, description } = useSiteMetaData();

  return (
    <ThemeProvider theme={{ fontFamily: 'avenir' }}>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <HomeHeader />
        <PostsWrapper>
          {posts &&
            posts.map(post => (
              <HomePageCard
                title={post.frontmatter.title}
                tags={post.frontmatter.tags}
                excerpt={post.excerpt}
                path={post.frontmatter.path}
              />
            ))}
        </PostsWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      nodes {
        excerpt(pruneLength: 500)
        frontmatter {
          title
          path
          tags
        }
        id
      }
    }
  }
`;

export default BlogIndex;
