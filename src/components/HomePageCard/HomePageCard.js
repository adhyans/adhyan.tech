import React from 'react';
import { CardWrapper } from './styles';
import { Link } from 'gatsby';
import { Tag, TagsWrapper } from '../Header/styles';

function HomePageCard({ title, tags, excerpt, path }) {
  return (
    <CardWrapper>
      <Link to={path}>
        <h2>{title}</h2>
      </Link>
      <TagsWrapper>
        {tags.map((tag, index) => (
          <Tag ml={index !== 0}>
            <p>{tag}</p>
          </Tag>
        ))}
      </TagsWrapper>
      <p>{excerpt}</p>
    </CardWrapper>
  );
}

export default HomePageCard;
