import React from 'react';
import { Layout } from '../common/styles';
import Typewriter from '../Typewriter';
import { StyledLogo } from './styles';
import { HeaderWrapper } from './styles';

function HomeHeader() {
  return (
    <HeaderWrapper>
      <StyledLogo width="125" height="20" fill="#FFF" />
      <Layout>
        <Typewriter />
      </Layout>
    </HeaderWrapper>
  );
}

export default HomeHeader;
