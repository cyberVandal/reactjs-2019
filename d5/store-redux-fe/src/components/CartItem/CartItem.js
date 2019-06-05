import React from 'react';
import { Button } from 'reactstrap';
import classes from './CartItem.module.css';

function CartItem(props) {
    return (
        <div  className={classes.wrapper}>
            <h3 className={classes.title}>{props.title}</h3>
            <img className={classes.productStyle} src={props.imgUrl} alt={props.title} />
            <p className={classes.price}>{props.currencyFormat}{props.price} {props.currencyId}</p>
            <Button onClick={props.click} outline color="primary" >REMOVE</Button>
        </div>
    )
}

export default CartItem;