import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import PostText from './PostText';

const PostPageWrapper = styled.div``;

const Layout = () => (
  <PostPageWrapper>
    <Header />
    <PostText />
  </PostPageWrapper>
)

export default Layout
