import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Navigation from './components/Navigation';


function App() {
  return (
  
        <BrowserRouter>   
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts}/>
            <Route path="/new post" component={NewPost}/>      
          </Switch>   
        </BrowserRouter>
   
  );
}

export default App;
