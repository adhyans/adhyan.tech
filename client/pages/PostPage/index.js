import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import PostText from './components/PostText';

const PostPageWrapper = styled.div``;

function PostPage() {
  return (
    <PostPageWrapper>
      <Header />
      <PostText />
    </PostPageWrapper>
  );
}

export default PostPage;
