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
          filtered: []
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

  render(){
    return (
       <>
                <SizeFilter
                    click={this.handleSelectedFilter}
                    selected={this.props.currentSelected} />

                <p>{this.props.filtered.length} item{this.props.filtered.length !== 1 ? 's' : ''}</p>

                <Products
                    click={this.handleProductClick}
                    filtered={this.props.filtered} />
            </>
        
    );
  }
 
}

const mapStateToProps = state => {
	return {
    products: state.products,
    currentSelected: state.currentSelected,
    filtered: state.filtered	
	};
};
const mapDispatchToProps = dispatch => {
	return {
    initial: (val) => dispatch({ type: actions.INITIAL_STATE, products: val }),
    setFilter: (arg) => dispatch({type: actions.SET_FILTER, filtered: arg}),
    setCurrent: (arg1) => dispatch({type: actions.SET_CURRENT, current: arg1})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);