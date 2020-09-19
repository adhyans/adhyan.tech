import React from 'react';
import { StyledLogo } from './styles';
import { HeaderWrapper } from './styles';

function HomeHeader() {
  return (
    <HeaderWrapper>
      <StyledLogo width="180" height="30" fill="#000" />
    </HeaderWrapper>
  );
}

export default HomeHeader;
