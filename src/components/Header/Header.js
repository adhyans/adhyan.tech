import React from 'react';
import { format } from 'date-fns';
import { HeaderWrapper, StyledLogo, HeaderText, MetaInfoWrapper, TagsWrapper, Tag } from './styles';

Header.propTypes = {};

function Header({ title, date, tags }) {
  const dateObject = new Date(date);

  return (
    <HeaderWrapper>
      <div className="content">
        <nav>
          <StyledLogo width="180" height="30" />
          {/* <div className="nav-links">
            <ul>
              <li>about me</li>
            </ul>
          </div> */}
        </nav>
        <HeaderText>
          <h1>{title}</h1>
        </HeaderText>
        <MetaInfoWrapper>
          <p className="date-published">{format(dateObject, 'MMM d, yyyy')}</p>
          <TagsWrapper>
            {tags.map(tag => (
              <Tag>
                <p>{tag}</p>
              </Tag>
            ))}
          </TagsWrapper>
        </MetaInfoWrapper>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
