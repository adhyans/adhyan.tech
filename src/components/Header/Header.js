import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { HeaderWrapper, StyledLogo, HeaderText, MetaInfoWrapper, TagsWrapper, Tag } from './styles';

Header.propTypes = {};

function Header({ title, date, tags }) {
  const dateObject = new Date(date);

  return (
    <HeaderWrapper>
      <div className="content">
        <nav>
          <Link to="/">
            <StyledLogo width="180" height="30" />
          </Link>
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
              <Tag ml>
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
