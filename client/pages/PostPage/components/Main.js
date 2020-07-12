import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ALL_BOOKS = gql`
  query {
    books {
      title
    }
  }
`;

const Main = () => {
  const { data, loading, error } = useQuery(ALL_BOOKS);
  console.log(data);

  return <h1>I am a Main component</h1>;
};

export default Main;
