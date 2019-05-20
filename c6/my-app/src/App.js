import React from 'react';
import axios from 'axios';

import './App.css';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      posts: []
    }

  }  

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({posts: response.data}));
    
  }

  componentDidUpdate(){


  }

  componentWillUnmount(){

    console.log("Component did unmount")
  }
  
  
  render(){

    return (
      <>
      <div>App component</div>
      <div>
      {
        this.state.posts.map(post => <Main 
          key={post.id}  
          id={post.id}
          body={post.body} 
          /> )
      }
      </div>
      <button>ADD</button>
      </>
      );
     
  }
  
}

export default App;
