import React from 'react';

import style from './Product.module.css';

function Product(props) {

  const product ={
    boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.75)",
    color: "black",
    width: "400px",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop:"25px"

  } 
  const imgStyle ={
      height:"200px",

    
  }
  return (
        <div style={product}>
            <h3>{props.title}</h3>
            <img style={imgStyle} src={props.img} />
            <h3>$ {props.price}</h3>
            <a style={{color:"white"}} className={style.myButton}>Add to Cart</a>
        </div>
  );
}

export default Product;