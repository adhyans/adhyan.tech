import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PostTextWrapper, Text, TextHeading } from './styles';
import CodeBlock from '../CodeBlock';

PostText.propTypes = {};

const components = {
  pre: props => <div style={{ 'font-size': '2.4rem' }} {...props} />,
  code: CodeBlock,
};

function PostText({ body }) {
  return (
    <PostTextWrapper>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </PostTextWrapper>
  );
}

export default PostText;
