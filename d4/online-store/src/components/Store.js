import React, {Component} from 'react';
import axios from 'axios';
import Product from './Product';

class Store extends Component {
    
    constructor(props) {
        super(props);
    
        this.state ={
          products: []
        }
    
      }  
      componentDidMount() {
        axios.get('http://www.mocky.io/v2/5ce924013300004210525cd3')
          .then(response => this.setState({products: response.data.products}));


         
        
      }
    render(){
        return (
            <>
                {
                    this.state.products.map(product => <Product
                    key={product.id}  
                    id={product.id}
                   
                    /> )
                }
             </>
        );


    }
  
    
}

export default Store;