import React from 'react';
import { Route, Switch } from 'react-router';
import routes from './routes';

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.name} {...route} />
      ))}
    </Switch>
  );
}

export default App;
