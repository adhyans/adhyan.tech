import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from '../client/App';
import { ApolloProvider } from '@apollo/react-common';
import { StaticRouter } from 'react-router';
import { getDataFromTree } from '@apollo/react-ssr';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ServerStyleSheet } from 'styled-components';

function renderer(typeDefs, resolvers, req) {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });
  const sheet = new ServerStyleSheet();
  const context = {};

  const Component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  return getDataFromTree(Component).then(() => {
    const content = renderToString(sheet.collectStyles(Component));
    const styleTags = sheet.getStyleTags();
    const initialState = client.extract();

    return `
      <!doctype html>
      <html>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
        ${styleTags}
      </head>
      <body>
        <div id="app">${content}</div>
        <script>window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(
          /</g,
          '\\u003c',
        )};</script>
      </body>
      </html>
    `;
  });
}

export default renderer;
