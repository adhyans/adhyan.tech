import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import PostText from '../components/PostText';
import useSiteMetaData from '../hooks/use-sitemetadata';
import { GlobalStyle, Layout } from '../components/common/styles';
import Footer from '../components/Footer';

const PostPageWrapper = styled.div``;

const PostTemplate = ({ data: { mdx } }) => {
  const { title, description } = useSiteMetaData();

  return (
    <ThemeProvider theme={{ fontFamily: 'avenir' }}>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{mdx.frontmatter.title || title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <PostPageWrapper>
        <Header
          title={mdx.frontmatter.title}
          date={mdx.frontmatter.date}
          tags={mdx.frontmatter.tags}
        />
        <Layout width="100rem">
          <PostText body={mdx.body} />
          <Footer />
        </Layout>
      </PostPageWrapper>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        path
        tags
        date
      }
      id
      excerpt
      body
    }
  }
`;

export default PostTemplate;
