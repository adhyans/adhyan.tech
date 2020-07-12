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
import Html from '../client/Html';

function renderer(typeDefs, resolvers, req) {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });
  const context = {};

  const Component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  return getDataFromTree(Component).then(() => {
    const content = renderToString(Component);
    const initialState = client.extract();
    const html = <Html content={content} state={initialState} />;

    return `<!doctype html>\n${renderToStaticMarkup(html)}`;
  });
}

export default renderer;
