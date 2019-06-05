import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart/Cart';
import Store from './components/Store';
import Navigation from './components/Navigation/Navigation';
import FullProduct from './components/FullProduct/FullProduct';



function App() {
  return (
    <>
      <Navigation />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/store' component={Store} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/store:id' component={FullProduct} />

      </Switch>
    </>
  );
}

export default App;
