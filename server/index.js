import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import renderer from './renderer';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, uploads: false });
server.applyMiddleware({ app });

app.use((req, res) => {
  renderer(typeDefs, resolvers, req).then((html) => {
    res.status(200);
    res.send(html);
    res.end();
  });
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
