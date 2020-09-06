import React from 'react';
import { Route, Switch } from 'react-router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import routes from './routes';

App.propTypes = {};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%
  }

  body {
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

function App(props) {
  return (
    <ThemeProvider theme={{ fontFamily: 'Lato' }}>
      <GlobalStyle />
      <Switch>
        {routes.map((route) => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
