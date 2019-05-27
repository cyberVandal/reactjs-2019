import React, {Component} from 'react';
import axios from 'axios';
import Product from '../product/Product';


const filterOptions =['XS','S','M','ML']


class Store extends Component {
    
    constructor(props) {
        super(props);
    
        this.state ={
          products: [],

        }
    
      }  

      componentDidMount() {
        axios.get('http://localhost:8080/products')
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

            {
              filterOptions.map(filter => <span style={{padding:"10px", margin:"10px", cursor:"pointer"}}  key={filter.index} />)
            }
            <div style={wraper}>
                {
                    this.state.products.map(product => <Product
                    key={product.id}  
                    id={product.id}
                    title={product.title}
                    img={product.imgUrl}
                    price={product.price}
                    /> )
                }
            </div>
                
             </>
        );


    }
  
    
}

export default Store;