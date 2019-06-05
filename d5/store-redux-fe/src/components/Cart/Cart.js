import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import CartItem from '../CartItem/CartItem';
import classes from './Cart.module.css';




class Cart extends Component {
  
  handleRemove = (toRemoveId) => {

      this.props.removeFromCart(toRemoveId);

  }
  render(){
    
    return (
        
      <div className={classes.wrapper}>
          {
            this.props.cart.map(cartItem => <CartItem key={cartItem.title}
                    click={() => this.handleRemove(cartItem.id)}
                    currencyFormat={cartItem.currencyFormat}
                    currencyId={cartItem.currencyId}
                    key={cartItem.id}
                    imgUrl={cartItem.imgUrl}
                    title={cartItem.title}
                    price={cartItem.price}
              
            />)
          }
          </div>
      
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
 return{

   removeFromCart: (element) => dispatch({type: actions.REMOVE_FROM_CART, toRemove: element})
 }
  

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);