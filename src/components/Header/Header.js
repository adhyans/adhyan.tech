import React from 'react';
import { HeaderWrapper, StyledLogo, HeaderText, MetaInfoWrapper, TagsWrapper, Tag } from './styles';

Header.propTypes = {};

function Header({ title }) {
  return (
    <HeaderWrapper>
      <div className="content">
        <nav>
          <StyledLogo width="180" height="30" />
          <div className="nav-links">
            <ul>
              <li>about me</li>
            </ul>
          </div>
        </nav>
        <HeaderText>
          <h1>{title}</h1>
        </HeaderText>
        <MetaInfoWrapper>
          <p className="date-published">19th July 2020</p>
          <TagsWrapper>
            <Tag>
              <p>NPM</p>
            </Tag>
            <Tag>
              <p>Node</p>
            </Tag>
          </TagsWrapper>
        </MetaInfoWrapper>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
