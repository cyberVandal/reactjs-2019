import React, {Component} from 'react';
import axios from 'axios';
import Product from './product/Product';

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
        const wraper ={
          borderStyle: "solid",
          borderWidth: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap"
        }
        return (
            <>
            <div style={wraper}>
                {
                    this.state.products.map(product => <Product
                    key={product.id}  
                    id={product.id}
                    title={product.title}
                    img={product.imgUrl}
                    /> )
                }
            </div>
                
             </>
        );


    }
  
    
}

export default Store;