import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Products from './Products';
import * as actions from '../store/actions';




class Store extends Component {
 
 

  componentDidMount() {
    axios.get('http://localhost:8080/products')
      .then(response => this.props.initial(response.data.products));
            
  }

  render(){
    return (
      <>
       <div >
                {
                    this.props.products.map(product => <Products
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

const mapStateToProps = state => {
	return {
		products: state.products	
	};
};
const mapDispatchToProps = dispatch => {
	return {
		initial: (val) => dispatch({ type: actions.INITIAL_STATE, products: val })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);