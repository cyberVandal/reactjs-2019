import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Products from './Products/Products';
import * as actions from '../store/actions';
import SizeFilter from './SizeFilter/SizeFilter';





class Store extends Component {
    constructor(props) {
      super(props);

      this.state = {
          products: [],
          currentSelected: new Set(),
          filtered: [],
          Cart: []
      }
    }

 

  componentDidMount() {
    axios.get('http://localhost:8080/products')
    .then(response => {
      this.setState({products: response.data.products})
      this.props.setFilter(response.data.products)
    } );
      
         
  }
  updateFiltered = () => {
      if (this.state.currentSelected.size === 0) {
          this.setState((prevState, props) => ({ filtered: prevState.products }));
          this.props.setFilter(this.state.products);

      } else {
          const filtered = [];
          for (let i = 0; i < this.state.products.length; i++) {
              for (let j = 0; j < this.state.products[i].availableSizes.length; j++) {
                  if (this.state.currentSelected.has(this.state.products[i].availableSizes[j])) {
                      filtered.push(this.state.products[i]);
                      break;
                  }
              }
          }
          this.setState({ filtered });
          this.props.setFilter(filtered);
      }
  }
  handleSelectedFilter = (size) => {

      const tmpSet = this.state.currentSelected;
      if (tmpSet.has(size)) {
          tmpSet.delete(size);
      } else {
          tmpSet.add(size);
      }
      console.log(tmpSet)

      this.setState({ currentSelected: tmpSet });
      this.props.setCurrent(tmpSet);
      this.updateFiltered()
    } 

    handleProductClick = (id) => {
        // console.log('Clicked product with id : ', id);
        //  this.props.history.push(`/store/${id}`);
        // this.props.setSelected(id);
    }

    handleAddToCart = (id) => {
    
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id == id){
                this.props.addToCart(this.state.products[i]);
                
            }
        }
        

    }


  render(){
    return (
       <>
                <SizeFilter
                    click={this.handleSelectedFilter}
                    selected={this.props.currentSelected} />

                <p>{this.props.filtered.length} item{this.props.filtered.length !== 1 ? 's' : ''}</p>

                <Products
                    click={this.handleProductClick}
                    addToCart={this.handleAddToCart}
                    filtered={this.props.filtered} />
            </>
        
    );
  }
 
}

const mapStateToProps = state => {
	return {
    products: state.products,
    currentSelected: state.currentSelected,
    filtered: state.filtered,
    cart: state.cart	
	};
};
const mapDispatchToProps = dispatch => {
	return {
    initial: (val) => dispatch({ type: actions.INITIAL_STATE, products: val }),
    setFilter: (arg) => dispatch({type: actions.SET_FILTER, filtered: arg}),
    setCurrent: (arg1) => dispatch({type: actions.SET_CURRENT, current: arg1}),
    setSelected: (id) => dispatch({type: actions.SET_SELECTED, selected: id}),
    addToCart: (cart) => dispatch({type: actions.ADD_TO_CART, clicked: cart}),
    // isEmpty: () => dispatch({type: actions.IS_EMPTY})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);