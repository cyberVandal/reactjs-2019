import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  );
}

export default App;
