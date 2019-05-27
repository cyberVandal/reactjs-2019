import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Store from './Store';
import Navigation from './Navigation';

function Main() {
  return (
      <BrowserRouter>
        <Navigation /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
        </Switch>
    </BrowserRouter>
  );
}

export default Main;