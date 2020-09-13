import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PostTextWrapper, Text, TextHeading } from './styles';

PostText.propTypes = {};

function PostText({ body }) {
  return (
    <PostTextWrapper>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </PostTextWrapper>
  );
}

export default PostText;
