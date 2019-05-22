import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post';


class Posts extends Component {
   
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
      

   render(){
                   
        return(
            <>
                 {
                    this.state.posts.map(post => <Post 
                    key={post.id}  
                    id={post.id}
                    body={post.body} 
                    /> )
                }
            </>
        );

   }
  
}

export default Posts;